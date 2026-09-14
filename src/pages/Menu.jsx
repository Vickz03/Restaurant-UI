import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MenuItem from '../components/MenuItem';
import Button from '../components/Button';
import { menuCategories, menuItems } from '../data/menuData';
import { Search, X } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.dietary && item.dietary.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      {/* Hero Section */}
      <HeroSection
        label="AARAYA CULINARY SELECTION"
        title="OUR MENU"
        description="A celebration of seasonal ingredients, traditional culinary craftsmanship, and contemporary art."
        bgImage="https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Main Menu Section */}
      <section className="py-20 md:py-28 container mx-auto px-6">
        
        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#B89B62] text-[#0B0B0A] border-[#B89B62] font-semibold shadow-gold-glow'
                  : 'bg-[#151513] text-[#A9A49A] border-white/10 hover:border-[#B89B62]/40 hover:text-[#F5F1E8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Live Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <div className="relative flex items-center border border-white/15 bg-[#151513] focus-within:border-[#B89B62] transition-colors">
            <Search className="w-4 h-4 text-[#B89B62] ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Search dishes or ingredients (e.g. Truffle, Lamb, Scallops)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[#F5F1E8] px-3 py-3 text-xs font-sans placeholder-[#A9A49A]/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mr-3 text-[#A9A49A] hover:text-[#F5F1E8]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-[11px] font-sans text-[#B89B62] text-center mt-2 font-light">
              Showing search results for "<span className="text-[#F5F1E8]">{searchQuery}</span>" ({filteredItems.length} found)
            </p>
          )}
        </div>

        {/* Menu Listings */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))
          ) : (
            <div className="py-16 text-center bg-[#1B1A17] border border-white/10 p-8 space-y-3">
              <h4 className="text-xl font-serif text-[#F5F1E8]">NO MATCHING DISHES FOUND</h4>
              <p className="text-xs text-[#A9A49A] font-sans font-light">
                We couldn't find any dish matching "{searchQuery}". Please try another search term or reset category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 inline-block text-xs font-sans uppercase tracking-widest text-[#B89B62] underline hover:text-[#F5F1E8]"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </div>

        {/* Dietary & Wine Pairing Note */}
        <div className="mt-20 max-w-4xl mx-auto bg-[#1B1A17] border border-white/10 p-8 text-center space-y-4 shadow-luxury">
          <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.3em] uppercase block">
            SOMMELIER & DIETARY SERVICES
          </span>
          <h4 className="text-2xl font-serif text-[#F5F1E8]">
            BESPOKE WINE PAIRINGS & DIETARY TAILORING
          </h4>
          <p className="text-xs text-[#A9A49A] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Our Head Sommelier is on hand to curate bespoke glass pairings for every course. Please inform your server of any food allergies, sensitivities, or vegetarian preference upon seating.
          </p>
          <div className="pt-2">
            <Button to="/reservation" variant="primary" size="md">
              RESERVE TABLE FOR THIS MENU
            </Button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Menu;
