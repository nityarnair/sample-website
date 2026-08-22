import React from 'react';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'emerald' | 'gold' | 'slate' | 'white';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'emerald',
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3">
          <Badge variant={dark ? 'white' : eyebrowVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight',
          dark ? 'text-white' : 'text-[#0f172a]'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'w-14 h-1 rounded-full my-4 bg-gradient-to-r from-[#0f4c47] to-[#d97706]',
          align === 'center' ? 'mx-auto' : 'mr-auto'
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed',
            dark ? 'text-slate-200' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
