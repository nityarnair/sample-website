import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

/**
 * Centered DYUTI 2027 Hero Banner Section
 * Features the official conference banner image clearly visible in the background
 * with a soft blur effect, allowing the background artwork and colors to be seen
 * while keeping the centered "DYUTI 2027" writings crisp and prominent.
 */
export const HeroBanner: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#071A33] text-white border-b border-white/10"
      aria-label="DYUTI 2027 National Conference Hero"
    >
      {/* ── VISIBLE BLURRED BACKGROUND BANNER IMAGE ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#071A33] animate-pulse" />
        )}

        {/* Official Banner Artwork - Clearly visible with soft blur */}
        <img
          src="https://dyuti.in/assets/images/banner1/Banner_image_final_1.jpg_cropped.png"
          alt="DYUTI 2027 National Conference Banner Artwork"
          className={`w-full h-full object-cover object-center filter blur-[4px] sm:blur-[5px] scale-105 brightness-90 saturate-110 transition-opacity duration-700 ${isLoaded ? 'opacity-85' : 'opacity-0'
            }`}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
        />

        {/* Subtle Semi-Transparent Vignette Overlay to maintain artwork visibility */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-[#071A33]/60" />
      </div>

      {/* ── CENTERED HERO CONTENT WRITINGS ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">

        {/* Eyebrow Tag & Dates */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#071A33]/85 backdrop-blur-md border border-white/25 text-[#93C5FD] text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-lg">
            National Conference
          </span>
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#071A33]/85 backdrop-blur-md border border-white/20 text-white/95 text-xs font-mono font-semibold shadow-lg">
            07–08 January 2027 &bull; Rajagiri, Kochi
          </span>
        </div>

        {/* Centerpiece Title: DYUTI 2027 */}
        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none drop-shadow-[0_6px_20px_rgba(0,0,0,0.85)]">
            DYUTI <span className="text-[#38BDF8]">2027</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#E0F2FE] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Rajagiri College of Social Sciences (Autonomous)
          </p>
        </div>

        {/* Centered Conference Theme Box with Glassmorphism */}
        <div className="max-w-3xl rounded-[24px] bg-[#071A33]/85 border border-white/25 p-6 sm:p-8 backdrop-blur-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-3">
          <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
            Conference Theme
          </span>
          <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-snug">
            &ldquo;Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership&rdquo;
          </h2>
        </div>

        {/* Centered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Button
            variant="primary"
            size="lg"
            asLink
            href={CONFERENCE_DATA.links.cmtSubmission}
            target="_blank"
            rel="noopener noreferrer"
            showArrow
            className="shadow-xl"
          >
            Submit Paper (CMT)
          </Button>
          <Button
            variant="white"
            size="lg"
            asLink
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-xl"
          >
            Register Online
          </Button>
          <Button
            variant="outline"
            size="lg"
            asLink
            href={CONFERENCE_DATA.links.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-white/40 bg-[#071A33]/70 backdrop-blur-sm hover:bg-[#071A33] shadow-xl"
          >
            Brochure (PDF)
          </Button>
        </div>

        {/* Scroll down indicator */}
        <div className="pt-3">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-white/90 bg-[#071A33]/80 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm hover:text-white hover:bg-[#071A33] transition-all shadow-md"
          >
            <span>Explore Conference Details</span>
            <span className="animate-bounce">&darr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
