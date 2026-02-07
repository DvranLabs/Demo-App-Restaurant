export type Language = 'es' | 'en';

export type CategoryId = 'starters' | 'mains' | 'desserts' | 'drinks';

export interface Translation {
  es: string;
  en: string;
}

export interface Ingredient {
  name: Translation;
  removable: boolean;
}

export interface Nutrition {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Dish {
  id: string;
  categoryId: CategoryId;
  name: Translation;
  description: Translation;
  price: number;
  image: string;
  ingredients: Ingredient[];
  nutrition: Nutrition;
  tags?: string[]; // e.g., 'Spicy', 'Vegan'
}

export interface Category {
  id: CategoryId;
  label: Translation;
}