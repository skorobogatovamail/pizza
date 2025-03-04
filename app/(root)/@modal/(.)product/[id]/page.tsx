import { ChooseProductModal } from "@/shared/components/shared/modals/ChooseProductModal";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function productModalPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const product = prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            productItems: true,
            ingredients: true
        }
    })

    if (!product) return notFound();

    return (
        <ChooseProductModal product={product} />
    )
}