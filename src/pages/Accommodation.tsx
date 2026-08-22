import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Hotel, Download, MapPin, Info, Sparkles, PhoneCall } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Accommodation: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#041412] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Delegate Hospitality"
          eyebrowVariant="gold-luxury"
          title="Accommodation &amp; Hotels Near Rajagiri"
          subtitle="A curated selection of luxury, executive, and budget hotels conveniently accessible from the Rajagiri Valley campus in Kochi."
          dark
        />

        {/* Advisory Luxury Banner */}
        <div className="bg-gradient-to-r from-[#082a26] via-[#093933] to-[#082a26] border-2 border-amber-400/40 rounded-3xl p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-gold-glow backdrop-blur-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0 shadow-gold-glow">
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-cinzel font-bold uppercase tracking-widest text-amber-300 mb-2">
                <Sparkles className="w-3 h-3" /> Accommodation Advisory
              </span>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white mb-2">
                Curated Delegate Hotel Directory
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl m-0 font-normal">
                Accommodation is not included in the standard delegate registration fee. Delegates may book hotels directly across Kalamassery, Edappally (Lulu Mall area), or Kakkanad (Infopark hub). Download our verified contact directory below.
              </p>
            </div>
          </div>
          <Button
            variant="gold"
            size="lg"
            asLink
            href={CONFERENCE_DATA.links.accommodationPdf}
            icon={<Download className="w-4 h-4 text-slate-950" />}
            className="shrink-0"
          >
            Download Hotel Directory (PDF)
          </Button>
        </div>

        {/* Hotel Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel font-bold text-xl text-white mb-3">
                Kalamassery (Campus Vicinity)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Located within 1 to 3 km of Rajagiri College. Ideal for short auto-rickshaw or taxi commutes directly to the conference hall.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-amber-300 bg-black/40 border border-amber-400/30 px-3 py-1 rounded-lg">
                5–10 mins travel time
              </span>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-emerald-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-emerald-400/60 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel font-bold text-xl text-white mb-3">
                Edappally &amp; Lulu Mall
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                3 to 5 km from campus. Connected directly via Kochi Metro with premium dining, shopping, and comfortable business class hotels.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-emerald-300 bg-black/40 border border-emerald-400/30 px-3 py-1 rounded-lg">
                10–15 mins via Metro / Taxi
              </span>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md flex flex-col justify-between hover:border-amber-400/60 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel font-bold text-xl text-white mb-3">
                Kakkanad &amp; SmartCity Hub
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                5 to 8 km from campus. Offers upscale corporate hotels, serviced suites, and tranquil modern residential stays.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-amber-300 bg-black/40 border border-amber-400/30 px-3 py-1 rounded-lg">
                15–20 mins via Taxi
              </span>
            </div>
          </div>
        </div>

        {/* Hospitality Support Card */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#082a26] via-[#051c19] to-[#082a26] border border-amber-500/30 text-center shadow-luxury-md">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 mb-4 shadow-gold-glow">
            <Info className="w-6 h-6" />
          </div>
          <h4 className="font-cinzel font-bold text-2xl text-white mb-2">
            Hospitality Assistance Desk
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 font-normal">
            Our student volunteer hospitality desk is available to assist outstation and international delegates with bookings, directions, and special requests.
          </p>
          <a
            href="mailto:dyuti@rajagiri.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-amber-500/30 hover:border-amber-400 text-amber-300 text-xs sm:text-sm font-semibold transition-all font-mono"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>dyuti@rajagiri.edu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

