import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const Story = () => {
  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      {/* Hero */}
      <HeroSection
        label="HERITAGE & CRAFT"
        title="OUR STORY"
        description="A TRADITION OF CULINARY EXCELLENCE."
        bgImage="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* SECTION — OUR BEGINNING */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              label="FOUNDATIONS"
              title="OUR BEGINNING"
              align="left"
            />

            <p className="text-[#A9A49A] font-sans text-base md:text-lg font-light leading-relaxed">
              AARAYA was born from a simple belief: exceptional food should create exceptional memories. Founded in 2018 along Chennai's historic Cathedral Road, the restaurant brings together traditional culinary craftsmanship with modern European techniques.
            </p>

            <p className="text-[#A9A49A] font-sans text-sm font-light leading-relaxed">
              We conceived AARAYA not merely as a venue for dinner, but as a sanctuary where time slows down, conversations flow effortlessly, and every detail — from custom mouth-blown glassware to acoustic drapery — is curated for harmony.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#151513] border border-white/10 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Élan Dining Room History"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION — CHEF SPOTLIGHT */}
      <section className="py-24 md:py-32 bg-[#151513] border-t border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#151513] border border-white/10 shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                  alt="Chef Arjun Rao"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-[#B89B62] text-[11px] font-sans tracking-[0.25em] uppercase font-medium">
                20+ YEARS OF CULINARY EXPERIENCE
              </span>

              <h2 className="text-4xl md:text-5xl font-serif text-[#F5F1E8] font-normal">
                CHEF ARJUN RAO
              </h2>

              <p className="text-[#A9A49A] font-sans text-base font-light leading-relaxed">
                Trained in classic French gastronomy at Le Cordon Bleu Paris and having spent a decade honing minimalist technique in Kyoto, Executive Chef Arjun Rao brings an artistic sensibility to South Indian coastal ingredients.
              </p>

              <p className="text-[#A9A49A] font-sans text-sm font-light leading-relaxed">
                "Our kitchen operates on deep respect for nature. We do not disguise ingredients; we strip away clutter to reveal their true essence."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION — OUR PHILOSOPHY (3 PILLARS) */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <SectionHeading
          label="THE GUIDING PRINCIPLES"
          title="OUR PHILOSOPHY"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 01 */}
          <div className="bg-[#1B1A17] border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <span className="text-4xl font-serif text-[#B89B62]">01</span>
            <div>
              <h3 className="text-2xl font-serif text-[#F5F1E8] mb-3">SEASONALITY</h3>
              <p className="text-sm text-[#A9A49A] font-sans font-light leading-relaxed">
                We let the ingredients guide the menu. Our dishes evolve constantly based on daily coastal harvests and micro-seasonal mountain botanicals.
              </p>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="bg-[#1B1A17] border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <span className="text-4xl font-serif text-[#B89B62]">02</span>
            <div>
              <h3 className="text-2xl font-serif text-[#F5F1E8] mb-3">CRAFT</h3>
              <p className="text-sm text-[#A9A49A] font-sans font-light leading-relaxed">
                Every plate is created with intention. From 48-hour bone broths to hand-shaved black truffle, we honor time-tested cooking disciplines.
              </p>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="bg-[#1B1A17] border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <span className="text-4xl font-serif text-[#B89B62]">03</span>
            <div>
              <h3 className="text-2xl font-serif text-[#F5F1E8] mb-3">SUSTAINABILITY</h3>
              <p className="text-sm text-[#A9A49A] font-sans font-light leading-relaxed">
                We work directly with responsible local producers, biodynamic vineyards, and smallholder farmers who practice ethical land stewardship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION — CINEMATIC BANNER */}
      <section className="relative py-36 overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/60 to-[#0B0B0A]" />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <blockquote className="text-3xl md:text-5xl font-serif text-[#F5F1E8] font-light leading-relaxed italic mb-6">
            "Every table has a story waiting to be told."
          </blockquote>
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#B89B62]">
            — AARAYA RESTAURANT, CHENNAI
          </span>
        </div>
      </section>
    </div>
  );
};

export default Story;
