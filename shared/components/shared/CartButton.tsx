import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/shared/lib/utils";
import { CartDrawer } from "./CartDrawer";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
    return (
        <CartDrawer>
            <Button className={cn("group relative", className)}>
                <p>530 ₽</p>
                <span className="w-[1px] h-full bg-white/30 mx-3"></span>

                <div className="flex gap-1 items-center group-hover:opacity-0 transition duration-300">
                    <ShoppingCart
                        className="relative"
                        height={16}
                        width={16}
                        strokeWidth={2}
                    />
                    <b>3</b>
                </div>

                <ArrowRight className="w-5 right-5 absolute transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 "></ArrowRight>
            </Button>
        </CartDrawer>

    )
}