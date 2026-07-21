const { PrismaClient } = require('./generated/prisma/client');

async function main() {
  console.log('Creating PrismaClient...');
  const prisma = new PrismaClient({}); // Try with empty object
  console.log('PrismaClient created');

  try {
    console.log('Testing connection...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('Query result:', result);
  } catch (error) {
    console.error('Query error:', error);
  } finally {
    await prisma.$disconnect();
    console.log('Disconnected');
  }
}

main().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});