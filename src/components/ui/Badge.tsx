import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'gold' | 'slate' | 'white' | 'gold-luxury' | 'emerald-luxury' | 'glass';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold-luxury',
  className,
  ...props
}) => {
  const variants = {
    emerald: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30',
    gold: 'bg-amber-950/70 text-amber-300 border-amber-500/30',
    slate: 'bg-slate-900/80 text-slate-300 border-slate-700/50',
    white: 'bg-white/10 text-white border-white/20 backdrop-blur-md',
    'gold-luxury': 'bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-600/20 text-amber-200 border-amber-400/40 shadow-sm backdrop-blur-md',
    'emerald-luxury': 'bg-gradient-to-r from-emerald-900/60 to-emerald-950/80 text-emerald-200 border-emerald-500/40 shadow-sm backdrop-blur-md',
    glass: 'bg-white/5 text-slate-200 border-white/10 backdrop-blur-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider border transition-all duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

