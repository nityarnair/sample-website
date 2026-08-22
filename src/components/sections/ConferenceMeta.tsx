import React from 'react';

export const ConferenceMeta: React.FC = () => {
  const metaItems = [
    {
      label: 'Date',
      value: '25 September 2026',
      subtext: 'Abstract Submission Deadline',
    },
    {
      label: 'Venue',
      value: 'Rajagiri Valley Campus',
      subtext: 'Kalamassery, Kochi, Kerala',
    },
    {
      label: 'Papers',
      value: 'Scopus Indexed Volumes',
      subtext: 'Peer-reviewed book chapters & ISBN proceedings',
    },
    {
      label: 'Registration',
      value: 'Commences 10 August 2026',
      subtext: 'Delegates, Faculty & Student Scholars',
    },
  ];

  return (
    <section
      className="bg-[#073B35] text-white border-b border-white/10 relative z-20"
      aria-label="Conference Key Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Desktop: One horizontal row with thin vertical dividers */}
        {/* Mobile: Vertical list with horizontal dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {metaItems.map((item, idx) => (
            <div key={idx} className="py-6 sm:py-8 px-4 sm:px-6 first:pl-0 last:pr-0">
              <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#C89B3C] mb-2 font-semibold">
                {item.label}
              </span>
              <span className="block font-sans font-bold text-base sm:text-lg text-white leading-tight mb-1">
                {item.value}
              </span>
              <span className="block text-xs text-white/70 font-sans font-light leading-relaxed">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
