import React from 'react';
import { ArrowRight, Globe2, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface AcademicVoice {
  number: string;
  initials: string;
  name: string;
  role: string;
  affiliation: string;
  focus: string;
  badge?: string;
}

export const SpeakersSection: React.FC = () => {
  // Verified conference convenors, institutional leadership, and academic alliances
  const voices: AcademicVoice[] = [
    {
      number: '01',
      initials: 'BC',
      name: 'Dr. Sr. Bincy C.C',
      role: 'Conference Convenor & Assistant Professor',
      affiliation: 'Department of Social Work, Rajagiri College of Social Sciences (Autonomous)',
      focus: 'Inclusive community development, social justice paradigms, and grassroots intervention models.',
      badge: 'Conference Leadership',
    },
    {
      number: '02',
      initials: 'VK',
      name: 'Dr. V. Kalyani',
      role: 'Conference Co-Convenor & Assistant Professor',
      affiliation: 'Department of Social Work, Rajagiri College of Social Sciences (Autonomous)',
      focus: 'SDG localization, evidence-based field interventions, and community resilience.',
      badge: 'Conference Leadership',
    },
    {
      number: '03',
      initials: 'SW',
      name: 'Department of Social Work Faculty',
      role: 'Scientific Committee & Peer Review Board',
      affiliation: 'Rajagiri College of Social Sciences (Autonomous), Kalamassery',
      focus: 'Double-blind scholarly review, thematic track curation, and Scopus publication proceedings.',
      badge: 'Academic Review Board',
    },
    {
      number: '04',
      initials: 'GA',
      name: 'International Academic Delegations',
      role: 'Global University Partner Network',
      affiliation: '60+ Partner Universities Across 30+ Countries Worldwide',
      focus: 'Cross-cultural research dialogues, comparative social policy, and transnational developmental partnerships.',
      badge: 'Global Alliances',
    },
  ];

  return (
    <section
      id="voices"
      className="bg-[#F7F7F4] text-[#101828] border-b border-[#D9DEE5] relative py-24 sm:py-32 lg:py-36"
      aria-labelledby="voices-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION ANNOTATION BAR ── */}
        <div className="flex items-center justify-between pb-5 mb-14 sm:mb-20 border-b border-[#D9DEE5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#2563EB] tabular-nums">03</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
              Conference Voices
            </span>
          </div>
          <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085]">
            Academic Leadership &amp; Scientific Direction
          </span>
        </div>

        {/* ── SECTION EDITORIAL HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2563EB]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-[#2563EB]">
                Scholarly Convenors &amp; Scientific Board
              </span>
            </div>
            <h2
              id="voices-heading"
              className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal text-[#071A33] leading-[1.08] tracking-tight m-0"
            >
              People shaping the conversation.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-sans font-normal mt-4 max-w-[620px] leading-relaxed">
              Curated by faculty of Rajagiri College of Social Sciences with global partner universities, ensuring rigorous double-blind academic review and international scientific dialogue.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contactus"
              className="group inline-flex items-center gap-2 text-[11.5px] font-sans uppercase tracking-[0.16em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors"
            >
              <span>Contact Scientific Secretariat</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── EDITORIAL VOICES GRID (Typographic & Monogrammed Layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {voices.map((voice) => (
            <div
              key={voice.number}
              className="group border-t-2 border-[#071A33]/20 pt-8 pb-4 transition-all duration-300 hover:border-[#2563EB]"
            >
              {/* Header: Number + Initials Monogram */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm font-bold text-[#2563EB] tracking-wider">
                  {voice.number}
                </span>
                <div className="flex items-center gap-3">
                  {voice.badge && (
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.14em] text-[#667085] bg-white px-3 py-1 rounded-full border border-[#D9DEE5]">
                      {voice.badge}
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-full bg-[#071A33] text-white flex items-center justify-center font-serif text-sm font-semibold tracking-wider transition-colors group-hover:bg-[#2563EB]">
                    {voice.initials}
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-serif text-[1.65rem] sm:text-[1.85rem] text-[#071A33] font-normal leading-snug mb-2 group-hover:text-[#2563EB] transition-colors">
                {voice.name}
              </h3>

              {/* Designation & Affiliation */}
              <p className="text-[12.5px] sm:text-[13px] font-sans font-semibold text-[#2563EB] mb-1">
                {voice.role}
              </p>
              <p className="text-[12px] sm:text-[13px] font-sans text-[#667085] mb-5 leading-relaxed">
                {voice.affiliation}
              </p>

              {/* Deliberation Scope */}
              <div className="bg-white/80 border border-[#D9DEE5] rounded-xl p-4 transition-all duration-300 group-hover:bg-white group-hover:border-[#2563EB]/40 group-hover:shadow-subtle">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#667085] font-bold block mb-1.5">
                  Academic Focus &amp; Scope
                </span>
                <p className="text-[12.5px] sm:text-[13px] text-[#101828]/85 font-sans leading-relaxed m-0">
                  {voice.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── KEYNOTE NOTIFICATION BANNER ── */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#D9DEE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#D9DEE5]">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#2563EB] font-bold">
                  Keynote Announcements
                </span>
              </div>
              <p className="text-[13px] text-[#667085] font-sans m-0 mt-0.5">
                Plenary keynote speakers and distinguished international guest panelists will be formally announced through the official conference schedule.
              </p>
            </div>
          </div>

          <Link
            to="/call_for_papers"
            className="inline-flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-full px-6 py-3 transition-all duration-300 shrink-0 shadow-pill"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Review Submission Tracks</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
