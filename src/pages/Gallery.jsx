import React from 'react';
import HeroSection from '../components/HeroSection';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      {/* Hero */}
      <HeroSection
        label="VISUAL JOURNEY"
        title="THE AARAYA EXPERIENCE"
        description="Moments from our kitchen, dining room, cellar, and table."
        bgImage="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Gallery Section */}
      <section className="py-20 md:py-28 container mx-auto px-6">
        <GalleryGrid />
      </section>
    </div>
  );
};

export default Gallery;
