# Database Schema — Planned 📅 Phase 2

## Tables

### `leads` — Student Enquiries

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK, default gen_random_uuid() |
| name | VARCHAR(100) | NOT NULL |
| phone | VARCHAR(20) | NOT NULL |
| email | VARCHAR(255) | NULLABLE |
| exam_interest | VARCHAR(50) | NOT NULL (UPSC/IIT-JEE/NEET/SSC/CAT/Other) |
| message | TEXT | NULLABLE |
| status | VARCHAR(20) | DEFAULT 'new' (new/contacted/converted/closed) |
| source | VARCHAR(50) | DEFAULT 'homepage' |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### `users` — Admin Users

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| name | VARCHAR(100) | NOT NULL |
| email | VARCHAR(255) | UNIQUE, NOT NULL |
| password_hash | VARCHAR(255) | NOT NULL |
| role | VARCHAR(20) | DEFAULT 'admin' |
| created_at | TIMESTAMP | DEFAULT NOW() |

### `courses` — Course Catalog

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| title | VARCHAR(200) | NOT NULL |
| slug | VARCHAR(200) | UNIQUE, NOT NULL |
| exam | VARCHAR(50) | NOT NULL |
| description | TEXT | NULLABLE |
| duration | VARCHAR(50) | NULLABLE |
| mode | VARCHAR(50) | NULLABLE (Online/Offline/Hybrid) |
| price | DECIMAL(10,2) | NULLABLE |
| highlights | TEXT[] | NULLABLE |
| image | VARCHAR(500) | NULLABLE |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMP | DEFAULT NOW() |

### `faculty` — Faculty Profiles

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| name | VARCHAR(100) | NOT NULL |
| slug | VARCHAR(200) | UNIQUE, NOT NULL |
| subject | VARCHAR(200) | NOT NULL |
| experience | VARCHAR(50) | NULLABLE |
| qualification | VARCHAR(200) | NULLABLE |
| bio | TEXT | NULLABLE |
| image | VARCHAR(500) | NULLABLE |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMP | DEFAULT NOW() |

### `testimonials` — Success Stories

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| student_name | VARCHAR(100) | NOT NULL |
| exam | VARCHAR(50) | NOT NULL |
| rank | VARCHAR(50) | NOT NULL |
| year | INTEGER | NULLABLE |
| story | TEXT | NULLABLE |
| quote | TEXT | NULLABLE |
| image | VARCHAR(500) | NULLABLE |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMP | DEFAULT NOW() |

### `hero_slides` — Homepage Hero Content

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| title | VARCHAR(200) | NOT NULL |
| subtitle | VARCHAR(200) | NULLABLE |
| description | TEXT | NULLABLE |
| cta_primary_text | VARCHAR(100) | NULLABLE |
| cta_primary_href | VARCHAR(500) | NULLABLE |
| cta_secondary_text | VARCHAR(100) | NULLABLE |
| cta_secondary_href | VARCHAR(500) | NULLABLE |
| image | VARCHAR(500) | NULLABLE |
| sort_order | INTEGER | DEFAULT 0 |
| is_active | BOOLEAN | DEFAULT true |

> **Note:** Frontend currently uses static data in `frontend/src/data/content.ts`. The database schema above represents the target structure for Phase 2 API integration.