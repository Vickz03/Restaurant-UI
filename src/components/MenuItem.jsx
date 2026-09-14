import React from 'react';
import { useCurrency } from '../context/CurrencyContext';

const MenuItem = ({
  number,
  name,
  description,
  price,
  dietary,
  image
}) => {
  const { formatPrice } = useCurrency();

  return (
    <div className="group relative py-6 border-b border-white/10 transition-colors hover:border-[#B89B62]/40">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
        {/* Title & Leader */}
        <div className="flex items-baseline gap-4 flex-grow pr-4">
          {number && (
            <span className="text-xs font-serif text-[#B89B62] tracking-widest select-none">
              {number}
            </span>
          )}

          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="text-xl md:text-2xl font-serif text-[#F5F1E8] group-hover:text-[#B89B62] transition-colors font-normal">
              {name}
            </h3>
            {dietary && (
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#A9A49A] border border-white/15 px-2 py-0.5">
                {dietary}
              </span>
            )}
          </div>

          {/* Dotted Line Leader */}
          <div className="hidden md:block flex-grow border-b border-dotted border-white/20 mx-2 group-hover:border-[#B89B62]/40 transition-colors" />
        </div>

        {/* Price */}
        <div className="text-lg md:text-xl font-sans font-medium text-[#D2B77A] whitespace-nowrap self-start md:self-auto">
          {formatPrice(price)}
        </div>
      </div>

      {/* Description */}
      <p className="mt-2 pl-0 md:pl-9 text-sm text-[#A9A49A] font-sans font-light leading-relaxed max-w-3xl">
        {description}
      </p>
    </div>
  );
};

export default MenuItem;
