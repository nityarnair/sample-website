import React from 'react';
import { Badge, BadgeProps } from './Badge';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeProps['variant'];
  sectionNumber?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  serifTitle?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'subtle',
  sectionNumber,
  title,
  subtitle,
  align = 'center',
  dark = false,
  serifTitle = true,
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
      {(eyebrow || sectionNumber) && (
        <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
          {sectionNumber && (
            <span className={cn(
              "font-mono text-xs font-bold uppercase tracking-widest",
              dark ? "text-blue-400" : "text-[#2563EB]"
            )}>
              {sectionNumber}
            </span>
          )}
          {sectionNumber && eyebrow && <span className={cn("w-6 h-px", dark ? "bg-white/20" : "bg-[#D9DEE5]")} />}
          {eyebrow && (
            <Badge variant={dark ? 'white' : eyebrowVariant}>
              {eyebrow}
            </Badge>
          )}
        </div>
      )}

      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight',
          serifTitle ? 'font-serif' : 'font-sans font-bold',
          dark ? 'text-white' : 'text-[#071A33]'
        )}
      >
        {title}
      </h2>

      {/* Thin Editorial Divider */}
      <div
        className={cn(
          'w-16 h-px my-6',
          dark ? 'bg-white/20' : 'bg-[#12345B]',
          align === 'center' ? 'mx-auto' : ''
        )}
      />

      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed font-sans font-normal max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
            dark ? 'text-white/80' : 'text-[#667085]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
