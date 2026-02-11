import { Category, Dish } from "../types";

export const CATEGORIES: Category[] = [
  { id: "starters", label: { es: "Entradas", en: "Starters" } },
  { id: "mains", label: { es: "Platos Fuertes", en: "Mains" } },
  { id: "desserts", label: { es: "Postres", en: "Desserts" } },
  { id: "drinks", label: { es: "Bebidas", en: "Drinks" } },
];

export const MENU_ITEMS: Dish[] = [
  // Starters
  {
    id: "s1",
    categoryId: "starters",
    name: { es: "Carpaccio de Res", en: "Beef Carpaccio" },
    description: {
      es: "Finas láminas de solomillo con rúcula fresca, parmesano y aceite de trufa.",
      en: "Thin slices of sirloin with fresh arugula, parmesan, and truffle oil.",
    },
    price: 12.5,
    image: "https://picsum.photos/seed/carpaccio/800/600",
    ingredients: [
      { name: { es: "Res", en: "Beef" }, removable: false },
      { name: { es: "Rúcula", en: "Arugula" }, removable: true },
      { name: { es: "Parmesano", en: "Parmesan" }, removable: true },
      { name: { es: "Aceite de Trufa", en: "Truffle Oil" }, removable: true },
    ],
    nutrition: { calories: 320, protein: "28g", carbs: "2g", fat: "22g" },
    tags: ["GF"],
  },
  {
    id: "s2",
    categoryId: "starters",
    name: { es: "Bruschetta Clásica", en: "Classic Bruschetta" },
    description: {
      es: "Pan tostado con tomate, albahaca fresca, ajo y aceite de oliva virgen extra.",
      en: "Toasted bread with tomato, fresh basil, garlic, and extra virgin olive oil.",
    },
    price: 9.0,
    image: "https://picsum.photos/seed/bruschetta/800/600",
    ingredients: [
      { name: { es: "Pan", en: "Bread" }, removable: false },
      { name: { es: "Tomate", en: "Tomato" }, removable: true },
      { name: { es: "Ajo", en: "Garlic" }, removable: true },
      { name: { es: "Albahaca", en: "Basil" }, removable: true },
    ],
    nutrition: { calories: 280, protein: "8g", carbs: "35g", fat: "12g" },
    tags: ["V"],
  },

  // Mains
  {
    id: "m1",
    categoryId: "mains",
    name: { es: "Salmón a la Parrilla", en: "Grilled Salmon" },
    description: {
      es: "Filete de salmón fresco con salsa de limón y eneldo, acompañado de espárragos.",
      en: "Fresh salmon fillet with lemon dill sauce, served with asparagus.",
    },
    price: 24.0,
    image: "https://picsum.photos/seed/salmon/800/600",
    ingredients: [
      { name: { es: "Salmón", en: "Salmon" }, removable: false },
      { name: { es: "Salsa de Limón", en: "Lemon Sauce" }, removable: true },
      { name: { es: "Espárragos", en: "Asparagus" }, removable: true },
    ],
    nutrition: { calories: 540, protein: "45g", carbs: "8g", fat: "32g" },
    tags: ["GF"],
  },
  {
    id: "m2",
    categoryId: "mains",
    name: { es: "Ribeye Steak", en: "Ribeye Steak" },
    description: {
      es: "Corte premium de 400g cocinado a la perfección con mantequilla de hierbas.",
      en: "Premium 400g cut cooked to perfection with herb butter.",
    },
    price: 32.0,
    image: "https://picsum.photos/seed/steak/800/600",
    ingredients: [
      { name: { es: "Carne", en: "Beef" }, removable: false },
      {
        name: { es: "Mantequilla de Hierbas", en: "Herb Butter" },
        removable: true,
      },
      { name: { es: "Sal Marina", en: "Sea Salt" }, removable: false },
    ],
    nutrition: { calories: 850, protein: "62g", carbs: "0g", fat: "65g" },
    tags: ["GF"],
  },
  {
    id: "m3",
    categoryId: "mains",
    name: { es: "Pasta Trufada", en: "Truffle Pasta" },
    description: {
      es: "Tagliatelle casero en salsa cremosa de trufa negra y champiñones silvestres.",
      en: "Homemade tagliatelle in a creamy black truffle sauce with wild mushrooms.",
    },
    price: 21.0,
    image: "https://picsum.photos/seed/pasta/800/600",
    ingredients: [
      { name: { es: "Pasta", en: "Pasta" }, removable: false },
      { name: { es: "Salsa de Trufa", en: "Truffle Sauce" }, removable: true },
      { name: { es: "Champiñones", en: "Mushrooms" }, removable: true },
    ],
    nutrition: { calories: 680, protein: "18g", carbs: "75g", fat: "34g" },
    tags: ["V"],
  },

  // Desserts
  {
    id: "d1",
    categoryId: "desserts",
    name: { es: "Tiramisú", en: "Tiramisu" },
    description: {
      es: "Clásico postre italiano con capas de mascarpone y café espresso.",
      en: "Classic Italian dessert with layers of mascarpone and espresso coffee.",
    },
    price: 8.5,
    image: "https://picsum.photos/seed/tiramisu/800/600",
    ingredients: [
      { name: { es: "Mascarpone", en: "Mascarpone" }, removable: false },
      { name: { es: "Café", en: "Coffee" }, removable: false },
      { name: { es: "Cacao", en: "Cocoa" }, removable: true },
    ],
    nutrition: { calories: 450, protein: "8g", carbs: "42g", fat: "28g" },
    tags: ["V"],
  },
  {
    id: "d2",
    categoryId: "desserts",
    name: { es: "Cheesecake de Frutos Rojos", en: "Berry Cheesecake" },
    description: {
      es: "Suave pastel de queso estilo New York con compota de fresas y frambuesas.",
      en: "Smooth New York style cheesecake with strawberry and raspberry compote.",
    },
    price: 9.0,
    image: "https://picsum.photos/seed/cheesecake/800/600",
    ingredients: [
      { name: { es: "Queso Crema", en: "Cream Cheese" }, removable: false },
      { name: { es: "Base de Galleta", en: "Cookie Base" }, removable: false },
      { name: { es: "Salsa de Frutos", en: "Berry Sauce" }, removable: true },
    ],
    nutrition: { calories: 520, protein: "10g", carbs: "55g", fat: "30g" },
    tags: ["V"],
  },

  // Drinks
  {
    id: "dr1",
    categoryId: "drinks",
    name: { es: "Limonada de Menta", en: "Mint Lemonade" },
    description: {
      es: "Refrescante limonada natural con hojas de menta fresca y hielo picado.",
      en: "Refreshing natural lemonade with fresh mint leaves and crushed ice.",
    },
    price: 5.0,
    image: "https://picsum.photos/seed/lemonade/800/600",
    ingredients: [
      { name: { es: "Limón", en: "Lemon" }, removable: false },
      { name: { es: "Menta", en: "Mint" }, removable: true },
      { name: { es: "Azúcar", en: "Sugar" }, removable: true },
    ],
    nutrition: { calories: 120, protein: "0g", carbs: "30g", fat: "0g" },
    tags: ["V", "GF"],
  },
  {
    id: "dr2",
    categoryId: "drinks",
    name: { es: "Vino Tinto de la Casa", en: "House Red Wine" },
    description: {
      es: "Copa de Cabernet Sauvignon, notas de frutos negros y especias.",
      en: "Glass of Cabernet Sauvignon, notes of black fruits and spices.",
    },
    price: 8.0,
    image: "https://picsum.photos/seed/wine/800/600",
    ingredients: [{ name: { es: "Vino", en: "Wine" }, removable: false }],
    nutrition: { calories: 125, protein: "0g", carbs: "4g", fat: "0g" },
    tags: ["V", "GF"],
  },
];
