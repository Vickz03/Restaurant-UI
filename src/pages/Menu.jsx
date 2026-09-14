import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import MenuItem from '../components/MenuItem';
import Button from '../components/Button';
import { menuCategories, menuItems } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16 border-b border-white/10 pb-6">
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

        {/* Menu Listings */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
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
