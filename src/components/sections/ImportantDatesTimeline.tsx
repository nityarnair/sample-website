import React from 'react';
import { Calendar } from 'lucide-react';

export const ImportantDatesTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Registration Begins',
      date: '10 August 2026',
      desc: 'Online registration portal opens for all delegate categories.',
    },
    {
      number: '02',
      title: 'Abstract Submission',
      date: '25 September 2026',
      desc: 'Deadline for extended abstract submission via Microsoft CMT.',
    },
    {
      number: '03',
      title: 'Peer Review & Acceptance',
      date: 'Rolling Notifications',
      desc: 'Scientific committee blind peer review outcomes communicated.',
    },
    {
      number: '04',
      title: 'Camera-Ready Paper',
      date: 'Prior to Conference',
      desc: 'Final full manuscripts processed for Scopus volume indexing.',
    },
    {
      number: '05',
      title: 'Conference Days',
      date: 'Rajagiri Valley Campus',
      desc: 'Two days of keynotes, plenary panels, and technical sessions.',
    },
  ];

  return (
    <section
      id="important-dates"
      className="py-24 sm:py-32 lg:py-36 bg-[#F7F7F4] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="dates-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">06</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">IMPORTANT DATES</span>
          </div>
          <span>Key Deadlines</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mb-3">
            Milestones of Discourse
          </span>
          <h2
            id="dates-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.12] m-0"
          >
            Chronology of Submissions &amp; Deadlines
          </h2>
        </div>

        {/* Horizontal Editorial Timeline */}
        <div className="relative">
          {/* Subtle navy connecting line across desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-[#12345B]/15 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D9DEE5] hover:border-[#12345B]/40 rounded-[20px] p-7 shadow-subtle hover:shadow-editorial transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-normal text-[#12345B]">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#071A33] mb-2 leading-snug font-normal">
                    {step.title}
                  </h3>

                  <div className="inline-block text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE] mb-3">
                    {step.date}
                  </div>

                  <p className="text-xs sm:text-sm text-[#667085] font-sans font-normal leading-relaxed m-0">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
