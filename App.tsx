import React, { useState, useEffect } from "react";
import { CategoryId, Dish, Language } from "./types";
import Menu from "./components/Menu";
import DishDetail from "./components/DishDetail";
import { UtensilsIcon } from "./components/Icon";

type View = "home" | "menu" | "details";

const App: React.FC = () => {
  const [view, setView] = useState<View>("home");
  const [language, setLanguage] = useState<Language>("es");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("starters");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  const handleDishSelect = (dish: Dish) => {
    setSelectedDish(dish);
    setView("details");
  };

  const handleBackToMenu = () => {
    setView("menu");
    setSelectedDish(null);
  };

  const labels = {
    enter: { es: "Ver Menú", en: "View Menu" },
    welcome: { es: "Bienvenidos a", en: "Welcome to" },
    tagline: {
      es: "Sabores auténticos, momentos inolvidables.",
      en: "Authentic flavors, unforgettable moments.",
    },
  };

  // Home Screen
  if (view === "home") {
    return (
      <div className="relative h-screen w-full bg-stone-900 overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/restaurant_bg/1920/1080"
            alt="Restaurant Ambience"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-in fade-in zoom-in duration-1000">
          <p className="text-orange-400 tracking-[0.3em] uppercase text-sm font-semibold mb-4">
            {labels.welcome[language]}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            Gusto
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto leading-relaxed">
            {labels.tagline[language]}
          </p>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => setView("menu")}
              className="bg-primary-600 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-primary-500 hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-900/50"
            >
              {labels.enter[language]}
            </button>

            <button
              onClick={toggleLanguage}
              className="text-white/60 hover:text-white text-sm uppercase tracking-widest border border-white/20 hover:border-white/50 px-4 py-2 rounded-lg transition-all"
            >
              {language === "es" ? "English" : "Español"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // App Layout
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Sticky Header (Hidden in details view on mobile, visible on desktop) */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur shadow-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => {
              setView("home");
              setView("menu");
            }}
            className={`flex items-center gap-2 cursor-pointer ${scrolled || view === "menu" ? "text-stone-900" : "text-stone-900"}`}
          >
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <UtensilsIcon className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">
              Gusto
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Lang Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:block text-xs font-bold text-stone-500 hover:text-primary-600 transition-colors uppercase border border-stone-200 rounded-md px-3 py-1.5"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>

      {view === "menu" && (
        <Menu
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onDishSelect={handleDishSelect}
          favorites={favorites}
          onToggleFavorite={(e, id) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          language={language}
        />
      )}

      {view === "details" && selectedDish && (
        <DishDetail
          dish={selectedDish}
          language={language}
          isFavorite={favorites.includes(selectedDish.id)}
          onToggleFavorite={toggleFavorite}
          onBack={handleBackToMenu}
        />
      )}
    </div>
  );
};

export default App;
