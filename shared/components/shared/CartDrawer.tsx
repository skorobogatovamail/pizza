"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./CartDrawerItem";
import { useCartStore } from "@/shared/store/cart";
import { useEffect } from "react";
import { ingredients } from "@/prisma/constants";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const items = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);

  useEffect(() => {
    fetchCartItems();
  }, []);

  // const items = [
  //   { id: 1, imageUrl: "", price: 1, name: "", ingredients: [], quantity: 1 },
  // ];
  // const totalAmount = 0;

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto">
          <div className="mb-2">
            {items.map((el) => (
              <CartDrawerItem
                key={el.id}
                imageUrl={el.imageUrl}
                price={el.price}
                name={el.name}
                ingredients={el.ingredients}
                quantity={el.quantity}
              />
            ))}
          </div>
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed  border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
