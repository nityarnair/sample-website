import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'navy' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'gold' | 'gold-luxury' | 'emerald-luxury' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
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
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12345B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none group cursor-pointer rounded-full';

    const variants = {
      navy:
        'bg-[#071A33] text-white hover:bg-[#12345B] shadow-pill hover:shadow-editorial',
      primary:
        'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-pill',
      secondary:
        'bg-transparent text-[#071A33] border border-[#12345B] hover:bg-[#071A33] hover:text-white',
      outline:
        'bg-transparent text-[#071A33] border border-[#12345B] hover:bg-[#071A33] hover:text-white',
      ghost:
        'bg-transparent text-[#071A33] hover:bg-[#071A33]/8',
      white:
        'bg-white text-[#071A33] hover:bg-[#F8F8F6] border border-white/40 shadow-pill',
      danger:
        'bg-red-600 text-white hover:bg-red-700',
      // Fallback aliases:
      gold:
        'bg-[#071A33] text-white hover:bg-[#12345B] shadow-pill',
      'gold-luxury':
        'bg-[#071A33] text-white hover:bg-[#12345B] shadow-pill',
      'emerald-luxury':
        'bg-[#12345B] text-white hover:bg-[#071A33] shadow-pill',
    };

    const sizes = {
      sm: 'text-xs px-5 py-2 gap-1.5 h-[38px] tracking-wider uppercase font-semibold',
      md: 'text-xs sm:text-sm px-7 py-3 gap-2.5 h-[48px] sm:h-[52px] tracking-wider uppercase font-semibold',
      lg: 'text-sm sm:text-base px-8 py-3.5 gap-3 h-[52px] sm:h-[56px] tracking-wider uppercase font-semibold',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
        )}
        {icon && !showArrow && (
          <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
        )}
      </>
    );

    if (asLink && href) {
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={target || (isExternal ? '_blank' : undefined)}
          rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
