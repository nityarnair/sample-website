import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white border border-slate-200/90 rounded-2xl p-6 shadow-dyuti-sm transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:shadow-dyuti-lg hover:border-[#0f4c47]/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
