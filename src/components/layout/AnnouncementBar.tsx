import React from 'react';
import { CONFERENCE_DATA } from '@/data/conference';
import { ArrowUpRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      className="bg-[#071A33] text-white border-b border-white/10 text-[11px] sm:text-xs py-2 px-4 sm:px-8 relative z-50"
      aria-label="Conference Announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-sans">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="uppercase tracking-widest text-[#93C5FD] font-semibold text-[10px] sm:text-[11px] shrink-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            Announcement
          </span>
          <div className="w-6 sm:w-8 h-px bg-white/20 shrink-0 hidden sm:block" />
          <p className="text-white/90 font-normal m-0 truncate">
            {CONFERENCE_DATA.announcement}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4 text-[11px] text-white/75 shrink-0 font-sans">
          <span>Abstract Deadline: <strong>25 September 2026</strong></span>
          <span className="text-white/30">&bull;</span>
          <a
            href={CONFERENCE_DATA.links.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#93C5FD] transition-colors inline-flex items-center gap-0.5 underline underline-offset-2"
          >
            <span>Brochure (PDF)</span>
            <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
          </a>
        </div>
      </div>
    </aside>
  );
};
