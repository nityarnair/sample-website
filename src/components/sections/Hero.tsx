import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, FileText, Download, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/cards/StatCard';
import { CONFERENCE_DATA } from '@/data/conference';

export const Hero: React.FC = () => {
  // Live Countdown Timer to Abstract Submission Deadline (September 25, 2026)
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-25T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#02100e] via-[#062420] to-[#041412] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden border-b border-amber-500/20">
      {/* Ambient Lighting & Luxury Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:36px_36px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-8">
            {/* Eyebrow badge */}
            <div className="mb-5 flex items-center gap-3 flex-wrap">
              <Badge variant="gold-luxury" className="gap-2 px-4 py-1.5 shadow-gold-glow">
                <Award className="w-4 h-4 text-amber-300" />
                <span className="font-cinzel tracking-widest">{CONFERENCE_DATA.edition}</span>
              </Badge>
              <Badge variant="emerald-luxury" className="gap-1.5 px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Call For Papers Open</span>
              </Badge>
            </div>

            {/* Conference Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
                {CONFERENCE_DATA.name}
              </span>
            </h1>

            {/* Conference Theme with Editorial Serif Italic */}
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border-l-4 border-amber-400 backdrop-blur-md">
              <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-amber-200 leading-snug m-0">
                "{CONFERENCE_DATA.theme}"
              </p>
            </div>

            {/* Short Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8 font-normal">
              An international academic symposium organized by <strong>Rajagiri College of Social Sciences (Autonomous)</strong> uniting global scholars, researchers, policymakers, and practitioners to champion sustainable community empowerment and social transformation.
            </p>

            {/* Meta details (Dates & Venue) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 mb-8 pb-8 border-b border-amber-500/20">
              <div className="flex items-center gap-2.5 bg-white/5 px-3.5 py-2 rounded-xl border border-amber-500/20">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-amber-200">Abstract Deadline: 25 Sept 2026</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 px-3.5 py-2 rounded-xl border border-emerald-500/20">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rajagiri Valley Campus, Kalamassery, Kochi</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                asLink
                href={CONFERENCE_DATA.links.registrationForm}
                icon={<Sparkles className="w-5 h-5 text-slate-950" />}
                className="shadow-gold-glow"
              >
                Register For Conference
              </Button>
              <Button
                variant="outline"
                size="lg"
                asLink
                href="/call_for_papers"
                icon={<FileText className="w-5 h-5" />}
              >
                Call for Papers
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asLink
                href={CONFERENCE_DATA.links.brochurePdf}
                icon={<Download className="w-5 h-5" />}
              >
                Brochure (PDF)
              </Button>
            </div>
          </div>

          {/* Right Column: Live Countdown Box & Key Deadlines Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#082a26]/95 to-[#041513]/95 border-2 border-amber-400/30 backdrop-blur-2xl shadow-luxury-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-amber-300 font-cinzel text-xs uppercase tracking-widest mb-4">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Submission Closes In</span>
              </div>

              {/* Countdown Digits */}
              <div className="grid grid-cols-4 gap-2.5 mb-6 text-center">
                <div className="p-3 rounded-xl bg-black/40 border border-amber-400/25">
                  <span className="block text-2xl sm:text-3xl font-cinzel font-bold text-amber-300">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Days</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-amber-400/25">
                  <span className="block text-2xl sm:text-3xl font-cinzel font-bold text-amber-300">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Hours</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-amber-400/25">
                  <span className="block text-2xl sm:text-3xl font-cinzel font-bold text-amber-300">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Mins</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-amber-400/25">
                  <span className="block text-2xl sm:text-3xl font-cinzel font-bold text-amber-300">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Secs</span>
                </div>
              </div>

              {/* Key Milestones List */}
              <h4 className="text-xs uppercase tracking-wider text-slate-300 font-display font-bold mb-3 border-b border-white/10 pb-2">
                Important Milestones
              </h4>
              <div className="space-y-3 text-xs">
                {CONFERENCE_DATA.importantDates.slice(0, 3).map((milestone) => (
                  <div key={milestone.label} className="flex items-center justify-between gap-2">
                    <span className="text-slate-300">{milestone.label}</span>
                    <span className="font-semibold text-amber-300 shrink-0 font-mono">
                      {milestone.date}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-amber-500/20 text-center">
                <a
                  href={CONFERENCE_DATA.links.cmtSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Submit via Microsoft CMT</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-amber-500/20">
          {CONFERENCE_DATA.stats.slice(0, 4).map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

