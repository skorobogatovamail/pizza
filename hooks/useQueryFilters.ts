import QueryString from "qs";
import { useEffect } from "react";
import { PriceProps } from "./useFilters";
import { useRouter } from "next/navigation";

interface QueryFilters {
    pizzaTypes: string;
    sizes: string;
    ingredients: string
}

interface FiltersState {
    priceRange: PriceProps;
    selectedPizzaTypes: Set<string>;
    selectedSizes: Set<string>;
    selectedIngredients: Set<string>;
}


export const useQueryFilters = (filters: FiltersState) => {
    const router = useRouter();

    useEffect(() => {
        const params = {
            ...filters.priceRange,
            pizzaTypes: Array.from(filters.selectedPizzaTypes),
            sizes: Array.from(filters.selectedSizes),
            ingredients: Array.from(filters.selectedIngredients)
        }
        const query = QueryString.stringify(params, {
            arrayFormat: 'comma'
        })
        router.push(`?${query}`, { scroll: false })

    }, [filters.priceRange, filters.selectedIngredients, filters.selectedPizzaTypes, filters.selectedSizes, router])

}