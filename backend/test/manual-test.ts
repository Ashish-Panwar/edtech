import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.user.count();
    console.log(`User count: ${count}`);
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