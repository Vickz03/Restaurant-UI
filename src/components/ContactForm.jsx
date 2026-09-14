import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message content is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1B1A17] border border-white/10 p-8 md:p-10 relative">
      <h3 className="text-2xl font-serif text-[#F5F1E8] mb-2 font-normal">
        SEND US A MESSAGE
      </h3>
      <p className="text-xs text-[#A9A49A] font-sans font-light mb-6">
        For general inquiries, press relations, or special dietary requirements, please reach out to our concierge team.
      </p>

      {submitted ? (
        <div className="py-12 text-center bg-[#151513] border border-[#B89B62]/50 p-6 animate-fade-in">
          <CheckCircle2 className="w-12 h-12 text-[#B89B62] mx-auto mb-4" />
          <h4 className="text-2xl font-serif text-[#F5F1E8] mb-2">MESSAGE TRANSMITTED</h4>
          <p className="text-xs text-[#A9A49A] max-w-md mx-auto font-light leading-relaxed mb-6">
            Thank you, {form.name}. Your inquiry has been directed to our front of house desk. We will respond within 24 hours.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: '', email: '', phone: '', message: '' });
            }}
            variant="outline"
            size="sm"
          >
            SEND ANOTHER MESSAGE
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-1.5 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              value={form.name}
              placeholder="E.g., Ananya Iyer"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-1.5 font-medium">
                Email Address *
              </label>
              <input
                type="email"
                value={form.email}
                placeholder="ananya@example.com"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-1.5 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                placeholder="+91 98765 43210"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89B62]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A9A49A] font-sans mb-1.5 font-medium">
              Message *
            </label>
            <textarea
              rows="4"
              value={form.message}
              placeholder="How may we assist you with your upcoming dining experience?"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#151513] border border-white/15 text-[#F5F1E8] p-4 text-sm focus:outline-none focus:border-[#B89B62]"
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full">
            SEND MESSAGE
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
