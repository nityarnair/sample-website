import React from 'react';
import { Button } from '@/components/ui/Button';

export const Travel: React.FC = () => {
  return (
    <div className="pt-2 sm:pt-3 lg:pt-4 pb-20 sm:pb-28 lg:pb-32 bg-[#060D0E] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── PAGE HEADER ── */}
        <div className="text-center pt-4 sm:pt-6 pb-10 sm:pb-14 mb-4">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-[#D4F933]" />
            <span className="text-[12px] font-sans font-bold uppercase tracking-[0.22em] text-[#F8FAFC]">
              Route &amp; Navigation Guide
            </span>
            <span className="w-6 h-0.5 bg-[#D4F933]" />
          </div>
          <h1 className="font-heading font-extrabold text-[#F8FAFC] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
            Directions &amp;
            <span className="block text-[#F8FAFC]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.25rem)' }}>
              Campus Travel Guide
            </span>
          </h1>
          <div className="w-16 h-1 bg-[#D4F933] rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] leading-relaxed font-sans max-w-2xl mx-auto">
            Rajagiri College of Social Sciences (Autonomous) in Kalamassery, Kochi is seamlessly connected via Cochin International Airport (COK), Kochi Metro Rail, and Southern Railway networks.
          </p>
        </div>

        {/* ── SCENIC HERO BANNER ── */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial mb-20 lg:mb-28 group max-h-[480px]">
          <img
            src="/images/dyuti27_kochi_watercolor_art.jpg"
            alt="Illustrated Travel Panorama of Kochi — Cochin International Airport, Water Metro, and Rajagiri Campus"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

{/* ── ROUTE 01: FROM COCHIN INTERNATIONAL AIRPORT (COK) ── */}
<div className="rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 sm:p-12 lg:p-14 mb-16 lg:mb-20">
  <div className="mb-8 pb-6 border-b border-white/10">
    <span className="text-[11.5px] font-mono font-bold text-[#D4F933] uppercase tracking-widest block mb-1">
      Route 01
    </span>
    <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-white m-0 leading-tight">
      From Cochin International Airport (COK) to Rajagiri
    </h3>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

    {/* Transit Options (6 cols) */}
    <div className="lg:col-span-6 space-y-4">

      {/* Kochi Metro Recommended */}
      <div className="p-6 rounded-[16px] bg-[#D4F933]/10 border border-[#D4F933]/30 backdrop-blur-md">
        <div className="mb-2 text-[#D4F933] font-bold text-sm font-sans">
          <span>By Kochi Metro (Recommended)</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed m-0 font-sans font-normal">
          For a fast, traffic-free trip, board the Kochi Metro from <strong className="text-white">Aluva Station to Kalamassery Town Station</strong> (the closest metro stop to Rajagiri). The campus is just <strong className="text-white">200 meters from the station</strong> (a short 3-min walk or quick auto-rickshaw).
        </p>
      </div>

      {/* Taxi / Car */}
      <div className="p-6 rounded-[16px] bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="mb-2 text-white font-bold text-sm font-sans">
          <span>By Taxi / Prepaid Cab</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed m-0 font-sans font-normal">
          <strong className="text-white">Direct Airport Pickup:</strong> 24/7 prepaid taxi counters and app-based cabs (Uber / Ola) are available at the arrival terminal. The journey directly to Rajagiri College of Social Sciences, Kalamassery takes approximately <strong className="text-white">25–35 minutes (22 km)</strong> along NH 544.
        </p>
      </div>

      {/* Public Bus */}
      <div className="p-6 rounded-[16px] bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="mb-2 text-white font-bold text-sm font-sans">
          <span>By Public Bus &amp; Feeder</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed m-0 font-sans font-normal">
          Take an airport feeder bus or auto to <strong className="text-white">Aluva Private Bus Stand</strong>. Board any bus toward Ernakulam and alight at the <strong className="text-white">Municipal Town Hall / Rajagiri Hill stop</strong>.
        </p>
      </div>

    </div>

    {/* Interactive Map (6 cols) */}
    <div className="lg:col-span-6 rounded-[16px] overflow-hidden border border-white/10 h-full min-h-[440px] shadow-2xl bg-white/5 backdrop-blur-md">
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
<div className="rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 sm:p-12 lg:p-14 mb-20 lg:mb-28">
  <div className="mb-8 pb-6 border-b border-white/10">
    <span className="text-[11.5px] font-mono font-bold text-[#D4F933] uppercase tracking-widest block mb-1">
      Route 02
    </span>
    <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-white m-0 leading-tight">
      From Ernakulam South Railway Station to Rajagiri
    </h3>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

    {/* Transit Options (6 cols) */}
    <div className="lg:col-span-6 space-y-4">

      {/* Kochi Metro */}
      <div className="p-6 rounded-[16px] bg-[#D4F933]/10 border border-[#D4F933]/30 backdrop-blur-md">
        <div className="mb-2 text-[#D4F933] font-bold text-sm font-sans">
          <span>By Kochi Metro (Direct)</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed m-0 font-sans font-normal">
          Board the Kochi Metro directly at <strong className="text-white">Ernakulam South Station</strong> and ride north to <strong className="text-white">Kalamassery Town Station</strong> (approx. 20–25 minutes). Walk 200m or take a quick auto to the college entrance.
        </p>
      </div>

      {/* Taxi / Auto */}
      <div className="p-6 rounded-[16px] bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="mb-2 text-white font-bold text-sm font-sans">
          <span>By Taxi / Auto-Rickshaw</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed m-0 font-sans font-normal mb-3">
          <strong className="text-white">Prepaid Taxi:</strong> The drive from Ernakulam South Railway Station to Rajagiri is roughly 12–14 km (30–40 minutes depending on peak traffic).
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed m-0 font-sans font-normal">
          <strong className="text-white">Auto-Rickshaw:</strong> Readily available at station exits at regulated metered tariffs.
        </p>
      </div>

    </div>

    {/* Interactive Map (6 cols) */}
    <div className="lg:col-span-6 rounded-[16px] overflow-hidden border border-white/10 h-full min-h-[400px] shadow-2xl bg-white/5 backdrop-blur-md">
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

{/* ── CAMPUS LANDMARK & GOOGLE MAPS ACTION BANNER ── */}
<div className="p-8 sm:p-12 lg:p-14 bg-white/5 backdrop-blur-xl text-white rounded-[20px] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
  <div>
    <span className="text-[11px] font-mono font-bold text-[#D4F933] uppercase tracking-widest block mb-2">
      Official Venue Coordinates
    </span>
    <h4 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white m-0 mb-3 font-extrabold">
      Rajagiri College of Social Sciences (Autonomous)
    </h4>
    <p className="text-sm sm:text-base text-slate-300 m-0 font-sans font-normal">
      Rajagiri Road, South Kalamassery, Kalamassery, Kochi, Kerala 683104
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
      showArrow
      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all shadow-lg"
    >
      Open in Google Maps
    </Button>
  </div>
</div>

      </div>
    </div>
  );
};
