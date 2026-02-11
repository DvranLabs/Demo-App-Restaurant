import React from "react";
import { CATEGORIES, MENU_ITEMS } from "../data/menu";
import { CategoryId, Dish, Language } from "../types";
import { HeartIcon } from "./Icon";

interface MenuProps {
  activeCategory: CategoryId;
  onCategoryChange: (id: CategoryId) => void;
  onDishSelect: (dish: Dish) => void;
  favorites: string[];
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  language: Language;
}

const Menu: React.FC<MenuProps> = ({
  activeCategory,
  onCategoryChange,
  onDishSelect,
  favorites,
  onToggleFavorite,
  language,
}) => {
  const filteredItems = MENU_ITEMS.filter(
    (item) => item.categoryId === activeCategory,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 min-h-screen">
      {/* Category Navigation */}
      <div className="sticky top-20 z-30 py-4 bg-stone-50/95 backdrop-blur mb-8 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto no-scrollbar">
        <div className="flex md:justify-center space-x-2 min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === cat.id
                    ? "bg-stone-900 text-white shadow-lg scale-105"
                    : "bg-white text-stone-600 hover:bg-stone-200 border border-stone-200"
                }
              `}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((dish) => {
          const isFav = favorites.includes(dish.id);
          return (
            <div
              key={dish.id}
              onClick={() => onDishSelect(dish)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100 flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                {/** Boton Favoritos de las cards */}

                {/* <button  
                      onClick={(e) => onToggleFavorite(e, dish.id)}
                      className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur shadow-sm hover:bg-white transition-colors z-10"
                    >
                      <HeartIcon filled={isFav} className={`w-5 h-5 ${isFav ? 'text-red-500' : 'text-stone-400'}`} />
                    </button> */}

                {dish.tags && dish.tags.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-bold bg-black/60 text-white backdrop-blur rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-primary-600 transition-colors">
                    {dish.name[language]}
                  </h3>
                  <span className="text-lg font-semibold text-primary-600">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-stone-500 text-sm line-clamp-2 mb-4 flex-grow">
                  {dish.description[language]}
                </p>
                <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-sm font-medium text-stone-400 group-hover:text-stone-600 transition-colors">
                  <span>{dish.nutrition.calories} kcal</span>
                  <span className="text-primary-600 group-hover:translate-x-1 transition-transform">
                    {language === "es" ? "Ver Detalles" : "View Details"} &rarr;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
