import React from 'react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

export const HeroEditorial: React.FC = () => {
  return (
    <section
      className="relative bg-[#F7F7F4] text-[#101828] pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#D9DEE5] overflow-hidden"
      aria-label="Conference Masthead"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Annotation */}
        <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">01</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">INTERNATIONAL CONFERENCE &bull; 2027</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#667085]">
            <span>26th Annual Edition</span>
            <span>&bull;</span>
            <span>Continuous Legacy Since 1998</span>
          </div>
        </div>

        {/* Asymmetric Hero Main Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          {/* LEFT: Massive Masthead Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Small Institution Tag */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#2563EB]">
                RAJAGIRI COLLEGE OF SOCIAL SCIENCES (AUTONOMOUS)
              </span>
            </div>

            {/* Enormous Masthead Display Title */}
            <div className="mb-6">
              <h1 className="hero-masthead font-serif text-[#071A33] font-normal leading-[0.88] select-none tracking-tight">
                DYUTI<br />
                <span className="text-[#12345B] italic font-normal">&rsquo;27</span>
              </h1>
            </div>

            {/* Short Magazine Statement */}
            <div className="mb-8">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#071A33] leading-snug m-0">
                Ideas that move beyond the present.
              </p>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans font-normal max-w-xl mt-3 m-0">
                A premier global academic symposium advancing the UN 2030 Agenda for Sustainable Development through collaborative social work, empirical research, and community empowerment.
              </p>
            </div>

            {/* Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="navy"
                size="md"
                asLink
                href={CONFERENCE_DATA.links.registrationForm}
                showArrow
              >
                Register Now
              </Button>

              <Button
                variant="outline"
                size="md"
                asLink
                href="#tracks"
              >
                Explore Tracks
              </Button>
            </div>
          </div>

          {/* RIGHT: Large Cinematic Academic Visual (Rounded 18px) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              <div className="relative rounded-[18px] overflow-hidden border border-[#D9DEE5] shadow-editorial bg-[#071A33]">
                <img
                  src="https://dyuti.in/uploads/gallery/6L6A6365.JPG"
                  alt="DYUTI International Conference Proceedings & Scholarly Release"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-103"
                  loading="eager"
                />
                
                {/* Subtle Cinematic Caption Strip */}
                <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#D9DEE5] flex items-center justify-between text-xs text-[#667085] font-sans">
                  <span>Scholarly Proceeding Release &bull; Scopus Volumes</span>
                  <span className="font-mono text-[#071A33] font-semibold">Kochi, Kerala</span>
                </div>
              </div>

              {/* Overlapping Institutional Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#071A33] text-white px-5 py-4 rounded-xl border border-white/10 shadow-editorial max-w-[240px]">
                <div className="text-[11px] uppercase font-sans text-[#93C5FD] font-bold tracking-wider mb-0.5">
                  NIRF #12 in India
                </div>
                <p className="text-[11px] text-white/80 leading-tight m-0 font-sans">
                  NAAC A++ Accredited Autonomous College
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Metadata Strip with Thin Separators */}
        <div className="pt-8 border-t border-[#D9DEE5] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
          <div className="flex items-center gap-4">
            <span className="font-serif text-3xl font-normal text-[#071A33]">2027</span>
            <div className="w-px h-6 bg-[#D9DEE5]" />
            <span className="text-[#667085] uppercase tracking-wider">
              26th Annual Conference Edition
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-serif text-xl font-normal text-[#071A33]">Rajagiri College</span>
            <div className="w-px h-6 bg-[#D9DEE5]" />
            <span className="text-[#667085] uppercase tracking-wider">
              Autonomous &bull; Founded 1955
            </span>
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            <span className="font-serif text-xl font-normal text-[#071A33]">Kochi, Kerala</span>
            <div className="w-px h-6 bg-[#D9DEE5]" />
            <span className="text-[#667085] uppercase tracking-wider">
              India &bull; Global Hub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
