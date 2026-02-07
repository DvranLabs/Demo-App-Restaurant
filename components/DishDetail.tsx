import React, { useState } from 'react';
import { Dish, Language } from '../types';
import { HeartIcon, ChevronLeftIcon, FlameIcon, UtensilsIcon, CheckIcon } from './Icon';

interface DishDetailProps {
  dish: Dish;
  language: Language;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onBack: () => void;
}

const DishDetail: React.FC<DishDetailProps> = ({
  dish,
  language,
  isFavorite,
  onToggleFavorite,
  onBack,
}) => {
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const [animatingHeart, setAnimatingHeart] = useState(false);

  const toggleIngredient = (name: string) => {
    setRemovedIngredients(prev => 
      prev.includes(name) 
        ? prev.filter(i => i !== name) 
        : [...prev, name]
    );
  };

  const handleFavoriteClick = () => {
    setAnimatingHeart(true);
    onToggleFavorite(dish.id);
    setTimeout(() => setAnimatingHeart(false), 300);
  };

  const labels = {
    ingredients: { es: 'Ingredientes', en: 'Ingredients' },
    nutrition: { es: 'Información Nutricional', en: 'Nutrition Facts' },
    customize: { es: 'Personalizar (Quitar ingredientes)', en: 'Customize (Remove items)' },
    calories: { es: 'Calorías', en: 'Calories' },
    protein: { es: 'Proteína', en: 'Protein' },
    fat: { es: 'Grasas', en: 'Fat' },
    carbs: { es: 'Carbohidratos', en: 'Carbs' },
    addToOrder: { es: 'Agregar a la Orden', en: 'Add to Order' },
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col md:flex-row overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
      
      {/* Close/Back Button Mobile Overlay */}
      <div className="absolute top-4 left-4 z-20 md:hidden">
        <button 
          onClick={onBack}
          className="p-2 bg-white/90 backdrop-blur rounded-full shadow-lg text-stone-800 hover:bg-stone-100 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative bg-stone-200">
        <img 
          src={dish.image} 
          alt={dish.name[language]} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
        <div className="absolute bottom-6 left-6 right-6 md:hidden text-white">
           <h1 className="text-3xl font-serif font-bold mb-1">{dish.name[language]}</h1>
           <p className="text-xl font-medium text-primary-500">${dish.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 h-full bg-white flex flex-col overflow-y-auto">
        
        {/* Header Desktop */}
        <div className="hidden md:flex justify-between items-center p-8 pb-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="font-medium">{language === 'es' ? 'Volver' : 'Back'}</span>
          </button>
          
          <button 
            onClick={handleFavoriteClick}
            className={`p-3 rounded-full transition-all duration-300 ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-stone-50 text-stone-400 hover:bg-stone-100'}`}
          >
            <HeartIcon filled={isFavorite} className={`w-6 h-6 ${animatingHeart ? 'scale-125' : 'scale-100'} transition-transform`} />
          </button>
        </div>

        <div className="px-6 py-6 md:px-8 md:pt-0 pb-32">
          
          {/* Title Desktop */}
          <div className="hidden md:block mb-6">
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">{dish.name[language]}</h1>
            <p className="text-2xl font-medium text-primary-600">${dish.price.toFixed(2)}</p>
          </div>

          <p className="text-stone-600 leading-relaxed text-lg mb-8">
            {dish.description[language]}
          </p>

          <div className="space-y-8">
            {/* Ingredients Customization */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <UtensilsIcon className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-stone-900">{labels.ingredients[language]}</h3>
              </div>
              <div className="bg-stone-50 rounded-xl p-4">
                 <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                   {labels.customize[language]}
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {dish.ingredients.map((ing) => {
                     const ingName = ing.name[language];
                     const isRemoved = removedIngredients.includes(ingName);
                     
                     return (
                       <button
                         key={ingName}
                         disabled={!ing.removable}
                         onClick={() => ing.removable && toggleIngredient(ingName)}
                         className={`
                           flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all border
                           ${!ing.removable 
                              ? 'bg-stone-100 border-transparent text-stone-500 cursor-default' 
                              : isRemoved
                                ? 'bg-stone-100 border-stone-300 text-stone-400 line-through decoration-stone-400'
                                : 'bg-white border-primary-100 text-stone-800 shadow-sm hover:border-primary-300'
                           }
                         `}
                       >
                         {ingName}
                         {ing.removable && !isRemoved && <CheckIcon className="w-3 h-3 text-primary-500" />}
                       </button>
                     )
                   })}
                 </div>
              </div>
            </div>

            {/* Nutrition Grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FlameIcon className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-stone-900">{labels.nutrition[language]}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-orange-50/50 p-4 rounded-xl text-center border border-orange-100">
                  <span className="block text-2xl font-bold text-primary-700">{dish.nutrition.calories}</span>
                  <span className="text-xs text-primary-600 font-medium uppercase">{labels.calories[language]}</span>
                </div>
                <div className="bg-stone-50 p-4 rounded-xl text-center border border-stone-100">
                  <span className="block text-xl font-bold text-stone-700">{dish.nutrition.protein}</span>
                  <span className="text-xs text-stone-500 font-medium uppercase">{labels.protein[language]}</span>
                </div>
                <div className="bg-stone-50 p-4 rounded-xl text-center border border-stone-100">
                  <span className="block text-xl font-bold text-stone-700">{dish.nutrition.carbs}</span>
                  <span className="text-xs text-stone-500 font-medium uppercase">{labels.carbs[language]}</span>
                </div>
                <div className="bg-stone-50 p-4 rounded-xl text-center border border-stone-100">
                  <span className="block text-xl font-bold text-stone-700">{dish.nutrition.fat}</span>
                  <span className="text-xs text-stone-500 font-medium uppercase">{labels.fat[language]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mobile Favorite Button (since header is hidden) */}
        <button 
          onClick={handleFavoriteClick}
          className={`md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-stone-400'}`}
        >
           <HeartIcon filled={isFavorite} className="w-6 h-6" />
        </button>

      </div>
    </div>
  );
};

export default DishDetail;