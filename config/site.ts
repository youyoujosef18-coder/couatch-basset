// ═══════════════════════════════════════════════════
// FITNESS COACH SITE CONFIGURATION
// Edit this file OR use the Admin Panel to change content
// ═══════════════════════════════════════════════════
export const siteConfig = {
  coach: {
    name:          'Lounissi Abdelbasset',
    title:         'Professional Fitness Coach',
    experience:    '10+',
    tagline:       'Over 10 Years Helping You Build Strength, Confidence & Results',
    bio:           'Professional fitness coach with more than 10 years of experience helping clients achieve sustainable body transformations through personalized coaching, nutrition planning and proven training methods.',
    photo:         '/images/coach.jpg',     // Replace with real photo
    heroVideo:     '/uploads/hero.mp4',     // Admin-uploadable
  },
  contact: {
    email:     'coach@lounissi.dz',
    whatsapp:  '+213 55 000 0000',
    instagram: '@lounissi_fitness',
    facebook:  'https://facebook.com/lounissifitness',
    tiktok:    '@lounissi_fitness',
  },
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Coached' },
    { value: '1000+', label: 'Training Programs' },
    { value: '95%', label: 'Client Satisfaction' },
  ],
  services: [
    { icon: '🏋️', title: 'Personal Training',       desc: 'Customized workout plans tailored to your body, goals and schedule.' },
    { icon: '💻', title: 'Online Coaching',          desc: 'Remote coaching with accountability, check-ins and weekly adjustments.' },
    { icon: '🥗', title: 'Nutrition Coaching',       desc: 'Science-based meal plans and nutrition strategies for real results.' },
    { icon: '🔄', title: 'Body Transformation',      desc: 'Complete 12-week transformation programs with full support.' },
    { icon: '💪', title: 'Muscle Gain',              desc: 'Hypertrophy-focused programs designed to maximize muscle growth.' },
    { icon: '🔥', title: 'Fat Loss',                 desc: 'Sustainable weight loss through intelligent training and nutrition.' },
  ],
  testimonials: [
    { name: 'Karim B.',   location: 'Alger',        stars: 5, text: 'Lost 18kg in 4 months with Coach Lounissi\'s program. His personalized approach changed my life completely.',       avatar: 'KB' },
    { name: 'Sarah M.',   location: 'Oran',          stars: 5, text: 'Best investment I ever made. The online coaching is so professional — daily support, nutrition plan, everything.',  avatar: 'SM' },
    { name: 'Amine T.',   location: 'Constantine',   stars: 5, text: 'Gained 8kg of lean muscle in 6 months. The program is perfectly balanced between training and recovery.',           avatar: 'AT' },
    { name: 'Nadia R.',   location: 'Sétif',         stars: 5, text: 'Finally achieved my dream body! The nutrition plan was easy to follow and the results speak for themselves.',       avatar: 'NR' },
    { name: 'Youcef H.',  location: 'Blida',         stars: 5, text: 'Coach Lounissi is a true professional. His knowledge and passion for fitness makes every session productive.',      avatar: 'YH' },
    { name: 'Fatima K.',  location: 'Annaba',        stars: 5, text: 'Lost 12kg post-pregnancy with his specialized women\'s program. Highly recommend to anyone serious about results.', avatar: 'FK' },
  ],
  seo: {
    title:       'Lounissi Abdelbasset — Premium Fitness Coach Algeria',
    description: 'Transform your body with professional fitness coaching. Personalized training, nutrition plans, and online coaching. 10+ years experience, 500+ clients.',
    keywords:    'fitness coach algeria, coach sportif algerie, programme musculation, perte de poids algerie',
  },
} as const
