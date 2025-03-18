export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Комбо",
  },

  {
    name: "Закуски",
  },

  {
    name: "Коктейли",
  },

  {
    name: "Кофе",
  },

  {
    name: "Напитки",
  },
  {
    name: "Десерты",
  },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
];

export const products = [
  {
    name: "Кофе Латте",
    imageUrl: "/assets/image.svg",
    categoryId: 5,
    price: 200
  },
  {
    name: "Фреш",
    imageUrl: "/assets/image.svg",
    categoryId: 6,
    price: 200
  },
  {
    name: "Ролл",
    imageUrl: "/assets/image.svg",
    categoryId: 2,
    price: 300
  },
];

export const pizzas = [
  {
    name: "Гавайская",
    imageUrl: "/assets/image.svg",
    categoryId: 1,
    ingredients: {
      connect: ingredients.slice(0, 5),
    },
  },
  {
    name: "Ветчина и сыр",
    imageUrl: "/assets/image.svg",
    categoryId: 1,
    ingredients: ingredients.slice(5, 7),
  },
  {
    name: "Пепперони",
    imageUrl: "/assets/image.svg",
    categoryId: 1,
    ingredients: ingredients.slice(1, 4),
  },
];

export const productItems = [
  {
    productId: 1,
    price: 300,
    size: 20,
    pizzaType: 1,
  },
  {
    productId: 1,
    price: 400,
    size: 30,
    pizzaType: 1,
  },
  {
    productId: 1,
    price: 500,
    size: 40,
    pizzaType: 1,
  },
  {
    productId: 1,
    price: 300,
    size: 20,
    pizzaType: 2,
  },
  {
    productId: 1,
    price: 400,
    size: 30,
    pizzaType: 2,
  },
  {
    productId: 1,
    price: 500,
    size: 40,
    pizzaType: 2,
  },
  {
    productId: 2,
    price: 300,
    size: 20,
    pizzaType: 1,
  },
  {
    productId: 2,
    price: 400,
    size: 30,
    pizzaType: 1,
  },
  {
    productId: 2,
    price: 500,
    size: 40,
    pizzaType: 1,
  },
  {
    productId: 2,
    price: 300,
    size: 20,
    pizzaType: 2,
  },
  {
    productId: 2,
    price: 400,
    size: 30,
    pizzaType: 2,
  },
  {
    productId: 2,
    price: 500,
    size: 40,
    pizzaType: 2,
  },
  {
    productId: 3,
    price: 300,
    size: 20,
    pizzaType: 2,
  },
  {
    productId: 3,
    price: 400,
    size: 30,
    pizzaType: 2,
  },
  {
    productId: 3,
    price: 500,
    size: 40,
    pizzaType: 2,
  },
];
