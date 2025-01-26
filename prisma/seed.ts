import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, pizzas, products } from "./constants";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullname: "User",
        email: "user@test.com",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullname: "Admin",
        email: "user@admin.com",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.product.createMany({
    data: pizzas,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
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
