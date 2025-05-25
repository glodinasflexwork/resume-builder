# Database Schema for Resume Builder

## Overview

The database schema is designed to store user information, resume data, and template preferences. We'll use Prisma ORM with Neon PostgreSQL to manage the database operations.

## Schema Design

```prisma
// This is the Prisma schema file for the Resume Builder application

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User model for authentication and profile information
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  password      String?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  resumes       Resume[]
}

// Resume model to store all resume data
model Resume {
  id             String           @id @default(cuid())
  title          String           @default("Untitled Resume")
  createdAt      DateTime         @default(now())
  updatedAt      DateTime         @updatedAt
  userId         String
  user           User             @relation(fields: [userId], references: [id], onDelete: Cascade)
  templateId     String
  template       Template         @relation(fields: [templateId], references: [id])
  colorScheme    String           @default("default")
  personalDetails PersonalDetails?
  experiences    Experience[]
  educations     Education[]
  skills         Skill[]
  languages      Language[]
  courses        Course[]
  activities     Activity[]
  hobbies        Hobby[]
  references     Reference[]
  websites       Website[]
}

// Template model for resume templates
model Template {
  id          String   @id @default(cuid())
  name        String   @unique
  description String?
  thumbnail   String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  resumes     Resume[]
}

// Personal details section
model PersonalDetails {
  id        String   @id @default(cuid())
  resumeId  String   @unique
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  firstName String
  lastName  String
  jobTitle  String?
  email     String?
  phone     String?
  address   String?
  city      String?
  country   String?
  zipCode   String?
  summary   String?
  photo     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Work experience section
model Experience {
  id          String   @id @default(cuid())
  resumeId    String
  resume      Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  position    String
  company     String
  location    String?
  startDate   DateTime
  endDate     DateTime?
  current     Boolean  @default(false)
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  order       Int      @default(0)
}

// Education section
model Education {
  id          String   @id @default(cuid())
  resumeId    String
  resume      Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  institution String
  degree      String?
  field       String?
  location    String?
  startDate   DateTime
  endDate     DateTime?
  current     Boolean  @default(false)
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  order       Int      @default(0)
}

// Skills section
model Skill {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  name      String
  level     String?  // e.g., "Expert", "Intermediate", "Beginner"
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  order     Int      @default(0)
}

// Languages section
model Language {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  name      String
  level     String?  // e.g., "Native", "Fluent", "Intermediate", "Basic"
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  order     Int      @default(0)
}

// Courses section
model Course {
  id          String   @id @default(cuid())
  resumeId    String
  resume      Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  name        String
  institution String?
  startDate   DateTime?
  endDate     DateTime?
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  order       Int      @default(0)
}

// Extra-curricular activities section
model Activity {
  id          String   @id @default(cuid())
  resumeId    String
  resume      Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  name        String
  organization String?
  startDate   DateTime?
  endDate     DateTime?
  current     Boolean  @default(false)
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  order       Int      @default(0)
}

// Hobbies section
model Hobby {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  order     Int      @default(0)
}

// References section
model Reference {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  name      String
  company   String?
  position  String?
  email     String?
  phone     String?
  hidden    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  order     Int      @default(0)
}

// Websites & Social Links section
model Website {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  label     String?  // e.g., "LinkedIn", "Portfolio", "GitHub"
  url       String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  order     Int      @default(0)
}
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/session` - Get current session
- `POST /api/auth/logout` - Logout user

### Resumes
- `GET /api/resumes` - Get all resumes for current user
- `GET /api/resumes/:id` - Get a specific resume
- `POST /api/resumes` - Create a new resume
- `PUT /api/resumes/:id` - Update a resume
- `DELETE /api/resumes/:id` - Delete a resume
- `POST /api/resumes/:id/export` - Export resume to PDF

### Templates
- `GET /api/templates` - Get all available templates
- `GET /api/templates/:id` - Get a specific template

### Resume Sections
- `POST /api/resumes/:id/personal-details` - Create/update personal details
- `POST /api/resumes/:id/experiences` - Add a new experience
- `PUT /api/resumes/:id/experiences/:experienceId` - Update an experience
- `DELETE /api/resumes/:id/experiences/:experienceId` - Delete an experience

Similar endpoints will be created for other resume sections (education, skills, languages, etc.)

## Database Connection

We'll use Prisma ORM to connect to the Neon PostgreSQL database. The connection string will be stored in the `.env` file:

```
DATABASE_URL="postgresql://neondb_owner:npg_l2L8fhcOVHGw@ep-royal-field-a2wir7c7-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"
```

## Data Access Layer

The data access layer will be implemented using Prisma Client, which provides type-safe database access. We'll create repository functions for each model to handle CRUD operations.
