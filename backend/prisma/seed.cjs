/**
 * Seed database using raw SQL files
 * This avoids the Prisma 7 ESM/CJS interop issues
 */
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function seed() {
  console.log('🌱 Seeding database...');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  console.log('  ✅ Connected to database');

  try {
    // Clear existing data in reverse dependency order
    console.log('  Clearing existing data...');
    await client.query('DELETE FROM leads');
    await client.query('DELETE FROM hero_slides');
    await client.query('DELETE FROM stats');
    await client.query('DELETE FROM testimonials');
    await client.query('DELETE FROM faculty');
    await client.query('DELETE FROM courses');
    await client.query('DELETE FROM exams');
    await client.query('DELETE FROM users');
    console.log('  ✅ Cleared existing data');

    // Read and execute SQL files (files are in backend root, not prisma/)
    const sqlDir = path.join(__dirname, '..');
    const sqlFiles = ['exams.sql', 'courses.sql', 'faculty.sql', 'testimonials.sql', 'stats.sql', 'hero_slides.sql'];

    for (const file of sqlFiles) {
      const filePath = path.join(sqlDir, file);
      if (fs.existsSync(filePath)) {
        const sql = fs.readFileSync(filePath, 'utf-8');
        // Skip empty lines and comments
        const statements = sql
          .split(';')
          .map(s => s.trim())
          .filter(s => s.length > 0 && !s.startsWith('--'));

        for (const stmt of statements) {
          if (stmt.length > 0) {
            await client.query(stmt);
          }
        }
        console.log(`  ✅ Seeded ${file.replace('.sql', '')}`);
      }
    }

    // Create admin user with bcrypt
    const passwordHash = await bcrypt.hash('admin123', 10);
    await client.query(
      `INSERT INTO users (id, name, email, password_hash, role, created_at, updated_at)
       VALUES (gen_random_uuid(), 'Admin', 'admin@premiumcoaching.com', $1, 'admin', NOW(), NOW())`,
      [passwordHash]
    );
    console.log('  ✅ Seeded admin user (email: admin@premiumcoaching.com)');

    console.log('✅ Seeding complete!');
  } finally {
    await client.end();
  }
}

seed().catch((e) => {
  console.error('❌ Seed failed:', e);
  process.exit(1);
});