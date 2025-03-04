import { cn } from "@/shared/lib/utils";

interface Props {
    className?: string;
    imageUrl?: string;
    size?: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ className, imageUrl, size }) => {
    return (
        <div className={className}>
            <img
                src={imageUrl}
                alt="Logo"
                className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
                    'w-[300px] h-[300px]': size === 20,
                    'w-[400px] h-[400px]': size === 30,
                    'w-[500px] h-[500px]': size === 40,
                })}
            />
        </div>
    )
}