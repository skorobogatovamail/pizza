import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters {
    pizzaTypes: string;
    sizes: string;
    ingredients: string
}

export const useFilters = () => {
    const searchParams = useSearchParams()

    const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(new Set<string>(
        searchParams.get('ingredients')?.split(',')
    ));
    const [selectedSizes, { toggle: setSizes }] = useSet(new Set<string>(
        searchParams.get('sizes')?.split(',')
    ));
    const [selectedPizzaTypes, { toggle: setPizzaTypes }] = useSet(new Set<string>(
        searchParams.get('pizzaTypes')?.split(',')
    ));
    const [priceRange, setPriceRange] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,

    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPriceRange({ ...priceRange, [name]: value });
    };

    return {
        selectedIngredients,
        priceRange,
        selectedSizes,
        selectedPizzaTypes,
        setSelectedIngredients,
        setPriceRange: updatePrice,
        setSizes,
        setPizzaTypes
    }
}