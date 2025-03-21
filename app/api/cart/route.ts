import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import { findOrCreateCart } from "@/shared/lib/findOrCreateCart";
import { ingredients } from "@/prisma/constants";

export interface CreateCartItems {
    productId: number;
}

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value;

        if (!token) return NextResponse.json({ totalAmount: 0, items: [] });

        const userCart = await prisma.cart.findFirst({
            where: {
                token
            },
            include: {
                cartItems: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    include: {
                        product: true
                    }
                }
            }
        })

        return NextResponse.json(userCart)
    } catch (err) {
        console.log('error: ', err)
        return NextResponse.json({ message: err }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const cart = await findOrCreateCart(token);

        const data = (await req.json()) as CreateCartItems;

        let cartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: cart.id,
                productId: Number(data.productId),
            }
        })

        if (!cartItem) {
            cartItem = await prisma.cartItem.create({
                data: {
                    cartId: cart.id,
                    productId: data.productId
                }
            })
        }

        const updatedCart = await prisma.cart.findFirst(
            {
                where: {
                    id: cart.id
                },
                include: {
                    cartItems: {
                        orderBy: {
                            createdAt: 'desc',
                        },
                        include: {
                            product: true
                        }
                    }
                }

            }
        )

        return NextResponse.json(updatedCart)

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })
    }
}