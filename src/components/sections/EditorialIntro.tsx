import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const EditorialIntro: React.FC = () => {
  return (
    <section
      id="introduction"
      className="py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">01</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">About DYUTI 2027</span>
          </div>
          <span>Continuous Legacy Since 1998</span>
        </div>

        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: 01 / About DYUTI & Genesis */}
          <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D9DEE5] pb-8 lg:pb-0 lg:pr-10">
            <div>
              <span className="text-7xl sm:text-8xl lg:text-9xl font-serif text-[#12345B]/15 font-normal block leading-none select-none">
                01
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mt-3 mb-4">
                The DYUTI Genesis
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#071A33] leading-snug mb-6">
                Developmental Yearnings for a United and Transformed India
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed font-sans font-normal mb-8">
                Christened <strong>DYUTI</strong>, meaning <em>‘Spark of Life’</em> in Sanskrit, the conference represents Rajagiri's enduring commitment to bridging academic scholarship with grassroots transformation.
              </p>
            </div>

            <div>
              <Link
                to="/rajagiri"
                className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
              >
                <span>Read Institutional Heritage</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Large Statement + Structured Description & Open Pillars */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2
                id="intro-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.12] mb-6"
              >
                Ideas that move beyond the present.
              </h2>
              <p className="text-base sm:text-lg text-[#101828]/85 font-sans leading-relaxed font-normal mb-6">
                {CONFERENCE_DATA.overview}
              </p>
            </div>

            {/* 3 Open Editorial Pillars (No Square Boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#D9DEE5]">
              <div className="border-l-2 border-[#12345B] pl-5">
                <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1.5">
                  01 / Pillar
                </div>
                <h4 className="font-serif text-2xl text-[#071A33] mb-2 font-normal">
                  UN 2030 Agenda
                </h4>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Advancing the 17 Sustainable Development Goals through community-centric practice and policy advocacy.
                </p>
              </div>

              <div className="border-l-2 border-[#12345B] pl-5">
                <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1.5">
                  02 / Pillar
                </div>
                <h4 className="font-serif text-2xl text-[#071A33] mb-2 font-normal">
                  Empirical Research
                </h4>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Double-blind peer-reviewed conference volumes processed for indexing in Scopus / Springer proceedings.
                </p>
              </div>

              <div className="border-l-2 border-[#12345B] pl-5">
                <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1.5">
                  03 / Pillar
                </div>
                <h4 className="font-serif text-2xl text-[#071A33] mb-2 font-normal">
                  Global Alliances
                </h4>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
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
