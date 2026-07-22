'use client';

import { useToast } from './use-toast';
import { X } from 'lucide-react';

export const Toast = ({ title, description, variant = 'default', onClose }: {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
  onClose: () => void;
}) => {
  return (
    <div className={`flex w-full items-center p-4 mb-4 rounded-lg border border-solid
      ${variant === 'destructive' ? 'border-red-500 bg-red-50 text-red-700' : 'border-indigo-500 bg-indigo-50 text-indigo-700'}`}
      role="alert"
    >
      <div className="flex-shrink-0">
        {variant === 'destructive' && <span className="flex h-3.5 w-3.5 shrink-0 flex-shrink-0">•</span>}
        {variant === 'default' && <span className="flex h-3.5 w-3.5 shrink-0 flex-shrink-0">•</span>}
      </div>
      <div className="ml-3 w-0 flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-sm">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0 flex-shrink-0 w-8 flex items-center justify-center p-1 rounded-lg hover:bg-indigo-100 hover:text-indigo-600">
        <button onClick={onClick} className="h-4 w-4 text-current">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};