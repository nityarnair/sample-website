import React from 'react';
import { Layers } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

/**
 * MajorSubThemes Component
 * Contains the EXACT 8 Sub-Themes from dyuti.in:
 * 1. Social Work and the Sustainable Development Goals
 * 2. Inclusive Communities and Social Equity
 * 3. Innovation for Community Development
 * 4. Climate Action, Environmental Sustainability and Disaster Resilience
 * 5. Health, Well-being and Sustainable Societies
 * 6. Education, Youth and Future Leadership
 * 7. Governance, Policy and Collaborative Partnerships
 * 8. Indigenous Knowledge, Culture and Global Perspectives
 */
export const MajorSubThemes: React.FC = () => {
  return (
    <section
      id="themes"
      className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0B1220] border-b border-[#D9DEE5]"
      aria-label="Conference Major Sub-Themes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Title Header matching dyuti.in */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0F7] border border-[#CBD5E1] text-[#2563EB] text-xs font-sans font-bold uppercase tracking-[0.16em] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Conference Tracks</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#071A33] tracking-tight">
            MAJOR SUB THEMES
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* 8-Themes Grid: 2 columns on desktop/tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {CONFERENCE_DATA.subThemes.map((theme, index) => (
            <article
              key={theme.id || index}
              className="group relative bg-white border border-[#D9DEE5] hover:border-[#2563EB]/40 rounded-[22px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(7,26,51,0.04)] hover:shadow-[0_12px_32px_rgba(7,26,51,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Track Number Badge & Title */}
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#E8F0F7] text-[#2563EB] font-mono font-bold text-sm border border-[#CBD5E1]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading font-bold text-[18px] sm:text-[19px] text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {theme.title}
                  </h3>
                </div>

                <div className="w-full h-px bg-[#F1F5F9] mb-5" />

                {/* Sub-theme Topics / Bullet Points */}
                <ul className="space-y-2.5">
                  {theme.topics.map((topic, topicIdx) => (
                    <li
                      key={topicIdx}
                      className="flex items-start gap-2.5 text-[14px] sm:text-[14.5px] text-[#475467] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-[#1E293B] transition-colors">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
