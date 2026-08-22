import React from 'react';
import { ArrowRight, ArrowUpRight, Award, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const HeroEditorial: React.FC = () => {
  return (
    <section
      className="relative bg-white text-[#101828] pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#D9DEE5] overflow-hidden"
      aria-label="Conference Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Index / Tagline */}
        <div className="flex items-center justify-between pb-4 mb-8 sm:mb-12 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">2027</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">International Academic Conference</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#667085]">
            <span>{CONFERENCE_DATA.edition}</span>
            <span>&bull;</span>
            <span>Founded 1998</span>
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid (7 cols / 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Large Typography & Conference Information */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold">
                INTERNATIONAL CONFERENCE 2027
              </span>
            </div>

            {/* Massive Editorial Display Title */}
            <div className="mb-6">
              <h1 className="text-6xl sm:text-8xl lg:text-[7.2rem] font-bold font-sans tracking-tighter leading-[0.88] text-[#071A33]">
                DYUTI <span className="font-serif italic font-normal text-[#12345B]">2027</span>
              </h1>
              <div className="flex items-baseline gap-4 mt-3">
                <span className="text-xl sm:text-2xl font-serif italic text-[#12345B]">
                  Where Ideas Illuminate the Future
                </span>
              </div>
            </div>

            {/* Conference Info Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#667085] font-sans mb-6 pb-6 border-b border-[#D9DEE5]">
              <div className="flex items-center gap-1.5 font-medium text-[#071A33]">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Rajagiri College of Social Sciences (Autonomous), Kochi</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-[#071A33]">
                <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>NIRF #12 in India &bull; NAAC A++</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-[#071A33]">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Abstract Deadline: 25 September 2026</span>
              </div>
            </div>

            {/* Official Conference Theme in Large Serif Typography */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal italic text-[#071A33] leading-snug">
                "{CONFERENCE_DATA.theme}"
              </h2>
            </div>

            {/* Short Supporting Narrative */}
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans max-w-2xl mb-8 font-normal">
              An international symposium bringing together academicians, researchers, policymakers, and development professionals to deliberate on collaborative approaches for sustainable development and inclusive community empowerment.
            </p>

            {/* Dual Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#introduction"
                className="px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-sm transition-colors flex items-center gap-2 shadow-subtle"
              >
                <span>Explore Conference</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={CONFERENCE_DATA.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold border border-[#12345B] text-[#071A33] hover:bg-[#071A33] hover:text-white rounded-sm transition-colors flex items-center gap-1.5"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                to="/call_for_papers"
                className="px-5 py-3 text-xs font-sans uppercase tracking-widest font-semibold text-[#2563EB] hover:text-[#071A33] transition-colors flex items-center gap-1"
              >
                <span>Call for Papers →</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Academic Photography Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              {/* Primary Academic Visual */}
              <div className="relative border border-[#D9DEE5] bg-[#F8F8F6] overflow-hidden rounded-sm shadow-editorial">
                <img
                  src="https://dyuti.in/uploads/gallery/6L6A6365.JPG"
                  alt="DYUTI International Conference Proceedings & Scholarly Release"
                  className="w-full h-[400px] sm:h-[480px] object-cover contrast-105 hover:scale-102 transition-all duration-700"
                  loading="eager"
                />
                
                {/* Thin Editorial Caption */}
                <div className="p-4 bg-white border-t border-[#D9DEE5] flex items-center justify-between text-xs text-[#667085] font-sans">
                  <span>Scholarly Proceeding Release &amp; Deliberations</span>
                  <span className="font-mono text-[#071A33] font-semibold">Kochi, Kerala</span>
                </div>
              </div>

              {/* Overlapping Institutional Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#071A33] text-white p-4 sm:p-5 border border-white/10 rounded-sm shadow-editorial max-w-[260px]">
                <div className="flex items-center gap-3 mb-1.5">
                  <img
                    src="https://dyuti.in/assets/images/dyuti_2027_logo_new-removebg-preview.png"
                    alt="DYUTI Logo"
                    className="h-9 w-auto object-contain brightness-125"
                  />
                  <div className="text-[11px] uppercase font-sans text-[#93C5FD] font-bold">
                    NIRF #12 in India
                  </div>
                </div>
                <p className="text-[11px] text-white/80 leading-tight m-0 font-sans">
                  Autonomous Institution &bull; NAAC A++ (3.83 CGPA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
