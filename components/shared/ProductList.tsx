import React from "react";
import { Title } from "./Title";
import { ProductCard } from "./ProductCard";

interface Item {
    className?: string;
    id: number;
    title: string;
    img: string;
    description: string;
    price: number;
}

interface Props {
    className?: string;
    items: Item[];
    title: string;
    categoryId: number;

}

export const ProductList: React.FC<Props> = ({ className, items, title }) => {
    return (
        <div>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((item) => {
                    return <ProductCard key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}