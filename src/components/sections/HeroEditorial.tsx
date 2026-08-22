import React from 'react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

export const HeroEditorial: React.FC = () => {
  return (
    <section
      className="relative bg-[#F7F7F4] text-[#101828] border-b border-[#D9DEE5] overflow-hidden"
      aria-label="Conference Masthead"
    >
      {/* ── Very subtle texture rule across top ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D9DEE5] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP EDITORIAL ANNOTATION BAR ── */}
        <div className="flex items-center justify-between py-5 sm:py-6 border-b border-[#D9DEE5]">
          {/* Left: section number + label */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#2563EB] tabular-nums">01</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
              Conference — 2027
            </span>
          </div>
          {/* Right: legacy note */}
          <div className="hidden sm:flex items-center gap-4 text-[11px] font-sans text-[#667085] uppercase tracking-[0.14em]">
            <span>26th Edition</span>
            <span className="w-px h-3 bg-[#D9DEE5]" />
            <span>Since 1998</span>
          </div>
        </div>

        {/* ── MAIN HERO COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-14 sm:pt-20 pb-14 sm:pb-20">

          {/* ── LEFT: Typography + CTAs ── */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-[#2563EB]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-[#2563EB]">
                Social Work · Sustainable Development · Kochi
              </span>
            </div>

            {/* Giant masthead — font-weight now 600 (via .hero-masthead class) */}
            <h1 className="hero-masthead font-serif text-[#071A33] select-none mb-2">
              DYUTI
              <br />
              <em className="not-italic text-[#12345B]">&rsquo;27</em>
            </h1>

            {/* Italic editorial tagline */}
            <p className="font-serif italic text-[1.55rem] sm:text-[1.85rem] lg:text-[2.1rem] text-[#071A33]/80 leading-[1.25] mb-6 max-w-[520px]">
              Ideas that move<br className="hidden sm:block" /> beyond the present.
            </p>

            {/* Body description — strictly from CONFERENCE_DATA */}
            <p className="text-sm sm:text-[0.9375rem] text-[#667085] leading-[1.75] font-sans font-normal max-w-[460px] mb-10">
              A premier academic symposium advancing the UN 2030 Agenda through
              collaborative social work, empirical research, and community
              empowerment.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Button
                variant="navy"
                size="lg"
                asLink
                href={CONFERENCE_DATA.links.registrationForm}
                showArrow
              >
                Register Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                asLink
                href="#tracks"
              >
                Explore Tracks
              </Button>
            </div>
          </div>

          {/* ── RIGHT: Editorial Image Composition ── */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">

            {/* Thin vertical rule — editorial accent, desktop only */}
            <div className="hidden lg:block absolute -left-7 top-8 bottom-8 w-px bg-[#D9DEE5]" />

            {/* Image container */}
            <div className="relative rounded-[24px] overflow-hidden border border-[#D9DEE5] shadow-editorial bg-[#E8EDF2]">
              <img
                src="https://dyuti.in/uploads/gallery/6L6A6365.JPG"
                alt="DYUTI 2027 — Scholarly Conference Proceedings, Rajagiri College, Kochi"
                className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />

              {/* Caption strip — clean editorial, no card effect */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071A33]/80 via-[#071A33]/30 to-transparent px-5 pt-10 pb-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/60 mb-1">
                      DYUTI 2027
                    </p>
                    <p className="text-[12px] font-sans font-semibold text-white/95 uppercase tracking-[0.12em] leading-tight">
                      Rajagiri College of Social Sciences
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                    Kochi, Kerala
                  </span>
                </div>
              </div>
            </div>

            {/* Floating institutional badge — repositioned to top-right */}
            <div className="absolute -top-4 -right-2 sm:-right-5 bg-[#071A33] text-white px-4 py-3 rounded-[14px] border border-white/10 shadow-editorial">
              <div className="text-[10px] uppercase font-sans text-[#93C5FD] font-bold tracking-wider mb-0.5 whitespace-nowrap">
                NIRF #12 · NAAC A++
              </div>
              <p className="text-[10.5px] text-white/75 leading-tight m-0 font-sans whitespace-nowrap">
                Autonomous · Founded 1955
              </p>
            </div>
          </div>
        </div>

        {/* ── METADATA STRIP — editorial horizontal rule ── */}
        <div className="border-t border-[#D9DEE5] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D9DEE5]">

          <div className="flex items-center gap-5 py-5 sm:py-6 sm:pr-8">
            <span className="font-serif text-[2.25rem] font-semibold text-[#071A33] leading-none tabular-nums">
              2027
            </span>
            <div>
              <p className="text-[10px] font-sans uppercase tracking-[0.18em] text-[#667085] m-0 mb-0.5">
                Edition
              </p>
              <p className="text-[12px] font-sans text-[#101828] font-medium m-0">
                26th Annual Conference
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-5 sm:py-6 sm:px-8">
            <span className="font-serif text-[1.5rem] font-semibold text-[#071A33] leading-none whitespace-nowrap">
              Rajagiri
            </span>
            <div>
              <p className="text-[10px] font-sans uppercase tracking-[0.18em] text-[#667085] m-0 mb-0.5">
                Host Institution
              </p>
              <p className="text-[12px] font-sans text-[#101828] font-medium m-0">
                College of Social Sciences
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-5 sm:py-6 sm:pl-8">
            <span className="font-serif text-[1.5rem] font-semibold text-[#071A33] leading-none">
              Kochi
            </span>
            <div>
              <p className="text-[10px] font-sans uppercase tracking-[0.18em] text-[#667085] m-0 mb-0.5">
                Location
              </p>
              <p className="text-[12px] font-sans text-[#101828] font-medium m-0">
                Kerala · India
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
