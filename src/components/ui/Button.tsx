import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'danger' | 'gold-luxury' | 'emerald-luxury';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'gold',
      size = 'md',
      asLink,
      href,
      target,
      rel,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none relative overflow-hidden group cursor-pointer';

    const variants = {
      primary:
        'bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 hover:from-emerald-700 hover:to-emerald-900 border border-emerald-500/40 shadow-luxury-sm hover:shadow-emerald-glow focus-visible:ring-emerald-500',
      secondary:
        'bg-slate-900/90 text-slate-200 hover:bg-slate-800 border border-slate-700 focus-visible:ring-slate-500 shadow-luxury-sm',
      gold:
        'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 shadow-gold-glow hover:shadow-luxury-md focus-visible:ring-amber-400 border border-amber-300/60',
      'gold-luxury':
        'bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 text-slate-950 font-bold hover:scale-[1.02] active:scale-[0.98] shadow-gold-glow border border-amber-200',
      'emerald-luxury':
        'bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-emerald-100 border border-emerald-400/40 shadow-emerald-glow hover:border-amber-400/60 hover:text-white',
      outline:
        'bg-transparent text-amber-300 border border-amber-400/40 hover:bg-amber-400/10 hover:border-amber-400 focus-visible:ring-amber-400 backdrop-blur-sm',
      ghost:
        'bg-transparent text-slate-300 hover:bg-white/5 hover:text-amber-300 focus-visible:ring-slate-500',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 tracking-wide',
      md: 'text-sm px-5 py-2.5 rounded-xl gap-2 tracking-wide',
      lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 font-bold tracking-wide',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asLink && href) {
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={target || (isExternal ? '_blank' : undefined)}
          rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
          className={classes}
        >
          {icon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

