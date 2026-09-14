import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import GalleryModal from './GalleryModal';

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setSelectedIndex(null);
            }}
            className={`px-5 py-2 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 border ${
              activeCategory === cat.id
                ? 'bg-[#B89B62] text-[#0B0B0A] border-[#B89B62] font-semibold'
                : 'bg-[#151513] text-[#A9A49A] border-white/10 hover:border-[#B89B62]/40 hover:text-[#F5F1E8]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Asymmetric Masonry-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative overflow-hidden bg-[#1B1A17] border border-white/10 cursor-pointer shadow-lg"
          >
            {/* Image Aspect Wrapper */}
            <div className={`relative w-full overflow-hidden ${item.aspect || 'aspect-[4/3]'}`}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-[#0B0B0A]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

              {/* Hover Overlay info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#B89B62] font-medium block mb-1">
                  {item.category}
                </span>
                <h4 className="text-xl font-serif text-[#F5F1E8] font-normal leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#A9A49A] font-sans font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view high-resolution image →
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <GalleryModal
          item={filteredItems[selectedIndex]}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default GalleryGrid;
