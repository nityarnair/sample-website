import React from 'react';

/**
 * ConferenceOverview Component
 * Styled with Kochi Nightscape dark theme palette (#060D0E, #0D191D, #D4F933)
 */
export const ConferenceOverview: React.FC = () => {
  return (
    <section
      id="overview"
      className="py-16 sm:py-24 bg-[#060D0E] text-[#F8FAFC] border-b border-[#1E353B]"
      aria-label="DYUTI 2027 Conference Theme Narrative, About DYUTI and Background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20">

        {/* ── 01: THEME NARRATIVE ── */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#0D1C20] via-[#0A1619] to-[#060D0E] text-white p-8 sm:p-12 shadow-[0_16px_45px_rgba(0,0,0,0.6)] border border-[#1E353B] overflow-hidden relative">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3.5 py-1 rounded-[6px] bg-[#D4F933]/10 border border-[#D4F933]/30 text-[#D4F933] text-xs font-sans font-bold uppercase tracking-wider">
              <span>DYUTI 2027 &bull; Thematic Narrative</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug max-w-4xl">
              Deliberating Innovative &amp; Collaborative Approaches for Sustainable Development
            </h2>

            <div className="w-16 h-1 bg-[#D4F933] rounded-full" />

            <p className="text-[15.5px] sm:text-[16.5px] text-[#94A3B8] leading-relaxed font-sans font-normal max-w-4xl pt-1">
              The 2027 DYUTI National Conference, themed &ldquo;Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership,&rdquo; brings together academicians, researchers, practitioners, policymakers, students, and development professionals to deliberate on innovative and collaborative approaches for sustainable development. Aligned with the 2030 Agenda for Sustainable Development and its vision of &ldquo;Leaving No One Behind,&rdquo; the conference highlights the vital role of social work in promoting social justice, inclusive development, community empowerment, and sustainable solutions. Through scholarly dialogue and knowledge exchange, DYUTI 2027 aims to strengthen partnerships and advance resilient, equitable, and sustainable communities.
            </p>
          </div>
        </div>

        {/* ── 02: ABOUT DYUTI ── */}
        <div className="rounded-[24px] bg-[#0C181B] border border-[#1E353B] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1E353B] mb-8">
            <div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#D4F933] mb-2">
                <span>Conference Heritage</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                About DYUTI 2027
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-[6px] bg-[#060D0E] border border-[#1E353B] text-[#94A3B8] text-xs font-bold shadow-sm">
                Founded in 1998
              </span>
              <span className="px-3.5 py-1.5 rounded-[6px] bg-[#D4F933]/15 border border-[#D4F933]/30 text-[#D4F933] text-xs font-bold shadow-sm">
                26th in its series
              </span>
            </div>
          </div>

          {/* Acronym Expansion Box */}
          <div className="bg-[#060D0E] rounded-[16px] p-6 sm:p-7 border border-[#1E353B] shadow-sm mb-6">
            <p className="text-lg sm:text-xl font-heading font-bold text-white leading-snug">
              <span className="text-[#D4F933] tracking-wide">DYUTI</span> &mdash;{' '}
              <span className="text-white">D</span>evelopmental{' '}
              <span className="text-white">Y</span>earnings for a{' '}
              <span className="text-white">U</span>nited and{' '}
              <span className="text-white">T</span>ransformed{' '}
              <span className="text-white">I</span>ndia
            </p>
          </div>

          {/* Legacy Paragraph */}
          <p className="text-[16px] sm:text-[17px] text-[#94A3B8] leading-[1.8] font-sans">
            Rajagiri with its vision of &lsquo;becoming a centre of excellence in learning for enriching and fulfilling LIFE&rsquo; has been regularly providing an annual forum for deliberations on vital issues of development from a Rights perspective. This annual series of deliberation (started in 1998) is named DYUTI meaning &lsquo;Spark of Life&rsquo;. DYUTI 2027 is the 26th in its series.
          </p>
        </div>

        {/* ── 03: BACKGROUND — 3-PILLAR STRUCTURED LAYOUT ── */}
        <div className="space-y-8">
          <div className="pb-2 border-b border-[#1E353B]">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Background
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

            {/* Pillar 1: UN 2030 Agenda */}
            <div className="rounded-[20px] bg-[#0C181B] border border-[#1E353B] hover:border-[#D4F933]/50 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_0_25px_rgba(212,249,51,0.1)] transition-all duration-300">
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-[6px] bg-[#D4F933]/15 border border-[#D4F933]/30 text-[#D4F933]">
                  01
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  The UN 2030 Agenda
                </h3>
                <p className="text-[14.5px] text-[#94A3B8] leading-[1.75] font-sans">
                  The adoption of the 2030 Agenda for Sustainable Development by the United Nations marked a global commitment to achieving the 17 Sustainable Development Goals (SDGs) through integrated social, economic, and environmental action. However, recent global reports indicate that progress has slowed due to climate change, widening inequalities, economic uncertainties, conflicts, and public health challenges, emphasizing the need for renewed collaboration and innovative, community-driven solutions.
                </p>
              </div>
            </div>

            {/* Pillar 2: The Indian Context */}
            <div className="rounded-[20px] bg-[#0C181B] border border-[#1E353B] hover:border-[#D4F933]/50 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_0_25px_rgba(212,249,51,0.1)] transition-all duration-300">
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-[6px] bg-[#D4F933]/15 border border-[#D4F933]/30 text-[#D4F933]">
                  02
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  The Indian Context
                </h3>
                <p className="text-[14.5px] text-[#94A3B8] leading-[1.75] font-sans">
                  In India, while notable progress has been made towards several SDGs, challenges such as poverty, inequality, unemployment, climate vulnerability, gender disparities, environmental degradation, and unequal access to quality education, healthcare, and social protection continue to hinder inclusive development. Addressing these complex issues requires coordinated efforts among governments, academia, civil society, communities, industry, development professionals and social entrepreneurs.
                </p>
              </div>
            </div>

            {/* Pillar 3: Role of Social Work */}
            <div className="rounded-[20px] bg-[#0C181B] border border-[#1E353B] hover:border-[#D4F933]/50 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_0_25px_rgba(212,249,51,0.1)] transition-all duration-300">
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-[6px] bg-[#D4F933]/15 border border-[#D4F933]/30 text-[#D4F933]">
                  03
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  Social Work&rsquo;s Mission
                </h3>
                <p className="text-[14.5px] text-[#94A3B8] leading-[1.75] font-sans">
                  Social work plays a pivotal role in advancing sustainable development through advocacy, community engagement, policy action, interdisciplinary collaboration, and evidence-based practice. DYUTI 2027 seeks to provide a platform for sharing innovative practices, indigenous knowledge, research, and partnerships that contribute to achieving the Sustainable Development Goals while strengthening resilient, inclusive, and sustainable communities.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
