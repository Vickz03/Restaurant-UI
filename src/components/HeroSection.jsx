import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({
  label = 'AARAYA RESTAURANT',
  title,
  description,
  bgImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
  height = 'min-h-[60vh] md:min-h-[70vh]'
}) => {
  return (
    <section className={`relative ${height} flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0B0A]`}>
      {/* Background Image with Cinematic Dark Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0A]/85 via-[#0B0B0A]/75 to-[#0B0B0A]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Label */}
        {label && (
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
            <span className="h-[1px] w-10 bg-[#B89B62]/60"></span>
            <span className="text-[#B89B62] text-xs font-medium tracking-[0.3em] uppercase">
              {label}
            </span>
            <span className="h-[1px] w-10 bg-[#B89B62]/60"></span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#F5F1E8] font-light leading-tight tracking-wide mb-6 uppercase">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-[#A9A49A] font-sans text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B89B62]/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
