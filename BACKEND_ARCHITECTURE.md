# Backend Architecture — Planned 📅 Phase 2

## Technology

- **Runtime:** Node.js
- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL (via TypeORM or Prisma)
- **Auth:** JWT-based admin authentication

## Module Structure

| Module | Responsibility | Status |
|--------|---------------|--------|
| `leads` | Capture enquiries, manage lead pipeline | 📅 |
| `courses` | CRUD for course information | 📅 |
| `content` | Homepage CMS data (hero, faculty, testimonials) | 📅 |
| `users` | Admin authentication and management | 📅 |
| `faculty` | Faculty profile management | 📅 |

## Planned Endpoints

```
POST   /api/leads          — Create student enquiry
GET    /api/leads          — List leads (admin)
GET    /api/courses        — Get courses
GET    /api/courses/:id    — Get course detail
GET    /api/faculty        — Get faculty list
GET    /api/content/homepage  — Get homepage content
POST   /api/auth/login     — Admin login
```

## Directory Structure (Planned)

```
backend/
├── src/
│   ├── modules/
│   │   ├── leads/
│   │   ├── courses/
│   │   ├── content/
│   │   ├── faculty/
│   │   └── auth/
│   ├── common/
│   │   ├── guards/
│   │   ├── decorators/
│   │   └── filters/
│   ├── config/
│   └── main.ts
├── test/
├── package.json
└── tsconfig.json
```

> **Note:** Frontend data is currently static in `frontend/src/data/content.ts`. Backend will replace this in Phase 2.