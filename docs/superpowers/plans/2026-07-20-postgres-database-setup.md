# PostgreSQL Database Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a PostgreSQL database for the Premium Coaching Website V1 with Prisma ORM, including schema, migrations, seed data, and basic API endpoints.

**Architecture:** We'll use a Node.js/NestJS backend with Prisma ORM to interact with PostgreSQL. The database will store all dynamic content for the frontend including courses, faculty, testimonials, hero slides, stats, exams, leads, and admin users.

**Tech Stack:** PostgreSQL 18.4, Node.js, NestJS, Prisma ORM, TypeScript

## Global Constraints

- PostgreSQL version: 18.4
- Node.js version: 22.x (from package.json)
- Prisma version: 7.8.0 (from package.json)
- Database name: premium_coaching
- Database user: postgres
- Database password: postgres (from pgpass.conf)
- Port: 5432
- Host: localhost

---

### Task 1: Environment Setup and Verification

**Files:**
- Create: none
- Modify: backend/.env
- Test: none

**Interfaces:**
- Consumes: None
- Produces: Verified database connection

- [ ] **Step 1: Verify PostgreSQL installation and service**

Run: `export PATH="/c/Program Files/PostgreSQL/18/bin:$PATH" && psql --version`
Expected: `psql (PostgreSQL) 18.4`

- [ ] **Step 2: Verify database exists and is accessible**

Run: `export PATH="/c/Program Files/PostgreSQL/18/bin:$PATH" && PGPASSWORD=postgres psql -U postgres -d premium_coaching -c "SELECT version();"`
Expected: PostgreSQL version output

- [ ] **Step 3: Update .env file with correct credentials**

```bash
# PostgreSQL connection
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/premium_coaching"
```

Edit: `backend/.env`

- [ ] **Step 4: Test connection with Prisma**

Run: `cd backend && npx prisma db pull`
Expected: Prisma schema introspection (should match our schema.prisma)

- [ ] **Step 5: Commit**

```bash
git add backend/.env
git commit -m "feat: configure database connection"
```

### Task 2: Prisma Setup and Initial Migration

**Files:**
- Create: none
- Modify: backend/prisma/schema.prisma (if needed)
- Test: none

**Interfaces:**
- Consumes: Verified database connection
- Produces: Initial migration applied

- [ ] **Step 1: Generate Prisma client**

Run: `cd backend && npx prisma generate`
Expected: Prisma Client generated in ./generated/prisma

- [ ] **Step 2: Create initial migration**

Run: `cd backend && npx prisma migrate dev --name init --create-only`
Expected: Migration files created in prisma/migrations/

- [ ] **Step 3: Apply migration to database**

Run: `cd backend && npx prisma migrate dev --name init`
Expected: Migration applied, database schema updated

- [ ] **Step 4: Verify tables created**

Run: `export PATH="/c/Program Files/PostgreSQL/18/bin:$PATH" && PGPASSWORD=postgres psql -U postgres -d premium_coaching -c "\dt"`
Expected: List of tables including leads, users, courses, faculty, testimonials, hero_slides, stats, exams, _prisma_migrations

- [ ] **Step 5: Commit**

```bash
cd backend
git add prisma/generated/prisma/client.ts prisma/migrations/20260720081417_init/
git commit -m "feat: apply initial database migration"
```

### Task 3: Seed Data Population

**Files:**
- Create: backend/prisma/seed.ts
- Modify: backend/package.json
- Test: none

**Interfaces:**
- Consumes: Applied database migration
- Produces: Database populated with initial data

- [ ] **Step 1: Create seed script**

