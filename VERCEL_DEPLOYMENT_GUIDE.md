# Vercel Deployment Guide for Premium Coaching UI/UX Project

## Project Overview
This guide outlines the steps and configurations required to deploy the Premium Coaching UI/UX project to Vercel.

**Project Structure:**
- Frontend: Next.js 16 (Turbopack) with TypeScript and Tailwind CSS
- Backend: NestJS with TypeScript, using PostgreSQL (Prisma ORM)
- Architecture: Three-tier architecture with separate frontend and backend directories

## Current Vercel Configuration Analysis

The existing `vercel.json` had the following issues:
1. Incorrect build configuration for backend
2. Incorrect destination path for API routes
3. Missing critical environment variables
4. Missing explicit build commands

## Recommended Vercel Configuration (`vercel.json`)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next",
      "config": {
        "distDir": ".next"
      }
    },
    {
      "src": "backend/package.json",
      "use": "@vercel/node",
      "config": {
        "includeFiles": [
          "backend/dist/**/*",
          "backend/node_modules/**/*",
          "backend/prisma/**/*"
        ]
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/backend/dist/src/main.js"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/$1"
    }
  ],
  "env": {
    "NEXT_PUBLIC_API_URL": "/api",
    "NODE_ENV": "production"
  }
}
```

## Additional Configuration Files

### 1. Backend-specific Vercel Configuration (`backend/vercel.json`)
Create this file in the backend directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node",
      "config": {
        "includeFiles": [
          "dist/**/*",
          "node_modules/**/*",
          "prisma/**/*"
        ]
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/src/main.js"
    }
  ]
}
```

### 2. Prisma Configuration
Ensure your `prisma/schema.prisma` includes:
```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["referentialIntegrity"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Required Environment Variables
Set these in your Vercel project settings:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT authentication
- `NODE_ENV` - Set to "production"
- Any other API keys or secrets used in your application

## Build Process Optimization

Add a build script to your root `package.json`:

```json
{
  "name": "premium-coaching-uiux",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "vercel-build": "npm run build --workspace=frontend && npm run build --workspace=backend"
  }
}
```

## Vercel Project Setup Steps

1. **Connect Repository**: Link your GitHub/GitLab/Bitbucket repository to Vercel
2. **Framework Preset**: Vercel should auto-detect Next.js for the frontend
3. **Build Command**: Set to `npm run vercel-build` (if using root package.json) or leave blank for auto-detection
4. **Output Directory**: `.next` (for frontend)
5. **Environment Variables**: Add DATABASE_URL, JWT_SECRET, and NODE_ENV=production
6. **Root Directory**: Leave as root (monorepo structure)

## Important Deployment Considerations

1. **Database Setup**: Ensure your PostgreSQL database is accessible from Vercel's serverless functions
2. **Prisma Generation**: Vercel automatically runs `prisma generate` during build if configured correctly
3. **Cold Starts**: NestJS on Vercel may experience cold start delays - consider warming functions if needed
4. **File Uploads**: If using file uploads, configure for Vercel's ephemeral filesystem (use external storage like AWS S3 or Cloudinary)

## Post-Deployment Verification

1. Visit your Vercel deployment URL
2. Confirm frontend loads correctly
3. Test API endpoints at `https://your-deployment.vercel.app/api/`
4. Verify database connectivity and Prisma client initialization
5. Test authentication flows (if implemented)
6. Verify file upload functionality (if applicable)

## Troubleshooting Tips

1. **Build Failures**: Check Vercel deployment logs for detailed error messages
2. **Database Connection Issues**: Verify DATABASE_URL is correctly set in Vercel environment variables
3. **Module Resolution Errors**: Ensure all dependencies are properly listed in package.json
4. **API Route Issues**: Confirm route rewrites in vercel.json correctly point to built backend files

---

*Last Updated: 2026-07-23*