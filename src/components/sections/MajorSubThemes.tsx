import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

/**
 * MajorSubThemes Component
 * Clean, modern template without decorative icons containing the exact 8 sub-themes and all topics from dyuti.in:
 * - Conference Tracks
 * - MAJOR SUB THEMES
 * - Tracks 01 to 08
 */
export const MajorSubThemes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter subthemes and topics based on search term
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
      className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0B1220] border-b border-[#D9DEE5] relative"
      aria-label="Conference Major Sub-Themes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* ── SECTION TITLE & SEARCH BAR ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E8F0F7] border border-[#CBD5E1] text-[#2563EB] text-xs font-sans font-bold uppercase tracking-[0.2em] mb-3 shadow-sm">
              <span>Conference Tracks</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A33] tracking-tight">
              MAJOR SUB THEMES
            </h2>
          </div>

          {/* Quick Filter / Search by keyword */}
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter tracks or topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#CBD5E1] text-sm text-[#071A33] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent shadow-sm transition-all"
            />
          </div>
        </div>

        {/* ── 8-TRACKS CLEAN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredThemes.map((theme, index) => {
            const originalIndex = CONFERENCE_DATA.subThemes.findIndex((t) => t.title === theme.title);
            const trackNum = String((originalIndex >= 0 ? originalIndex : index) + 1).padStart(2, '0');

            return (
              <article
                key={theme.id || index}
                className="group relative bg-white border border-[#D9DEE5] hover:border-[#2563EB] rounded-[24px] p-7 sm:p-9 shadow-[0_4px_20px_rgba(7,26,51,0.03)] hover:shadow-[0_16px_36px_rgba(7,26,51,0.09)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number Badge and Topic Count */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-[#071A33] text-white shadow-sm">
                      Track {trackNum}
                    </span>

                    <span className="text-[11.5px] font-sans font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
                      {theme.topics.length} Focus Topics
                    </span>
                  </div>

                  {/* Track Title */}
                  <h3 className="font-heading font-bold text-[19px] sm:text-[20px] text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug mb-5">
                    {theme.title}
                  </h3>

                  <div className="w-full h-px bg-[#F1F5F9] mb-5" />

                  {/* List of Topics */}
                  <ul className="space-y-3">
                    {theme.topics.map((topic, topicIdx) => (
                      <li
                        key={topicIdx}
                        className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[#475467] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#071A33]/40 group-hover:bg-[#2563EB] mt-2 shrink-0 transition-colors" />
                        <span className="group-hover:text-[#0F172A] transition-colors">
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

        {/* Search no results fallback */}
        {filteredThemes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#D9DEE5]">
            <p className="text-sm text-[#64748B]">No tracks or topics match &ldquo;{searchTerm}&rdquo;</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-xs font-bold text-[#2563EB] hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