```typescript
import { PrismaClient } from './generated/prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Data from frontend content.ts (trimmed for brevity - full data in design doc)
const exams = [/* ... */];
const courses = [/* ... */];
const faculty = [/* ... */];
const testimonials = [/* ... */];
const heroSlides = [/* ... */];
const stats = [/* ... */];

async function main() {
  console.log('🌱 Seeding database...');
  
  // Clear existing data
  await prisma.lead.deleteMany();
  await prisma.heroSlide.deleteMany();
  await prisma.stat.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.faculty.deleteMany();
  await prisma.course.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.user.deleteMany();

  // Seed data (implementation omitted for brevity - full version in design doc)
  
  console.log('✅ Seeding complete!');
}

main()
  .catch(e => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Create: `backend/prisma/seed.ts`

- [ ] **Step 2: Add required dependencies to package.json**

```json
{
  "dependencies": {
    "bcrypt": "^6.0.0",
    "tsx": "^4.23.1"
  }
}
```

Edit: `backend/package.json` (add bcrypt and tsx to devDependencies if not present, or ensure they're installed)

Run: `cd backend && npm install bcrypt tsx --save-dev`

- [ ] **Step 3: Add seed script to package.json**

```json
{
  "scripts": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

Edit: `backend/package.json`

- [ ] **Step 4: Run seed script**

Run: `cd backend && npm run seed`
Expected: Success messages showing counts of seeded records

- [ ] **Step 5: Verify seed data**

Run: `export PATH="/c/Program Files/PostgreSQL/18/bin:$PATH" && PGPASSWORD=postgres psql -U postgres -d premium_coaching -c "SELECT COUNT(*) FROM exams;"` (repeat for other tables)
Expected: Counts matching seeded data

- [ ] **Step 6: Commit**

```bash
cd backend
git add prisma/seed.ts package.json package-lock.json
git commit -m "feat: add database seed script"
```

### Task 4: Create Basic API Endpoints

**Files:**
- Create: 
  - backend/src/courses/courses.controller.ts
  - backend/src/courses/courses.service.ts
  - backend/src/courses/courses.module.ts
  - backend/src/exams/exams.controller.ts
  - backend/src/exams/exams.service.ts
  - backend/src/exams/exams.module.ts
  - backend/src/faculty/faculty.controller.ts
  - backend/src/faculty/faculty.service.ts
  - backend/src/faculty/faculty.module.ts
  - backend/src/testimonials/testimonials.controller.ts
  - backend/src/testimonials/testimonials.service.ts
  - backend/src/testimonials/testimonials.module.ts
  - backend/src/hero-slides/hero-slides.controller.ts
  - backend/src/hero-slides/hero-slides.service.ts
  - ;
src/hero-slides/hero-slides.module.ts
  -
  src/stats/stats.controller.ts
  src/stats/stats.service.ts
  src/stats/stats.module.ts
  src/leads/leads.controller.ts
  src/leads/leads.service.ts
  src/leads/leads.module.ts
  src/auth/auth.controller.ts
  src/auth/auth.service.ts
  src/auth/auth.module.ts
- Modify: 
  - backend/src/app.module.ts
  - backend/src/main.ts
- Test: 
  - (test files for each controller/service)

**Interfaces:**
- Consumes: Seeded database
- Produces: RESTful API endpoints for each entity

Due to the large number of files, I'll outline the pattern for one entity (Courses) and note that others follow similarly.

- [ ] **Step 1: Generate CRUD for Courses module**

Run: `cd backend && nest g resource courses --no-spec`
Expected: Creates courses module with controller and service

- [ ] **Step 2: Modify CoursesService to use Prisma**

Edit: `backend/src/courses/courses.service.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.course.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  // ... create, update, remove methods
}
```

- [ ] **Step 3: Modify CoursesController to use service**

Edit: `backend/src/courses/courses.controller.ts`

```typescript
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  // ... other endpoints
}
```

- [ ] **Step 4: Create PrismaService**

Create: `backend/src/prisma/prisma.service.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
}
```

- [ ] **Step 5: Add PrismaService to AppModule**

Edit: `backend/src/app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CoursesModule } from './courses/courses.module';
// ... other modules

@Module({
  imports: [CoursesModule, /* ... */],
  providers: [PrismaService],
})
export class AppModule {}
```

- [ ] **Step 6: Repeat for other entities** (Exams, Faculty, Testimonials, HeroSlides, Stats, Leads, Auth)

- [ ] **Step 7: Test API endpoints**

Run: `cd backend && npm run start:dev`
Then in another terminal: `curl http://localhost:3000/courses`
Expected: JSON array of courses

- [ ] **Step 8: Commit**

```bash
cd backend
git add src/
git commit -m "feat: implement basic CRUD API endpoints"
```

### Task 5: Frontend Integration

**Files:**
- Create: 
  - frontend/lib/api.ts (if not exists)
- Modify: 
  - Various frontend components to use API instead of static data
  - frontend/src/app/layout.tsx or similar (to add API provider)
  - frontend/src/app/page.tsx or home page components
- Test: 
  - Manual verification in browser

**Interfaces:**
- Consumes: Running backend API
- Produces: Frontend displaying dynamic data from database

- [ ] **Step 1: Create API service layer**

Create: `frontend/lib/api.ts`

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const api = {
  courses: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/courses`);
      return res.json();
    },
    getById: async (id: string) => {
      const res = await fetch(`${API_BASE_URL}/courses/${id}`);
      return res.json();
    }
  },
  // ... similar for exams, faculty, testimonials, hero-slides, stats
};
```

- [ ] **Step 2: Update homepage to fetch hero slides**

Edit: `frontend/src/app/(home)/page.tsx` or similar

```typescript
import { api } from '@/lib/api';

export default async function HomePage() {
  const heroSlides = await api.heroSlides.getAll();
  // ... rest of component
}
```

- [ ] **Step 3: Update courses page to fetch from API**

Edit: `frontend/src/app/courses/page.tsx`

```typescript
import { api } from '@/lib/api';

export default async function CoursesPage() {
  const courses = await api.courses.getAll();
  // ... render courses
}
```

- [ ] **Step 4: Update other pages similarly** (exams, faculty, testimonials, stats)

- [ ] **Step 5: Add environment variable for API URL**

Create: `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

- [ ] **Step 6: Test integration**

Run: 
```bash
# In one terminal
cd backend && npm run start:dev

# In another terminal
cd frontend && npm run dev
```
Then visit http://localhost:3000 and verify data loads from API

- [ ] **Step 7: Commit**

```bash
git add frontend/
git commit -m "feat: integrate frontend with backend API"
```

### Task 6: Testing and Validation

**Files:**
- Create: 
  - backend/test/courses.controller.spec.ts
  - (test files for other controllers)
- Modify: 
  - none
- Test: 
  - All test files

**Interfaces:**
- Consumes: Implemented API endpoints
- Produces: Test coverage for API

- [ ] **Step 1: Write unit test for CoursesController**

Create: `backend/test/courses.controller.spec.ts`

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from '../src/courses/courses.controller';
import { CoursesService } from '../src/courses/courses.service';

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [
        {
          provide: CoursesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([{ id: '1', title: 'Test Course' }]),
            findOne: jest.fn().mockResolvedValue({ id: '1', title: 'Test Course' }),
            // ... mock other methods
          },
        },
      ],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all courses', async () => {
    const result = await controller.findAll();
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Test Course');
  });
});
```

- [ ] **Step 2: Run tests**

Run: `cd/backend && npm run test`
Expected: All tests pass

- [ ] **Step 3: Write integration tests** (optional but recommended)

- [ ] **Step 4: Manual end-to-end testing**

Test the full flow: frontend → backend API → database → backend API → frontend

- [ ] **Step 5: Commit**

```bash
cd backend
git add test/
git commit -m "feat: add unit tests for API controllers"
```

### Task 7: Documentation and Cleanup

**Files:**
- Create: 
  - backend/docs/database-design.md (copy of our design doc)
  - backend/docs/api.md (API documentation)
- Modify: 
  - backend/README.md (add setup instructions)
- Test: 
  - none

**Interfaces:**
- Consumes: Completed implementation
- Produces: Documentation for future developers

- [ ] **Step 1: Update backend README with setup instructions**

```markdown
# Backend Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and configure
3. Generate Prisma client: `npx prisma generate`
4. Run migrations: `npx prisma migrate dev`
5. Seed database: `npm run seed`
6. Start development server: `npm run start:dev`
```

Edit: `backend/README.md`

- [ ] **Step 2: Create API documentation**

Create: `backend/docs/api.md`

```markdown
# API Documentation

## Courses
- GET `/courses` - Get all active courses
- GET `/courses/:id` - Get course by ID
- POST `/courses` - Create new course (admin)
- PUT `/courses/:id` - Update course (admin)
- DELETE `/courses/:id` - Delete course (admin)

# ... similar for other endpoints
```

- [ ] **Step 3: Copy design document to backend**

Create: `backend/docs/database-design.md` (copy of this design doc)

- [ ] **Step 4: Final verification**

Run full application cycle and verify everything works

- [ ] **Step 5: Commit**

```bash
cd backend
git add README.md docs/
git commit -m "docs: add setup instructions and API documentation"
```