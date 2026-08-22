import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InstitutionSection: React.FC = () => {
  return (
    <section
      id="institution"
      className="py-24 sm:py-32 lg:py-36 bg-white text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="institution-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">08</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">THE HOST INSTITUTION</span>
          </div>
          <span>Autonomous &bull; Established 1955</span>
        </div>

        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large Campus Image (Rounded 18px) */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#D9DEE5] bg-[#F7F7F4] overflow-hidden rounded-[18px] shadow-editorial">
              <img
                src="https://dyuti.in/assets/images/1.jpg"
                alt="Rajagiri College Valley Campus"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#D9DEE5] flex items-center justify-between text-xs text-[#667085] font-sans">
                <span className="font-medium text-[#071A33]">Rajagiri Valley Campus, Kalamassery</span>
                <span className="font-mono text-[#2563EB] font-semibold">NAAC A++ (3.83 CGPA)</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mb-3">
                Centre of Academic Excellence
              </span>

              <h2
                id="institution-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.12] mb-6"
              >
                Rajagiri College of Social Sciences (Autonomous)
              </h2>

              <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans font-normal mb-8">
                Managed by the Carmelites of Mary Immaculate (CMI) congregation, Rajagiri has pioneered professional social work, management education, and empirical research in India for over seven decades.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 border-y border-[#D9DEE5] mb-10 text-xs font-sans">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#071A33] mb-1 font-normal">#12</div>
                  <span className="text-[#667085]">NIRF India 2025</span>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#2563EB] mb-1 font-normal">#1</div>
                  <span className="text-[#667085]">KIRF Kerala 2025</span>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#071A33] mb-1 font-normal">60+</div>
                  <span className="text-[#667085]">Global University Alliances</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/rajagiri"
                className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
              >
                <span>Read Full Institutional Profile</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
