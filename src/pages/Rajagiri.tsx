import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Globe2, CheckCircle2, ArrowRight, Building2, Award, BookOpen, GraduationCap } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Rajagiri: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#F8F8F6] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          sectionNumber="08"
          eyebrow="Host Institution Profile"
          eyebrowVariant="blue"
          title="Rajagiri College of Social Sciences (Autonomous)"
          subtitle="Learning for Enriching and Fulfilling LIFE — A premier autonomous institution accredited with NAAC A++ (CGPA 3.83/4.0) and ranked #12 in India."
        />

        {/* Hero Institutional Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          <div className="lg:col-span-7 space-y-4 text-[#667085] leading-relaxed font-sans font-normal">
            <p className="text-base sm:text-lg text-[#101828]/90">
              <strong className="text-[#071A33]">Rajagiri College of Social Sciences (Autonomous)</strong> was established in 1955 under the CMI (Carmelites of Mary Immaculate) congregation. Over seven decades, Rajagiri has evolved into a nationally and globally acclaimed centre of academic excellence, renowned for empirical research, community development laboratories, and value-driven leadership.
            </p>
            <p className="text-sm sm:text-base text-[#667085]">
              The Department of Social Work at Rajagiri has pioneered professional social work education in India, blending rigorous pedagogical methodologies with live field action projects, child rights helplines, rural development camps, disaster response networks, and clinical health interventions.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#D9DEE5] p-6 rounded-sm text-center shadow-subtle">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#071A33] mb-1">#12</div>
              <div className="text-xs font-semibold text-[#667085] font-sans">NIRF India 2025</div>
            </div>
            <div className="bg-white border border-[#D9DEE5] p-6 rounded-sm text-center shadow-subtle">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#2563EB] mb-1">#1</div>
              <div className="text-xs font-semibold text-[#667085] font-sans">KIRF Kerala 2025</div>
            </div>
            <div className="bg-white border border-[#D9DEE5] p-6 rounded-sm text-center shadow-subtle">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#071A33] mb-1">3.83</div>
              <div className="text-xs font-semibold text-[#667085] font-sans">NAAC A++ CGPA</div>
            </div>
            <div className="bg-white border border-[#D9DEE5] p-6 rounded-sm text-center shadow-subtle">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#2563EB] mb-1">60+</div>
              <div className="text-xs font-semibold text-[#667085] font-sans">Global Alliances</div>
            </div>
          </div>
        </div>

        {/* 28 Years of Internationalisation */}
        <div className="mb-14 rounded-sm p-8 sm:p-10 border border-[#D9DEE5] bg-white shadow-subtle">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#071A33] m-0">
                28 Years of Global Academic Alliances
              </h3>
              <p className="text-xs text-[#2563EB] font-sans font-semibold uppercase tracking-wider m-0">Internationalisation Since 1998</p>
            </div>
          </div>
          <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mb-6 font-sans font-normal">
            Rajagiri initiated its internationalisation roadmap in 1998 through structured student and faculty exchanges, joint research projects, dual degree pathways, and international study tours. Today, Rajagiri maintains active institutional tie-ups across Australia, Belgium, Canada, France, Germany, Japan, New Zealand, Norway, Switzerland, the United Kingdom, and the United States.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#101828]">
            <div className="flex items-center gap-2.5 p-3.5 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>International Student Exchanges</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Joint Global Research Seminars</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Faculty Immersion Programs</span>
            </div>
          </div>
        </div>

        {/* Official Portal Action */}
        <div className="text-center bg-[#071A33] text-white border border-white/10 rounded-sm p-10 shadow-editorial">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-white/10 text-white mb-4">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-3">Explore RCSS Official Portal</h3>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-sans font-normal leading-relaxed">
            Discover academic programs, research centers, faculty publications, and community development projects at Rajagiri College of Social Sciences.
          </p>
          <a
            href={CONFERENCE_DATA.links.rajagiriPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-white text-[#071A33] hover:bg-[#EFF6FF] font-sans font-semibold text-xs tracking-wider uppercase shadow-subtle transition-all"
          >
            <span>Visit rcss.rajagiri.edu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
