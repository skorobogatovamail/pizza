import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

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
                        productItem: {
                            include: {
                                product: true
                            }
                        }
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