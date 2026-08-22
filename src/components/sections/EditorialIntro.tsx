import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const EditorialIntro: React.FC = () => {
  return (
    <section
      id="introduction"
      className="py-20 sm:py-28 bg-[#F8F8F6] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">01</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">Conference Introduction</span>
          </div>
          <span>Continuous Legacy Since 1998</span>
        </div>

        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT: Large Number 01 & Editorial Narrative */}
          <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D9DEE5] pb-8 lg:pb-0 lg:pr-10">
            <div>
              <span className="text-7xl sm:text-8xl lg:text-9xl font-serif italic text-[#12345B]/20 font-bold block leading-none select-none">
                01
              </span>
              <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold block mt-2 mb-4">
                The DYUTI Genesis
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#071A33] leading-snug mb-6">
                Developmental Yearnings for a United and Transformed India
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed font-sans font-normal mb-6">
                Christened <strong>DYUTI</strong>, meaning <em>‘Spark of Life’</em> in Sanskrit, the conference represents Rajagiri's enduring commitment to bridging academic scholarship with grassroots transformation.
              </p>
            </div>

            <div>
              <Link
                to="/rajagiri"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
              >
                <span>Read Institutional Heritage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Large Statement + Structured Description & Pillars */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2
                id="intro-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal italic text-[#071A33] leading-tight mb-8"
              >
                A platform for ideas, research, collaboration and innovation.
              </h2>
              <p className="text-base sm:text-lg text-[#101828]/85 font-sans leading-relaxed font-normal mb-8">
                {CONFERENCE_DATA.overview}
              </p>
            </div>

            {/* 3 Editorial Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D9DEE5]">
              <div className="p-5 bg-white border border-[#D9DEE5] rounded-sm shadow-subtle">
                <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-2">
                  Pillar I
                </div>
                <h4 className="font-serif font-bold text-lg text-[#071A33] mb-2">
                  UN 2030 Agenda
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Advancing the 17 Sustainable Development Goals through community-centric practice and policy advocacy.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#D9DEE5] rounded-sm shadow-subtle">
                <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-2">
                  Pillar II
                </div>
                <h4 className="font-serif font-bold text-lg text-[#071A33] mb-2">
                  Empirical Research
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Double-blind peer-reviewed conference volumes processed for indexing in Scopus / Springer proceedings.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#D9DEE5] rounded-sm shadow-subtle">
                <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-2">
                  Pillar III
                </div>
                <h4 className="font-serif font-bold text-lg text-[#071A33] mb-2">
                  Global Partnerships
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Collaborative dialogues uniting 60+ partner universities across 30+ countries worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
