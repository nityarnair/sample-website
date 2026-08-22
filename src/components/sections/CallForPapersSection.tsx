import React from 'react';
import { Sparkles, FileText, ExternalLink, Calendar, CheckCircle2, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapersSection: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-28 bg-[#041412] relative overflow-hidden border-t border-amber-500/20"
      aria-labelledby="call-for-papers-heading"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#082a26]/95 via-[#061f1c]/95 to-[#031513]/98 border-2 border-amber-400/30 backdrop-blur-2xl shadow-luxury-lg relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-cinzel font-bold tracking-widest uppercase mb-4 shadow-gold-glow">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span id="call-for-papers-heading">CALL FOR PAPERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight leading-tight mb-5">
                Submit Your Abstract &amp; Research
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Academicians, researchers, practitioners, policymakers, students, and development professionals are invited to submit original research abstracts and field practice models. Selected peer-reviewed papers will be considered for publication in <strong>Scopus-indexed</strong> volumes and the official conference proceedings with ISBN.
              </p>

              {/* Verified Key Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-200 mb-8 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 bg-black/40 p-3 rounded-xl border border-amber-500/20">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Abstract Submission:</strong> 25 September 2026
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-black/40 p-3 rounded-xl border border-emerald-500/20">
                  <BookMarked className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Publication:</strong> Scopus Book Chapter Volumes
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  asLink
                  href="/call_for_papers"
                  icon={<FileText className="w-5 h-5 text-slate-950" />}
                >
                  View Call for Papers
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asLink
                  href={CONFERENCE_DATA.links.cmtSubmission}
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Submit Paper (Microsoft CMT)
                </Button>
              </div>
            </div>

            {/* Right Card: Quick Review Highlights */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-black/50 border border-amber-400/20 space-y-4">
                <h4 className="font-cinzel font-bold text-amber-200 text-sm tracking-wider uppercase border-b border-white/10 pb-2 m-0">
                  Submission Features
                </h4>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Rigorous Double-Blind Peer Review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Oral &amp; Poster Presentation Tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Best Paper Awards across Sub-Themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Conference Proceedings with Registered ISBN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
