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
    <div className={cn('space-y-3.5', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-amber-500/25 hover:border-amber-400/50 rounded-2xl overflow-hidden bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 backdrop-blur-xl shadow-luxury-sm transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full px-6 py-4 flex items-center justify-between text-left font-display font-semibold text-slate-100 hover:text-amber-300 transition-colors focus-visible:outline-none cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                {item.icon && <span className="text-amber-400">{item.icon}</span>}
                <span className="text-base sm:text-lg text-white font-cinzel">{item.title}</span>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0',
                  isOpen && 'transform rotate-180 text-amber-300'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-emerald-500/20 font-normal">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

