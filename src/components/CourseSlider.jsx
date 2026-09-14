import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wine, Clock, Award } from 'lucide-react';
import Button from './Button';

const courses = [
  {
    courseNum: "COURSE 01",
    title: "Smoked Ocean Trout Cornet",
    pairing: "Dom Pérignon Vintage Champagne (2013)",
    description: "Crispy black sesame cone, wild ocean trout tartare, beluga caviar pearls, and fresh finger lime droplets.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 02",
    title: "Pacific Hamachi Crudo",
    pairing: "Chablis Premier Cru 'Montmains' (2020)",
    description: "Thinly sliced hamachi, compressed cucumber, radish ribbon, white truffle oil droplets, and ponzu pearls.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 03",
    title: "Seared Atlantic Scallops",
    pairing: "Puligny-Montrachet Grand Cru (2018)",
    description: "Hokkaido sea scallops, silky cauliflower purée, noisette brown butter, sea asparagus, and beluga caviar.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 04",
    title: "Artisanal Morel Tagliatelle",
    pairing: "Barolo Monfortino Riserva (2015)",
    description: "Handcrafted egg tagliatelle, French wild morels, thyme-infused cultured butter, and shaved winter black truffle.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 05",
    title: "Yuzu & Rainforest Palate Cleanser",
    pairing: "Artisanal Botanical Elixir",
    description: "Cold-pressed Japanese yuzu sorbet infused with Nilgiri lemongrass and wild mountain mint crystals.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 06",
    title: "A5 Miyazaki Wagyu Tenderloin",
    pairing: "Château Margaux Grand Cru Classé (2015)",
    description: "Sear-crusted Wagyu, smoked bone marrow butter, pomme purée, charred maitake mushrooms, and red wine reduction.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 07",
    title: "Blood Orange & Beetroot Intermezzo",
    pairing: "Moscato d'Asti Vintage (2022)",
    description: "Heritage red beetroot granita with compressed blood orange, candied hibiscus, and wild flower foam.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
  },
  {
    courseNum: "COURSE 08",
    title: "Valrhona Guanaja Dark Chocolate Soufflé",
    pairing: "Château d'Yquem Sauternes (2010)",
    description: "70% Guanaja dark chocolate, molten core, Madagascar bourbon vanilla bean gelato, dusted with 24k edible gold leaf.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80"
  }
];

const CourseSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === courses.length - 1 ? 0 : prev + 1));

  const activeCourse = courses[current];

  return (
    <div className="w-full bg-[#1B1A17] border border-white/10 p-6 md:p-10 relative shadow-luxury">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
        <div>
          <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.3em] uppercase block font-medium">
            INTERACTIVE EXPERIENCE
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-[#F5F1E8] mt-1 font-normal">
            CHEF'S 8-COURSE TASTING JOURNEY
          </h3>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="text-xs font-serif text-[#B89B62] mr-2">
            {current + 1} / {courses.length}
          </span>
          <button
            onClick={prev}
            className="p-3 bg-[#151513] border border-white/15 text-[#A9A49A] hover:text-[#B89B62] hover:border-[#B89B62] transition-all"
            aria-label="Previous course"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-3 bg-[#151513] border border-white/15 text-[#A9A49A] hover:text-[#B89B62] hover:border-[#B89B62] transition-all"
            aria-label="Next course"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Course Card Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Course Image */}
        <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#151513] border border-white/10 group">
          <img
            src={activeCourse.image}
            alt={activeCourse.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-[#0B0B0A]/90 border border-white/15 px-3 py-1 text-xs font-serif text-[#B89B62] tracking-widest backdrop-blur-md">
            {activeCourse.courseNum}
          </div>
        </div>

        {/* Course Info */}
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89B62] font-medium">
            {activeCourse.courseNum} OF 08
          </span>

          <h4 className="text-3xl font-serif text-[#F5F1E8] font-normal leading-tight">
            {activeCourse.title}
          </h4>

          <p className="text-sm font-sans text-[#A9A49A] font-light leading-relaxed">
            {activeCourse.description}
          </p>

          {/* Sommelier Pairing */}
          <div className="bg-[#151513] p-4 border border-white/10 space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#D2B77A] font-sans uppercase tracking-wider font-medium">
              <Wine className="w-4 h-4 text-[#B89B62]" /> Sommelier Glass Pairing
            </div>
            <p className="text-xs font-sans text-[#F5F1E8] font-light italic pl-6">
              {activeCourse.pairing}
            </p>
          </div>

          <div className="pt-2">
            <Button to="/reservation" variant="primary" size="sm">
              RESERVE THIS 8-COURSE EXPEDITION
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CourseSlider;
