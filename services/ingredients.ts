import { Ingredient } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"

export const ingredients = async (query: string) => {
    const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS, { params: { query } });
    return data;
}