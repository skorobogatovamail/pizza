'use client'

import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./CartDrawerItem";

interface Props {
    className?: string;
}


export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>

                <SheetHeader>
                    <SheetTitle>В корзине <span className="font-bold">3 товара</span></SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-auto" >
                    <div className="mb-2">
                        <CartDrawerItem
                            imageUrl={'/assets/image.svg'}
                            name={'q'}
                            ingredients={[]}
                            quantity={1}
                            price={500}
                        />

                    </div>

                </div>
                <SheetFooter className="-mx-6 bg-white p-8">
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">Итого
                                <div className="flex-1 border-b border-dashed  border-b-neutral-200 relative -top-1 mx-2" />
                            </span>

                            <span className="font-bold text-lg">500 ₽</span>
                        </div>

                        <Link href='/cart'>
                            <Button type="submit" className="w-full h-12 text-base">
                                Оформить заказ
                                <ArrowRight className="w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>

            </SheetContent>
        </Sheet>

    )
}