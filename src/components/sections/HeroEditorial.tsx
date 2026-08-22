import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const HeroEditorial: React.FC = () => {
  return (
    <section
      className="relative bg-[#101716] text-[#F7F4EC] pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-white/10 overflow-hidden"
      aria-label="Conference Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Index / Tagline header */}
        <div className="flex items-center justify-between pb-6 mb-8 sm:mb-12 border-b border-white/10 text-xs font-sans uppercase tracking-widest text-white/50">
          <div className="flex items-center gap-3">
            <span className="text-[#C89B3C] font-mono font-bold">01 / 10</span>
            <span className="w-6 h-px bg-white/20" />
            <span className="text-white/80">International Academic Conference</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-white/60">
            <span>26th Annual Edition</span>
            <span>&bull;</span>
            <span>Founded 1998</span>
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid (~55% / ~45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Large Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-sans uppercase tracking-widest text-[#C89B3C] font-semibold">
                Rajagiri College of Social Sciences (Autonomous)
              </span>
            </div>

            {/* Massive Editorial Display Title */}
            <div className="mb-8">
              <h1 className="text-6xl sm:text-8xl lg:text-[7rem] xl:text-[8.2rem] font-bold font-sans tracking-tighter leading-[0.88] text-white select-none">
                DYUTI
              </h1>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif italic text-[#C89B3C] tracking-tight">
                  2027
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-white/60 font-sans">
                  {CONFERENCE_DATA.acronymMeaning}
                </span>
              </div>
            </div>

            {/* Thin Gold Dividing Line */}
            <div className="w-16 h-px bg-[#C89B3C] mb-8" />

            {/* Official Conference Theme in Large Serif Typography */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal italic text-white leading-snug tracking-normal">
                "{CONFERENCE_DATA.theme}"
              </h2>
            </div>

            {/* Short Official Supporting Text */}
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-2xl mb-10 font-normal">
              An international academic symposium bringing together scholars, researchers, practitioners, and policymakers to deliberate on collaborative approaches for sustainable development and community empowerment aligned with the UN 2030 Agenda.
            </p>

            {/* Editorial Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/call_for_papers"
                className="px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold bg-white text-[#101716] hover:bg-[#C89B3C] transition-colors flex items-center gap-2"
              >
                <span>Call for Papers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={CONFERENCE_DATA.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold border border-white/30 text-white hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors flex items-center gap-2"
              >
                <span>Register</span>
                <ArrowUpRight className="w-4 h-4 text-[#C89B3C]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Official Conference Imagery Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              {/* Primary Conference Heritage Image */}
              <div className="relative border border-white/10 bg-[#073B35]/20 overflow-hidden">
                <img
                  src="https://dyuti.in/uploads/gallery/6L6A6365.JPG"
                  alt="DYUTI International Conference Proceedings"
                  className="w-full h-[380px] sm:h-[480px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
                
                {/* Thin Editorial Caption Overlay */}
                <div className="p-4 bg-[#101716] border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-sans">
                  <span>Inauguration &amp; Scholarly Release</span>
                  <span className="font-mono text-[#C89B3C]">Kalamassery, Kochi</span>
                </div>
              </div>

              {/* Overlapping Institutional Emblem Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#073B35] text-white p-4 sm:p-5 border border-[#C89B3C]/40 shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://dyuti.in/assets/images/dyuti_2027_logo_new-removebg-preview.png"
                    alt="DYUTI Official Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="text-[10px] uppercase font-mono text-[#C89B3C] font-semibold">
                    NIRF #12
                  </div>
                </div>
                <p className="text-[11px] text-white/80 leading-tight m-0 font-sans">
                  NAAC A++ Accredited Autonomous Institution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
