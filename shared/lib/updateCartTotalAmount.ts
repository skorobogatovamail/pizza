import { prisma } from "@/prisma/prisma-client";

export const updateCartTotalAmount = async (token: string) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        token,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: 'desc',
          },
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

    const updatedCart = await prisma.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        totalAmount,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: 'desc',
          },
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
    return updatedCart;
  } catch (error) {
    console.log(error);
  }
};
