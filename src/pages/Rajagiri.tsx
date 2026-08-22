import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Rajagiri: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Institution Profile"
          title="Rajagiri College of Social Sciences (Autonomous)"
          subtitle="Learning for Enriching and Fulfilling LIFE — A premier autonomous institution accredited with NAAC A++ (CGPA 3.83/4)."
        />

        {/* Hero Institutional Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
            <p className="text-base sm:text-lg">
              <strong>Rajagiri College of Social Sciences (Autonomous)</strong> was established in 1955 under the CMI (Carmelites of Mary Immaculate) congregation. Over seven decades, Rajagiri has grown into a globally reputed centre of excellence in higher education, renowned for its academic rigor, research output, community interventions, and value-driven leadership.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              The Department of Social Work at Rajagiri has pioneered professional social work education in Kerala, combining classroom teaching with live field action laboratories, rural camps, disaster rehabilitation, tribal development initiatives, and child rights advocacy.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#0f4c47] text-white p-5 rounded-2xl text-center">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-amber-400 mb-1">#12</div>
              <div className="text-xs sm:text-sm font-semibold">NIRF India Ranking 2025</div>
            </div>
            <div className="bg-[#1e293b] text-white p-5 rounded-2xl text-center">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-emerald-400 mb-1">#1</div>
              <div className="text-xs sm:text-sm font-semibold">KIRF Kerala Ranking 2025</div>
            </div>
            <div className="bg-[#d97706] text-white p-5 rounded-2xl text-center">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1">3.83</div>
              <div className="text-xs sm:text-sm font-semibold">NAAC A++ CGPA</div>
            </div>
            <div className="bg-[#062b27] text-white p-5 rounded-2xl text-center">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-amber-300 mb-1">60+</div>
              <div className="text-xs sm:text-sm font-semibold">Global Uni Partners</div>
            </div>
          </div>
        </div>

        {/* 28 Years of Internationalisation */}
        <Card className="mb-12 border-[#d5eee9] bg-gradient-to-br from-white to-[#f0faf8]">
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="w-6 h-6 text-[#0f4c47]" />
            <h3 className="font-display font-bold text-xl text-[#0f4c47] m-0">
              28 Years of Internationalisation
            </h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
            Rajagiri commenced its internationalisation journey in 1998 through systematic student and faculty exchanges, joint research projects, dual degree programs, and international study tours. Today, Rajagiri maintains active institutional tie-ups across Australia, Belgium, Canada, France, Germany, Japan, New Zealand, Norway, Switzerland, the United Kingdom, and the United States.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0f4c47]" />
              <span>International Student Exchanges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0f4c47]" />
              <span>Joint Global Research Seminars</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0f4c47]" />
              <span>Faculty Immersion Programs</span>
            </div>
          </div>
        </Card>

        {/* Official Portal Action */}
        <div className="text-center bg-slate-900 text-white rounded-2xl p-8">
          <h3 className="font-display font-bold text-2xl mb-2">Explore RCSS Official Portal</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Discover academic programs, research centers, faculty profiles, and community initiatives at Rajagiri College of Social Sciences.
          </p>
          <a
            href={CONFERENCE_DATA.links.rajagiriPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f4c47] hover:bg-[#0a3d38] text-white font-display font-bold text-sm transition-all"
          >
            <span>Visit rcss.rajagiri.edu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
