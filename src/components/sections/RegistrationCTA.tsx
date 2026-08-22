import React from 'react';
import { ArrowRight, Check, CreditCard, ShieldCheck } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const RegistrationCTA: React.FC = () => {
  return (
    <section
      id="registration"
      className="py-24 sm:py-32 lg:py-36 bg-[#071A33] text-white border-b border-[#1E3A8A]/40 relative overflow-hidden"
      aria-labelledby="registration-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-white/15 text-xs font-sans uppercase tracking-[0.18em] text-[#93C5FD]">
          <div className="flex items-center gap-3">
            <span className="text-[#60A5FA] font-mono font-bold">07</span>
            <span className="w-8 h-px bg-white/20" />
            <span className="text-white font-semibold">DELEGATE REGISTRATION</span>
          </div>
          <span className="text-white/70">Commences 10 August 2026</span>
        </div>

        {/* Title & Introduction */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#60A5FA] font-bold block mb-3">
            Participate in DYUTI 2027
          </span>
          <h2
            id="registration-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-[1.12] m-0"
          >
            Conference Registration &amp; Fee Structure
          </h2>
          <p className="text-base text-white/75 font-sans font-normal mt-4 m-0 leading-relaxed">
            Registration opens on <strong>10 August 2026</strong>. All registrations include full access to keynote sessions, plenary panels, track-wise presentations, conference kits, and luncheon on both conference days.
          </p>
        </div>

        {/* Fee Categories Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {CONFERENCE_DATA.fees.map((fee, idx) => {
            const isFeatured = idx === 1; // Academicians / Faculty
            return (
              <div
                key={idx}
                className={`rounded-[20px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white/10 border-2 border-[#60A5FA] shadow-float relative'
                    : 'bg-white/5 border border-white/15 hover:border-white/30'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 bg-[#2563EB] text-white text-[10px] uppercase tracking-[0.18em] font-sans font-bold px-4 py-1 rounded-full shadow-pill">
                    Recommended
                  </div>
                )}

                <div>
                  <span className="block text-xs font-sans uppercase tracking-[0.16em] text-[#93C5FD] font-bold mb-2">
                    Category {idx + 1}
                  </span>
                  
                  <h3 className="font-serif text-2xl text-white mb-4 min-h-[3.5rem] leading-snug font-normal">
                    {fee.category}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/15">
                    <span className="font-serif text-4xl sm:text-5xl text-white font-normal">
                      {fee.amount}
                    </span>
                    <span className="text-xs text-white/70 font-sans">
                      / delegate
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-white/85 font-sans mb-10">
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0" />
                      <span>Access to all technical sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0" />
                      <span>Conference kit &amp; documentation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0" />
                      <span>{fee.deadline}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0" />
                      <span>Official Certificate of Participation</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={CONFERENCE_DATA.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-full py-3.5 h-[52px] inline-flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold rounded-full transition-all ${
                    isFeatured
                      ? 'bg-white text-[#071A33] hover:bg-[#EEF3F8] shadow-pill'
                      : 'border border-white/40 text-white hover:bg-white hover:text-[#071A33]'
                  }`}
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bank Details Strip */}
        <div className="bg-white/5 border border-white/15 rounded-[20px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#60A5FA] shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-white mb-0.5 font-normal">
                NEFT / RTGS Online Bank Transfer
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans m-0">
                A/C: <strong className="font-mono text-white">{CONFERENCE_DATA.bankDetails.accountNumber}</strong> &bull; Bank: {CONFERENCE_DATA.bankDetails.bank} &bull; IFSC: <strong className="font-mono text-white">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/80 font-sans shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
            <span>Official RCSS Institution Account</span>
          </div>
        </div>
      </div>
    </section>
  );
};
