// Simple test file
const { PrismaClient } = require('@prisma/client');
console.log('PrismaClient type:', typeof PrismaClient);

async function main() {
  console.log('Creating PrismaClient instance...');
  const prisma = new PrismaClient();
  console.log('PrismaClient created successfully');

  try {
    console.log('Testing database connection...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('Query result:', result);
  } catch (error) {
    console.error('Database error:', error);
  } finally {
    await prisma.$disconnect();
    console.log('Disconnected from database');
  }
}

main().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});