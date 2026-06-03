# Local Setup — Prisma Postgres

Run these **5 commands** in order from the project root. Don't skip any.

## 1. Install dependencies
```bash
npm install
```

## 2. Link your Prisma Postgres database  
This writes `DATABASE_URL` to `.env` automatically.
```bash
PRISMA_API_KEY="eyJraWQiOiJUa0hEN1ltOUNaQ2xESHYwazEyTEFhWjk4NTdGOE16dWxYTXJBMFpqbWVrIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ3b3Jrc3BhY2U6Y21weTJzcnJzMGo3aWZieG8wcTdzanVybCIsImp0aSI6Im5wc3l5dW9zZDdyaWVoYWxpdmZpZ21icSIsImlhdCI6MTc4MDQ5MTc1MTAzOX0.jt9MdwvF5TOYq7FPK_2BF8R-iJLMZLN7mz_AZv8mdS_zQe0yuAE06ctzShuMG5I54nEePQYicoPJP4rmINd7xkQ9aWrQK5WwIg412Zq0wkikyErsJq9UYsQ9i6QyLpqkE3WQSG72VKVnHJQYGt1ZtAcAkULfEHhJN9AyH_iYdYEWSwypZ4YEbUYJI_XfAMiZKAyzS1ni_Ay3DXYBfJAW4uPa873cJek8seS4318S7blj5-XgJ4DyKd7TGSxmOcsmMgcpOEZ86-Y1ZbPPpyekl5AvpCwItMKkKU-0ovJm46dKIyroGzkHrMhhQ3y2bp1wZqrRGB5g42lYo9e--BP92g" npx prisma postgres link --database "db_cmpy2tb8328zqf2zlequur50n"
```

## 3. Create tables + generate client
```bash
npx prisma migrate dev --name init
```
This also runs `prisma generate` automatically.

## 4. Seed the database
```bash
npm run db:seed
```

## 5. Verify connection
```bash
npm run db:verify
```
Expected output: `✅ Connected to Prisma Postgres`

## 6. Start the app
```bash
npm run dev
```
Admin panel → http://localhost:3000/admin  
Login: **admin** / **admin123**

---

## Other useful commands
```bash
npx prisma studio          # Visual DB browser
npm run db:reset-admin     # Reset admin password
npm run db:migrate         # Apply new migrations
```
