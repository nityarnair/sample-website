import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_DATA, SubTheme } from '@/data/conference';

export const EditorialTracks: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const toggleTrack = (id: string) => {
    setExpandedTrack((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="tracks"
      className="py-20 sm:py-28 bg-white text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="tracks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-12 sm:mb-16 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-widest text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">02</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">Conference Tracks</span>
          </div>
          <span>8 Thematic Sub-Themes</span>
        </div>

        {/* Section Title & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
              Scholarly Scope
            </span>
            <h2
              id="tracks-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-tight m-0"
            >
              Thematic Areas for Research &amp; Deliberation
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <Link
              to="/call_for_papers"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
            >
              <span>Download Full Call for Papers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Editorial Rows (Numbered, Thin Borders, Navy Transitions) */}
        <div className="border-t border-[#D9DEE5] divide-y divide-[#D9DEE5]">
          {CONFERENCE_DATA.subThemes.map((theme: SubTheme) => {
            const isExpanded = expandedTrack === theme.id;
            return (
              <div
                key={theme.id}
                className={`group transition-colors duration-200 ${
                  isExpanded ? 'bg-[#F8F8F6]' : 'hover:bg-[#F8F8F6]/70'
                }`}
              >
                <div
                  onClick={() => toggleTrack(theme.id)}
                  className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none px-2 sm:px-4"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleTrack(theme.id);
                    }
                  }}
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="font-serif italic font-bold text-2xl sm:text-3xl lg:text-4xl text-[#12345B]/40 group-hover:text-[#071A33] transition-colors w-12 shrink-0">
                      {theme.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug m-0">
                        {theme.title}
                      </h3>
                      <p className="text-xs text-[#667085] font-sans font-normal mt-1 m-0">
                        {theme.topics.length} specialized sub-topics &bull; Empirical &amp; practice papers invited
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand indicator */}
                  <div className="flex items-center gap-4 shrink-0 self-end md:self-center">
                    <span className="text-xs font-sans uppercase tracking-wider text-[#667085] hidden sm:block">
                      {isExpanded ? 'Hide Topics' : 'Explore Topics'}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-[#D9DEE5] group-hover:border-[#071A33] flex items-center justify-center text-[#071A33] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 bg-[#071A33] text-white' : 'bg-white'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Topic Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-16 pb-8 pt-2 animate-fadeIn">
                    <div className="p-6 bg-white border border-[#D9DEE5] rounded-sm shadow-subtle">
                      <h4 className="text-xs font-sans uppercase tracking-widest text-[#2563EB] font-bold mb-4">
                        Key Focus Areas &amp; Sub-Topics for Track {theme.number}:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {theme.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#101828]/85 font-sans font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#D9DEE5] flex items-center justify-between">
                        <span className="text-xs text-[#667085] font-sans">
                          Accepted papers will be scheduled for oral / poster presentations.
                        </span>
                        <a
                          href={CONFERENCE_DATA.links.cmtSubmission}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-sans uppercase tracking-wider font-semibold text-[#2563EB] hover:text-[#071A33] inline-flex items-center gap-1"
                        >
                          <span>Submit to Track {theme.number} →</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
