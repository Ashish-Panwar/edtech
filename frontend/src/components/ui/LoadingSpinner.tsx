'use client';

import { useState, useEffect } from 'react';
import { loadingManager } from '@/lib/api';

const LoadingSpinner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = loadingManager.subscribe(setIsLoading);
    // Initialize with current state
    setIsLoading(loadingManager.isLoading());
    return unsubscribe;
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-gold-400 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-l-4 border-r-4 border-gold-200 animate-[spin_3s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
