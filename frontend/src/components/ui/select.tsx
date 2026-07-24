"use client";

import React from "react";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  label?: string;
  error?: string;
}

const Select = ({
  children,
  label,
  error,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        {...props}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
      >
        {children}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export { Select };
export default Select;