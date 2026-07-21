const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

async function main() {
  const prisma = new PrismaClient();

  try {
    console.log('Testing Prisma connection...');
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log('Connection successful:', result);
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();