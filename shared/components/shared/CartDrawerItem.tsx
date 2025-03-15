import { cn } from "@/shared/lib/utils";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { Ingredient } from "@prisma/client";
import { CountButton } from "./count-button";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  quantity: number;
  price: number;
}

export const CartDrawerItem: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  quantity,
  price,
}) => {
  return (
    <div className={cn("flex p-5 bg-white gap-6", className)}>
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1 flex-col">
        <CartItemInfo name={name} ingredients={ingredients} />

        <hr className="my-3" />

        <div className="flex items-center gap-3 justify-between">
          <CountButton onClick={() => {}} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
          </div>
        </div>
      </div>
    </div>
  );
};
