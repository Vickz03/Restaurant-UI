import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { useCurrency } from '../context/CurrencyContext';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'MENU', path: '/menu' },
  { name: 'OUR STORY', path: '/story' },
  { name: 'EXPERIENCE', path: '/reservation' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'EVENTS', path: '/events' },
  { name: 'CONTACT', path: '/contact' }
];

const Navbar = () => {
  const { currency, toggleCurrency } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-4 shadow-luxury'
          : 'bg-gradient-to-b from-[#0B0B0A]/90 via-[#0B0B0A]/50 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex flex-col items-start group select-none"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-[#F5F1E8] font-normal group-hover:text-[#B89B62] transition-colors">
            AARAYA
          </span>
          <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#B89B62] font-light">
            FINE DINING
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#B89B62] font-medium'
                    : 'text-[#F5F1E8]/80 hover:text-[#B89B62]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#B89B62] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Reserve Button & Currency Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleCurrency}
            className="text-[11px] font-sans tracking-widest text-[#B89B62] border border-[#B89B62]/40 px-2.5 py-1.5 hover:bg-[#B89B62] hover:text-[#0B0B0A] transition-all uppercase rounded-none"
            title="Toggle Currency (INR / USD)"
          >
            {currency === 'INR' ? '₹ INR' : '$ USD'}
          </button>

          <Button to="/reservation" variant="primary" size="sm">
            RESERVE A TABLE
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden text-[#F5F1E8] hover:text-[#B89B62] transition-colors p-2 focus:outline-none flex items-center gap-3"
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              toggleCurrency();
            }}
            className="text-[10px] font-sans tracking-widest text-[#B89B62] border border-[#B89B62]/40 px-2 py-1"
          >
            {currency === 'INR' ? '₹' : '$'}
          </span>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation Full-screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-50 bg-[#0B0B0A]/95 backdrop-blur-2xl flex flex-col justify-between p-8 border-t border-white/10 animate-fade-in lg:hidden">
          <div className="flex flex-col items-center justify-center space-y-6 pt-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-[0.2em] uppercase transition-colors ${
                    isActive ? 'text-[#B89B62]' : 'text-[#F5F1E8] hover:text-[#B89B62]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 pb-12 w-full max-w-xs mx-auto">
            <Button to="/reservation" variant="solid" size="md" className="w-full">
              RESERVE A TABLE
            </Button>
            <span className="text-[11px] font-sans tracking-widest text-[#A9A49A] uppercase">
              Race Course Road, Coimbatore
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
