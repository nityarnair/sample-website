import React from 'react';
import { ArrowUpRight, Check, CreditCard, ShieldCheck } from 'lucide-react';
import { CONFERENCE_DATA, RegistrationFee } from '@/data/conference';

export const RegistrationCTA: React.FC = () => {
  return (
    <section
      id="registration"
      className="bg-[#071A33] text-white border-b border-white/10 relative overflow-hidden py-24 sm:py-32 lg:py-36"
      aria-labelledby="registration-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION ANNOTATION BAR ── */}
        <div className="flex items-center justify-between pb-5 mb-14 sm:mb-20 border-b border-white/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#60A5FA] tabular-nums">07</span>
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-white font-semibold">
              Registration
            </span>
          </div>
          <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#CBD5E1]">
            Commences 10 August 2026 · Official Portal
          </span>
        </div>

        {/* ── SECTION EDITORIAL HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#60A5FA]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-[#60A5FA]">
                Participation &amp; Delegate Access
              </span>
            </div>
            <h2
              id="registration-heading"
              className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal text-white leading-[1.08] tracking-tight m-0"
            >
              Be part of the conversation.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD5E1] font-sans font-normal mt-4 max-w-[620px] leading-relaxed">
              Registration commences on 10 August 2026. All registration tiers include full access to plenary keynotes, concurrent technical paper tracks, conference kits, proceedings volume, and executive banquet luncheon on both days.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href={CONFERENCE_DATA.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[11.5px] font-sans uppercase tracking-[0.16em] font-semibold text-[#60A5FA] hover:text-white transition-colors"
            >
              <span>Direct Google Registration Form</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ── EDITORIAL PRICING CARDS (Distinct high-contrast cards against Deep Navy) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {CONFERENCE_DATA.fees.map((fee: RegistrationFee, idx: number) => {
            const isFeatured = idx === 1; // Academicians / Faculty Members
            return (
              <div
                key={idx}
                className={`rounded-[24px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-editorial border backdrop-blur-sm ${
                  isFeatured
                    ? 'bg-white/[0.10] border-white/35 ring-1 ring-white/20 hover:bg-white/[0.14]'
                    : 'bg-white/[0.05] border-white/15 hover:border-white/30 hover:bg-white/[0.08]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-[#60A5FA] uppercase tracking-wider">
                      Tier 0{idx + 1}
                    </span>
                    {isFeatured && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] font-bold text-[#071A33] bg-[#60A5FA] px-3 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  {/* Category Title */}
                  <h3 className="font-serif text-[1.65rem] sm:text-[1.85rem] text-white font-normal leading-snug mb-5 min-h-[3rem]">
                    {fee.category}
                  </h3>

                  {/* Fee Amount Display */}
                  <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/10">
                    <span className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight tabular-nums">
                      {fee.amount}
                    </span>
                    <span className="text-xs text-[#CBD5E1] font-sans">
                      / delegate
                    </span>
                  </div>

                  {/* Inclusions List */}
                  <ul className="space-y-3.5 text-[13px] text-white/90 font-sans mb-10">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                      <span>Access to all 8 thematic tracks &amp; plenaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                      <span>Conference delegate kit &amp; documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                      <span>{fee.deadline}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                      <span>Official Certificate of Participation</span>
                    </li>
                  </ul>
                </div>

                {/* Pill Registration Action Button */}
                <a
                  href={CONFERENCE_DATA.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-[52px] inline-flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 shadow-pill ${
                    isFeatured
                      ? 'bg-white text-[#071A33] hover:bg-[#EEF3F8]'
                      : 'border border-white/30 text-white hover:bg-white hover:text-[#071A33]'
                  }`}
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* ── BANK TRANSFER EDITORIAL STRIP ── */}
        <div className="pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#60A5FA] shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-mono font-bold text-[#60A5FA] uppercase tracking-[0.16em]">
                  NEFT / RTGS Bank Transfer
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#CBD5E1] font-sans m-0">
                A/C: <strong className="font-mono text-white font-semibold">{CONFERENCE_DATA.bankDetails.accountNumber}</strong> &bull; Bank: <span className="text-white font-medium">{CONFERENCE_DATA.bankDetails.bank}</span> &bull; IFSC: <strong className="font-mono text-white font-semibold">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#CBD5E1] font-sans shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
            <span>Official Account: {CONFERENCE_DATA.bankDetails.accountName}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
