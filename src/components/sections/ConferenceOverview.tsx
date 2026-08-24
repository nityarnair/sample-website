import React from 'react';
import { Sparkles, Globe } from 'lucide-react';

/**
 * ConferenceOverview Component
 * Contains the EXACT content from dyuti.in:
 * 1. DYUTI 2027 Theme & Introductory Statement
 * 2. About DYUTI (Acronym & Origins since 1998)
 * 3. Background (UN 2030 Agenda, Indian Context, Role of Social Work)
 */
export const ConferenceOverview: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-24 bg-white text-[#0B1220] border-b border-[#D9DEE5]"
      aria-label="About DYUTI 2027 and Background"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* ── 01: DYUTI 2027 SECTION ── */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-0.5 w-8 bg-[#2563EB]" />
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#2563EB] font-bold">
              National Conference
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A33] tracking-tight mb-4">
            DYUTI 2027
          </h1>

          <div className="w-full h-px bg-[#D9DEE5] mb-8" />

          {/* Theme highlight card */}
          <div className="p-6 sm:p-8 rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#2563EB]" />
            <p className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold mb-2">
              Conference Theme
            </p>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#071A33] leading-snug">
              &ldquo;Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership&rdquo;
            </h2>
          </div>

          {/* Official DYUTI 2027 Description Paragraph */}
          <p className="text-[16px] sm:text-[17px] text-[#334155] leading-[1.8] font-sans font-normal">
            The 2027 DYUTI National Conference, themed &ldquo;Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership,&rdquo; brings together academicians, researchers, practitioners, policymakers, students, and development professionals to deliberate on innovative and collaborative approaches for sustainable development. Aligned with the 2030 Agenda for Sustainable Development and its vision of &ldquo;Leaving No One Behind,&rdquo; the conference highlights the vital role of social work in promoting social justice, inclusive development, community empowerment, and sustainable solutions. Through scholarly dialogue and knowledge exchange, DYUTI 2027 aims to strengthen partnerships and advance resilient, equitable, and sustainable communities.
          </p>
        </div>

        {/* ── 02: ABOUT DYUTI ── */}
        <div className="mb-14 sm:mb-18 p-8 sm:p-10 rounded-[24px] bg-[#F8FAFC] border border-[#D9DEE5] shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F0F7] flex items-center justify-center text-[#2563EB]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#071A33] tracking-tight">
              About DYUTI
            </h2>
          </div>

          <div className="mt-4 mb-6 pb-5 border-b border-[#E2E8F0]">
            <p className="text-[17px] sm:text-[19px] font-sans font-bold text-[#071A33] leading-snug">
              <span className="text-[#2563EB]">DYUTI</span> &mdash;{' '}
              <span className="text-[#071A33]">D</span>evelopmental{' '}
              <span className="text-[#071A33]">Y</span>earnings for a{' '}
              <span className="text-[#071A33]">U</span>nited and{' '}
              <span className="text-[#071A33]">T</span>ransformed{' '}
              <span className="text-[#071A33]">I</span>ndia
            </p>
          </div>

          <p className="text-[15.5px] sm:text-[16.5px] text-[#475467] leading-[1.8] font-sans">
            Rajagiri with its vision of &lsquo;becoming a centre of excellence in learning for enriching and fulfilling LIFE&rsquo; has been regularly providing an annual forum for deliberations on vital issues of development from a Rights perspective. This annual series of deliberation (started in 1998) is named DYUTI meaning &lsquo;Spark of Life&rsquo;. DYUTI 2027 is the 26th in its series.
          </p>
        </div>

        {/* ── 03: BACKGROUND ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#E8F0F7] flex items-center justify-center text-[#2563EB]">
              <Globe className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#071A33] tracking-tight">
              Background
            </h2>
          </div>

          <div className="w-full h-px bg-[#D9DEE5] mb-6" />

          {/* Paragraph 1: 2030 Agenda */}
          <p className="text-[15.5px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-sans font-normal">
            The adoption of the 2030 Agenda for Sustainable Development by the United Nations marked a global commitment to achieving the 17 Sustainable Development Goals (SDGs) through integrated social, economic, and environmental action. However, recent global reports indicate that progress has slowed due to climate change, widening inequalities, economic uncertainties, conflicts, and public health challenges, emphasizing the need for renewed collaboration and innovative, community-driven solutions.
          </p>

          {/* Paragraph 2: India's context */}
          <p className="text-[15.5px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-sans font-normal">
            In India, while notable progress has been made towards several SDGs, challenges such as poverty, inequality, unemployment, climate vulnerability, gender disparities, environmental degradation, and unequal access to quality education, healthcare, and social protection continue to hinder inclusive development. Addressing these complex issues requires coordinated efforts among governments, academia, civil society, communities, industry, development professionals and social entrepreneurs.
          </p>

          {/* Paragraph 3: Role of Social Work & DYUTI 2027 mission */}
          <p className="text-[15.5px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-sans font-normal">
            Social work plays a pivotal role in advancing sustainable development through advocacy, community engagement, policy action, interdisciplinary collaboration, and evidence-based practice. DYUTI 2027 seeks to provide a platform for sharing innovative practices, indigenous knowledge, research, and partnerships that contribute to achieving the Sustainable Development Goals while strengthening resilient, inclusive, and sustainable communities.
          </p>
        </div>

      </div>
    </section>
  );
};
