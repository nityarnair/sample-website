import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Plane, Train, Bus, Car, Navigation, MapPin } from 'lucide-react';

export const Travel: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F4] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── 05 / EDITORIAL PAGE HEADER ── */}
        <PageHeader
          number="05"
          category="TRAVEL & VENUE"
          metaRight="Transit &amp; Directions · South Kalamassery, Kochi"
          eyebrow="Route &amp; Navigation Guide"
          title={
            <>
              Directions &amp;
              <span className="block font-serif text-[#667085] text-[2rem] sm:text-[2.75rem] font-normal mt-1">
                Campus Travel Guide
              </span>
            </>
          }
          subtitle="Rajagiri College of Social Sciences (Autonomous) in Kalamassery, Kochi is seamlessly connected via Cochin International Airport (COK), Kochi Metro Rail, and Southern Railway networks."
        />

        {/* ── SCENIC BANNER ── */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial mb-20 lg:mb-28 max-h-[400px]">
          <img
            src="https://dyuti.in/assets/images/attraction/attraction_bnr_02.jpg"
            alt="Kochi City and Campus Route Directions"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* ── ROUTE 01: FROM COCHIN INTERNATIONAL AIRPORT (COK) ── */}
        <div className="rounded-[24px] border border-[#D9DEE5] bg-white shadow-editorial p-8 sm:p-12 lg:p-14 mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#D9DEE5]">
            <div className="w-12 h-12 rounded-full bg-[#EEF3F8] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-widest block">
                Route 01
              </span>
              <h3 className="font-serif text-[1.85rem] sm:text-[2.35rem] text-[#071A33] font-normal m-0 leading-tight">
                From Cochin International Airport (COK) to Rajagiri
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Transit Options (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Kochi Metro Recommended */}
              <div className="p-6 rounded-[20px] bg-[#EEF3F8] border border-[#BFDBFE]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Train className="w-5 h-5 text-[#2563EB]" />
                  <span>By Kochi Metro (Recommended)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#071A33]/90 leading-relaxed m-0 font-sans font-normal">
                  For a fast, traffic-free trip, board the Kochi Metro from <strong>Aluva Station to Kalamassery Town Station</strong> (the closest metro stop to Rajagiri). The campus is just <strong>200 meters from the station</strong> (a short 3-min walk or quick auto-rickshaw).
                </p>
              </div>

              {/* Taxi / Car */}
              <div className="p-6 rounded-[20px] bg-[#F7F7F4] border border-[#D9DEE5]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Car className="w-5 h-5 text-[#2563EB]" />
                  <span>By Taxi / Prepaid Cab</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  <strong>Direct Airport Pickup:</strong> 24/7 prepaid taxi counters and app-based cabs (Uber / Ola) are available at the arrival terminal. The journey directly to Rajagiri College of Social Sciences, Kalamassery takes approximately <strong>25–35 minutes (22 km)</strong> along NH 544.
                </p>
              </div>

              {/* Public Bus */}
              <div className="p-6 rounded-[20px] bg-[#F7F7F4] border border-[#D9DEE5]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Bus className="w-5 h-5 text-[#2563EB]" />
                  <span>By Public Bus &amp; Feeder</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Take an airport feeder bus or auto to <strong>Aluva Private Bus Stand</strong>. Board any bus toward Ernakulam and alight at the <strong>Municipal Town Hall / Rajagiri Hill stop</strong>.
                </p>
              </div>

            </div>

            {/* Interactive Map (6 cols) */}
            <div className="lg:col-span-6 rounded-[20px] overflow-hidden border border-[#D9DEE5] h-full min-h-[440px] shadow-subtle bg-[#F7F7F4]">
              <iframe
                title="Airport to Rajagiri Route Map"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d79256.39818911608!2d76.31909662535186!3d10.111720112330207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3b080882748f4a6f%3A0x30b2ebe45d968458!2sCochin%20International%20Airport%EF%BC%88Nedumbassery%20Airport%EF%BC%89%20(COK)%2C%20Airport%20Road%2C%20Nedumbassery%2C%20Kochi%2C%20Kerala!3m2!1d10.1532129!2d76.3933204!4m5!1s0x3b080dd2c4bfaed9%3A0x616d1c1cb927fe62!2sRajagiri%20College%20of%20Social%20Sciences%20(Autonomous)%2C%20Rajagiri%20Rd%2C%20South%20Kalamassery%2C%20Kalamassery%2C%20Kochi%2C%20Kerala!3m2!1d10.053237099999999!2d76.3155973!5e0!3m2!1sen!2sin!4v1766501131440!5m2!1sen!2sin"
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* ── ROUTE 02: FROM ERNAKULAM SOUTH / NORTH RAILWAY STATIONS ── */}
        <div className="rounded-[24px] border border-[#D9DEE5] bg-white shadow-editorial p-8 sm:p-12 lg:p-14 mb-20 lg:mb-28">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#D9DEE5]">
            <div className="w-12 h-12 rounded-full bg-[#EEF3F8] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
              <Train className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-widest block">
                Route 02
              </span>
              <h3 className="font-serif text-[1.85rem] sm:text-[2.35rem] text-[#071A33] font-normal m-0 leading-tight">
                From Ernakulam South Railway Station to Rajagiri
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Transit Options (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Kochi Metro */}
              <div className="p-6 rounded-[20px] bg-[#EEF3F8] border border-[#BFDBFE]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Train className="w-5 h-5 text-[#2563EB]" />
                  <span>By Kochi Metro (Direct)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#071A33]/90 leading-relaxed m-0 font-sans font-normal">
                  Board the Kochi Metro directly at <strong>Ernakulam South Station</strong> and ride north to <strong>Kalamassery Town Station</strong> (approx. 20–25 minutes). Walk 200m or take a quick auto to the college entrance.
                </p>
              </div>

              {/* Taxi / Auto */}
              <div className="p-6 rounded-[20px] bg-[#F7F7F4] border border-[#D9DEE5]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Car className="w-5 h-5 text-[#2563EB]" />
                  <span>By Taxi / Auto-Rickshaw</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal mb-3">
                  <strong>Prepaid Taxi:</strong> The drive from Ernakulam South Railway Station to Rajagiri is roughly 12–14 km (30–40 minutes depending on peak traffic).
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  <strong>Auto-Rickshaw:</strong> Readily available at station exits at regulated metered tariffs.
                </p>
              </div>

            </div>

            {/* Interactive Map (6 cols) */}
            <div className="lg:col-span-6 rounded-[20px] overflow-hidden border border-[#D9DEE5] h-full min-h-[400px] shadow-subtle bg-[#F7F7F4]">
              <iframe
                title="Ernakulam South to Rajagiri Route Map"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62865.52467195637!2d76.25915440113695!3d10.008987264663576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3b08730db3a5bb1d%3A0xd75994675ce7d175!2sERNAKULAM%20SOUTH%20RAILWAY%20STATION%2C%20Ernakulam%20South%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682016!3m2!1d9.9692376!2d76.29098669999999!4m5!1s0x3b080dd2c4bfaed9%3A0x616d1c1cb927fe62!2sRajagiri%20College%20of%20Social%20Sciences%20(Autonomous)%2C%20Rajagiri%20Rd%2C%20South%20Kalamassery%2C%20Kalamassery%2C%20Kochi%2C%20Kerala!3m2!1d10.053237099999999!2d76.3155973!5e0!3m2!1sen!2sin!4v1766501245718!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* ── CAMPUS LANDMARK & GOOGLE MAPS ACTION BANNER (Deep Navy #071A33) ── */}
        <div className="p-8 sm:p-12 lg:p-14 bg-[#071A33] text-white rounded-[24px] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-editorial">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#93C5FD] uppercase tracking-widest block mb-2">
              Official Venue Coordinates
            </span>
            <h4 className="font-serif text-3xl sm:text-4xl text-white m-0 mb-3 font-normal">
              Rajagiri College of Social Sciences (Autonomous)
            </h4>
            <p className="text-sm sm:text-base text-white/80 m-0 font-sans font-normal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#93C5FD] shrink-0" />
              <span>Rajagiri Road, South Kalamassery, Kalamassery, Kochi, Kerala 683104</span>
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="white"
              size="lg"
              asLink
              href="https://maps.google.com/?q=Rajagiri+College+of+Social+Sciences+Kalamassery"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Navigation className="w-4 h-4 text-[#2563EB]" />}
              showArrow
            >
              Open in Google Maps
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
