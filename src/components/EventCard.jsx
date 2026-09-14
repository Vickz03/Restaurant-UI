import React from 'react';
import Button from './Button';

const EventCard = ({
  id,
  title,
  subtitle,
  description,
  capacity,
  features = [],
  image,
  onInquire
}) => {
  return (
    <div className="group bg-[#1B1A17] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-500 hover:border-[#B89B62]/40">
      {/* Image Block */}
      <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#151513]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1A17] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B1A17]/80 opacity-80" />
      </div>

      {/* Content Block */}
      <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
        <div>
          <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.25em] uppercase block mb-2 font-medium">
            {subtitle}
          </span>

          <h3 className="text-3xl font-serif text-[#F5F1E8] font-normal mb-4">
            {title}
          </h3>

          <p className="text-[#A9A49A] text-sm font-sans font-light leading-relaxed mb-6">
            {description}
          </p>

          {/* Capacity pill */}
          {capacity && (
            <div className="inline-block py-1.5 px-3 bg-[#151513] border border-white/15 text-xs text-[#D2B77A] font-sans mb-6">
              Capacity: {capacity}
            </div>
          )}

          {/* Features */}
          {features.length > 0 && (
            <ul className="space-y-2 mb-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center text-xs text-[#A9A49A] gap-2.5 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89B62]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <Button onClick={onInquire} variant="primary" size="sm">
            INQUIRE FOR THIS EVENT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
