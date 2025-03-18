import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import {
  categories,
  ingredients,
  pizzas,
  // productItems,
  products,
} from "./constants";

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

  const ingredientTable = await prisma.ingredient.createMany({
    data: ingredients,
  });

  const productTable = await prisma.product.createMany({
    data: products
  })

  await prisma.product.create({
    data: {
      name: "Гавайская",
      imageUrl: "/assets/image.svg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
      price: 500
    },
  });

  await prisma.product.create({
    data: {
      name: "Ветчина и сыр",
      imageUrl: "/assets/image.svg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 7),
      },
      price: 500
    },
  });

  await prisma.product.create({
    data: {
      name: "Пепперони",
      imageUrl: "/assets/image.svg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(1, 4),
      },
      price: 300,
    }
  });

  await prisma.product.create({
    data: {
      name: "Гавайская",
      imageUrl: "/assets/image.svg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
      price: 300,

    },
  });

  await prisma.product.create({
    data: {
      name: "Ветчина и сыр",
      imageUrl: "/assets/image.svg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 20),
      },
      price: 300,
    },
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: '1',
        totalAmount: 0,
      },
      {
        userId: 2,
        token: '2',
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productId: 1,
      cartId: 1,
      quantity: 1,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.cartItem.create({
    data: {
      productId: 6,
      cartId: 1,
      quantity: 1,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.cartItem.create({
    data: {
      productId: 7,
      cartId: 1,
      quantity: 1,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
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
