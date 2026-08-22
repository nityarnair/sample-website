import React from 'react';

export const ConferenceMeta: React.FC = () => {
  const metaItems = [
    {
      label: 'Abstract Deadline',
      value: '25 September 2026',
      subtext: 'Via Microsoft CMT Portal',
    },
    {
      label: 'Conference Venue',
      value: 'Rajagiri Valley Campus',
      subtext: 'Kalamassery, Kochi, Kerala',
    },
    {
      label: 'Publication Proceeding',
      value: 'Scopus Indexed Volumes',
      subtext: 'Peer-reviewed book chapters & ISBN',
    },
    {
      label: 'Registration Begins',
      value: '10 August 2026',
      subtext: 'Scholars, Academicians & Delegates',
    },
  ];

  return (
    <section
      className="bg-white text-[#101828] border-b border-[#D9DEE5] relative z-20"
      aria-label="Conference Key Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Desktop: One horizontal row with thin vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#D9DEE5]">
          {metaItems.map((item, idx) => (
            <div key={idx} className="py-6 sm:py-7 px-4 sm:px-6 first:pl-0 last:pr-0">
              <span className="block text-[11px] font-sans uppercase tracking-widest text-[#2563EB] mb-1.5 font-bold">
                {item.label}
              </span>
              <span className="block font-serif font-bold text-lg sm:text-xl text-[#071A33] leading-tight mb-1">
                {item.value}
              </span>
              <span className="block text-xs text-[#667085] font-sans font-normal leading-relaxed">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
