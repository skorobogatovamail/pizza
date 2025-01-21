import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Title } from "./Title";

interface Props {
    className?: string;
    id: number;
    title: string;
    img: string;
    description: string
}

export const ProductCard: React.FC<Props> = ({ className, id, title, img, description }) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/product/${id}`}>
                <div>
                    <Image src={img} alt={title}></Image>
                </div>
                <Title text={title}></Title>

                <p>{description}</p>
            </Link>
        </div>
    )
}