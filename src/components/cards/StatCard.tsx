import React from 'react';
import { StatItem } from '@/data/conference';

export interface StatCardProps {
  stat: StatItem;
  dark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div
      className="relative group rounded-2xl p-6 text-center transition-all duration-300 bg-gradient-to-b from-[#092e2a]/90 to-[#041916]/95 border border-amber-500/20 backdrop-blur-xl shadow-luxury-sm hover:border-amber-400/50 hover:shadow-gold-glow hover:-translate-y-1"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold mb-2 tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
        {stat.value}
      </div>
      <div className="font-display font-semibold text-sm sm:text-base text-slate-100 mb-1">
        {stat.label}
      </div>
      {stat.description && (
        <div className="text-xs leading-relaxed text-slate-400 font-normal">
          {stat.description}
        </div>
      )}
    </div>
  );
};

