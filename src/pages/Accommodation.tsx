import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Accommodation: React.FC = () => {
  const areas = [
    {
      number: '01',
      name: 'Kalamassery',
      subtitle: 'Campus Vicinity & Nearest Stays',
      distance: '1 to 3 km from Campus',
      duration: '5–10 mins travel time',
      description: 'Ideal for short auto-rickshaw or taxi commutes directly to the conference venues at Rajagiri Valley and Hill campuses. Offers quiet boutique hotels, guest lodges, and executive residences.',
      transit: 'Direct auto-rickshaw (₹ 40–80) or 5-min cab ride.',
    },
    {
      number: '02',
      name: 'Edappally & Lulu Mall',
      subtitle: 'Metro Hub & Commercial Center',
      distance: '3 to 5 km from Campus',
      duration: '10–15 mins via Metro / Taxi',
      description: 'Connected directly via the Kochi Metro (Cochin University / Pathadipalam to Edappally). Offers premium luxury hotels (including Marriott Kochi), business-class accommodations, and extensive dining and shopping.',
      transit: 'Direct Kochi Metro or taxi along NH 544.',
    },
    {
      number: '03',
      name: 'Kakkanad & SmartCity Hub',
      subtitle: 'IT Corridor & Corporate Suites',
      distance: '5 to 8 km from Campus',
      duration: '15–20 mins via Taxi',
      description: 'Located in the emerging tech and innovation corridor near Infopark. Features contemporary upscale business hotels, serviced apartments, and tranquil modern suites suited for international delegates.',
      transit: 'Taxi or app-based cabs (Uber / Ola).',
    },
  ];

  return (
    <div className="pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-28 lg:pb-32 bg-[#F5F5F0] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── 03 / EDITORIAL PAGE HEADER ── */}
        <PageHeader
          number="03"
          category="ACCOMMODATION"
          metaRight="Hotel Directory &amp; Delegate Stay &middot; Kalamassery, Kochi"
          eyebrow="Delegate Hospitality"
          title={
            <>
              Accommodation
              <span className="block font-heading text-[#667085] text-[1.85rem] sm:text-[2.5rem] font-bold mt-1">
                &amp; Hotels Near Rajagiri
              </span>
            </>
          }
          subtitle="A curated selection of luxury, executive, and budget hotels conveniently accessible from the Rajagiri Valley and Hill campuses in Kochi."
        />

        {/* ── ADVISORY ACTION BANNER (Deep Navy #071A33) ── */}
        <div className="bg-[#071A33] border border-white/10 text-white rounded-[24px] p-8 sm:p-12 lg:p-14 mb-20 lg:mb-28 shadow-editorial">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#93C5FD] bg-white/10 px-3.5 py-1.5 rounded-[8px] mb-4 border border-white/15">
                Delegate Accommodation Advisory
              </span>
              <h2 className="text-[2.25rem] sm:text-[2.85rem] font-heading font-extrabold text-white mb-3 leading-tight">
                Curated Hotel Contact Directory
              </h2>
              <p className="text-white/80 text-sm sm:text-base m-0 font-sans font-normal leading-relaxed">
                Accommodation is not included in the standard registration fee. Delegates may book hotels directly across Kalamassery, Edappally, or Kakkanad. Download our verified contact directory below.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                variant="white"
                size="lg"
                asLink
                href={CONFERENCE_DATA.links.accommodationPdf}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Download className="w-4 h-4" />}
                showArrow
              >
                Download Directory (PDF)
              </Button>
            </div>
          </div>
        </div>

        {/* ── AREA INFORMATION ── */}
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-[#D9DEE5]">
            <div>
              <span className="text-[11.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-1">
                Stay Locations
              </span>
              <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-[#071A33] m-0">
                Recommended Accommodation Zones
              </h3>
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085] hidden sm:inline font-semibold">
              Within 10–20 mins of Rajagiri Campus
            </span>
          </div>

          <div className="space-y-6">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 lg:p-12 rounded-[20px] bg-white border border-[#D9DEE5] shadow-editorial transition-all hover:border-[#2563EB]/40 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Number & Area Title (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] tabular-nums">
                        {area.number}
                      </span>
                      <span className="w-6 h-px bg-[#D9DEE5]" />
                      <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#667085] font-semibold">
                        {area.subtitle}
                      </span>
                    </div>

                    <h4 className="text-[1.85rem] sm:text-[2.2rem] font-heading font-bold text-[#071A33] leading-snug group-hover:text-[#2563EB] transition-colors mb-4">
                      {area.name}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center text-xs font-mono font-bold text-[#071A33] bg-[#F5F5F0] border border-[#D9DEE5] px-3 py-1 rounded-[8px]">
                        <span>{area.distance}</span>
                      </span>
                      <span className="inline-flex items-center text-xs font-mono font-bold text-[#2563EB] bg-[#E8F0F7] border border-[#BFDBFE] px-3 py-1 rounded-[8px]">
                        <span>{area.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Description & Transit Information (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2 lg:pt-0 lg:border-l lg:border-[#D9DEE5] lg:pl-10">
                    <p className="text-[14.5px] sm:text-[15.5px] text-[#667085] leading-relaxed font-sans font-normal mb-5">
                      {area.description}
                    </p>

                    <div className="p-4 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5] text-xs sm:text-sm text-[#071A33] font-sans">
                      <strong className="text-[#2563EB] block font-mono text-[11px] uppercase tracking-wider mb-0.5 font-bold">
                        Transit Recommendations
                      </strong>
                      <span>{area.transit}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOSPITALITY DESK SUPPORT FOOTER ── */}
        <div className="rounded-[20px] p-8 sm:p-12 lg:p-14 bg-white border border-[#D9DEE5] shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8">
              <div className="mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB] block mb-1">
                  Support &amp; Logistics
                </span>
                <h4 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold m-0">
                  Hospitality Assistance Desk
                </h4>
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#667085] m-0 font-sans font-normal leading-relaxed">
                Our student volunteer hospitality desk is available to assist outstation and international delegates with local bookings, directions, and special accessibility requirements.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                variant="navy"
                size="md"
                asLink
                href="mailto:dyuti@rajagiri.edu"
              >
                dyuti@rajagiri.edu
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
