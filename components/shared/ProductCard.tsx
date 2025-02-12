import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Title } from "./Title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Ingredient, Product, ProductItem } from "@prisma/client";

interface Props extends Product {
    className?: string;
    productItems?: ProductItem[];
    ingredients?: Ingredient[];
}

export const ProductCard: React.FC<Props> = ({ className, id, name, imageUrl, ...props }) => {
    const { productItems, ingredients } = props;
    const price = productItems?.map(el => el.price)[0];
    const ingredientsNames = ingredients?.map(el => el.name).join(', ');

    return (
        <div className={cn('', className)}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <Image src={imageUrl} alt={name} width={215} height={215}></Image>
                </div>
                <Title text={name} className="mb-1 mt-3 font-bold"></Title>
                <p className="text-sm text-gray-400">{ingredientsNames}</p>
                <div className="flex justify-between items-center mt-4">
                    {price && <span className="text-[20px]"> от <b>{price} ₽</b></span>}
                    <Button variant="secondary">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>

            </Link>
        </div>
    )
}