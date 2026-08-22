import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

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
      className="py-20 sm:py-28 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="dates-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">05</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">Important Dates</span>
          </div>
          <span>Conference Deadlines</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
            Chronology of Submissions
          </span>
          <h2
            id="dates-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-tight m-0"
          >
            Key Deadlines &amp; Milestone Timeline
          </h2>
        </div>

        {/* Horizontal Editorial Timeline (Desktop 5-col grid with connecting line) */}
        <div className="relative">
          {/* Subtle navy horizontal connecting line across desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[#12345B]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D9DEE5] hover:border-[#12345B]/40 rounded-sm p-6 shadow-subtle hover:shadow-editorial transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif italic font-bold text-2xl text-[#12345B]">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#071A33] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <div className="inline-block text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-xs border border-[#BFDBFE] mb-3">
                    {step.date}
                  </div>

                  <p className="text-xs text-[#667085] font-sans font-normal leading-relaxed m-0">
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
