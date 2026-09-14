import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 text-[#A9A49A] hover:text-[#B89B62] transition-colors p-2 bg-[#1B1A17]/80 rounded-full border border-white/10 z-20"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-[#A9A49A] hover:text-[#B89B62] transition-colors p-3 bg-[#1B1A17]/80 rounded-full border border-white/10 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[#A9A49A] hover:text-[#B89B62] transition-colors p-3 bg-[#1B1A17]/80 rounded-full border border-white/10 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative overflow-hidden border border-white/15 shadow-luxury max-h-[70vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Caption Bar */}
        <div className="w-full mt-4 text-center px-4 max-w-2xl">
          <span className="text-[#B89B62] text-[10px] uppercase tracking-[0.3em] font-sans font-medium block mb-1">
            {item.category}
          </span>
          <h3 className="text-2xl font-serif text-[#F5F1E8] font-normal">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-xs text-[#A9A49A] font-sans font-light mt-1">
              {item.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
