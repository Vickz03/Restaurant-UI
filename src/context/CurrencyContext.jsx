import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const formatPrice = (priceStr) => {
    if (!priceStr) return '';
    if (priceStr.includes('Minimum') || priceStr.includes('Paired')) return priceStr;

    // Extract numeric digits
    const numericMatch = priceStr.replace(/[^0-9]/g, '');
    if (!numericMatch) return priceStr;

    const inrValue = parseInt(numericMatch, 10);

    if (currency === 'USD') {
      const usdValue = Math.round(inrValue / 83);
      return `$${usdValue.toLocaleString()}`;
    }

    return `₹${inrValue.toLocaleString('en-IN')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
