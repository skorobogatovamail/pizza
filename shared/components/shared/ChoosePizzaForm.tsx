import { cn } from "@/shared/lib/utils";
import { PizzaImage } from "./PizzaImage";
import { Title } from "./Title";
import { Button } from "../ui/button";
import { GroupVariants } from "./GroupVariants";
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { useState } from "react";

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    ingredients: any[];
    items: any[];
    onAddClick: () => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({ className, imageUrl, name, ingredients, items, onAddClick }) => {
    const totalPrice = 350;
    const textDetails = '30 см, тражицинное тесто, 590 г'

    const [selectedSize, setSelectedSize] = useState<PizzaSize>(20)
    const [selectedType, setSelectedType] = useState<PizzaType>(1)

    return (
        <div className={cn('flex flex-1', className)}>
            <PizzaImage imageUrl={imageUrl} size={30} />
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size='md' className="font-extrabold mb-1" ></Title>
                <p className="text-gray-400">{textDetails}</p>

                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants items={pizzaSizes} onClick={(value) => setSelectedSize(value as PizzaSize)} selectedValue={selectedSize} />
                    <GroupVariants items={pizzaTypes} onClick={(value) => setSelectedType(value as PizzaType)} selectedValue={selectedType} />

                </div>


                <Button
                    className="h-[55px] w-full rounded-[18px] p-10 text-base mt-10"
                    onClick={onAddClick}
                >
                    Добавить в корзину за {totalPrice}
                </Button>
            </div>
        </div>
    )
}