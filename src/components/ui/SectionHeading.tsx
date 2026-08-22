import React from 'react';
import { Badge, BadgeProps } from './Badge';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeProps['variant'];
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  serifTitle?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'gold-luxury',
  title,
  subtitle,
  align = 'center',
  dark = false,
  serifTitle = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4 inline-block">
          <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight',
          serifTitle ? 'font-serif italic font-normal text-amber-200' : 'font-display text-white'
        )}
      >
        {title}
      </h2>
      
      {/* Luxury Ornamental Gold Divider */}
      <div
        className={cn(
          'flex items-center gap-3 my-5',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
        <div className="w-12 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
      </div>

      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed font-normal',
            dark ? 'text-slate-300' : 'text-slate-300'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

