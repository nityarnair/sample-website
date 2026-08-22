import React from 'react';
import { Sparkles, Target, Compass, ArrowRight } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';
import { Button } from '@/components/ui/Button';

export const ConferenceTheme: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-28 bg-gradient-to-b from-[#02100e] via-[#05201c] to-[#031311] border-y border-amber-500/25 relative overflow-hidden text-white"
      aria-labelledby="conference-theme-heading"
    >
      {/* Restrained luxury decorative lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(217,119,6,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        {/* Small label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-cinzel font-bold tracking-widest uppercase mb-8 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span id="conference-theme-heading">CONFERENCE THEME</span>
        </div>

        {/* Large Serif / Italic Theme Text */}
        <div className="relative max-w-4xl mx-auto my-4 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#082a26]/90 via-[#061f1c]/90 to-[#031412]/95 border-2 border-amber-400/30 backdrop-blur-2xl shadow-luxury-lg">
          {/* Subtle quotation marks watermark */}
          <div className="text-amber-500/15 font-serif text-8xl sm:text-9xl leading-none absolute top-2 left-6 select-none pointer-events-none">
            “
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-amber-100 leading-snug tracking-normal relative z-10 m-0">
            "{CONFERENCE_DATA.theme}"
          </h2>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-8 relative z-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/80" />
            <span className="text-xs font-cinzel tracking-widest uppercase text-amber-300">
              UN 2030 Agenda Alignment
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/80" />
          </div>

          {/* Supporting Official Context */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto relative z-10 font-normal">
            Addressing global complexities through coordinated efforts among governments, academia, civil society, communities, industry, development professionals, and social entrepreneurs to advance resilient, inclusive, and sustainable communities.
          </p>

          {/* 3 Restrained Pillar Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-8 border-t border-amber-500/20 text-xs">
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 flex items-center justify-center gap-2">
              <Target className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200">17 Sustainable Goals</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 flex items-center justify-center gap-2">
              <Compass className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-slate-200">Community Empowerment</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200">Social Justice &amp; Inclusion</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-8">
          <Button
            variant="gold"
            asLink
            href="/call_for_papers"
            icon={<ArrowRight className="w-4 h-4 text-slate-950" />}
          >
            Explore Sub-Themes &amp; Tracks
          </Button>
        </div>
      </div>
    </section>
  );
};
