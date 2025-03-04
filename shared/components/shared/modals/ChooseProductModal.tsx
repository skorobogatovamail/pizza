'use client';

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../ChooseProductForm";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../ChoosePizzaForm";

interface Props {
    className?: string;
    product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
    const router = useRouter()
    // const isPizza = Boolean(product.items[0].pizzaType);
    const isPizza = false;
    return (
        <Dialog onOpenChange={() => router.back()}>
            <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                {isPizza
                    ? (<ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} items={[]} onAddClick={() => { }} />)
                    : (<ChooseProductForm imageUrl={product.imageUrl} name={product.name} onAddClick={() => { }} />)
                }

            </DialogContent>
        </Dialog>
    )
}