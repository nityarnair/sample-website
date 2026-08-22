import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'danger';
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
      variant = 'primary',
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
      'inline-flex items-center justify-center font-display font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none';

    const variants = {
      primary:
        'bg-[#0f4c47] text-white hover:bg-[#0a3d38] active:bg-[#062b27] shadow-sm hover:shadow-md focus-visible:ring-[#0f4c47] border border-[#0a3d38]',
      secondary:
        'bg-[#1e293b] text-white hover:bg-[#0f172a] focus-visible:ring-[#1e293b] border border-[#0f172a]',
      gold:
        'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white hover:from-[#b45309] hover:to-[#92400e] shadow-dyuti-gold hover:shadow-lg focus-visible:ring-[#d97706] border border-[#b45309]',
      outline:
        'bg-transparent text-[#0f4c47] border border-[#0f4c47] hover:bg-[#f0faf8] focus-visible:ring-[#0f4c47]',
      ghost:
        'bg-transparent text-[#334155] hover:bg-[#f1f5f9] hover:text-[#0f4c47] focus-visible:ring-[#64748b]',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
      md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
      lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-bold',
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
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
