import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0A] text-[#F5F1E8] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.25em] text-[#F5F1E8] font-normal block">
                AARAYA
              </span>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B89B62] font-light">
                Artisanal Fine Dining & Culinary Art
              </span>
            </Link>
            <p className="text-xs text-[#A9A49A] font-sans leading-relaxed max-w-sm font-light pt-2">
              An unforgettable culinary journey crafted with passion, artistic precision, and seasonal excellence in the heart of Chennai.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#A9A49A] hover:text-[#B89B62] hover:border-[#B89B62] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#A9A49A] hover:text-[#B89B62] hover:border-[#B89B62] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@elanrestaurant.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#A9A49A] hover:text-[#B89B62] hover:border-[#B89B62] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-[#B89B62] font-medium mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs font-sans tracking-widest uppercase">
              <li>
                <Link to="/" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Culinary Menu</Link>
              </li>
              <li>
                <Link to="/story" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Experiences & Table Booking</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/events" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Private Dining & Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A9A49A] hover:text-[#F5F1E8] transition-colors">Contact Concierge</Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact (Col 8-10) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-[#B89B62] font-medium mb-6">
              LOCATION & CONTACT
            </h4>
            <div className="space-y-4 text-xs font-sans text-[#A9A49A] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B62] shrink-0 mt-0.5" />
                <span>12 Cathedral Road, Chennai, Tamil Nadu 600086</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B89B62] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#F5F1E8] transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B89B62] shrink-0" />
                <a href="mailto:hello@elanrestaurant.com" className="hover:text-[#F5F1E8] transition-colors">
                  hello@elanrestaurant.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours (Col 11-12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-[#B89B62] font-medium mb-6">
              HOURS
            </h4>
            <div className="space-y-3 text-xs font-sans text-[#A9A49A]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B89B62] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#F5F1E8] font-medium">Tuesday – Sunday</span>
                  <span className="text-[11px] font-light">12:00 PM – 11:30 PM</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="block text-[#A9A49A] text-[11px]">Monday: <span className="text-red-400/80 uppercase font-medium">Closed</span></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-[#A9A49A] font-light">
          <p>© 2026 AARAYA. All rights reserved.</p>
          <p className="mt-2 md:mt-0 tracking-widest text-[#B89B62]/80 uppercase">
            CHENNNAI • TAMIL NADU
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
