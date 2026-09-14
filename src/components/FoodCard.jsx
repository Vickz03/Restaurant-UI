import React from 'react';
import { useCurrency } from '../context/CurrencyContext';

const FoodCard = ({
  number,
  name,
  description,
  price,
  image,
  dietary,
  featured = false
}) => {
  const { formatPrice } = useCurrency();

  return (
    <div className="group relative flex flex-col bg-[#1B1A17] border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#B89B62]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
      {/* Image Container with Editorial Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#151513]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1A17] via-transparent to-transparent opacity-80" />
        
        {/* Number Badge */}
        {number && (
          <span className="absolute top-4 left-4 text-xs font-serif text-[#B89B62] tracking-widest bg-[#0B0B0A]/80 px-3 py-1 border border-white/10 backdrop-blur-md">
            {number}
          </span>
        )}

        {/* Dietary tag */}
        {dietary && (
          <span className="absolute top-4 right-4 text-[10px] font-sans uppercase tracking-widest text-[#A9A49A] bg-[#0B0B0A]/80 px-2.5 py-1 border border-white/10 backdrop-blur-md">
            {dietary}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <h3 className="text-2xl font-serif text-[#F5F1E8] group-hover:text-[#B89B62] transition-colors duration-300 font-normal">
              {name}
            </h3>
            <span className="text-lg font-sans font-medium text-[#D2B77A] ml-4 whitespace-nowrap">
              {formatPrice(price)}
            </span>
          </div>

          <div className="w-12 h-[1px] bg-[#B89B62]/30 mb-4 group-hover:w-20 group-hover:bg-[#B89B62] transition-all duration-500" />

          <p className="text-[#A9A49A] font-sans text-sm font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Footer info / link indication */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#A9A49A] group-hover:text-[#F5F1E8] transition-colors">
          <span>Aaraya Signature</span>
          <span className="text-[#B89B62] font-serif italic text-sm group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
