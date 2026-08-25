import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

const REGISTRATION_URL = 'https://forms.gle/XTZZmXS1tjkvfm9u6';

export const HeroBanner: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#060D0E] text-white"
      aria-label="DYUTI 2027 National Conference Hero"
    >
      {/* ── KOCHI NIGHTSCAPE BACKGROUND ── */}
      <div className="absolute inset-0">
        {!isLoaded && <div className="absolute inset-0 bg-[#060D0E]" />}
        <img
          src="/images/dyuti_dark_hero_bg.jpg"
          alt="Kochi Nightscape"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-[#060D0E]/60" />
        {/* Vignette — stronger at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,13,14,0.75)_100%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060D0E] to-transparent" />
      </div>

      {/* ── CENTRED HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 max-w-5xl mx-auto">

        {/* Eyebrow pill */}
        <div className="flex items-center gap-2.5 mb-8">
          <span className="w-5 h-px bg-[#D4F933]" />
          <span className="text-[11px] sm:text-[12px] font-mono font-extrabold uppercase tracking-[0.28em] text-[#D4F933]">
            26th Annual Edition &nbsp;&bull;&nbsp; Kochi, Kerala
          </span>
          <span className="w-5 h-px bg-[#D4F933]" />
        </div>

        {/* Main title — DYUTI 2027 big and bold */}
        <h1
          className="font-heading font-extrabold tracking-tight leading-none text-white mb-6"
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
        >
          DYUTI{' '}
          <span className="text-[#D4F933]">2027</span>
        </h1>

        {/* Conference theme subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-heading font-medium text-white/80 max-w-2xl leading-snug mb-3">
          Social Work for Sustainable Development
        </p>
        <p className="text-sm sm:text-base text-white/50 max-w-xl leading-relaxed font-sans mb-10">
          Empowering Communities through Innovation, Inclusion, and Partnership
        </p>

        {/* Date + Venue chip */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4F933]/10 border border-[#D4F933]/30 text-[#D4F933] text-[12px] font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] animate-pulse" />
            07–08 Jan 2027
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white/70 text-[12px] font-mono font-bold uppercase tracking-wider">
            Rajagiri College of Social Sciences
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[50px] px-8 inline-flex items-center gap-2 text-[13px] font-sans font-bold uppercase tracking-[0.14em] text-[#060D0E] bg-[#D4F933] hover:bg-[#C2E828] rounded-[8px] transition-all duration-200 shadow-[0_0_30px_rgba(212,249,51,0.35)] hover:shadow-[0_0_45px_rgba(212,249,51,0.6)] focus-visible:outline-none"
          >
            REGISTER NOW
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={CONFERENCE_DATA.links.cmtSubmission}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[50px] px-8 inline-flex items-center gap-2 text-[13px] font-sans font-bold uppercase tracking-[0.14em] text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-[8px] backdrop-blur-md transition-all duration-200 focus-visible:outline-none"
          >
            CALL FOR PAPERS
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <a
        href="#overview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/40 hover:text-[#D4F933] transition-colors"
      >
        <ChevronDown className="w-4 h-4 animate-bounce" />
        Scroll
      </a>
    </section>
  );
};
