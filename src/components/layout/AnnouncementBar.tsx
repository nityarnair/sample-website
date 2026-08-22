import React from 'react';
import { CONFERENCE_DATA } from '@/data/conference';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      className="bg-[#073B35] text-white border-b border-[#C89B3C]/20 text-[11px] sm:text-xs py-2 px-4 sm:px-8 relative z-50"
      aria-label="Conference Announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-sans tracking-wide">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="uppercase tracking-widest text-[#C89B3C] font-semibold text-[10px] sm:text-[11px] shrink-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
            Announcement
          </span>
          <div className="w-8 sm:w-12 h-px bg-[#C89B3C]/30 shrink-0 hidden sm:block" />
          <p className="text-white/90 font-normal m-0 truncate">
            {CONFERENCE_DATA.announcement}
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[11px] text-white/70 shrink-0 font-mono">
          <span>Abstract Deadline: 25 Sept 2026</span>
        </div>
      </div>
    </aside>
  );
};
