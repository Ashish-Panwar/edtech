'use client';

import { useState } from 'react';
import { toast } from 'sonner';

// Re-export the toast from sonor for convenience
export { toast };

// Also export a custom toast function if needed
export const useAppToast = () => {
  return {
    toast: (title: string, description?: string, options?: { variant?: 'default' | 'destructive' }) => {
      toast(title, {
        description,
        action: variant === 'destructive' ? {
          label: 'Dismiss',
          onClick: () => {}
        } : undefined,
        className: variant === 'destructive' ? 'destructive' : '',
        ...(options || {})
      });
    }
  };
};