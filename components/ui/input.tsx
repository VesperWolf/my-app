import React from 'react';

export const Input = ({ value, onChange, placeholder, className }) => (
  <input
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);