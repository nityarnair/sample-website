import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA } from '@/data/conference';

export const EditorialIntro: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'UN 2030 Agenda',
      body: 'Advancing the 17 Sustainable Development Goals through community-centric practice and policy advocacy.',
    },
    {
      num: '02',
      title: 'Empirical Research',
      body: 'Double-blind peer-reviewed proceedings indexed in Scopus / Springer volumes.',
    },
    {
      num: '03',
      title: 'Global Alliances',
      body: 'Collaborative dialogues uniting 60+ partner universities across 30+ countries worldwide.',
    },
  ];

  return (
    <section
      id="introduction"
      className="bg-white text-[#101828] border-b border-[#D9DEE5]"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION LABEL ── */}
        <div className="flex items-center justify-between py-5 border-b border-[#D9DEE5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#2563EB]">02</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
              About DYUTI
            </span>
          </div>
          <span className="hidden sm:block text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085]">
            Continuous Legacy Since 1998
          </span>
        </div>

        {/* ── MAIN ASYMMETRIC BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 items-start py-16 sm:py-20 lg:py-24">

          {/* LEFT SIDEBAR — 4 cols on desktop */}
          <div className="lg:col-span-4 lg:border-r border-[#D9DEE5] lg:pr-12 pb-10 lg:pb-0 border-b lg:border-b-0">

            {/* Large watermark number */}
            <span className="block font-serif text-[6rem] sm:text-[7rem] text-[#071A33]/8 leading-none select-none font-semibold mb-2">
              01
            </span>

            {/* Acronym meaning */}
            <div className="mb-5">
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#2563EB] font-bold m-0 mb-1.5">
                DYUTI — The Genesis
              </p>
              <p className="text-[12px] font-sans text-[#667085] font-normal leading-relaxed m-0">
                Sanskrit: <em className="not-italic text-[#101828] font-semibold">&ldquo;Spark of Life&rdquo;</em>
              </p>
            </div>

            {/* Acronym expanded */}
            <h3 className="font-serif text-[1.35rem] sm:text-[1.5rem] text-[#071A33] leading-[1.3] mb-6 font-normal">
              Developmental Yearnings<br />
              for a United and<br />
              Transformed India
            </h3>

            <p className="text-[13px] text-[#667085] leading-[1.8] font-sans font-normal mb-8">
              Christened <strong className="text-[#101828] font-semibold">DYUTI</strong>, the conference
              represents Rajagiri's enduring commitment to bridging academic
              scholarship with grassroots transformation.
            </p>

            {/* Explore link */}
            <Link
              to="/rajagiri"
              className="group inline-flex items-center gap-2 text-[11.5px] font-sans uppercase tracking-[0.16em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
            >
              <span>Read Institutional Heritage</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT CONTENT — 8 cols on desktop */}
          <div className="lg:col-span-8 lg:pl-14 pt-10 lg:pt-0">

            {/* Large editorial statement heading */}
            <h2
              id="intro-heading"
              className="font-serif font-normal text-[#071A33] text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.1] tracking-tight mb-6"
            >
              A platform where ideas,<br className="hidden md:block" />
              research, and<br className="hidden md:block" />
              innovation meet.
            </h2>

            {/* Conference overview — from CONFERENCE_DATA */}
            <p className="text-[14.5px] sm:text-base text-[#667085] font-sans font-normal leading-[1.8] mb-12 max-w-[600px]">
              {CONFERENCE_DATA.overview.slice(0, 340)}&hellip;
            </p>

            {/* ── 3 PILLARS — open, no card boxes ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#D9DEE5]">
              {pillars.map((p) => (
                <div key={p.num} className="border-l-2 border-[#071A33]/20 pl-5 group">
                  <div className="text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-[0.18em] mb-2">
                    {p.num}
                  </div>
                  <h4 className="font-serif text-[1.35rem] text-[#071A33] mb-2.5 font-normal leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-[12.5px] sm:text-[13px] text-[#667085] leading-[1.75] m-0 font-sans font-normal">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
