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
  ingredients: [{ name: string; price: number }];
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const { cartItems } = data;
  const items = cartItems.map((el) => ({
    id: el.id,
    name: el.productItem.product.name,
    quantity: el.quantity,
    price: el.productItem.price * el.quantity,
    imageUrl: el.productItem.product.imageUrl,
    pizzaSize: el.productItem?.size,
    pizzaType: el.productItem?.pizzaType,
    ingredients: el.ingredients,
  }));
  const totalAmount = cartItems.reduce((acc, cur) => {
    return acc + cur.productItem.price;
  }, 0);

  return { items, totalAmount };
};
