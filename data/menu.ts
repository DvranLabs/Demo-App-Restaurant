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
    name: {
      es: "Plato de Degustación de Guisos",
      en: "Tasting Plate of Stews",
    },
    description: {
      es: "Este plato destaca por su alto contenido proteico y fibra, siendo bajo en carbohidratos complejos si se consume sin arroz o tortillas..",
      en: "This dish stands out for its high protein and fiber content, being low in complex carbohydrates if consumed without rice or tortillas.",
    },
    price: 24.0,
    image: "/assets/plato-de-degustacion-de-guisos.webp",
    ingredients: [
      { name: { es: "Carne de res", en: "Beef" }, removable: true },
      { name: { es: "Carne de cerdo", en: "Pork" }, removable: true },
      { name: { es: "Albondigas", en: "Meatballs" }, removable: true },
      { name: { es: "Salsa Roja", en: "Red sauce" }, removable: true },
      { name: { es: "Brocoli", en: "Broccoli" }, removable: true },
      { name: { es: "Zanahorias", en: "Carrots" }, removable: true },
    ],
    nutrition: { calories: 550, protein: "40g", carbs: "18g", fat: "30g" },
    tags: ["GF"],
  },
  {
    id: "m2",
    categoryId: "mains",
    name: { es: "Sopa de Fideo con Carne de Res", en: "Beef Noodle Soup" },
    description: {
      es: "Es una sopa sustanciosa y casera que consiste en pasta fina (fideo) que tradicionalmente se fríe ligeramente antes de cocerse en un caldillo a base de jitomate (tomate rojo). Se complementa con trozos pequeños de carne de res y vegetales. Es considerada una comida completa o comida corrida por combinar carbohidratos, proteínas y vegetales en un caldo caliente y sabroso.",
      en: "This is a hearty, home-style soup made with thin pasta (noodles) that is traditionally lightly fried before being simmered in a tomato-based broth. It is complemented with small pieces of beef and vegetables. It is considered a complete meal or full meal because it combines carbohydrates, protein, and vegetables in a hot and flavorful broth.",
    },
    price: 32.0,
    image: "/assets/sopa-de-fideos-con-carne-de-res.webp",
    ingredients: [
      { name: { es: "Fideo", en: "Noodles" }, removable: true },
      { name: { es: "Carne de Res", en: "Beef" }, removable: true },
      { name: { es: "Jitomate", en: "Tomato" }, removable: true },
      { name: { es: "Zanahoria", en: "Carrot" }, removable: true },
    ],
    nutrition: { calories: 420, protein: "25g", carbs: "35g", fat: "15g" },
    tags: ["GF"],
  },
  {
    id: "m3",
    categoryId: "mains",
    name: {
      es: "Huevos Revueltos con Frijoles",
      en: "Scrambled Eggs with Refried Beans",
    },
    description: {
      es: "Es un plato sencillo pero reconfortante que constituye la base del desayuno en muchas regiones. Consiste en huevos batidos y cocinados en sartén hasta que cuajan, servidos junto a una porción de frijoles que han sido cocidos, machacados y fritos (guisados) para obtener una textura cremosa. Es una combinación perfecta de proteínas y carbohidratos de absorción lenta.",
      en: "This simple yet comforting dish is a staple breakfast in many regions. It consists of beaten eggs cooked in a pan until set, served alongside a portion of beans that have been cooked, mashed, and fried (stewed) to achieve a creamy texture. It's a perfect combination of protein and slow-release carbohydrates.",
    },
    price: 21.0,
    image: "/assets/huevos-revueltos-con-frijoles.webp",
    ingredients: [
      { name: { es: "Huevos", en: "Eggs" }, removable: true },
      { name: { es: "Frijoles", en: "Beans" }, removable: true },
    ],
    nutrition: { calories: 450, protein: "22g", carbs: "30g", fat: "28g" },
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
