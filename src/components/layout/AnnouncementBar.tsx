import React from 'react';
import { Bell } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      className="bg-[#fffbeb] border-b border-[#fef3c7] text-[#92400e] text-xs sm:text-sm py-2 px-4"
      role="region"
      aria-label="Conference Announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 text-center">
        <span className="inline-flex items-center gap-1 bg-[#d97706] text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider shrink-0">
          <Bell className="w-3 h-3" /> Update
        </span>
        <span className="font-medium truncate sm:whitespace-normal">
          {CONFERENCE_DATA.announcement}
        </span>
      </div>
    </div>
  );
};
