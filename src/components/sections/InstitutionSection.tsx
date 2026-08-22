import React from 'react';
import { ArrowRight, Award, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const InstitutionSection: React.FC = () => {
  return (
    <section
      id="institution"
      className="py-20 sm:py-28 bg-white text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="institution-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">08</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">The Host Institution</span>
          </div>
          <span>Autonomous &bull; Established 1955</span>
        </div>

        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Large Campus Image */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#D9DEE5] bg-[#F8F8F6] overflow-hidden rounded-sm shadow-editorial">
              <img
                src="https://dyuti.in/assets/images/1.jpg"
                alt="Rajagiri College Valley Campus"
                className="w-full h-[380px] sm:h-[460px] object-cover contrast-105 hover:scale-102 transition-all duration-700"
                loading="lazy"
              />
              <div className="p-4 bg-white border-t border-[#D9DEE5] flex items-center justify-between text-xs text-[#667085] font-sans">
                <span className="font-medium text-[#071A33]">Rajagiri Valley Campus, Kalamassery</span>
                <span className="font-mono text-[#2563EB]">NAAC A++ (3.83 CGPA)</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
                Centre of Excellence
              </span>

              <h2
                id="institution-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-tight mb-6"
              >
                Rajagiri College of Social Sciences (Autonomous)
              </h2>

              <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans font-normal mb-8">
                Managed by the Carmelites of Mary Immaculate (CMI) congregation, Rajagiri has pioneered professional social work, management education, and empirical research in India for over seven decades.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-y border-[#D9DEE5] mb-8 text-xs font-sans">
                <div>
                  <div className="font-serif font-bold text-2xl text-[#071A33] mb-0.5">#12</div>
                  <span className="text-[#667085]">NIRF India 2025</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-[#071A33] mb-0.5">#1</div>
                  <span className="text-[#667085]">KIRF Kerala 2025</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-[#071A33] mb-0.5">60+</div>
                  <span className="text-[#667085]">Global University Alliances</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/rajagiri"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
              >
                <span>Read Full Institutional Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
