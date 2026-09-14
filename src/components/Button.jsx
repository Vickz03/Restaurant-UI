import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-[0.18em] uppercase transition-all duration-300 relative overflow-hidden group select-none text-xs font-medium cursor-pointer';
  
  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-[11px]',
    lg: 'px-8 py-4 text-xs'
  };

  const variants = {
    // Primary: Luxury Gold Outline with animated hover shimmer
    primary: 'border border-[#B89B62] text-[#F5F1E8] hover:text-[#0B0B0A] hover:bg-[#B89B62] shadow-[0_0_15px_rgba(184,155,98,0.1)] hover:shadow-[0_0_25px_rgba(184,155,98,0.4)]',
    
    // Solid: Gold fill
    solid: 'bg-[#B89B62] text-[#0B0B0A] hover:bg-[#D2B77A] font-semibold shadow-lg',
    
    // Outline: Subtle border, gold hover border
    outline: 'border border-white/20 text-[#F5F1E8] hover:border-[#B89B62] hover:text-[#B89B62]',

    // Ghost: Clean minimal link with bottom hover line
    ghost: 'text-[#F5F1E8] hover:text-[#B89B62] px-0 py-1 border-b border-transparent hover:border-[#B89B62]'
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} class={combinedClasses} className={combinedClasses} {...props}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
