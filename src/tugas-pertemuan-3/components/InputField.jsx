import React from 'react';

export default function InputField({ label, type, name, value, 
  onChange, placeholder, errorMessage }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 
          transition-colors ${
          errorMessage ? 'border-red-500 focus:ring-red-500' : 
          'border-gray-300 focus:ring-blue-500'
        }`}
      />
      
      {errorMessage && (
        <div className="mt-1 text-sm text-red-600 bg-red-100 p-2 rounded">
          ⚠ {errorMessage}
        </div>
      )}
    </div>
  );
}