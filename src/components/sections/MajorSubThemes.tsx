import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const MajorSubThemes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredThemes = CONFERENCE_DATA.subThemes.filter((theme) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const matchesTitle = theme.title.toLowerCase().includes(term);
    const matchesTopic = theme.topics.some((t) => t.toLowerCase().includes(term));
    return matchesTitle || matchesTopic;
  });

  return (
    <section
      id="themes"
      className="py-16 sm:py-24 bg-[#060D0E] text-[#F8FAFC] border-b border-[#1E353B] relative"
      aria-label="Conference Major Sub-Themes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* ── TITLE & SEARCH ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#1E353B]">
          <div>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#D4F933]/10 border border-[#D4F933]/30 text-[#D4F933] text-xs font-sans font-bold uppercase tracking-[0.2em] mb-3">
              <span>Conference Tracks</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              MAJOR SUB THEMES
            </h2>
          </div>

          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter tracks or topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#0C181B] border border-[#1E353B] text-sm text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#D4F933] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* ── 8-TRACKS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredThemes.map((theme, index) => {
            const originalIndex = CONFERENCE_DATA.subThemes.findIndex((t) => t.title === theme.title);
            const trackNum = String((originalIndex >= 0 ? originalIndex : index) + 1).padStart(2, '0');

            return (
              <article
                key={theme.id || index}
                className="group relative bg-[#0C181B] border border-[#1E353B] hover:border-[#D4F933]/50 rounded-[24px] p-7 sm:p-9 shadow-sm hover:shadow-[0_0_30px_rgba(212,249,51,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-[#D4F933]/15 border border-[#D4F933]/30 text-[#D4F933]">
                      Track {trackNum}
                    </span>

                    <span className="text-[11.5px] font-sans font-semibold text-[#94A3B8] bg-[#060D0E] px-2.5 py-1 rounded-full border border-[#1E353B]">
                      {theme.topics.length} Focus Topics
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-[19px] sm:text-[20px] text-white group-hover:text-[#D4F933] transition-colors leading-snug mb-5">
                    {theme.title}
                  </h3>

                  <div className="w-full h-px bg-[#1E353B] mb-5" />

                  <ul className="space-y-3">
                    {theme.topics.map((topic, topicIdx) => (
                      <li
                        key={topicIdx}
                        className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[#94A3B8] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-2 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:text-white transition-colors">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-12 bg-[#0C181B] rounded-2xl border border-[#1E353B]">
            <p className="text-sm text-[#94A3B8]">No tracks or topics match &ldquo;{searchTerm}&rdquo;</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-xs font-bold text-[#D4F933] hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
