import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const pressReviews = [
  {
    quote: "An extraordinary masterclass in contemporary gastronomy, seamlessly blending South Indian coastal heritage with classic French discipline.",
    source: "MICHELIN GUIDE SELECTION 2026"
  },
  {
    quote: "Aaraya redefines luxury fine dining in South India. The black truffle risotto and ember roasted lamb are pure culinary poetry.",
    source: "GASTRONOMY QUARTERLY"
  },
  {
    quote: "Atmosphere, acoustics, and sommelier service operating at the absolute peak of global fine dining standards.",
    source: "CONNOISSEUR INDIA"
  },
  {
    quote: "Chef Arjun Rao brings an artist's precision to every single plate. A mandatory destination for discerning food lovers.",
    source: "VOGUE LIVING & LIFESTYLE"
  }
];

const PressQuotes = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pressReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevQuote = () => {
    setCurrent((prev) => (prev === 0 ? pressReviews.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrent((prev) => (prev + 1) % pressReviews.length);
  };

  return (
    <section className="py-20 bg-[#151513] border-t border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        <Quote className="w-10 h-10 text-[#B89B62]/40 mx-auto mb-6" />

        <div className="min-h-[140px] flex flex-col justify-center items-center">
          <blockquote className="text-xl md:text-3xl font-serif text-[#F5F1E8] font-light leading-relaxed italic mb-6 animate-fade-in">
            "{pressReviews[current].quote}"
          </blockquote>

          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#B89B62] font-medium block">
            — {pressReviews[current].source}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevQuote}
            className="p-2 text-[#A9A49A] hover:text-[#B89B62] border border-white/10 rounded-full transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            {pressReviews.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  current === idx ? 'w-6 bg-[#B89B62]' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="p-2 text-[#A9A49A] hover:text-[#B89B62] border border-white/10 rounded-full transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PressQuotes;
