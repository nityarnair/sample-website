import React from 'react';
import { Award, BookOpen, Building2, Globe2, ShieldCheck } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const accreditations = [
    { label: 'UGC Autonomous', sub: 'Government of India', icon: <Building2 className="w-4 h-4 text-[#2563EB]" /> },
    { label: 'NAAC A++', sub: '3.83 / 4.0 CGPA', icon: <Award className="w-4 h-4 text-[#2563EB]" /> },
    { label: 'NIRF Ranking', sub: '#12 in India (2025)', icon: <ShieldCheck className="w-4 h-4 text-[#2563EB]" /> },
    { label: 'Scopus Indexed', sub: 'Peer-Reviewed Volumes', icon: <BookOpen className="w-4 h-4 text-[#2563EB]" /> },
    { label: '60+ Global Alliances', sub: 'Across 30+ Countries', icon: <Globe2 className="w-4 h-4 text-[#2563EB]" /> },
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
      id="partners"
      className="bg-[#F7F7F4] text-[#101828] border-b border-[#D9DEE5] relative py-24 sm:py-32 lg:py-36"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION ANNOTATION BAR ── */}
        <div className="flex items-center justify-between pb-5 mb-14 sm:mb-20 border-b border-[#D9DEE5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#2563EB] tabular-nums">09</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
              Partners &amp; Accreditations
            </span>
          </div>
          <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085]">
            Global University Alliances &amp; Academic Honors
          </span>
        </div>

        {/* ── SECTION EDITORIAL HEADER ── */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#2563EB]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-[#2563EB]">
              Institutional Affiliations &amp; Global Reach
            </span>
          </div>
          <h2
            id="partners-heading"
            className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal text-[#071A33] leading-[1.08] tracking-tight m-0"
          >
            Connected beyond borders.
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-sans font-normal mt-4 leading-relaxed">
            Collaborating with premier international universities and accredited by statutory apex bodies to drive transformative academic scholarship and cross-border research exchanges.
          </p>
        </div>

        {/* ── ACCREDITATION TRUST MARKERS (Structured white cards on off-white canvas) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
          {accreditations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D9DEE5] rounded-[20px] p-4 sm:p-5 shadow-subtle hover:shadow-editorial hover:border-[#2563EB]/40 transition-all duration-300 flex items-start gap-3.5 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#EEF3F8] border border-[#D9DEE5] flex items-center justify-center shrink-0 group-hover:border-[#2563EB]/40 transition-colors">
                {item.icon}
              </div>
              <div>
                <strong className="block text-[13px] sm:text-[13.5px] font-sans font-semibold text-[#071A33] leading-snug">
                  {item.label}
                </strong>
                <span className="block text-[11px] font-sans text-[#667085] mt-0.5 leading-tight">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── GLOBAL PARTNER UNIVERSITIES (Flexible centered logo wrapping) ── */}
        <div className="pt-4">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              International Academic Partner Network
            </span>
          </div>

          {/* Centered Flex-Wrap Container for 15 Logos */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-7 max-w-6xl mx-auto">
            {universityLogos.map((logo, idx) => (
              <div
                key={idx}
                className="w-32 h-24 sm:w-36 sm:h-28 p-4 rounded-[16px] bg-white border border-[#D9DEE5] flex items-center justify-center shadow-subtle hover:border-[#2563EB]/40 hover:shadow-editorial transition-all duration-300 group"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
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
