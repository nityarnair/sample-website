import React from 'react';
import { CONFERENCE_DATA } from '@/data/conference';

export const ConferenceMeta: React.FC = () => {
  // Pull real stats values from CONFERENCE_DATA
  const items = [
    {
      number: '26th',
      label: 'Annual Edition',
      sub: 'Continuous legacy since 1998',
    },
    {
      number: '60+',
      label: 'Global Partners',
      sub: 'Universities across 30+ countries',
    },
    {
      number: 'NIRF',
      label: '#12 in India',
      sub: 'National Institutional Ranking 2025',
    },
    {
      number: 'NAAC',
      label: 'A++ Grade',
      sub: '3.83 CGPA · Highest Accreditation',
    },
  ];

  return (
    <section
      className="bg-[#F7F7F4] text-[#101828] border-b border-[#D9DEE5]"
      aria-label="Conference Key Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* ── Horizontal editorial strip — no card borders, just ruled columns ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#D9DEE5]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 px-5 sm:px-8 first:pl-0 last:pr-0 group"
            >
              {/* Large display number — Cormorant Garamond */}
              <div className="font-serif text-[2.4rem] sm:text-[2.75rem] font-semibold text-[#071A33] leading-none mb-2 tracking-tight tabular-nums">
                {item.number}
              </div>

              {/* Label — Manrope medium */}
              <div className="text-[13px] sm:text-[13.5px] font-sans font-semibold text-[#101828] leading-tight mb-1">
                {item.label}
              </div>

              {/* Sub — muted */}
              <div className="text-[11px] font-sans text-[#667085] leading-relaxed">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
