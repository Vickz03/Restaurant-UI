import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, X } from 'lucide-react';
import Button from './Button';

const timeSlots = ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];
const occasions = [
  'Dinner',
  'Birthday',
  'Anniversary',
  'Business Dinner',
  'Private Celebration'
];

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '7:30 PM',
    guests: '2 Guests',
    occasion: 'Dinner',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.date) errs.date = 'Reservation date is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const randomRef = 'ARY-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: new Date().toISOString().split('T')[0],
      time: '7:30 PM',
      guests: '2 Guests',
      occasion: 'Dinner',
      specialRequests: ''
    });
    setErrors({});
  };

  return (
    <div className="w-full bg-[#1B1A17] border border-white/10 p-8 md:p-12 relative shadow-luxury">
      <div className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
        <span className="text-[#B89B62] text-[10px] font-sans tracking-[0.25em] uppercase font-medium">
          RESERVATIONS
        </span>
        <h2 className="text-3xl font-serif text-[#F5F1E8] mt-1 font-normal">
          BOOK YOUR EVENING
        </h2>
        <p className="text-[#A9A49A] text-sm font-sans font-light mt-2">
          Reservations are recommended up to 30 days in advance. For parties exceeding 8 guests, please contact our events desk directly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Guests & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
              Number of Guests
            </label>
            <div className="relative">
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm rounded-none focus:outline-none focus:border-[#B89B62] appearance-none"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5 Guests">5 Guests</option>
                <option value="6 Guests">6 Guests</option>
                <option value="7 Guests">7 Guests</option>
                <option value="8 Guests">8+ Guests (Vault Private Room)</option>
              </select>
              <Users className="w-4 h-4 text-[#B89B62] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
              Reservation Date
            </label>
            <div className="relative">
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm rounded-none focus:outline-none focus:border-[#B89B62]"
              />
            </div>
            {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
          </div>
        </div>

        {/* Row 2: Time Slots */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-3 font-medium flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#B89B62]" /> Preferred Seating Time
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setFormData({ ...formData, time: slot })}
                className={`py-3 px-2 text-xs font-sans uppercase tracking-widest text-center transition-all duration-300 border ${
                  formData.time === slot
                    ? 'bg-[#B89B62] text-[#0B0B0A] border-[#B89B62] font-semibold'
                    : 'bg-[#151513] text-[#F5F1E8] border-white/15 hover:border-[#B89B62]/50'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Occasion */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B62]" /> Dining Occasion
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {occasions.map((occ) => (
              <button
                key={occ}
                type="button"
                onClick={() => setFormData({ ...formData, occasion: occ })}
                className={`py-2 px-2 text-[11px] font-sans uppercase tracking-wider text-center transition-all border ${
                  formData.occasion === occ
                    ? 'bg-[#151513] text-[#B89B62] border-[#B89B62]'
                    : 'bg-[#151513]/50 text-[#A9A49A] border-white/10 hover:text-[#F5F1E8]'
                }`}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>

        {/* Row 4: Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Arjun Verma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              placeholder="arjun@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-2 font-medium">
            Dietary Preferences or Special Requests (Optional)
          </label>
          <textarea
            rows="3"
            placeholder="E.g., Vegetarian tasting menu requested, anniversary champagne toast, or specific table preference..."
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] p-4 text-sm focus:outline-none focus:border-[#B89B62]"
          />
        </div>

        <div className="pt-4 text-center md:text-left">
          <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
            CHECK AVAILABILITY & RESERVE
          </Button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="bg-[#1B1A17] border border-[#B89B62] p-8 md:p-10 max-w-lg w-full relative text-center shadow-luxury">
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 text-[#A9A49A] hover:text-[#F5F1E8] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B89B62]/10 border border-[#B89B62] text-[#B89B62] mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[#B89B62] text-xs font-sans tracking-[0.3em] uppercase block mb-1">
              RESERVATION REQUEST RECEIVED
            </span>

            <h3 className="text-3xl font-serif text-[#F5F1E8] font-normal mb-2">
              WE LOOK FORWARD TO WELCOMING YOU
            </h3>

            <p className="text-xs text-[#A9A49A] font-sans mb-6">
              Reference Code: <span className="text-[#D2B77A] font-mono font-medium">{bookingRef}</span>
            </p>

            <div className="bg-[#151513] p-4 border border-white/10 text-left space-y-2 text-xs font-sans mb-6">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#A9A49A]">Guest Name:</span>
                <span className="text-[#F5F1E8] font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#A9A49A]">Date & Time:</span>
                <span className="text-[#D2B77A] font-medium">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#A9A49A]">Party Size:</span>
                <span className="text-[#F5F1E8] font-medium">{formData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A9A49A]">Occasion:</span>
                <span className="text-[#F5F1E8] font-medium">{formData.occasion}</span>
              </div>
            </div>

            <p className="text-xs text-[#A9A49A] leading-relaxed mb-6 font-light">
              A confirmation email has been dispatched to <span className="text-[#F5F1E8]">{formData.email}</span>. Our concierge team will contact you shortly via phone to reconfirm table placement.
            </p>

            <Button onClick={resetForm} variant="solid" size="md" className="w-full">
              CLOSE & RETURN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
