import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'luxury' | 'emerald' | 'gold-border' | 'glass' | 'slate';
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  variant = 'luxury',
  className,
  ...props
}) => {
  const variants = {
    luxury: 'bg-[#072421]/80 backdrop-blur-xl border border-amber-500/20 text-slate-100 shadow-luxury-md',
    emerald: 'bg-gradient-to-br from-[#0a3d38] to-[#041c19] border border-emerald-500/30 text-white shadow-luxury-md',
    'gold-border': 'bg-[#061e1b]/90 backdrop-blur-xl border-2 border-amber-400/40 text-slate-100 shadow-gold-glow',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-slate-200 shadow-luxury-sm',
    slate: 'bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-200 shadow-luxury-sm',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden',
        variants[variant],
        hover && 'hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-luxury-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

