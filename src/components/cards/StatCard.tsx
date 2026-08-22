import React from 'react';
import { StatItem } from '@/data/conference';

export interface StatCardProps {
  stat: StatItem;
  dark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, dark = false }) => {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 text-center transition-transform hover:-translate-y-1 ${
        dark
          ? 'bg-white/10 border border-white/15 backdrop-blur-sm'
          : 'bg-white border border-slate-200 shadow-dyuti-sm'
      }`}
    >
      <div
        className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-1 tracking-tight ${
          dark ? 'text-amber-400' : 'text-[#0f4c47]'
        }`}
      >
        {stat.value}
      </div>
      <div
        className={`font-display font-bold text-sm sm:text-base ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {stat.label}
      </div>
      {stat.description && (
        <div
          className={`text-xs mt-1 leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          {stat.description}
        </div>
      )}
    </div>
  );
};
