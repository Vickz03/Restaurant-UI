import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import FoodCard from '../components/FoodCard';
import ExperienceCard from '../components/ExperienceCard';
import { menuItems } from '../data/menuData';
import { experiences } from '../data/experienceData';
import PressQuotes from '../components/PressQuotes';

const Home = () => {
  const signatureDishes = menuItems.filter(item => item.featured);

  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      
      {/* SECTION 1 — FULL SCREEN HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Cinematic Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80')` 
          }}
        >
          {/* Subtle Dark Layer Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0A]/80 via-[#0B0B0A]/60 to-[#0B0B0A]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-16">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <span className="h-[1px] w-12 bg-[#B89B62]/60"></span>
            <span className="text-[#B89B62] text-xs font-medium tracking-[0.35em] uppercase font-sans">
              EST. 2018 • COIMBATORE
            </span>
            <span className="h-[1px] w-12 bg-[#B89B62]/60"></span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-[#F5F1E8] font-light leading-[1.05] tracking-wide mb-8 uppercase drop-shadow-lg">
            THE ART OF<br />
            <span className="italic font-normal text-[#B89B62]">FINE DINING</span>
          </h1>

          <p className="text-[#A9A49A] font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            An unforgettable culinary experience, crafted with passion, precision, and the finest seasonal ingredients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button to="/reservation" variant="primary" size="lg">
              RESERVE A TABLE
            </Button>
            <Button to="/menu" variant="outline" size="lg">
              EXPLORE MENU
            </Button>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#A9A49A] hover:text-[#B89B62] transition-colors cursor-pointer">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#B89B62]" />
        </div>
      </section>


      {/* SECTION 2 — RESTAURANT INTRODUCTION */}
      <section className="py-24 md:py-32 bg-[#0B0B0A] relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                label="OUR PHILOSOPHY"
                title="WHERE INGREDIENTS BECOME EXPERIENCES."
                align="left"
              />

              <p className="text-[#A9A49A] font-sans text-base md:text-lg font-light leading-relaxed">
                At AARAYA, every dish is a balance between tradition and imagination. We celebrate seasonal ingredients through thoughtful technique and contemporary presentation.
              </p>

              <p className="text-[#A9A49A] font-sans text-sm font-light leading-relaxed border-l-2 border-[#B89B62]/60 pl-4 py-1 italic">
                Our kitchen collaborates with small-yield South Indian farms, artisanal cheese makers, and sustainable coastal fisheries to curate moments that lingered long after the last course.
              </p>

              <div className="pt-4">
                <Button to="/story" variant="primary" size="md">
                  DISCOVER OUR STORY
                </Button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#151513] border border-white/10 shadow-luxury group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Élan Dining Room Philosophy"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#1B1A17]/90 border border-white/10 backdrop-blur-md">
                  <span className="text-[10px] font-sans tracking-[0.25em] text-[#B89B62] uppercase block mb-1">
                    ATMOSPHERE & SANCTUARY
                  </span>
                  <p className="text-sm font-serif text-[#F5F1E8]">
                    Intimate seating for 50 guests, designed with black marble, velvet acoustical drapery, and subtle amber glow.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3 — SIGNATURE DISHES */}
      <section className="py-24 md:py-32 bg-[#151513] relative border-t border-b border-white/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="FROM OUR KITCHEN"
            title="A SYMPHONY OF FLAVORS"
            description="Explore our hallmark creations, carefully curated by Executive Chef Arjun Rao."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <FoodCard key={dish.id} {...dish} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/menu" variant="outline" size="md">
              VIEW COMPLETE MENU →
            </Button>
          </div>
        </div>
      </section>


      {/* SECTION 4 — CHEF */}
      <section className="py-24 md:py-32 bg-[#0B0B0A] relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Chef Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#151513] border border-white/10 shadow-luxury group">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                  alt="Executive Chef Arjun Rao"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-[#B89B62] font-sans tracking-widest uppercase">
                  EXECUTIVE CHEF & FOUNDER
                </div>
              </div>
            </div>

            {/* Right Chef Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#B89B62]"></span>
                <span className="text-[#B89B62] text-[11px] font-medium tracking-[0.25em] uppercase font-sans">
                  THE CHEF
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-[#F5F1E8] font-normal">
                CHEF ARJUN RAO
              </h2>

              <blockquote className="text-2xl md:text-3xl font-serif italic text-[#D2B77A] border-l-2 border-[#B89B62] pl-6 py-2 my-4">
                "Cooking isn't just about food. It's about memory."
              </blockquote>

              <p className="text-[#A9A49A] font-sans text-base font-light leading-relaxed">
                With over two decades of experience training across Michelin-starred establishments in Paris, Tokyo, and London, Chef Arjun Rao brings a singular vision to AARAYA: elevating local Indian coastal produce through global classic techniques.
              </p>

              <p className="text-[#A9A49A] font-sans text-sm font-light leading-relaxed">
                Every single menu item is tested relentlessly until absolute harmony of acidity, texture, and aroma is achieved.
              </p>

              <div className="pt-4">
                <Button to="/story" variant="primary" size="md">
                  MEET OUR CHEF & TEAM
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CRITIC REVIEWS & PRESS CAROUSEL */}
      <PressQuotes />

      {/* SECTION 5 — EXPERIENCE */}
      <section className="py-24 md:py-32 bg-[#151513] border-t border-white/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="CURATED DINING"
            title="AN INTIMATE ESCAPE"
            description="Four distinct dining encounters designed to engage every sense."
            align="center"
            className="mb-16"
          />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 6 — RESERVATION CTA */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center bg-[#0B0B0A]">
        {/* Background Image with Dark Vignette Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/70 to-[#0B0B0A]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <span className="text-[#B89B62] text-xs font-sans tracking-[0.3em] uppercase font-medium block mb-4">
            JOIN US FOR AN UNFORGETTABLE EVENING
          </span>

          <h2 className="text-4xl sm:text-6xl font-serif text-[#F5F1E8] font-normal mb-6 uppercase tracking-wide">
            YOUR TABLE AWAITS
          </h2>

          <p className="text-[#A9A49A] font-sans text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Join us for an evening crafted around exceptional food and unforgettable moments.
          </p>

          <Button to="/reservation" variant="solid" size="lg">
            RESERVE YOUR TABLE NOW
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
