import React from 'react';
import { ArrowUpRight, Check, CreditCard, ShieldCheck } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const RegistrationCTA: React.FC = () => {
  return (
    <section
      id="registration"
      className="py-20 sm:py-28 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="registration-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">07</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">Delegate Registration</span>
          </div>
          <span>Commences 10 August 2026</span>
        </div>

        {/* Title & Introduction */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
            Participate in DYUTI 2027
          </span>
          <h2
            id="registration-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-tight m-0"
          >
            Conference Registration &amp; Fee Structure
          </h2>
          <p className="text-base text-[#667085] font-sans font-normal mt-4 m-0 leading-relaxed">
            Registration opens on <strong>10 August 2026</strong>. All registrations include full access to keynote sessions, plenary panels, track-wise presentations, conference kits, and institutional luncheon on both days.
          </p>
        </div>

        {/* Fee Categories Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CONFERENCE_DATA.fees.map((fee, idx) => {
            const isFeatured = idx === 1; // Academicians / Faculty
            return (
              <div
                key={idx}
                className={`bg-white border rounded-sm p-8 flex flex-col justify-between transition-all duration-200 ${
                  isFeatured
                    ? 'border-[#071A33] shadow-editorial relative'
                    : 'border-[#D9DEE5] shadow-subtle hover:border-[#12345B]/40'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-6 bg-[#071A33] text-white text-[10px] uppercase tracking-widest font-sans font-bold px-3 py-1 rounded-xs">
                    Recommended
                  </div>
                )}

                <div>
                  <span className="block text-xs font-sans uppercase tracking-wider text-[#667085] font-semibold mb-2">
                    Category {idx + 1}
                  </span>
                  
                  <h3 className="font-serif font-bold text-xl text-[#071A33] mb-4 min-h-[3rem]">
                    {fee.category}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#D9DEE5]">
                    <span className="font-serif font-bold text-4xl text-[#071A33]">
                      {fee.amount}
                    </span>
                    <span className="text-xs text-[#667085] font-sans">
                      / delegate
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-[#101828]/80 font-sans mb-8">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Access to all technical sessions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Conference kit &amp; documentation</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>{fee.deadline}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Official Certificate of Participation</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={CONFERENCE_DATA.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center justify-center gap-1.5 ${
                    isFeatured
                      ? 'bg-[#071A33] text-white hover:bg-[#12345B]'
                      : 'border border-[#12345B] text-[#071A33] hover:bg-[#071A33] hover:text-white'
                  }`}
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bank Details Note */}
        <div className="bg-white border border-[#D9DEE5] rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#071A33] mb-0.5">
                NEFT / RTGS Online Bank Transfer
              </h4>
              <p className="text-xs text-[#667085] font-sans m-0">
                A/C: <strong className="font-mono text-[#071A33]">{CONFERENCE_DATA.bankDetails.accountNumber}</strong> &bull; Bank: {CONFERENCE_DATA.bankDetails.bank} &bull; IFSC: <strong className="font-mono text-[#071A33]">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#667085] font-sans shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official RCSS Institution Account</span>
          </div>
        </div>
      </div>
    </section>
  );
};
