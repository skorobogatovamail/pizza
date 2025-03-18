import {
  Cart,
  CartItem,
  Ingredient,
  Product,
} from "@prisma/client";
import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";
import { CreateCartItems } from "@/app/api/cart/route";
import { products } from "@/prisma/constants";

export type CartItemDTO = CartItem & {
  product: Product;
  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(ApiRoutes.CART);
  return data;
};

export const updateItemQuantity = async (id: number, quantity: number) => {
  const { data } = await axiosInstance.patch(`${ApiRoutes.CART}/${id}`, {
    quantity,
  });
  return data;
};


export const deleteItem = async (id: number) => {
  const { data } = await axiosInstance.delete(`${ApiRoutes.CART}/${id}`)
  return data;
}

export const addItem = async (id: number) => {
  const { data } = await axiosInstance.post(`${ApiRoutes.CART}`, { productId: id })
  return data;
}