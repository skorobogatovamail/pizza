import { cn } from "@/shared/lib/utils";
import { PizzaImage } from "./PizzaImage";
import { Title } from "./Title";
import { Button } from "../ui/button";

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    onAddClick: () => void;
}

export const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, name, onAddClick }) => {
    const totalPrice = 350;
    const textDetails = '30 см, тражицинное тесто, 590 г'
    return (
        <div className={cn('flex flex-1', className)}>
            <div className='flex items-center justofy-center flex-1 relative w-full'>
                <img
                    src={imageUrl}
                    alt={name}
                    className={cn('relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]')}
                />
            </div>
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size='md' className="font-extrabold mb-1" ></Title>
                <p className="text-gray-400">{textDetails}</p>
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