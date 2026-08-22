import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
      className="py-24 sm:py-32 lg:py-36 bg-white text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="tracks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">02</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">CONFERENCE TRACKS</span>
          </div>
          <span>8 Scholarly Sub-Themes</span>
        </div>

        {/* Section Title & Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mb-3">
              Explore the ideas shaping tomorrow.
            </span>
            <h2
              id="tracks-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.15] m-0"
            >
              Academic Sub-Themes &amp; Research Tracks
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <Link
              to="/call_for_papers"
              className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
            >
              <span>Download Guidelines (PDF)</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Interactive Full-Width Editorial Rows */}
        <div className="border-t border-[#D9DEE5] divide-y divide-[#D9DEE5]">
          {CONFERENCE_DATA.subThemes.map((theme: SubTheme) => {
            const isExpanded = expandedTrack === theme.id;
            return (
              <div
                key={theme.id}
                className="transition-colors duration-300"
              >
                <div
                  onClick={() => toggleTrack(theme.id)}
                  className={`group py-8 sm:py-10 px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none transition-all duration-300 rounded-sm ${
                    isExpanded
                      ? 'bg-[#071A33] text-white'
                      : 'hover:bg-[#071A33] hover:text-white'
                  }`}
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
                    <span className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal transition-colors w-14 shrink-0 ${
                      isExpanded
                        ? 'text-[#93C5FD]'
                        : 'text-[#12345B]/30 group-hover:text-[#93C5FD]'
                    }`}>
                      {theme.number}
                    </span>
                    <div>
                      <h3 className={`font-serif text-xl sm:text-2xl lg:text-3xl font-normal leading-snug m-0 transition-colors ${
                        isExpanded ? 'text-white' : 'text-[#071A33] group-hover:text-white'
                      }`}>
                        {theme.title}
                      </h3>
                      <p className={`text-xs font-sans font-normal mt-1.5 m-0 transition-colors ${
                        isExpanded ? 'text-white/70' : 'text-[#667085] group-hover:text-white/75'
                      }`}>
                        {theme.topics.length} specialized focus topics &bull; Peer-reviewed proceedings
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand arrow indicator */}
                  <div className="flex items-center gap-4 shrink-0 self-end md:self-center">
                    <span className={`text-xs font-sans uppercase tracking-[0.14em] hidden sm:block transition-colors ${
                      isExpanded ? 'text-white/80' : 'text-[#667085] group-hover:text-white/80'
                    }`}>
                      {isExpanded ? 'Collapse' : 'Explore Topics'}
                    </span>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? 'border-white/30 bg-white text-[#071A33]'
                        : 'border-[#D9DEE5] group-hover:border-white/30 group-hover:bg-white group-hover:text-[#071A33]'
                    }`}>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Expanded Topic Details Panel */}
                {isExpanded && (
                  <div className="px-4 sm:px-12 py-8 bg-[#F8F8F6] border-t border-[#D9DEE5] animate-fadeIn">
                    <div className="p-8 bg-white border border-[#D9DEE5] rounded-xl shadow-subtle">
                      <h4 className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold mb-5">
                        Key Sub-Topics for Track {theme.number}:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5">
                        {theme.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#101828]/90 font-sans font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-5 border-t border-[#D9DEE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <span className="text-xs text-[#667085] font-sans">
                          Accepted abstracts will be scheduled for 15-minute oral or poster presentations.
                        </span>
                        <a
                          href={CONFERENCE_DATA.links.cmtSubmission}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 inline-flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-wider font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-full transition-all shadow-subtle"
                        >
                          <span>Submit Extended Abstract</span>
                          <ArrowRight className="w-3.5 h-3.5" />
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
