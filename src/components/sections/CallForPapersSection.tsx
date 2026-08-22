import React from 'react';
import { FileText, ArrowRight, Calendar, BookMarked, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapersSection: React.FC = () => {
  return (
    <section
      id="call-for-papers"
      className="py-24 sm:py-32 lg:py-36 bg-[#EEF3F8] text-[#101828] border-b border-[#D9DEE5] relative overflow-hidden"
      aria-labelledby="call-for-papers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">05</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">CALL FOR PAPERS</span>
          </div>
          <span>Scopus Publication</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7">
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mb-3">
              Extend the frontiers of scholarly research
            </span>

            <h2
              id="call-for-papers-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.12] mb-6"
            >
              Your research belongs here.
            </h2>

            <p className="text-base sm:text-lg text-[#101828]/85 font-sans leading-relaxed font-normal mb-8">
              Academicians, doctoral scholars, practitioners, policymakers, and graduate students are invited to submit original empirical abstracts and field intervention models. Selected peer-reviewed chapters will be published in <strong>Scopus-indexed</strong> volumes and registered conference proceedings.
            </p>

            {/* Verified Key Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans mb-8">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#D9DEE5] shadow-subtle">
                <Calendar className="w-4 h-4 text-[#2563EB] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#667085] uppercase tracking-wider">Submission Deadline</div>
                  <strong className="text-[#071A33] text-xs sm:text-sm">25 September 2026</strong>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#D9DEE5] shadow-subtle">
                <BookMarked className="w-4 h-4 text-[#2563EB] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#667085] uppercase tracking-wider">Indexed Proceedings</div>
                  <strong className="text-[#071A33] text-xs sm:text-sm">Scopus Book Chapters</strong>
                </div>
              </div>
            </div>

            {/* Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="navy"
                size="md"
                asLink
                href={CONFERENCE_DATA.links.cmtSubmission}
                showArrow
              >
                Submit Your Paper
              </Button>

              <Button
                variant="outline"
                size="md"
                asLink
                href="/call_for_papers"
                icon={<FileText className="w-4 h-4" />}
              >
                View Guidelines &amp; Sub-Themes
              </Button>
            </div>
          </div>

          {/* Right Open Card: Submission Highlights */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-[20px] bg-white border border-[#D9DEE5] shadow-editorial space-y-6">
              <div className="border-b border-[#D9DEE5] pb-4">
                <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-widest block mb-1">
                  Peer Review &amp; Presentation
                </span>
                <h3 className="font-serif text-2xl text-[#071A33] font-normal m-0">
                  Submission Features
                </h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#101828]/85 font-sans">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Double-blind academic peer review by scientific committee</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Oral &amp; Poster presentation tracks with chair feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Best Paper Awards across all 8 conference sub-themes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Managed via Microsoft Conference Management Toolkit (CMT)</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#D9DEE5]">
                <a
                  href={CONFERENCE_DATA.links.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
                >
                  <span>Download Complete Call for Papers (PDF)</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
