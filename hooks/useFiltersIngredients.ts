import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"

export const useFiltersIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(
        () => {
            async function fetchIngredients() {
                try {
                    setLoading(true)
                    const response = await Api.ingredients.getAll()
                    setIngredients(response)

                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }
            fetchIngredients()
        }, []
    )

    return { ingredients, loading };
}