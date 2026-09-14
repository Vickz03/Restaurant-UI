import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ReservationForm from '../components/ReservationForm';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/experienceData';

const Reservation = () => {
  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      {/* Hero */}
      <HeroSection
        label="RESERVATIONS & EXPERIENCES"
        title="YOUR EVENING BEGINS HERE"
        description="Reserve your table at AARAYA and experience contemporary fine dining at its pinnacle."
        bgImage="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Main Reservation Section */}
      <section className="py-20 md:py-28 container mx-auto px-6 max-w-5xl">
        <ReservationForm />
      </section>

      {/* Private Experiences Breakdown */}
      <section className="py-20 md:py-28 bg-[#151513] border-t border-white/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="EXCLUSIVE ENCOUNTERS"
            title="PRIVATE EXPERIENCE PACKAGES"
            description="Elevate your dining with our curated culinary journeys."
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
    </div>
  );
};

export default Reservation;
