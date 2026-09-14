import React from 'react';

const SectionHeading = ({
  label,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${className}`}>
      {label && (
        <div className="flex items-center gap-3 mb-3">
          {align === 'center' && <span className="h-[1px] w-8 bg-[#B89B62]/50"></span>}
          <span className="text-[#B89B62] text-[11px] font-medium tracking-[0.25em] uppercase font-sans">
            {label}
          </span>
          {align === 'center' && <span className="h-[1px] w-8 bg-[#B89B62]/50"></span>}
        </div>
      )}
      
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-[#F5F1E8] font-normal leading-tight max-w-3xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-[#A9A49A] font-sans text-sm md:text-base leading-relaxed max-w-2xl font-light">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
