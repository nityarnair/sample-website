import React from 'react';

export const ConferenceMeta: React.FC = () => {
  // Editorial stats strip — values sourced from conference documentation
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
      className="bg-[#FFFFFF] text-[#0B1220] border-b border-[#D9DEE5]"
      aria-label="Conference Key Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* ── Horizontal Modern Information Strip ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#D9DEE5]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="py-10 sm:py-12 px-5 sm:px-8 first:pl-0 last:pr-0 group hover:bg-[#F5F5F0]/60 transition-colors duration-200"
            >
              {/* Large display number — DM Sans ExtraBold */}
              <div className="font-heading text-[2.5rem] sm:text-[3rem] font-extrabold text-[#071A33] leading-none mb-2 tracking-tight tabular-nums group-hover:text-[#2563EB] transition-colors">
                {item.number}
              </div>

              {/* Label — DM Sans bold */}
              <div className="text-[13.5px] sm:text-[14px] font-sans font-bold text-[#0B1220] leading-tight mb-1">
                {item.label}
              </div>

              {/* Sub — muted description */}
              <div className="text-[12px] font-sans text-[#667085] leading-relaxed">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
