import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Hotel, Download, MapPin, Info, PhoneCall } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Accommodation: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#F8F8F6] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Delegate Hospitality"
          eyebrowVariant="blue"
          title="Accommodation &amp; Hotels Near Rajagiri"
          subtitle="A curated selection of luxury, executive, and budget hotels conveniently accessible from the Rajagiri Valley campus in Kochi."
        />

        {/* Advisory Editorial Banner */}
        <div className="bg-[#071A33] border border-white/10 text-white rounded-sm p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-editorial">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-white/10 text-[#93C5FD] flex items-center justify-center shrink-0">
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-[#93C5FD] mb-2">
                Accommodation Advisory
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-2">
                Curated Delegate Hotel Directory
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl m-0 font-sans font-normal">
                Accommodation is not included in the standard delegate registration fee. Delegates may book hotels directly across Kalamassery, Edappally (Lulu Mall area), or Kakkanad (Infopark hub). Download our verified contact directory below.
              </p>
            </div>
          </div>
          <a
            href={CONFERENCE_DATA.links.accommodationPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold bg-white text-[#071A33] hover:bg-[#EFF6FF] rounded-sm transition-colors flex items-center gap-2 shrink-0 shadow-subtle"
          >
            <Download className="w-4 h-4" />
            <span>Download Directory (PDF)</span>
          </a>
        </div>

        {/* Hotel Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="rounded-sm p-8 bg-white border border-[#D9DEE5] shadow-subtle flex flex-col justify-between hover:border-[#12345B]/40 hover:shadow-editorial transition-all">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl text-[#071A33] mb-3">
                Kalamassery (Campus Vicinity)
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 font-sans font-normal">
                Located within 1 to 3 km of Rajagiri College. Ideal for short auto-rickshaw or taxi commutes directly to the conference hall.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D9DEE5]">
              <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-xs">
                5–10 mins travel time
              </span>
            </div>
          </div>

          <div className="rounded-sm p-8 bg-white border border-[#D9DEE5] shadow-subtle flex flex-col justify-between hover:border-[#12345B]/40 hover:shadow-editorial transition-all">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl text-[#071A33] mb-3">
                Edappally &amp; Lulu Mall
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 font-sans font-normal">
                3 to 5 km from campus. Connected directly via Kochi Metro with premium dining, shopping, and comfortable business class hotels.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D9DEE5]">
              <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-xs">
                10–15 mins via Metro / Taxi
              </span>
            </div>
          </div>

          <div className="rounded-sm p-8 bg-white border border-[#D9DEE5] shadow-subtle flex flex-col justify-between hover:border-[#12345B]/40 hover:shadow-editorial transition-all">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl text-[#071A33] mb-3">
                Kakkanad &amp; SmartCity Hub
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 font-sans font-normal">
                5 to 8 km from campus. Offers upscale corporate hotels, serviced suites, and tranquil modern residential stays.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D9DEE5]">
              <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-xs">
                15–20 mins via Taxi
              </span>
            </div>
          </div>
        </div>

        {/* Hospitality Support Card */}
        <div className="rounded-sm p-8 sm:p-10 bg-white border border-[#D9DEE5] text-center shadow-subtle">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-[#EFF6FF] text-[#2563EB] mb-4">
            <Info className="w-6 h-6" />
          </div>
          <h4 className="font-serif font-bold text-2xl text-[#071A33] mb-2">
            Hospitality Assistance Desk
          </h4>
          <p className="text-xs sm:text-sm text-[#667085] max-w-xl mx-auto mb-6 font-sans font-normal leading-relaxed">
            Our student volunteer hospitality desk is available to assist outstation and international delegates with bookings, directions, and special requests.
          </p>
          <a
            href="mailto:dyuti@rajagiri.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5] hover:border-[#12345B] text-[#071A33] text-xs sm:text-sm font-semibold transition-all font-mono"
          >
            <PhoneCall className="w-4 h-4 text-[#2563EB]" />
            <span>dyuti@rajagiri.edu</span>
          </a>
        </div>
      </div>
    </div>
  );
};
