import { Container } from "@/shared/components/shared/Container";
import { GroupVariants } from "@/shared/components/shared/GroupVariants";
import { PizzaImage } from "@/shared/components/shared/PizzaImage";
import { Title } from "@/shared/components/shared/Title";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function productPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            productItems: true,
            ingredients: true
        }
    });

    if (!product) return notFound();

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <PizzaImage imageUrl={product.imageUrl} size={40} className="" />
                <div className="w-[490px] bg-[#FCFCFC] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1"></Title>
                    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dignissimos, ut nostrum, dolor eum quos numquam fuga magni, hic aperiam odit! Ea quisquam tenetur, officia velit similique odit delectus tempora.</p>
                    <GroupVariants items={[
                        {
                            name: 'Маленькая пицца',
                            value: 1
                        },
                        {
                            name: 'Средняя пицца',
                            value: 2
                        },
                        {
                            name: 'Большая пицца',
                            value: 3
                        },
                    ]} />
                </div>
            </div>

        </Container>
    )
}