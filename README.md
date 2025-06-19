# New England Sand Drags Website

A modern, user-friendly website for New England Sand Drags, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📅 Event Management System
- 📢 Announcements Management
- 🏁 Racing Categories
- 🖼️ Photo Gallery
- 👥 Admin Dashboard
- 📱 Responsive Design

## Prerequisites

- Node.js 18.x or later
- PostgreSQL
- Git
- AWS Account (for image storage)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd neorvca
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/neorvca"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # AWS S3
   AWS_ACCESS_KEY_ID=""
   AWS_SECRET_ACCESS_KEY=""
   AWS_REGION=""
   AWS_BUCKET_NAME=""
   ```

4. Set up the database:
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

After running the database seed script, you can log in with the following credentials:
- Email: admin@nesd.com
- Password: admin123

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:seed` - Seed the database
- `npm run db:studio` - Open Prisma Studio

## Project Structure

```
src/
  ├── app/                    # App router pages
  ├── components/             # Reusable UI components
  │   ├── ui/                # Basic UI components
  │   ├── layout/            # Layout components
  │   └── admin/             # Admin dashboard components
  ├── lib/                    # Utility functions
  ├── hooks/                  # Custom React hooks
  └── types/                  # TypeScript types
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is private and confidential. 