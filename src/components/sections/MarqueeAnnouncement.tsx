import React from 'react';
import { BellRing } from 'lucide-react';

/**
 * Official Registration Announcement Marquee Bar
 * Exact content from dyuti.in:
 * "Registration begins from 10th August 2026, at Rajagiri College Of Social Sciences(Autonomous) Kalamassery."
 */
export const MarqueeAnnouncement: React.FC = () => {
  const text = 'Registration begins from 10th August 2026, at Rajagiri College Of Social Sciences(Autonomous) Kalamassery.';

  return (
    <aside
      className="bg-[#071A33] text-white border-y border-white/10 overflow-hidden py-3 sm:py-3.5 relative z-20 select-none shadow-sm"
      aria-label="Conference Announcement Ticker"
    >
      <div className="flex items-center">
        {/* Left Badge Indicator */}
        <div className="hidden sm:flex items-center gap-2 pl-4 sm:pl-8 pr-4 py-0.5 bg-[#071A33] z-10 shrink-0 border-r border-white/15">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0EA5E9]" />
          </span>
          <span className="font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-[#93C5FD]">
            Latest Update
          </span>
        </div>

        {/* Marquee Track with CSS Animation */}
        <div className="relative flex overflow-x-hidden flex-1 group">
          <div className="animate-marquee whitespace-nowrap flex items-center py-0.5">
            {/* Duplicated for seamless infinite loop */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center mx-6 sm:mx-8">
                <BellRing className="w-4 h-4 text-[#F59E0B] mr-3 shrink-0 inline" />
                <span className="font-sans text-xs sm:text-sm font-medium tracking-wide text-white/95">
                  {text}
                </span>
                <span className="mx-6 sm:mx-8 text-white/30 font-bold">&bull;</span>
              </div>
            ))}
          </div>

          <div
            className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-0.5"
            aria-hidden="true"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center mx-6 sm:mx-8">
                <BellRing className="w-4 h-4 text-[#F59E0B] mr-3 shrink-0 inline" />
                <span className="font-sans text-xs sm:text-sm font-medium tracking-wide text-white/95">
                  {text}
                </span>
                <span className="mx-6 sm:mx-8 text-white/30 font-bold">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
