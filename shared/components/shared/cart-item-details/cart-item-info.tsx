import { cn } from "@/shared/lib/utils";
import { Ingredient } from "@prisma/client";

interface Props {
  name: string;
  className?: string;
  ingredients: Ingredient[];
}

export const CartItemInfo: React.FC<Props> = ({
  name,
  className,
  ingredients,
}) => {
  const details =
    ingredients?.map((ingredient) => ingredient.name).join(", ") || "";
  return (
    <div className="flex flex-col">
      <div className={cn("flex items-center justify-between", className)}>
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details && <p className="text-xs text-gray-400 w-[90%]">{details}</p>}
    </div>
  );
};
