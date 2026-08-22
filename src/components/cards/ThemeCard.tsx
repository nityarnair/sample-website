import React from 'react';
import { SubTheme } from '@/data/conference';
import { Sparkles } from 'lucide-react';

export interface ThemeCardProps {
  theme: SubTheme;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  return (
    <div className="group relative bg-gradient-to-b from-[#082824]/90 to-[#041714]/95 border border-amber-500/20 hover:border-amber-400/60 rounded-2xl p-6 sm:p-7 shadow-luxury-md hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden backdrop-blur-xl">
      {/* Top gold shimmer bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Track Badge & Category */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 font-cinzel font-bold text-xs border border-amber-400/30">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Track {theme.number}</span>
        </span>
        <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold font-display">
          Academic Track
        </span>
      </div>

      {/* Theme Title */}
      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-amber-200 transition-colors leading-snug mb-4">
        {theme.title}
      </h3>

      {/* Topics list */}
      <ul className="space-y-2.5 mt-auto pt-4 border-t border-emerald-500/20 text-xs sm:text-sm text-slate-300">
        {theme.topics.map((topic, idx) => (
          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs" />
            <span className="group-hover:text-slate-200 transition-colors">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

