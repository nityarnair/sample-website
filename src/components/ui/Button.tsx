import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'navy' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'gold' | 'gold-luxury' | 'emerald-luxury' | 'danger';
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
      variant = 'navy',
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
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12345B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none group cursor-pointer rounded-md';

    const variants = {
      navy:
        'bg-[#071A33] text-white hover:bg-[#12345B] shadow-subtle',
      primary:
        'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-subtle',
      secondary:
        'bg-white text-[#101828] border border-[#D9DEE5] hover:bg-[#F8F8F6] hover:border-[#12345B]/30',
      outline:
        'bg-transparent text-[#071A33] border border-[#12345B] hover:bg-[#071A33] hover:text-white',
      ghost:
        'bg-transparent text-[#12345B] hover:bg-[#12345B]/8',
      white:
        'bg-white text-[#071A33] hover:bg-[#F8F8F6] hover:text-[#12345B] border border-white/20 shadow-subtle',
      danger:
        'bg-red-600 text-white hover:bg-red-700',
      // Legacy alias fallbacks gracefully mapped to clean editorial styles:
      gold:
        'bg-[#071A33] text-white hover:bg-[#12345B] shadow-subtle',
      'gold-luxury':
        'bg-[#071A33] text-white hover:bg-[#12345B] shadow-subtle',
      'emerald-luxury':
        'bg-[#12345B] text-white hover:bg-[#071A33] shadow-subtle',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 tracking-wide',
      md: 'text-xs sm:text-sm px-5 py-2.5 gap-2 tracking-wide font-semibold uppercase tracking-wider',
      lg: 'text-sm px-6 py-3.5 gap-2.5 font-semibold uppercase tracking-wider',
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
          <span>{children}</span>
          {icon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <span>{children}</span>
        {icon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
