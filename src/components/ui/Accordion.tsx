import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className,
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || (items[0]?.id ?? null));

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-display font-semibold text-slate-800 hover:text-[#0f4c47] transition-colors focus-visible:outline-none focus-visible:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-[#0f4c47]">{item.icon}</span>}
                <span className="text-base sm:text-lg">{item.title}</span>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0',
                  isOpen && 'transform rotate-180 text-[#0f4c47]'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
