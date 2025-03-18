import { Ingredient } from "@prisma/client";
import { CartDTO } from "../services/cart";

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export interface CartStateItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Ingredient[];
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const { cartItems } = data;
  const items = cartItems.map((el) => ({
    id: el.id,
    name: el.product.name,
    quantity: el.quantity,
    price: el.product.price * el.quantity,
    imageUrl: el.product.imageUrl,
    ingredients: el.ingredients,
  }));
  const totalAmount = cartItems.reduce((acc, cur) => {
    return acc + cur.product.price;
  }, 0);

  return { items, totalAmount };
};
