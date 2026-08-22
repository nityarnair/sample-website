import React from 'react';
import { Award, BookOpen, Building2, Globe2, ShieldCheck } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    { label: 'UGC Autonomous', sub: 'Government of India', icon: <Building2 className="w-5 h-5" /> },
    { label: 'NAAC A++', sub: 'Grade 3.83 / 4.0 CGPA', icon: <Award className="w-5 h-5" /> },
    { label: 'NIRF Ranking', sub: '#12 College in India', icon: <ShieldCheck className="w-5 h-5" /> },
    { label: 'Scopus Indexed', sub: 'Peer-Reviewed Volumes', icon: <BookOpen className="w-5 h-5" /> },
    { label: '60+ Global Alliances', sub: 'Across 30+ Countries', icon: <Globe2 className="w-5 h-5" /> },
  ];

  return (
    <section
      className="py-16 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5]"
      aria-label="Institutional Accreditations and Partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <span className="text-[11px] font-sans uppercase tracking-widest text-[#667085] font-semibold">
            Institutional Accreditations, Indexing &amp; Global Academic Partners
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-[#D9DEE5] rounded-sm flex flex-col items-center justify-center text-center shadow-subtle hover:border-[#12345B]/40 transition-colors"
            >
              <div className="text-[#071A33] mb-2 opacity-80">
                {partner.icon}
              </div>
              <strong className="text-xs sm:text-sm font-serif font-bold text-[#071A33] block">
                {partner.label}
              </strong>
              <span className="text-[11px] text-[#667085] font-sans block mt-0.5">
                {partner.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
