# PostgreSQL Database Design for Premium Coaching Website V1

## Overview
This document outlines the database design for the Premium Coaching Academy website, which serves students preparing for competitive exams (UPSC, IIT-JEE, NEET, SSC, CAT). The design supports the existing frontend built with Next.js and TypeScript, and will be implemented using NestJS with Prisma ORM.

## Database Architecture

### Technology Stack
- **Database**: PostgreSQL 18.4
- **ORM**: Prisma (already configured in backend dependencies)
- **Backend Framework**: NestJS
- **Connection String**: `postgresql://postgres:postgres@localhost:5432/premium_coaching`

### Core Entities
The database consists of 8 core tables/entities that map directly to the frontend content models:

1. **Leads** - Stores student enquiry/form submissions
2. **Users** - Admin/authentication users
3. **Courses** - Educational programs offered
4. **Faculty** - Instructor/teacher profiles
5. **Testimonials** - Student success stories
6. **HeroSlides** - Homepage carousel content
7. **Stats** - Counter statistics displayed on homepage
8. **Exams** - Reference data for exam types (UPSC, IIT-JEE, etc.)

## Entity Relationships

### Primary Relationships
- **Courses** → **Exams** (Many-to-One): Each course belongs to one exam type
- **Faculty** → (No direct FK, but related through content)
- **Testimonials** → **Exams** (Many-to-One): Each testimonial associated with an exam
- **HeroSlides** → (Standalone content)
- **Stats** → (Standalone metrics)
- **Leads** → **Exams** (Many-to-One, via exam_interest field)

### Schema Details

#### Leads Table
```sql
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    exam_interest VARCHAR(50) NOT NULL,
    message TEXT,
    status VARCHAR(20) DEFAULT 'new',
    source VARCHAR(50) DEFAULT 'homepage',
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Stores enquiry form submissions
- Tracks which exam the student is interested in
- Status tracking for lead nurturing
- Source tracking for marketing attribution

#### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Admin authentication system
- Email uniqueness constraint
- Role-based access control (extendable)

#### Courses Table
```sql
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    exam VARCHAR(50) NOT NULL,
    description TEXT,
    duration VARCHAR(50),
    mode VARCHAR(50),
    price DECIMAL(10,2),
    highlights TEXT[],
    image VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Course catalog with SEO-friendly slugs
- Flexible pricing (nullable for free courses)
- Array field for highlights (PostgreSQL specific)
- Image URL storage
- Soft delete via is_active flag

#### Faculty Table
```sql
CREATE TABLE faculty (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    subject VARCHAR(200) NOT NULL,
    experience VARCHAR(50),
    qualification VARCHAR(200),
    bio TEXT,
    image VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Instructor profiles
- Subject specialization
- Biography and qualifications
- Profile image storage
- Active/inactive status

#### Testimonials Table
```sql
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_name VARCHAR(100) NOT NULL,
    exam VARCHAR(50) NOT NULL,
    rank VARCHAR(50) NOT NULL,
    year INTEGER,
    story TEXT,
    quote TEXT,
    image VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Student success stories
- Exam association for filtering
- Rank/achievement display
- Optional story and quote fields
- Image for visual credibility
- Active/inactive moderation

#### HeroSlides Table
```sql
CREATE TABLE hero_slides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    subtitle VARCHAR(200),
    description TEXT,
    cta_primary_text VARCHAR(100),
    cta_primary_href VARCHAR(500),
    cta_secondary_text VARCHAR(100),
    cta_secondary_href VARCHAR(500),
    image VARCHAR(500),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Homepage carousel content
- Call-to-action buttons (primary/secondary)
- Background image
- Sort ordering for slide sequence
- Active/inactive control

#### Stats Table
```sql
CREATE TABLE stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    value INTEGER NOT NULL,
    suffix VARCHAR(10) NOT NULL,
    label VARCHAR(100) NOT NULL,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Counter statistics (students trained, success rates, etc.)
- Numeric value with suffix selector (% , +, etc.)
- Display label
- Ordering control
- Active/inactive toggle

#### Exams Table
```sql
CREATE TABLE exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(200) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    href VARCHAR(500),
    gradient VARCHAR(100),
    color VARCHAR(50),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3)
);
```
- Reference data for exam types
- Full name and description
- Icon (emoji or class)
- URL slug for exam-specific pages
- Gradient and color for UI theming
- Sort ordering for display sequence

## Data Flow

### Content Management Flow
1. Admin users log in via `/admin` route
2. Access CMS interface to manage:
   - Courses (create/edit/publish)
   - Faculty profiles
   - Testimonials
   - Hero slides
   - Statistics
3. Changes are stored in PostgreSQL via Prisma ORM
4. Frontend fetches data through NestJS API endpoints
5. Content updates reflect immediately (no caching layer in V1)

### Lead Generation Flow
1. User fills enquiry form on frontend
2. Form data sent to `/api/enquire` endpoint
3. NestJS controller validates and creates Lead record
4. Auto-response email sent (future enhancement)
5. Lead stored in `leads` table with status 'new'
6. Sales team accesses leads via admin dashboard
7. Lead status updated through CRM interface

