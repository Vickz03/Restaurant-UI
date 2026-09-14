import React from 'react';
import Button from './Button';

const ExperienceCard = ({
  title,
  subtitle,
  description,
  duration,
  price,
  highlights = [],
  image,
  ctaText = 'RESERVE EXPERIENCE',
  ctaTo = '/reservation'
}) => {
  return (
    <div className="group relative bg-[#1B1A17] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-500 hover:border-[#B89B62]/50">
      {/* Image Block */}
      <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#151513]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1A17] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B1A17]/80 opacity-90" />
      </div>

      {/* Content Block */}
      <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
        <div>
          {subtitle && (
            <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.25em] uppercase block mb-2 font-medium">
              {subtitle}
            </span>
          )}

          <h3 className="text-2xl md:text-3xl font-serif text-[#F5F1E8] font-normal mb-4">
            {title}
          </h3>

          <p className="text-[#A9A49A] text-sm font-sans font-light leading-relaxed mb-6">
            {description}
          </p>

          {/* Details Row */}
          {(duration || price) && (
            <div className="flex items-center gap-6 py-3 border-y border-white/10 mb-6 text-xs text-[#F5F1E8]">
              {duration && (
                <div>
                  <span className="text-[#A9A49A] block text-[10px] uppercase tracking-wider">Duration</span>
                  <span className="font-medium text-[#D2B77A]">{duration}</span>
                </div>
              )}
              {price && (
                <div>
                  <span className="text-[#A9A49A] block text-[10px] uppercase tracking-wider">Investment</span>
                  <span className="font-medium text-[#D2B77A]">{price}</span>
                </div>
              )}
            </div>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <ul className="space-y-2 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center text-xs text-[#A9A49A] gap-2.5 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89B62]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4">
          <Button to={ctaTo} variant="primary" size="sm">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
