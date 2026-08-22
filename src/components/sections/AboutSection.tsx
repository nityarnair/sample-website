import React from 'react';
import { Sparkles, BookOpen, ShieldCheck, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f8fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Origins & Vision"
          title="About DYUTI — Spark of Life"
          subtitle="Annual deliberations on vital issues of human development and social justice from a Rights perspective since 1998."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-dyuti-sm">
              <h3 className="text-xl font-display font-bold text-[#0f4c47] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Developmental Yearnings for a United & Transformed India</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed m-0">
                Rajagiri, guided by its vision of <em>"becoming a centre of excellence in learning for enriching and fulfilling LIFE,"</em> has regularly provided an annual forum for scholarly deliberations on vital issues of development. This annual series of deliberations (started in 1998) is named <strong>DYUTI</strong>, meaning <strong>‘Spark of Life’</strong>. DYUTI 2027 is the <strong>26th in its series</strong>.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-dyuti-sm">
              <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                Background & The UN 2030 Agenda
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                The adoption of the 2030 Agenda for Sustainable Development by the United Nations marked a global commitment to achieving the 17 Sustainable Development Goals (SDGs). Despite progress, persistent challenges such as poverty, inequality, climate vulnerability, and unequal access to healthcare and quality education necessitate coordinated efforts among governments, academia, civil society, and development professionals.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                Social work plays a pivotal role in advancing sustainable development through advocacy, community engagement, policy action, interdisciplinary collaboration, and evidence-based practice.
              </p>
            </div>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <Card hover={false} className="bg-gradient-to-br from-white to-[#f0faf8] border-[#d5eee9]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0f4c47] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1">Scholarly Dialogue</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
                    Rigorous peer-reviewed paper presentations, poster sessions, and book chapter publications in Scopus-indexed proceedings.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover={false} className="bg-gradient-to-br from-white to-[#fffbeb] border-[#fef3c7]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#d97706] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1">Multi-Sectoral Partnerships</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
                    Engaging academicians, NGO delegates, CSR leaders, practitioners, and student changemakers across India and internationally.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover={false} className="bg-gradient-to-br from-white to-[#f1f5f9] border-[#e2e8f0]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1">28 Years of Global Tie-Ups</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
                    Rajagiri has official agreements with 60+ partner universities across 30 countries fostering international student exchanges.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
