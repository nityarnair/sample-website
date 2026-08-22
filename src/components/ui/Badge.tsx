import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'gold' | 'slate' | 'white';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  className,
  ...props
}) => {
  const variants = {
    emerald: 'bg-[#f0faf8] text-[#0f4c47] border-[#d5eee9]',
    gold: 'bg-[#fffbeb] text-[#b45309] border-[#fef3c7]',
    slate: 'bg-[#f1f5f9] text-[#334155] border-[#e2e8f0]',
    white: 'bg-white/15 text-white border-white/25 backdrop-blur-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
