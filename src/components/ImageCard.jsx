import React from 'react';

const ImageCard = ({
  image,
  alt = 'Aaraya Restaurant',
  caption,
  aspect = 'aspect-[4/3]',
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden bg-[#151513] border border-white/10 ${aspect} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs font-sans tracking-widest text-[#B89B62] uppercase mb-1">AARAYA</p>
          <p className="text-lg font-serif text-[#F5F1E8] font-normal leading-snug">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
