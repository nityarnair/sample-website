import React from 'react';
import { Calendar, MapPin, CheckCircle, FileText, Download, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/cards/StatCard';
import { CONFERENCE_DATA } from '@/data/conference';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#062b27] via-[#0f4c47] to-[#13605a] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden">
      {/* Background Subtle Radial Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24998e]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="mb-4">
            <Badge variant="white" className="gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONFERENCE_DATA.edition}</span>
            </Badge>
          </div>

          {/* Conference Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight mb-4">
            {CONFERENCE_DATA.name}
          </h1>

          {/* Conference Theme */}
          <p className="text-xl sm:text-2xl font-serif italic text-amber-300 leading-snug mb-6">
            "{CONFERENCE_DATA.theme}"
          </p>

          {/* Short Narrative */}
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-3xl mb-8">
            An international platform bringing together academicians, researchers, practitioners, and policymakers to advance social justice, resilient communities, and the UN 2030 Agenda for Sustainable Development.
          </p>

          {/* Meta details (Dates & Venue) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-200 mb-8 pb-8 border-b border-white/15">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold">Abstracts Due: 25 September 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Rajagiri College (Autonomous), Kalamassery, Kochi</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              variant="gold"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.registrationForm}
              icon={<CheckCircle className="w-5 h-5" />}
            >
              Register Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              asLink
              href="/call_for_papers"
              className="text-white border-white/50 hover:bg-white/10"
              icon={<FileText className="w-5 h-5" />}
            >
              Call for Papers
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.brochurePdf}
              className="text-white hover:bg-white/10"
              icon={<Download className="w-5 h-5" />}
            >
              Brochure
            </Button>
          </div>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-8 border-t border-white/10">
          {CONFERENCE_DATA.stats.slice(0, 4).map((stat) => (
            <StatCard key={stat.label} stat={stat} dark />
          ))}
        </div>
      </div>
    </section>
  );
};
