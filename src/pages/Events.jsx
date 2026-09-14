import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import { eventPackages } from '../data/eventsData';
import { CheckCircle2 } from 'lucide-react';

const Events = () => {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    eventType: 'Private Dining',
    guests: '10-20 Guests',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInquireClick = (packageTitle) => {
    setInquiryForm((prev) => ({ ...prev, eventType: packageTitle }));
    const formElem = document.getElementById('event-inquiry-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!inquiryForm.name.trim()) errs.name = 'Full name is required';
    if (!inquiryForm.email.trim() || !/\S+@\S+\.\S+/.test(inquiryForm.email)) errs.email = 'Valid email is required';
    if (!inquiryForm.date) errs.date = 'Preferred event date is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#0B0B0A] text-[#F5F1E8]">
      {/* Hero */}
      <HeroSection
        label="PRIVATE CELEBRATIONS"
        title="CELEBRATE SOMETHING EXTRAORDINARY"
        description="Thoughtfully designed dining experiences for life's most meaningful moments."
        bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 3 Event Packages */}
      <section className="py-20 md:py-28 container mx-auto px-6">
        <SectionHeading
          label="BESPOKE OCCASIONS"
          title="TAILORED PRIVATE PACKAGES"
          align="center"
          className="mb-16"
        />

        <div className="space-y-12">
          {eventPackages.map((pkg) => (
            <EventCard
              key={pkg.id}
              {...pkg}
              onInquire={() => handleInquireClick(pkg.title)}
            />
          ))}
        </div>
      </section>

      {/* SECTION — EVENT INQUIRY FORM */}
      <section id="event-inquiry-form" className="py-20 md:py-28 bg-[#151513] border-t border-white/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            label="START THE CONVERSATION"
            title="LET'S CREATE SOMETHING MEMORABLE."
            description="Our private dining director will collaborate with you on custom menu creation, wine pairing selection, and floral arrangements."
            align="center"
            className="mb-12"
          />

          <div className="bg-[#1B1A17] border border-white/10 p-8 md:p-12 shadow-luxury">
            {submitted ? (
              <div className="py-12 text-center bg-[#151513] border border-[#B89B62]/50 p-6 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#B89B62] mx-auto mb-4" />
                <h4 className="text-3xl font-serif text-[#F5F1E8] mb-2">EVENT INQUIRY TRANSMITTED</h4>
                <p className="text-xs text-[#A9A49A] max-w-md mx-auto font-light leading-relaxed mb-6">
                  Thank you, {inquiryForm.name}. Our Events Concierge has received your request for {inquiryForm.eventType} on {inquiryForm.date}. We will contact you within 24 hours.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryForm({ name: '', email: '', eventType: 'Private Dining', guests: '10-20 Guests', date: '', message: '' });
                  }}
                  variant="outline"
                  size="sm"
                >
                  SUBMIT ANOTHER INQUIRY
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Vikramaditya Roy"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
                      Event Type
                    </label>
                    <select
                      value={inquiryForm.eventType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, eventType: e.target.value })}
                      className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
                    >
                      <option value="Private Dining">Private Dining</option>
                      <option value="Corporate Events">Corporate Gathering</option>
                      <option value="Chef's Table">Chef's Table Omakase</option>
                      <option value="Full Buyout">Full Restaurant Buyout</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
                      Expected Guest Count
                    </label>
                    <select
                      value={inquiryForm.guests}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, guests: e.target.value })}
                      className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
                    >
                      <option value="2-8 Guests">2 to 8 Guests</option>
                      <option value="8-16 Guests">8 to 16 Guests (Private Vault)</option>
                      <option value="16-40 Guests">16 to 40 Guests</option>
                      <option value="40+ Guests">40+ Guests (Full Buyout)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
                      Preferred Event Date *
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={inquiryForm.date}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, date: e.target.value })}
                      className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
                    Event Details & Special Requests
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your occasion, dietary needs, or audio-visual requirements..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] p-4 text-sm focus:outline-none focus:border-[#B89B62]"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  SEND EVENT REQUEST
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
