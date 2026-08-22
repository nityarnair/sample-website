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
      className="py-24 sm:py-32 lg:py-36 bg-[#071A33] text-white border-b border-[#1E3A8A]/40 relative overflow-hidden"
      aria-labelledby="tracks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-white/15 text-xs font-sans uppercase tracking-[0.18em] text-[#93C5FD]">
          <div className="flex items-center gap-3">
            <span className="text-[#60A5FA] font-mono font-bold">02</span>
            <span className="w-8 h-px bg-white/20" />
            <span className="text-white font-semibold">CONFERENCE TRACKS</span>
          </div>
          <span className="text-white/70">8 Scholarly Sub-Themes</span>
        </div>

        {/* Section Title & Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#60A5FA] font-bold block mb-3">
              Explore the ideas shaping tomorrow.
            </span>
            <h2
              id="tracks-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-[1.12] m-0"
            >
              Academic Sub-Themes &amp; Research Tracks
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <Link
              to="/call_for_papers"
              className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#93C5FD] hover:text-white transition-colors"
            >
              <span>Download Guidelines (PDF)</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Interactive Full-Width Editorial Rows */}
        <div className="border-t border-white/15 divide-y divide-white/10">
          {CONFERENCE_DATA.subThemes.map((theme: SubTheme) => {
            const isExpanded = expandedTrack === theme.id;
            return (
              <div
                key={theme.id}
                className="transition-colors duration-300"
              >
                <div
                  onClick={() => toggleTrack(theme.id)}
                  className={`group py-8 sm:py-10 px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none transition-all duration-300 ${
                    isExpanded
                      ? 'bg-white/10 text-white'
                      : 'hover:bg-white/5 text-white'
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
                        ? 'text-[#60A5FA]'
                        : 'text-white/30 group-hover:text-[#60A5FA]'
                    }`}>
                      {theme.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug m-0 text-white transition-colors">
                        {theme.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans font-normal mt-2 m-0 text-white/70">
                        {theme.topics.length} specialized focus topics &bull; Peer-reviewed proceedings
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand arrow indicator */}
                  <div className="flex items-center gap-4 shrink-0 self-end md:self-center">
                    <span className="text-xs font-sans uppercase tracking-[0.14em] hidden sm:block text-white/70 group-hover:text-white transition-colors">
                      {isExpanded ? 'Collapse' : 'Explore Topics'}
                    </span>
                    <div className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? 'border-white bg-white text-[#071A33]'
                        : 'border-white/30 text-white group-hover:border-white group-hover:bg-white group-hover:text-[#071A33]'
                    }`}>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Expanded Topic Details Panel */}
                {isExpanded && (
                  <div className="px-4 sm:px-10 py-8 bg-[#040F1E]/80 border-t border-white/10 animate-fadeIn">
                    <div className="p-8 sm:p-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs">
                      <h4 className="text-xs font-sans uppercase tracking-[0.16em] text-[#60A5FA] font-bold mb-6">
                        Key Sub-Topics for Track {theme.number}:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {theme.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-white/90 font-sans font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-2 shrink-0" />
                            <span className="leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <span className="text-xs text-white/60 font-sans">
                          Accepted abstracts will be scheduled for 15-minute oral or poster presentations.
                        </span>
                        <a
                          href={CONFERENCE_DATA.links.cmtSubmission}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-7 py-3 inline-flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-wider font-semibold bg-white text-[#071A33] hover:bg-[#EEF3F8] rounded-full transition-all shadow-pill"
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
