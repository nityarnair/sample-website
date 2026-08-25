import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ImportantDatesTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Registration Commences',
      date: '10 August 2026',
      desc: 'Online registration portal opens for student, faculty, and delegate categories.',
      isHighlight: false,
    },
    {
      number: '02',
      title: 'Abstract Submission Deadline',
      date: '25 September 2026',
      desc: 'Deadline for extended abstract submission via the Microsoft CMT portal.',
      isHighlight: true,
    },
    {
      number: '03',
      title: 'Peer Review & Acceptance',
      date: 'Rolling Notifications',
      desc: 'Double-blind peer review outcomes communicated to corresponding authors.',
      isHighlight: false,
    },
    {
      number: '04',
      title: 'Camera-Ready Paper',
      date: 'Prior to Conference',
      desc: 'Final full manuscripts processed for Scopus-indexed volume publication.',
      isHighlight: false,
    },
    {
      number: '05',
      title: 'Conference Days',
      date: 'Rajagiri Valley Campus',
      desc: 'Two days of keynotes, plenary panels, and concurrent technical paper sessions.',
      isHighlight: false,
    },
  ];

  return (
    <section
      id="important-dates"
      className="bg-[#081113] text-white border-b border-[#1E353B] relative py-20 sm:py-28 lg:py-32"
      aria-labelledby="dates-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION ANNOTATION BAR ── */}
        <div className="flex items-center justify-between pb-5 mb-12 sm:mb-16 border-b border-[#1E353B]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#D4F933] tabular-nums">06</span>
            <span className="w-6 h-px bg-[#1E353B]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-white font-bold">
              Important Dates
            </span>
          </div>
          <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#94A3B8] font-semibold">
            Chronology of Key Deadlines &amp; Milestones
          </span>
        </div>

        {/* ── SECTION HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-0.5 bg-[#D4F933]" />
              <span className="text-[11.5px] font-sans uppercase tracking-[0.18em] font-bold text-[#D4F933]">
                Conference Schedule &amp; Milestones
              </span>
            </div>
            <h2
              id="dates-heading"
              className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-heading font-extrabold text-white leading-[1.08] tracking-tight m-0"
            >
              The road to DYUTI 2027.
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] font-sans font-normal mt-4 max-w-[620px] leading-relaxed">
              Track critical submission windows, peer review notifications, and registration commencement dates leading up to the 26th annual symposium.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/call_for_papers"
              className="group inline-flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.14em] font-bold text-[#D4F933] hover:text-[#E4FF66] transition-colors"
            >
              <span>View Extended Abstract Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── DESKTOP HORIZONTAL TIMELINE ── */}
        <div className="hidden lg:block relative pt-4 pb-4">
          <div className="absolute top-[28px] left-12 right-12 h-[2px] bg-[#1E353B] -z-0" />

          <div className="grid grid-cols-5 gap-5 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="flex items-center gap-3 mb-6 pl-2">
                  <div
                    className={`w-7 h-7 rounded-[8px] shrink-0 flex items-center justify-center font-mono text-[11px] font-bold transition-all duration-300 group-hover:scale-110 ${
                      step.isHighlight
                        ? 'bg-[#D4F933] text-[#060D0E] ring-4 ring-[#D4F933]/20'
                        : 'bg-[#0E1D21] text-white border border-[#1E353B] group-hover:border-[#D4F933]'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider group-hover:text-[#D4F933] transition-colors">
                    Step {step.number}
                  </span>
                </div>

                <div
                  className={`bg-[#0C181B] border rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between min-h-[220px] ${
                    step.isHighlight
                      ? 'border-[#D4F933]/50 ring-1 ring-[#D4F933]/20'
                      : 'border-[#1E353B] hover:border-[#D4F933]/40'
                  }`}
                >
                  <div>
                    <div className="mb-2.5">
                      <span
                        className={`inline-block font-mono text-[12.5px] font-bold uppercase tracking-wider ${
                          step.isHighlight
                            ? 'text-[#D4F933]'
                            : 'text-[#38BDF8]'
                        }`}
                      >
                        {step.date}
                      </span>
                    </div>

                    <h3 className="font-heading text-[1.2rem] text-white font-bold leading-snug mb-2 group-hover:text-[#D4F933] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-[12.5px] text-[#94A3B8] font-sans font-normal leading-relaxed m-0 mt-3 pt-3 border-t border-[#1E353B]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="lg:hidden relative pl-8 sm:pl-10 space-y-6 sm:space-y-8">
          <div className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-[#1E353B]" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div
                className={`absolute -left-[29px] sm:-left-[33px] top-4 w-7 h-7 rounded-[8px] flex items-center justify-center font-mono text-[10px] font-bold ${
                  step.isHighlight
                    ? 'bg-[#D4F933] text-[#060D0E]'
                    : 'bg-[#0E1D21] text-white border border-[#1E353B]'
                }`}
              >
                {step.number}
              </div>

              <div
                className={`bg-[#0C181B] border rounded-[20px] p-5 sm:p-6 transition-all duration-300 ${
                  step.isHighlight
                    ? 'border-[#D4F933]/50'
                    : 'border-[#1E353B]'
                }`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span
                    className={`font-mono text-[12px] font-bold uppercase tracking-wider ${
                      step.isHighlight
                        ? 'text-[#D4F933]'
                        : 'text-[#38BDF8]'
                    }`}
                  >
                    {step.date}
                  </span>
                </div>

                <h3 className="font-heading text-[1.3rem] sm:text-[1.45rem] text-white font-bold leading-snug mb-1.5">
                  {step.title}
                </h3>

                <p className="text-[13px] text-[#94A3B8] font-sans font-normal leading-relaxed m-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-14 pt-8 border-t border-[#1E353B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#94A3B8] font-sans">
            <Clock className="w-4 h-4 text-[#D4F933] shrink-0" />
            <span>All submission deadlines are set to 23:59 IST (Indian Standard Time).</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#D4F933]" />
            <span>Official Venue: Rajagiri College of Social Sciences, Kalamassery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
