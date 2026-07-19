# API Specification — Planned 📅 Phase 2

## Current Status

Frontend is using **static data** from `src/data/content.ts`. These endpoints are planned for Phase 2 when the backend API is built.

## Planned Endpoints

### `POST /api/leads`
Create a new student enquiry.

**Request Body:**
```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string (optional)",
  "exam_interest": "string (required, one of: UPSC|IIT-JEE|NEET|SSC|CAT|Other)",
  "message": "string (optional)"
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "status": "new",
  "message": "Enquiry submitted successfully. Our counsellor will contact you within 24 hours."
}
```

### `GET /api/courses`
Get all active courses.

**Query:** `?exam=UPSC` (optional filter)

**Response:** `200 OK`
```json
{
  "courses": [
    {
      "id": "uuid",
      "title": "string",
      "exam": "string",
      "description": "string",
      "duration": "string",
      "mode": "string",
      "highlights": ["string"]
    }
  ]
}
```

### `GET /api/content/homepage`
Get all homepage content.

**Response:** `200 OK`
```json
{
  "heroSlides": [...],
  "exams": [...],
  "courses": [...],
  "faculty": [...],
  "testimonials": [...],
  "stats": [...]
}
```

### `GET /api/faculty`
Get all active faculty members.

**Response:** `200 OK`
```json
{
  "faculty": [
    {
      "id": "uuid",
      "name": "string",
      "subject": "string",
      "experience": "string",
      "qualification": "string",
      "bio": "string",
      "image": "string (url)"
    }
  ]
}
```

### `POST /api/auth/login` (Admin)
Admin authentication.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:** `200 OK`
```json
{
  "token": "jwt_token",
  "user": { "id": "uuid", "name": "string", "email": "string", "role": "admin" }
}
```

## Frontend Data Types (Current)

See `frontend/src/data/types.ts` for TypeScript interfaces matching these API responses.