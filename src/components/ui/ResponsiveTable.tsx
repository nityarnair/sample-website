import React from 'react';
import { cn } from '@/lib/utils';

export interface ResponsiveTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  wrapperClassName?: string;
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  children,
  className,
  wrapperClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-dyuti-sm',
        wrapperClassName
      )}
    >
      <table
        className={cn(
          'w-full text-left text-sm text-slate-700 border-collapse',
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};