### Content Retrieval Flow
1. Frontend component mounts (e.g., CourseList)
2. Component calls Next.js API route
3. API route proxies to NestJS service
4. Service queries Prisma for requested data
5. Data serialized and returned as JSON
6. Frontend renders components with received data

## Security Considerations

### Authentication & Authorization
- JWT-based auth for admin endpoints
- Password hashing using bcrypt (already configured)
- Role-based access (admin-only for CMS operations)
- Environment-based configuration (dev/prod)

### Data Protection
- SSL/TLS for database connections (configure in production)
- Input validation at API layer
- Parameterized queries via Prisma (SQL injection prevention)
- Environment variables for sensitive config
- Regular backups recommended for production

### Privacy Compliance
- Email storage for leads (optional field)
- Consent checkbox recommended for forms (future enhancement)
- Data retention policy documentation
- Right to be forgotten implementation consideration

## Performance Considerations

### Indexing Strategy
- Primary keys on UUID columns (auto-indexed)
- Unique indexes on:
  - `users.email`
  - `courses.slug`
  - `faculty.slug`
  - `exams.name`
- Foreign key indexes implicitly created
- Additional indexes considered for:
  - `leads.exam_interest` (frequent filtering)
  - `leads.status` (dashboard views)
  - `leads.created_at` (time-based queries)

### Query Optimization
- Prisma generates efficient SQL queries
- Pagination implemented for large datasets
- Selective field fetching to reduce payload
- Connection pooling via Prisma client
- Consider read replicas for high-traffic scenarios

## Scalability Considerations

### Horizontal Scaling
- PostgreSQL read replicas for query distribution
- Application-level caching (Redis) for frequent queries
- CDN for static assets (images, etc.)
- Load balancing for Node.js/NestJS instances

### Vertical Scaling
- Optimize PostgreSQL shared_buffers and work_mem
- Proper vacuuming and analysis schedules
- Connection pool tuning
- Index maintenance schedules

## Backup & Recovery Strategy

### Backup Procedures
- Daily logical backups using `pg_dump`
- Weekly base backups for point-in-time recovery
- Transaction log archiving (WAL)
- Offsite storage of backups
- Regular restore testing procedures

### Disaster Recovery
- RTO (Recovery Time Objective): < 4 hours
- RPO (Recovery Point Objective): < 1 hour
- Cross-region replication consideration
- Automated failover testing

## Testing Strategy

### Unit Testing
- Prisma model validation
- Custom validation logic testing
- Service layer method testing
- Repository pattern testing (if abstracted)

### Integration Testing
- API endpoint testing with test database
- Database migration testing
- Data seeding validation
- End-to-end workflow testing

### Test Data Management
- Separate test database schema
- Seed scripts for consistent test data
- Data anonymization for production-like testing
- Test cleanup procedures

## Implementation Roadmap

### Phase 1: Database Setup (Current)
- [x] Verify PostgreSQL installation
- [x] Confirm database exists (`premium_coaching`)
- [x] Review existing Prisma schema
- [ ] Create design document (this document)
- [ ] Get stakeholder approval on design

### Phase 2: Schema Implementation
- [ ] Generate Prisma client
- [ ] Create initial migration
- [ ] Apply migration to development database
- [ ] Verify table creation and constraints
- [ ] Create seed data script

### Phase 3: API Development
- [ ] Implement REST controllers for each entity
- [ ] Add validation and error handling
- [ ] Implement authentication middleware
- [ ] Create admin dashboard endpoints
- [ ] Test API with Postman/Newman

### Phase 4: Frontend Integration
- [ ] Update Next.js API routes to proxy to NestJS
- [ ] Implement data fetching hooks
- [ ] Add loading and error states
- [ ] Create admin interface components
- [ ] Test end-to-end flows

### Phase 5: Production Preparation
- [ ] Configure environment variables
- [ ] Set up production database
- [ ] Run migrations in production
- [ ] Seed initial production data
- [ ] Performance testing and optimization
- [ ] Backup and monitoring setup

## Open Questions & Decisions Needed

1. **Multi-tenancy**: Should we consider multi-tenancy for different coaching centers?
2. **File Storage**: Should we store images in database or use external storage (S3/CDN)?
3. **Audit Trail**: Do we need detailed audit logs for compliance?
4. **Search**: Will we need full-text search capabilities (consider PostgreSQL TSVector)?
5. **Analytics**: Should we add event tracking for user behavior?

## Conclusion

This database design provides a solid foundation for the Premium Coaching Academy website's Phase 1 requirements. It leverages Prisma ORM for type-safe database access, PostgreSQL for reliability and features, and follows relational database best practices.

The design is extensible for future phases including:
- User authentication for students
- Course enrollment and progress tracking
- Payment processing integration
- Advanced analytics and reporting
- Mobile application APIs

Next steps: Review this design with stakeholders, incorporate feedback, then proceed with implementation.

---
*Document created: 2026-07-20*
*Project: Premium Coaching Website V1*
*Component: Database Design*