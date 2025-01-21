import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Title } from "./Title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
    className?: string;
    id: number;
    title: string;
    img: string;
    description: string;
    price: number;
}

export const ProductCard: React.FC<Props> = ({ className, id, title, img, description, price }) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <Image src={img} alt={title} width={215} height={215}></Image>
                </div>
                <Title text={title} className="mb-1 mt-3 font-bold"></Title>
                <p className="text-sm text-gray-400">{description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]"> от <b>{price} ₽</b></span>
                    <Button variant="secondary">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>

            </Link>
        </div>
    )
}