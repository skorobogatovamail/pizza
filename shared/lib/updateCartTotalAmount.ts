import { prisma } from "@/prisma/prisma-client";

export const updateCartTotalAmount = async (token: string) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        token,
      },
      include: {
        cartItems: {
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    if (!cart) {
      return;
    }

    const totalAmount = cart.cartItems.reduce((acc, cur) => {
      return acc + cur.productItem.price * cur.quantity;
    }, 0);

    return await prisma.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        totalAmount,
      },
      include: {
        cartItems: {
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
