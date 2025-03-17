import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib/updateCartTotalAmount";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Token is not found" },
        { status: 500 }
      );
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        {
          message: "Cant find item",
        },
        { status: 404 }
      );
    }

    await prisma.cartItem.update({
      data: {
        quantity: body.quantity,
      },
      where: {
        id: Number(id),
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return
    }

    const foundItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id)
      }
    })

    if (!foundItem) {
      return;
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(id)
      }
    })

    const updatedCart = await updateCartTotalAmount(token)
    return NextResponse.json(updatedCart)
  } catch (error) {

    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}