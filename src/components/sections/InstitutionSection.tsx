import React from 'react';
import { Link } from 'react-router-dom';

export const InstitutionSection: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-[#101716] text-[#F7F4EC] border-b border-white/10 relative overflow-hidden"
      aria-labelledby="institution-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-white/10 text-xs font-sans uppercase tracking-widest text-white/50">
          <div className="flex items-center gap-3">
            <span className="text-[#C89B3C] font-mono font-bold">05 / 10</span>
            <span className="w-6 h-px bg-white/20" />
            <span className="text-white/80">The Host Institution</span>
          </div>
          <span className="font-mono text-white/60">Autonomous &bull; Established 1955</span>
        </div>

        {/* Asymmetric 55% / 45% Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Image ~55% */}
          <div className="lg:col-span-7">
            <div className="relative border border-white/10 bg-black/40 overflow-hidden">
              <img
                src="https://dyuti.in/assets/images/1.jpg"
                alt="Rajagiri College Valley Campus"
                className="w-full h-[360px] sm:h-[460px] object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="p-4 bg-[#073B35] text-white text-xs font-sans flex items-center justify-between">
                <span>Rajagiri Valley Campus &bull; Centre of Excellence</span>
                <span className="font-mono text-[#C89B3C]">Kalamassery, Kochi</span>
              </div>
            </div>
          </div>

          {/* Editorial Content ~45% */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C89B3C] font-semibold block mb-3">
                NAAC A++ &bull; NIRF #12 in India
              </span>

              <h2
                id="institution-section-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal italic text-white leading-tight mb-6"
              >
                Rajagiri College of Social Sciences
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6 font-normal">
                Managed by the Carmelites of Mary Immaculate (CMI), Rajagiri has been a pioneer in social work education, management, and research in India for over seven decades.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6 my-6 border-y border-white/10 text-xs font-sans">
                <div>
                  <span className="block font-mono text-xl font-bold text-white mb-1">NIRF #12</span>
                  <span className="text-white/60">Top Ranked College in India</span>
                </div>
                <div>
                  <span className="block font-mono text-xl font-bold text-[#C89B3C] mb-1">3.83 / 4.0</span>
                  <span className="text-white/60">Highest NAAC CGPA in South India</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/rajagiri"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-[#C89B3C] hover:text-white transition-colors group"
              >
                <span>Explore Rajagiri →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
