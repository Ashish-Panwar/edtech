import React from 'react';

interface SkeletonProps {
  type?: 'text' | 'title' | 'avatar' | 'image' | 'rectangle';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number; // for text lines
}

export default function Skeleton({
  type = 'text',
  width = '100%',
  height = '1rem',
  className = '',
  count = 3,
}: SkeletonProps) {
  // Helper to convert size to string with px if it's a number
  const toPx = (value: string | number) => {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  };

  const w = toPx(width);
  const h = toPx(height);

  // Base styles for the skeleton
  const baseStyle = `
    animate-pulse
    bg-gray-200
    rounded
  `;

  // If type is text, we show multiple lines
  if (type === 'text') {
    return (
      <div className={`${className} space-y-2`}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`${baseStyle} h-${h} w-${w}`}
          />
        ))}
      </div>
    );
  }

  // For other types, we show a single shape
  return (
    <div className={`${className} ${baseStyle}`} style={{ width: w, height: h }} />
  );
}