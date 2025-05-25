# Resume Builder

A professional resume builder application built with Next.js and Neon PostgreSQL.

## Features

- Multiple resume templates
- Comprehensive form sections for all resume components
- PDF export functionality
- Database integration with Neon PostgreSQL
- User authentication
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or use the provided Neon PostgreSQL connection)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/glodinasflexwork/resume-builder.git
cd resume-builder
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following content:
```
DATABASE_URL="postgresql://neondb_owner:npg_l2L8fhcOVHGw@ep-royal-field-a2wir7c7-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Seed the database with initial templates:
```bash
node prisma/seed.js
```

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure the environment variables:
   - `DATABASE_URL`: Your Neon PostgreSQL connection string
   - `NEXTAUTH_SECRET`: A secret key for authentication
   - `NEXTAUTH_URL`: Your deployment URL

## Project Structure

- `/src/app`: Next.js app directory with all pages and API routes
- `/prisma`: Database schema and migrations
- `/public`: Static assets
- `/src/components`: Reusable React components

## License

This project is licensed under the MIT License.
