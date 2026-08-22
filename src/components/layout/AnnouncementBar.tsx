import React from 'react';
import { Bell, Sparkles, ArrowRight } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#031715] via-[#093530] to-[#031715] border-b border-amber-500/30 text-amber-200 text-xs sm:text-sm py-2.5 px-4 relative z-50 overflow-hidden"
      role="region"
      aria-label="Conference Announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 mx-auto text-center flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm shrink-0">
            <Sparkles className="w-3 h-3 text-slate-950" /> Official Notice
          </span>
          <span className="font-medium text-slate-200">
            {CONFERENCE_DATA.announcement}
          </span>
          <Link
            to="/call_for_papers"
            className="inline-flex items-center gap-1 text-amber-300 font-semibold hover:text-white underline underline-offset-4 decoration-amber-400/50 hover:decoration-amber-300 transition-colors"
          >
            <span>Submit Abstract</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

