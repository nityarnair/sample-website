import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ThemeGrid } from '@/components/sections/ThemeGrid';
import { CtaSection } from '@/components/sections/CtaSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Award, GraduationCap, Building2, ArrowRight, BookMarked, CheckCircle2 } from 'lucide-react';


export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#041412] text-slate-100">
      {/* 1. Hero Section with Live Countdown & Highlights */}
      <Hero />

      {/* 2. Conference Background & About DYUTI Bento Grid */}
      <AboutSection />

      {/* 3. Conference Major Sub-Themes with Interactive Filtering */}
      <ThemeGrid />

      {/* 4. Publication Opportunities & Academic Output Spotlight */}
      <section className="py-20 sm:py-28 bg-[#03110f] border-b border-amber-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <SectionHeading
            eyebrow="Scholarly Dissemination"
            eyebrowVariant="gold-luxury"
            title="Publication & Proceedings"
            subtitle="Providing authors with exceptional peer-reviewed publication avenues in prestigious international book volumes."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-5">
                  <BookMarked className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white mb-3">
                  Scopus Indexed Volumes
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Selected peer-reviewed full papers presented at the conference will be published as edited book volumes in Scopus-indexed publisher series.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Rigorous Double-Blind Review</span>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white mb-3">
                  Conference Proceedings (ISBN)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  All accepted and registered abstracts will be published in the official DYUTI 2027 Conference Abstract Book with registered ISBN.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Official ISBN Registration</span>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white mb-3">
                  Best Paper Awards
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Distinguished research presentations across tracks will be awarded prestigious DYUTI 2027 Best Paper and Young Researcher certificates and mementos.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Track-wise Recognition</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="gold" asLink href="/call_for_papers" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Author &amp; Submission Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Host Institution Luxury Showcase */}
      <section className="py-20 sm:py-28 bg-[#041412] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <SectionHeading
            eyebrow="Host Institution"
            eyebrowVariant="gold-luxury"
            title="Rajagiri College of Social Sciences"
            subtitle="Autonomous institution accredited with NAAC A++ (CGPA 3.83/4), ranked #12 in India (NIRF 2025) and #1 in Kerala (KIRF 2025)."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-5 shadow-gold-glow">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white mb-2">
                  NIRF #12 &amp; NAAC A++
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Consistently recognized among the premier colleges in the nation with the highest NAAC CGPA (3.83/4) in South India.
                </p>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-5 shadow-gold-glow">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white mb-2">
                  Social Work Pioneer
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Pioneering social work education, field action projects, and community engagement in India for over 7 decades.
                </p>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-5 shadow-gold-glow">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white mb-2">
                  Global Partnerships
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Active academic cooperation with over 60 international universities across Australia, Europe, UK, and USA.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" asLink href="/rajagiri" icon={<ArrowRight className="w-4 h-4" />}>
              Read More About Rajagiri College
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Dual Call-to-Action */}
      <CtaSection />
    </div>
  );
};

