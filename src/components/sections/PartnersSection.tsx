import React from 'react';
import { Award, BookOpen, Building2, Globe2, ShieldCheck } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    { label: 'UGC Autonomous', sub: 'Government of India (2014-2030)', icon: <Building2 className="w-5 h-5" /> },
    { label: 'NAAC A++', sub: 'Grade 3.83 / 4.0 CGPA', icon: <Award className="w-5 h-5" /> },
    { label: 'NIRF Ranking', sub: '#12 College in India (2025)', icon: <ShieldCheck className="w-5 h-5" /> },
    { label: 'Scopus Indexed', sub: 'Peer-Reviewed Volumes', icon: <BookOpen className="w-5 h-5" /> },
    { label: '60+ Global Alliances', sub: 'Across 30+ Countries', icon: <Globe2 className="w-5 h-5" /> },
  ];

  const universityLogos = [
    { src: 'https://dyuti.in/assets/images/lgo/1.png', alt: 'Partner University 1' },
    { src: 'https://dyuti.in/assets/images/lgo/2.png', alt: 'Partner University 2' },
    { src: 'https://dyuti.in/assets/images/lgo/3.png', alt: 'Partner University 3' },
    { src: 'https://dyuti.in/assets/images/lgo/4.png', alt: 'Partner University 4' },
    { src: 'https://dyuti.in/assets/images/lgo/5.png', alt: 'Partner University 5' },
    { src: 'https://dyuti.in/assets/images/lgo/6.png', alt: 'Partner University 6' },
    { src: 'https://dyuti.in/assets/images/lgo/7.png', alt: 'Partner University 7' },
    { src: 'https://dyuti.in/assets/images/lgo/8.png', alt: 'Partner University 8' },
    { src: 'https://dyuti.in/assets/images/lgo/9.png', alt: 'Partner University 9' },
    { src: 'https://dyuti.in/assets/images/lgo/10.png', alt: 'Partner University 10' },
    { src: 'https://dyuti.in/assets/images/lgo/11.png', alt: 'Partner University 11' },
    { src: 'https://dyuti.in/assets/images/lgo/12.png', alt: 'Partner University 12' },
    { src: 'https://dyuti.in/assets/images/lgo/13.png', alt: 'Partner University 13' },
    { src: 'https://dyuti.in/assets/images/mel.png', alt: 'University of Melbourne' },
    { src: 'https://dyuti.in/assets/images/york.jpg', alt: 'York University' },
  ];

  return (
    <section
      className="py-20 sm:py-24 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5]"
      aria-label="Institutional Accreditations and Partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-sans uppercase tracking-[0.18em] text-[#667085] font-semibold">
            Institutional Accreditations &amp; Academic Honors
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#D9DEE5] rounded-xl flex flex-col items-center justify-center text-center shadow-subtle hover:border-[#12345B]/40 transition-colors"
            >
              <div className="text-[#071A33] mb-3 opacity-80">
                {partner.icon}
              </div>
              <strong className="text-sm font-serif font-normal text-[#071A33] block">
                {partner.label}
              </strong>
              <span className="text-[11px] text-[#667085] font-sans block mt-1">
                {partner.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Global Partner Universities from dyuti.in */}
        <div className="rounded-container p-8 sm:p-12 bg-white border border-[#D9DEE5] shadow-subtle text-center">
          <span className="text-xs font-sans uppercase tracking-[0.18em] text-[#2563EB] font-bold block mb-2">
            Rajagiri International Exchange Programme
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#071A33] mb-8 font-normal">
            Partnering Universities &amp; Global Alliances
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6 items-center justify-items-center">
            {universityLogos.map((logo, idx) => (
              <div
                key={idx}
                className="w-24 h-20 sm:w-28 sm:h-24 p-3 rounded-xl border border-[#D9DEE5] bg-[#FAFAFA] flex items-center justify-center hover:bg-white hover:border-[#12345B]/40 hover:shadow-subtle transition-all"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
