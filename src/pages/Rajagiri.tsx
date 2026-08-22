import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Globe2, CheckCircle2, ArrowRight, Award, Sparkles, Building2 } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Rajagiri: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#041412] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Host Institution Profile"
          eyebrowVariant="gold-luxury"
          title="Rajagiri College of Social Sciences (Autonomous)"
          subtitle="Learning for Enriching and Fulfilling LIFE — A premier autonomous institution accredited with NAAC A++ (CGPA 3.83/4) and ranked #12 in India."
          dark
        />

        {/* Hero Institutional Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed font-normal">
            <p className="text-base sm:text-lg">
              <strong className="text-amber-200">Rajagiri College of Social Sciences (Autonomous)</strong> was established in 1955 under the CMI (Carmelites of Mary Immaculate) congregation. Over seven decades, Rajagiri has evolved into a nationally and globally acclaimed centre of academic excellence, renowned for its empirical research, community development laboratories, and value-driven leadership.
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              The Department of Social Work at Rajagiri has pioneered professional social work education in India, blending rigorous pedagogical methodologies with live field action projects, child rights helplines, rural development camps, disaster response networks, and clinical health interventions.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-b from-[#082a26]/95 to-[#041513]/95 border border-amber-500/30 text-white p-6 rounded-2xl text-center shadow-gold-glow">
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-amber-300 mb-1">#12</div>
              <div className="text-xs font-semibold text-slate-300">NIRF India Ranking 2025</div>
            </div>
            <div className="bg-gradient-to-b from-[#082a26]/95 to-[#041513]/95 border border-emerald-500/30 text-white p-6 rounded-2xl text-center shadow-emerald-glow">
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-emerald-300 mb-1">#1</div>
              <div className="text-xs font-semibold text-slate-300">KIRF Kerala Ranking 2025</div>
            </div>
            <div className="bg-gradient-to-b from-[#082a26]/95 to-[#041513]/95 border border-amber-500/30 text-white p-6 rounded-2xl text-center shadow-gold-glow">
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-amber-300 mb-1">3.83</div>
              <div className="text-xs font-semibold text-slate-300">NAAC A++ CGPA</div>
            </div>
            <div className="bg-gradient-to-b from-[#082a26]/95 to-[#041513]/95 border border-emerald-500/30 text-white p-6 rounded-2xl text-center shadow-emerald-glow">
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-emerald-300 mb-1">60+</div>
              <div className="text-xs font-semibold text-slate-300">Global University Alliances</div>
            </div>
          </div>
        </div>

        {/* 28 Years of Internationalisation */}
        <div className="mb-14 rounded-3xl p-8 sm:p-10 border border-amber-500/30 bg-gradient-to-br from-[#082a26]/90 via-[#051c19]/95 to-[#031311]/95 backdrop-blur-xl shadow-luxury-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white m-0">
                28 Years of Global Academic Alliances
              </h3>
              <p className="text-xs text-amber-300 font-display m-0">Internationalisation Since 1998</p>
            </div>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            Rajagiri initiated its internationalisation roadmap in 1998 through structured student and faculty exchanges, joint research projects, dual degree pathways, and international study tours. Today, Rajagiri maintains active institutional tie-ups across Australia, Belgium, Canada, France, Germany, Japan, New Zealand, Norway, Switzerland, the United Kingdom, and the United States.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-black/30 border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>International Student Exchanges</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-black/30 border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Joint Global Research Seminars</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-black/30 border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Faculty Immersion Programs</span>
            </div>
          </div>
        </div>

        {/* Official Portal Action */}
        <div className="text-center bg-gradient-to-r from-[#082a26] via-[#051c19] to-[#082a26] border border-amber-500/30 text-white rounded-3xl p-10 shadow-luxury-md">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 mb-4 shadow-gold-glow">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="font-cinzel font-bold text-2xl sm:text-3xl mb-3">Explore RCSS Official Portal</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-normal">
            Discover academic programs, research centers, faculty publications, and community development projects at Rajagiri College of Social Sciences.
          </p>
          <a
            href={CONFERENCE_DATA.links.rajagiriPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-display font-bold text-sm tracking-wide uppercase shadow-gold-glow transition-all"
          >
            <span>Visit rcss.rajagiri.edu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

