import React from 'react';

/**
 * ConferenceOverview Component
 * Clean, typography-focused template containing the exact contents from dyuti.in:
 * - Theme Narrative
 * - About DYUTI (History, Acronym Expansion, 26th series)
 * - Background (3 Pillars: The UN 2030 Agenda, The Indian Context, Social Work's Mission)
 */
export const ConferenceOverview: React.FC = () => {
  return (
    <section
      id="overview"
      className="py-16 sm:py-24 bg-white text-[#0B1220] border-b border-[#D9DEE5] relative overflow-hidden"
      aria-label="DYUTI 2027 Conference Theme Narrative, About DYUTI and Background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20">
        
        {/* ── 01: THEME NARRATIVE ── */}
        <div className="rounded-[28px] bg-gradient-to-br from-[#071A33] via-[#0D284D] to-[#12345B] text-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(7,26,51,0.15)] border border-white/10 overflow-hidden">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#93C5FD] text-xs font-sans font-bold uppercase tracking-wider">
              <span>About The Theme</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug max-w-4xl">
              Deliberating Innovative &amp; Collaborative Approaches for Sustainable Development
            </h2>

            <div className="w-16 h-1 bg-[#3B82F6] rounded-full" />

            <p className="text-[15.5px] sm:text-[16.5px] text-white/85 leading-relaxed font-sans font-normal max-w-4xl pt-1">
              The 2027 DYUTI National Conference, themed &ldquo;Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership,&rdquo; brings together academicians, researchers, practitioners, policymakers, students, and development professionals to deliberate on innovative and collaborative approaches for sustainable development. Aligned with the 2030 Agenda for Sustainable Development and its vision of &ldquo;Leaving No One Behind,&rdquo; the conference highlights the vital role of social work in promoting social justice, inclusive development, community empowerment, and sustainable solutions. Through scholarly dialogue and knowledge exchange, DYUTI 2027 aims to strengthen partnerships and advance resilient, equitable, and sustainable communities.
            </p>
          </div>
        </div>

        {/* ── 02: ABOUT DYUTI ── */}
        <div className="rounded-[28px] bg-[#F8FAFC] border border-[#D9DEE5] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E2E8F0] mb-8">
            <div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#2563EB] mb-2">
                <span>Conference Heritage</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#071A33] tracking-tight">
                About DYUTI
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#071A33] text-xs font-semibold shadow-sm">
                Founded in 1998
              </span>
              <span className="px-4 py-1.5 rounded-full bg-[#E8F0F7] border border-blue-200 text-[#2563EB] text-xs font-bold shadow-sm">
                26th in its series
              </span>
            </div>
          </div>

          {/* Acronym Expansion Box */}
          <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#E2E8F0] shadow-sm mb-6">
            <p className="text-lg sm:text-xl font-heading font-bold text-[#071A33] leading-snug">
              <span className="text-[#2563EB] tracking-wide">DYUTI</span> &mdash;{' '}
              <span className="text-[#071A33]">D</span>evelopmental{' '}
              <span className="text-[#071A33]">Y</span>earnings for a{' '}
              <span className="text-[#071A33]">U</span>nited and{' '}
              <span className="text-[#071A33]">T</span>ransformed{' '}
              <span className="text-[#071A33]">I</span>ndia
            </p>
          </div>

          {/* Legacy Paragraph */}
          <p className="text-[16px] sm:text-[17px] text-[#475467] leading-[1.8] font-sans">
            Rajagiri with its vision of &lsquo;becoming a centre of excellence in learning for enriching and fulfilling LIFE&rsquo; has been regularly providing an annual forum for deliberations on vital issues of development from a Rights perspective. This annual series of deliberation (started in 1998) is named DYUTI meaning &lsquo;Spark of Life&rsquo;. DYUTI 2027 is the 26th in its series.
          </p>
        </div>

        {/* ── 03: BACKGROUND — 3-PILLAR STRUCTURED LAYOUT ── */}
        <div className="space-y-8">
          <div className="pb-2 border-b border-[#E2E8F0]">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#071A33] tracking-tight">
              Background
            </h2>
          </div>

          {/* 3 Pillar Cards for the 3 Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Pillar 1: UN 2030 Agenda */}
            <div className="rounded-[24px] bg-[#F8FAFC] border border-[#D9DEE5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#E8F0F7] text-[#2563EB]">
                  01
                </span>
                <h3 className="font-heading font-bold text-lg text-[#071A33]">
                  The UN 2030 Agenda
                </h3>
                <p className="text-[14.5px] text-[#475467] leading-[1.75] font-sans">
                  The adoption of the 2030 Agenda for Sustainable Development by the United Nations marked a global commitment to achieving the 17 Sustainable Development Goals (SDGs) through integrated social, economic, and environmental action. However, recent global reports indicate that progress has slowed due to climate change, widening inequalities, economic uncertainties, conflicts, and public health challenges, emphasizing the need for renewed collaboration and innovative, community-driven solutions.
                </p>
              </div>
            </div>

            {/* Pillar 2: The Indian Context */}
            <div className="rounded-[24px] bg-[#F8FAFC] border border-[#D9DEE5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#E8F0F7] text-[#2563EB]">
                  02
                </span>
                <h3 className="font-heading font-bold text-lg text-[#071A33]">
                  The Indian Context
                </h3>
                <p className="text-[14.5px] text-[#475467] leading-[1.75] font-sans">
                  In India, while notable progress has been made towards several SDGs, challenges such as poverty, inequality, unemployment, climate vulnerability, gender disparities, environmental degradation, and unequal access to quality education, healthcare, and social protection continue to hinder inclusive development. Addressing these complex issues requires coordinated efforts among governments, academia, civil society, communities, industry, development professionals and social entrepreneurs.
                </p>
              </div>
            </div>

            {/* Pillar 3: Role of Social Work */}
            <div className="rounded-[24px] bg-[#F8FAFC] border border-[#D9DEE5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#E8F0F7] text-[#2563EB]">
                  03
                </span>
                <h3 className="font-heading font-bold text-lg text-[#071A33]">
                  Social Work&rsquo;s Mission
                </h3>
                <p className="text-[14.5px] text-[#475467] leading-[1.75] font-sans">
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
