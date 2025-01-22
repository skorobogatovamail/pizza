'use client';

import React, { useEffect, useRef } from "react";
import { useIntersection } from 'react-use';
import { Title } from "./Title";
import { ProductCard } from "./ProductCard";
import { useStore } from "@/store/category";

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

export const ProductList: React.FC<Props> = ({ className, items, title, categoryId }) => {
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, { threshold: 0.1 });
    const setActiveId = useStore((state) => state.setActiveId);

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div ref={intersectionRef} id={title}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((item) => {
                    return <ProductCard key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}