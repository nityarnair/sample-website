import React from 'react';
import { Edit3, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0a3d38] to-[#062b27] text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Card 1: Call for Papers */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-8 backdrop-blur-sm flex flex-col h-full justify-between">
            <div>
              <span className="inline-block text-xs font-display font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full mb-4">
                Research Submissions
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Call for Papers & Abstracts
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                Abstracts based on original research and practice models are invited for Oral and Poster Presentations. Selected presented abstracts will be considered for publication as Scopus-indexed book chapters.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="gold"
                asLink
                href={CONFERENCE_DATA.links.cmtSubmission}
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Submit via Microsoft CMT
              </Button>
              <Button
                variant="outline"
                asLink
                href="/call_for_papers"
                className="text-white border-white/50 hover:bg-white/15"
                icon={<FileText className="w-4 h-4" />}
              >
                View Guidelines
              </Button>
            </div>
          </div>

          {/* Card 2: Conference Registration */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-8 backdrop-blur-sm flex flex-col h-full justify-between">
            <div>
              <span className="inline-block text-xs font-display font-bold uppercase tracking-wider text-emerald-300 bg-emerald-400/20 px-3 py-1 rounded-full mb-4">
                Delegate Participation
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Register for DYUTI 2027
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                Join academic leaders, students, and practitioners from across India and worldwide. Delegate registration fee includes full access to all academic sessions, kit, and lunch on both conference days.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="gold"
                asLink
                href={CONFERENCE_DATA.links.registrationForm}
                icon={<Edit3 className="w-4 h-4" />}
              >
                Online Registration Form
              </Button>
              <Button
                variant="outline"
                asLink
                href="/accomodation"
                className="text-white border-white/50 hover:bg-white/15"
              >
                Accommodation Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
