import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import QueryString from "qs";
import { useEffect } from "react";

export const useQueryFilters = (filters) => {
    const router = useRouter();

    useEffect(() => {
        const params = {
            ...filters.priceRange,
            pizzaTypes: Array.from(filters.selectedPizzaTypes),
            sizes: Array.from(filters.selectedSizes),
            ingredients: Array.from(filters.selectedIngredients)
        }
        const query = QueryString.stringify(filters, {
            arrayFormat: 'comma'
        })
        router.push(`?${query}`, { scroll: false })

    }, [filters, router])

}