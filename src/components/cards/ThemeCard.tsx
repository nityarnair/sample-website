import React from 'react';
import { SubTheme } from '@/data/conference';

export interface ThemeCardProps {
  theme: SubTheme;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  return (
    <div className="group relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-dyuti-sm hover:shadow-dyuti-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4c47] to-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      {/* Number Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#fffbeb] text-[#b45309] font-display font-extrabold text-xs border border-[#fef3c7] shadow-xs">
          {theme.number}
        </span>
      </div>

      {/* Theme Title */}
      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#0f4c47] transition-colors leading-snug mb-4">
        {theme.title}
      </h3>

      {/* Topics list */}
      <ul className="space-y-2 mt-auto pt-2 border-t border-slate-100 text-sm text-slate-600">
        {theme.topics.map((topic, idx) => (
          <li key={idx} className="flex items-start gap-2 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c47] mt-2 shrink-0" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
