import React from 'react';
import { CONFERENCE_DATA } from '@/data/conference';

export const RegistrationCTA: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-36 bg-[#F7F4EC] text-[#101716] relative overflow-hidden"
      aria-labelledby="registration-cta-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        {/* Editorial Index Header */}
        <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#073B35] font-semibold mb-6">
          <span>07 / 10</span>
          <span className="w-8 h-px bg-[#073B35]/30" />
          <span>Participation</span>
        </div>

        {/* Large Centered Editorial Typography */}
        <h2
          id="registration-cta-title"
          className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#101716] leading-none mb-6 uppercase"
        >
          Join DYUTI 2027
        </h2>

        {/* Supporting Official Text */}
        <p className="text-base sm:text-lg text-[#101716]/75 font-sans font-normal max-w-xl mx-auto leading-relaxed mb-10">
          Registration commences on <strong>10 August 2026</strong> for students, research scholars, academicians, and NGO/CSR delegates at Rajagiri College of Social Sciences (Autonomous), Kalamassery.
        </p>

        {/* Minimal Fee Structure Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left border-y border-[#101716]/10 py-6">
          {CONFERENCE_DATA.fees.map((fee, idx) => (
            <div key={idx} className="p-2">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#101716]/60 mb-1">
                {fee.category}
              </span>
              <span className="block font-serif font-bold text-2xl text-[#073B35]">
                {fee.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Primary Action Button */}
        <div>
          <a
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans uppercase tracking-widest font-semibold bg-[#073B35] text-white hover:bg-[#C89B3C] hover:text-[#101716] transition-colors"
          >
            <span>Register Now →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
