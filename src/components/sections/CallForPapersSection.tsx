import React from 'react';
import { ArrowUpRight, FileText, CheckCircle2, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapersSection: React.FC = () => {
  return (
    <section
      id="call-for-papers"
      className="bg-[#EEF3F8] text-[#101828] border-b border-[#D9DEE5] relative py-24 sm:py-32 lg:py-36"
      aria-labelledby="call-for-papers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION ANNOTATION BAR ── */}
        <div className="flex items-center justify-between pb-5 mb-14 sm:mb-20 border-b border-[#D9DEE5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#2563EB] tabular-nums">05</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
              Call For Papers
            </span>
          </div>
          <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085]">
            Scopus Indexed Proceedings · Microsoft CMT Portal
          </span>
        </div>

        {/* ── ASYMMETRIC 2-COLUMN EDITORIAL COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN: Editorial Typography, Deadlines & CTAs (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2563EB]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-[#2563EB]">
                Scholarly Submissions Open
              </span>
            </div>

            <h2
              id="call-for-papers-heading"
              className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal text-[#071A33] leading-[1.08] tracking-tight mb-6"
            >
              Bring your research into the conversation.
            </h2>

            <p className="text-base sm:text-lg text-[#101828]/85 font-sans leading-relaxed font-normal mb-10 max-w-[620px]">
              Academicians, doctoral scholars, practitioners, policymakers, and graduate students are invited to submit original empirical abstracts and field intervention models. Selected peer-reviewed chapters will be published in <strong>Scopus-indexed</strong> volumes and registered conference proceedings.
            </p>

            {/* Prominent Typography Milestone Strip (No boxed cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 pb-8 border-y border-[#D9DEE5] mb-10">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[#667085] block mb-1">
                  Abstract Submission Deadline
                </span>
                <div className="font-serif text-[1.85rem] sm:text-[2.1rem] font-semibold text-[#071A33] leading-none mb-1">
                  25 Sept 2026
                </div>
                <span className="text-[12px] font-sans text-[#2563EB] font-medium">
                  Extended abstract via Microsoft CMT
                </span>
              </div>

              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[#667085] block mb-1">
                  Publication Proceedings
                </span>
                <div className="font-serif text-[1.85rem] sm:text-[2.1rem] font-semibold text-[#071A33] leading-none mb-1">
                  Scopus Book Chapters
                </div>
                <span className="text-[12px] font-sans text-[#2563EB] font-medium">
                  Double-blind peer-reviewed volume
                </span>
              </div>
            </div>

            {/* Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="navy"
                size="lg"
                asLink
                href={CONFERENCE_DATA.links.cmtSubmission}
                showArrow
              >
                Submit Paper
              </Button>

              <Button
                variant="outline"
                size="lg"
                asLink
                href="/call_for_papers"
                icon={<FileText className="w-4 h-4" />}
              >
                View Guidelines
              </Button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Open Editorial Feature Breakdown (5 cols) ── */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            <div className="border-t-2 border-[#071A33] pt-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#D9DEE5]">
                <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-[0.18em]">
                  Review &amp; Track Protocols
                </span>
                <span className="text-[11px] font-sans text-[#667085] uppercase tracking-wider">
                  8 Sub-Themes
                </span>
              </div>

              <ul className="space-y-5 text-[13.5px] sm:text-[14px] text-[#101828]/85 font-sans leading-relaxed">
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                  <span><strong>Double-Blind Peer Review:</strong> Every abstract is rigorously evaluated by the RCSS scientific board and domain experts.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                  <span><strong>Presentation Modes:</strong> Concurrent 15-minute oral sessions and interactive research poster exhibition gallery.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Award className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                  <span><strong>Best Paper Awards:</strong> Conferred across student, scholar, and practitioner categories for each thematic track.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                  <span><strong>Microsoft CMT Workflow:</strong> Transparent tracking from initial submission to final camera-ready volume.</span>
                </li>
              </ul>

              {/* Direct PDF Link */}
              <div className="pt-6 border-t border-[#D9DEE5]">
                <a
                  href={CONFERENCE_DATA.links.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
                >
                  <span>Download Complete Call for Papers (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
