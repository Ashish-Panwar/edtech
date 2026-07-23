const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

async function main() {
  const prisma = new PrismaClient();
  const plainPassword = 'admin123';
  const saltRounds = 10;
  const hash = await bcrypt.hash(plainPassword, saltRounds);

  // Update the admin user's password
  const admin = await prisma.user.updateMany({
    where: { email: 'admin@premiumcoaching.com' },
    data: { passwordHash: hash },
  });

  console.log(`Updated ${admin.count} user(s) with new password hash.`);
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
