import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  required,
  children,
  className,
}) => {
  return (
    <div className={cn('mb-4', className)}>
      <label
        htmlFor={id}
        className="block font-display text-sm font-semibold text-slate-800 mb-1.5"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};
