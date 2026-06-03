'use client'
import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current

    let THREE: typeof import('three')
    let renderer: import('three').WebGLRenderer
    let running = true

    async function init() {
      THREE = await import('three')
      const { Scene, PerspectiveCamera, WebGLRenderer, Points, BufferGeometry,
              Float32BufferAttribute, PointsMaterial, AdditiveBlending,
              TorusGeometry, MeshStandardMaterial, Mesh, AmbientLight,
              PointLight, Color } = THREE

      // Scene
      const scene  = new Scene()
      const camera = new PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
      camera.position.z = 5

      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      renderer.setClearColor(0x050505, 1)

      // Gold particle field
      const COUNT = 3000
      const positions = new Float32Array(COUNT * 3)
      const colors    = new Float32Array(COUNT * 3)
      const c1 = new Color('#D4A850')
      const c2 = new Color('#F0C870')
      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        const c = Math.random() > 0.5 ? c1 : c2
        colors[i * 3]     = c.r
        colors[i * 3 + 1] = c.g
        colors[i * 3 + 2] = c.b
      }
      const pGeo = new BufferGeometry()
      pGeo.setAttribute('position', new Float32BufferAttribute(positions, 3))
      pGeo.setAttribute('color',    new Float32BufferAttribute(colors, 3))
      const pMat = new PointsMaterial({ size: 0.04, vertexColors: true, blending: AdditiveBlending, transparent: true, opacity: 0.7 })
      const particles = new Points(pGeo, pMat)
      scene.add(particles)

      // Large outer ring (gold torus)
      const tGeo1  = new TorusGeometry(2.8, 0.018, 16, 200)
      const tMat1  = new MeshStandardMaterial({ color: '#D4A850', emissive: '#D4A850', emissiveIntensity: 0.8, metalness: 1, roughness: 0.2 })
      const torus1 = new Mesh(tGeo1, tMat1)
      torus1.rotation.x = 1.2
      scene.add(torus1)

      // Inner ring
      const tGeo2  = new TorusGeometry(1.8, 0.012, 16, 200)
      const tMat2  = new MeshStandardMaterial({ color: '#A07828', emissive: '#A07828', emissiveIntensity: 0.6, metalness: 1, roughness: 0.3 })
      const torus2 = new Mesh(tGeo2, tMat2)
      torus2.rotation.x = 0.8
      torus2.rotation.y = 0.5
      scene.add(torus2)

      // Small ring
      const tGeo3  = new TorusGeometry(1.1, 0.008, 12, 100)
      const tMat3  = new MeshStandardMaterial({ color: '#F0C870', emissive: '#F0C870', emissiveIntensity: 1, metalness: 1, roughness: 0.1 })
      const torus3 = new Mesh(tGeo3, tMat3)
      torus3.rotation.x = -0.5
      torus3.rotation.z = 0.3
      scene.add(torus3)

      // Lights
      scene.add(new AmbientLight('#1a1a1a', 2))
      const goldLight  = new PointLight('#D4A850', 8, 20)
      goldLight.position.set(0, 0, 3)
      scene.add(goldLight)
      const goldLight2 = new PointLight('#F0C870', 4, 15)
      goldLight2.position.set(-3, 2, 2)
      scene.add(goldLight2)

      // Mouse interaction
      let mx = 0, my = 0
      const onMouse = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 2
        my = (e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', onMouse)

      // Resize
      const onResize = () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      }
      window.addEventListener('resize', onResize)

      // Animate
      let t = 0
      function animate() {
        if (!running) return
        requestAnimationFrame(animate)
        t += 0.008

        particles.rotation.y += 0.0008
        particles.rotation.x += 0.0003

        torus1.rotation.z += 0.004
        torus2.rotation.y += 0.006
        torus2.rotation.z -= 0.003
        torus3.rotation.x += 0.008
        torus3.rotation.z += 0.005

        // Camera follows mouse gently
        camera.position.x += (mx * 0.5 - camera.position.x) * 0.04
        camera.position.y += (-my * 0.3 - camera.position.y) * 0.04
        camera.lookAt(scene.position)

        // Gold light pulses
        goldLight.intensity = 6 + Math.sin(t * 2) * 2

        renderer.render(scene, camera)
      }
      animate()

      // Cleanup fn stored
      ;(canvas as any)._cleanup = () => {
        running = false
        window.removeEventListener('mousemove', onMouse)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    }

    init().catch(console.error)
    return () => { running = false; (canvas as any)._cleanup?.() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
