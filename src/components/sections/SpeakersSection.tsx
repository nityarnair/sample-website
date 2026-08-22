import React from 'react';

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
      designation: 'International Academic Advisor & Chair',
      institution: 'Global Social Work Scientific Council',
      country: 'USA / India',
      topic: 'Transnational Pedagogies & Sustainable Social Policy',
      imageUrl: 'https://dyuti.in/uploads/gallery/12.jpg',
    },
    {
      name: 'Distinguished International Delegates',
      designation: 'Global Research Partners & Panelists',
      institution: 'Partner Universities Across 30+ Nations',
      country: 'Global Alliances',
      topic: 'Multi-Stakeholder Partnerships for UN 2030 Goals',
      imageUrl: 'https://dyuti.in/uploads/gallery/2.jpg',
    },
  ];

  return (
    <section
      id="speakers"
      className="py-24 sm:py-32 lg:py-36 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="speakers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">03</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">LEADERSHIP &amp; KEYNOTES</span>
          </div>
          <span>Academic Scientific Panel</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mb-3">
            Voices of Academic Distinction
          </span>
          <h2
            id="speakers-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.15] m-0"
          >
            Keynote Speakers &amp; Academic Leadership
          </h2>
          <p className="text-base text-[#667085] font-sans font-normal mt-4 m-0 leading-relaxed">
            Eminent scholars, researchers, and global practitioners convening to share empirical frameworks, policy directives, and sustainable community models.
          </p>
        </div>

        {/* Large Editorial Portrait Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between"
            >
              {/* Large Portrait Image (12px rounded corners) */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-xl border border-[#D9DEE5] bg-[#071A33] mb-5 shadow-subtle group-hover:shadow-editorial transition-all duration-500">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Navy Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/40 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#93C5FD] font-bold mb-1">
                    Deliberation Focus
                  </span>
                  <p className="text-xs text-white/95 font-serif italic leading-snug m-0">
                    "{speaker.topic}"
                  </p>
                </div>
              </div>

              {/* Speaker Metadata under image */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug mb-1">
                  {speaker.name}
                </h3>
                <p className="text-xs font-sans font-semibold text-[#2563EB] mb-1">
                  {speaker.designation}
                </p>
                <p className="text-xs text-[#667085] font-sans font-normal leading-relaxed m-0">
                  {speaker.institution} &bull; <span className="font-medium text-[#101828]">{speaker.country}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
