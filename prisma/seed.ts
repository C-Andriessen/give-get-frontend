import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const defaultPassword = "Test1234!";
const saltRounds: number = Number(process.env.BCRYPT_SALT);
const defaultPasswordHash = bcrypt.hash(defaultPassword, saltRounds);

async function main() {
  //---------------- Role seeding ----------------\
  console.info("[SEED] Seeding roles!");

  // User role
  await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "user",
    },
  });

  // Moderator role
  await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "moderator",
    },
  });

  // Admin role
  await prisma.role.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "admin",
    },
  });

  console.info("[SEED] Successfully seeded roles!");

  if (process.env.ENV === "development") {
    //---------------- User seeding ----------------\
    console.info("[SEED] Seeding users!");
    // User user
    await prisma.user.upsert({
      where: { name: "user" },
      update: {},
      create: {
        name: "user",
        email: "user@giveget.com",
        password: await defaultPasswordHash
      },
    });

    // Moderator user
    await prisma.user.upsert({
      where: { name: "moderator" },
      update: {},
      create: {
        name: "moderator",
        email: "moderator@giveget.com",
        password: await defaultPasswordHash,
        roleId: 2,
      },
    });

    // Admin user
    await prisma.user.upsert({
      where: { name: "admin" },
      update: {},
      create: {
        name: "admin",
        email: "admin@giveget.com",
        password: await defaultPasswordHash,
        roleId: 3,
      },
    });

    console.info("[SEED] Successfully seeded users!");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
