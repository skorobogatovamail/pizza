import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";
import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(ApiRoutes.CART);
  return data;
};
