import { Ingredient, Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & { items: ProductItem[], indredients: Ingredient[] }