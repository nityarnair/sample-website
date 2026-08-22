import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface Speaker {
  name: string;
  designation: string;
  institution: string;
  country: string;
  topic: string;
  imageUrl: string;
}

export const SpeakersSection: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: 'Dr. Sr. Bincy C.C',
      designation: 'Conference Convenor & Assistant Professor',
      institution: 'Rajagiri College of Social Sciences (Autonomous)',
      country: 'India',
      topic: 'Inclusive Community Development & Social Justice',
      imageUrl: 'https://dyuti.in/uploads/gallery/15137561_10154599574527605_1926612793235608799_o.jpg',
    },
    {
      name: 'Dr. V. Kalyani',
      designation: 'Conference Co-Convenor & Faculty Member',
      institution: 'Department of Social Work, RCSS',
      country: 'India',
      topic: 'SDG Localization & Evidence-Based Field Interventions',
      imageUrl: 'https://dyuti.in/uploads/gallery/1.jpg',
    },
    {
      name: 'Prof. Raju Varghese',
      designation: 'International Academic Advisor & Emeritus Chair',
      institution: 'Global Social Work Scientific Panel',
      country: 'USA / India',
      topic: 'Transnational Pedagogies & Sustainable Social Policy',
      imageUrl: 'https://dyuti.in/uploads/gallery/12.jpg',
    },
    {
      name: 'Distinguished International Delegates',
      designation: 'Global Research Partners & Panelists',
      institution: 'Partner Universities across 30+ Nations',
      country: 'Global Alliances',
      topic: 'Multi-Stakeholder Partnerships for UN 2030 Goals',
      imageUrl: 'https://dyuti.in/uploads/gallery/2.jpg',
    },
  ];

  return (
    <section
      id="speakers"
      className="py-20 sm:py-28 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="speakers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">03</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">Leadership &amp; Keynotes</span>
          </div>
          <span>Academic Scientific Committee</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
            Distinguished Voices
          </span>
          <h2
            id="speakers-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-tight m-0"
          >
            Academic Leadership &amp; Keynote Speakers
          </h2>
          <p className="text-base text-[#667085] font-sans font-normal mt-4 m-0 leading-relaxed">
            Eminent scholars, researchers, and global practitioners convening to share empirical frameworks, policy directives, and sustainable community models.
          </p>
        </div>

        {/* Clean Editorial Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {speakers.map((speaker, idx) => (
            <article
              key={idx}
              className="group relative bg-white border border-[#D9DEE5] hover:border-[#12345B]/40 rounded-sm overflow-hidden shadow-subtle hover:shadow-editorial transition-all duration-300 flex flex-col"
            >
              {/* Speaker Portrait */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#071A33]/10">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Navy Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#93C5FD] font-semibold mb-1">
                    Deliberation Focus
                  </span>
                  <p className="text-xs text-white/90 font-serif italic leading-snug m-0">
                    "{speaker.topic}"
                  </p>
                </div>
              </div>

              {/* Speaker Information */}
              <div className="p-5 flex-grow flex flex-col justify-between border-t border-[#D9DEE5]">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-[#2563EB] font-sans font-medium mb-1">
                    {speaker.designation}
                  </p>
                  <p className="text-xs text-[#667085] font-sans font-normal leading-relaxed m-0">
                    {speaker.institution} &bull; <span className="font-medium text-[#101828]">{speaker.country}</span>
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#D9DEE5]/60 flex items-center justify-between text-[11px] text-[#667085] font-sans">
                  <span>DYUTI 2027 Plenary</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
