const { PrismaClient } = require('./generated/prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.user.count();
    console.log(`Found ${count} users`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});