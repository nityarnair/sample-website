import React from 'react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const ConferenceCTA: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-[#073B35] text-[#F7F4EC] border-b border-white/10 relative overflow-hidden"
      aria-labelledby="call-for-papers-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-white/15 text-xs font-sans uppercase tracking-widest text-white/60">
          <div className="flex items-center gap-3">
            <span className="text-[#C89B3C] font-mono font-bold">06 / 10</span>
            <span className="w-6 h-px bg-[#C89B3C]/40" />
            <span id="call-for-papers-title">Call for Papers</span>
          </div>
          <span className="font-mono text-white/70">Abstract Deadline: 25 Sept 2026</span>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: Heading & Large Serif Statement */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89B3C] font-semibold block mb-4">
              Scholarly Dissemination &amp; Scopus Proceedings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal italic text-white leading-tight mb-6">
              Contribute your research to advancing sustainable development.
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed max-w-xl font-normal">
              Original research abstracts, empirical studies, and community field models are invited across all 8 thematic conference tracks.
            </p>
          </div>

          {/* RIGHT: Supporting Highlights & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 border border-white/15 bg-black/20 text-xs font-sans space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/60 uppercase tracking-wider">Review Mode</span>
                <span className="text-white font-semibold">Double-Blind Peer Review</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/60 uppercase tracking-wider">Publication</span>
                <span className="text-[#C89B3C] font-semibold">Scopus Indexed Volumes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 uppercase tracking-wider">Submission Portal</span>
                <span className="text-white font-semibold">Microsoft CMT</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/call_for_papers"
                className="px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold bg-white text-[#073B35] hover:bg-[#C89B3C] hover:text-[#101716] transition-colors flex items-center gap-2"
              >
                <span>View Call for Papers →</span>
              </Link>
              <a
                href={CONFERENCE_DATA.links.cmtSubmission}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold border border-white/30 text-white hover:border-[#C89B3C] hover:text-[#C89B3C] transition-colors flex items-center gap-1.5"
              >
                <span>Submit Paper →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
