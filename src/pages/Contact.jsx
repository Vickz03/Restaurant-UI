import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      {/* Hero */}
      <HeroSection
        label="REACH OUT TO OUR TEAM"
        title="COME DINE WITH US"
        description="We would love to welcome you to an unforgettable evening at AARAYA."
        bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Grid Section */}
      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact & Hours Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Brand Card */}
            <div className="bg-[#1B1A17] border border-white/10 p-8 space-y-4">
              <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.3em] uppercase block">
                FLAGSHIP LOCATION
              </span>
              <h3 className="text-3xl font-serif text-[#F5F1E8] font-normal">
                AARAYA RESTAURANT
              </h3>
              
              <div className="space-y-4 text-sm font-sans text-[#A9A49A] font-light pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B89B62] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#F5F1E8] font-medium">Address</span>
                    <span>12 Cathedral Road, Gopalapuram, Chennai, Tamil Nadu 600086</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#B89B62] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#F5F1E8] font-medium">Reservations Desk</span>
                    <a href="tel:+919876543210" className="hover:text-[#B89B62] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#B89B62] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#F5F1E8] font-medium">Direct Email</span>
                    <a href="mailto:hello@elanrestaurant.com" className="hover:text-[#B89B62] transition-colors">
                      hello@elanrestaurant.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#1B1A17] border border-white/10 p-8 space-y-4">
              <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.3em] uppercase block">
                DINING HOURS
              </span>
              <h3 className="text-2xl font-serif text-[#F5F1E8] font-normal">
                OPERATING SCHEDULE
              </h3>

              <div className="space-y-3 text-sm font-sans pt-2">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-[#A9A49A]">Tuesday – Sunday:</span>
                  <span className="text-[#D2B77A] font-medium">12:00 PM – 11:30 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#A9A49A]">Monday:</span>
                  <span className="text-red-400/80 font-medium uppercase text-xs">Closed</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-20 bg-[#151513] border-t border-white/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="FINDING US"
            title="IN THE HEART OF CHENNAI"
            description="Located along Chennai's prime Cathedral Road, easily accessible from Nungambakkam and Mylapore."
            align="center"
            className="mb-12"
          />

          <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#1B1A17] border border-white/10 shadow-luxury group">
            {/* Styled Dark Map Graphic Placeholder */}
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80"
              alt="Élan Location Map Cathedral Road Chennai"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#B89B62] text-[#0B0B0A] flex items-center justify-center mb-4 shadow-gold-glow animate-pulse-glow">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif text-[#F5F1E8] font-normal mb-2">
                12 CATHEDRAL ROAD, CHENNAI
              </h4>
              <p className="text-xs text-[#A9A49A] font-sans mb-6 max-w-md font-light">
                Valet parking available at front entrance. Private chauffeur pickup arranged upon request.
              </p>
              
              <a
                href="https://maps.google.com/?q=12+Cathedral+Road+Chennai+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="solid" size="md">
                  GET DIRECTIONS <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
