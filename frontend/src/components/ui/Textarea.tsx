import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number | string;
}

const Textarea = ({
  label,
  error,
  helperText,
  rows = 4,
  ...props
}: TextareaProps) => {
  const hasError = !!error;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className={`block w-full rounded-md border-gray-300 shadow-sm
          focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
          ${hasError ? 'border-red-500' : 'border-gray-300'}
          ${props.className || ''}`}
        rows={rows}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Textarea;