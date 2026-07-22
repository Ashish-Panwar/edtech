'use client';

import { useState } from 'react';

interface ToastProps {
  id: number;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: Omit<ToastProps, 'id'>) => {
    const id = Date.now() + Math.floor(Math.random() * 10000);
    setToasts(prev => [...prev, { id, ...props }]);
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return { toast };
};