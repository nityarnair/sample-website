import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Plane, Train, Bus, Car, Navigation, MapPin } from 'lucide-react';

export const Travel: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 bg-[#F7F7F4] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          sectionNumber="09"
          eyebrow="Route & Navigation"
          title="Directions &amp; Travel Guide"
          subtitle="Rajagiri College of Social Sciences (Autonomous) Hill Campus in Kalamassery, Kochi is seamlessly connected via Cochin International Airport, Kochi Metro rail, and Southern Railway."
        />

        {/* Scenic Banner */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-white shadow-editorial mb-16 max-h-[360px]">
          <img
            src="https://dyuti.in/assets/images/attraction/attraction_bnr_02.jpg"
            alt="Kochi City & Campus Directions"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Route 1: From Airport */}
        <div className="rounded-[24px] border border-[#D9DEE5] bg-white shadow-editorial p-8 sm:p-12 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-widest block">Route 01</span>
              <h3 className="font-serif text-3xl text-[#071A33] m-0 font-normal">
                From Cochin International Airport (COK) to Rajagiri Campus
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              {/* Taxi */}
              <div className="p-6 rounded-[18px] bg-[#F7F7F4] border border-[#D9DEE5]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Car className="w-5 h-5 text-[#2563EB]" />
                  <span>By Taxi / Car</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  <strong>Direct pickup from Kochi Airport:</strong> You can book a taxi or car directly (Uber and airport prepaid taxis are readily available). The driver will pick you up from the arrival terminal and take you directly to Rajagiri College of Social Sciences (Autonomous) Hill Campus, Kalamassery. You can also use the Metro Feeder bus services to the campus.
                </p>
              </div>

              {/* Public Bus */}
              <div className="p-6 rounded-[18px] bg-[#F7F7F4] border border-[#D9DEE5]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Bus className="w-5 h-5 text-[#2563EB]" />
                  <span>By Public Bus</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  Take an auto-rickshaw from the airport to the <strong>Aluva Private Bus Stand</strong>. Board any private bus heading toward Ernakulam and get down at the <strong>Municipal Town Hall or Rajagiri Hill stop</strong>. The campus is a short walk from there.
                </p>
              </div>

              {/* Metro */}
              <div className="p-6 rounded-[18px] bg-[#EFF6FF] border border-[#BFDBFE]">
                <div className="flex items-center gap-3 mb-2 text-[#1E3A8A] font-semibold text-sm font-sans">
                  <Train className="w-5 h-5 text-[#2563EB]" />
                  <span>By Kochi Metro (Recommended)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1E40AF] leading-relaxed m-0 font-sans font-normal">
                  For a traffic-free trip, take the Kochi Metro from <strong>Aluva station to the Kalamassery Town station</strong>, which is the nearest metro station to Rajagiri College of Social Sciences (Autonomous) Hill Campus. From there, you can take an auto or walk to the campus, which is just <strong>200 meters from the Hill Campus</strong>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-[18px] overflow-hidden border border-[#D9DEE5] h-full min-h-[420px] shadow-subtle">
              <iframe
                title="Airport to Rajagiri Route Map"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d79256.39818911608!2d76.31909662535186!3d10.111720112330207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3b080882748f4a6f%3A0x30b2ebe45d968458!2sCochin%20International%20Airport%EF%BC%88Nedumbassery%20Airport%EF%BC%89%20(COK)%2C%20Airport%20Road%2C%20Nedumbassery%2C%20Kochi%2C%20Kerala!3m2!1d10.1532129!2d76.3933204!4m5!1s0x3b080dd2c4bfaed9%3A0x616d1c1cb927fe62!2sRajagiri%20College%20of%20Social%20Sciences%20(Autonomous)%2C%20Rajagiri%20Rd%2C%20South%20Kalamassery%2C%20Kalamassery%2C%20Kochi%2C%20Kerala!3m2!1d10.053237099999999!2d76.3155973!5e0!3m2!1sen!2sin!4v1766501131440!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Route 2: From Ernakulam South Railway Station */}
        <div className="rounded-[24px] border border-[#D9DEE5] bg-white shadow-editorial p-8 sm:p-12 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
              <Train className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-widest block">Route 02</span>
              <h3 className="font-serif text-3xl text-[#071A33] m-0 font-normal">
                From Ernakulam South Railway Station to Rajagiri Campus
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              {/* Taxi / Auto */}
              <div className="p-6 rounded-[18px] bg-[#F7F7F4] border border-[#D9DEE5]">
                <div className="flex items-center gap-3 mb-2 text-[#071A33] font-semibold text-sm font-sans">
                  <Car className="w-5 h-5 text-[#2563EB]" />
                  <span>By Taxi / Auto-Rickshaw</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal mb-3">
                  <strong>Taxi:</strong> The most direct way is to take a taxi from the station to the Rajagiri Hill Campus; it is about 12–14 km and takes roughly 30–40 minutes depending on traffic.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed m-0 font-sans font-normal">
                  <strong>Auto-Rickshaw:</strong> A economical option — takes a similar time and drops directly at the college entrance.
                </p>
              </div>

              {/* Metro */}
              <div className="p-6 rounded-[18px] bg-[#EFF6FF] border border-[#BFDBFE]">
                <div className="flex items-center gap-3 mb-2 text-[#1E3A8A] font-semibold text-sm font-sans">
                  <Train className="w-5 h-5 text-[#2563EB]" />
                  <span>By Kochi Metro</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1E40AF] leading-relaxed m-0 font-sans font-normal">
                  You can also take the Kochi Metro from <strong>Ernakulam South Station to the Kalamassery Town station</strong> for a much faster, traffic-free trip. From there, you can take an auto or walk to the campus, which is just <strong>200 meters from the Hill Campus</strong>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-[18px] overflow-hidden border border-[#D9DEE5] h-full min-h-[380px] shadow-subtle">
              <iframe
                title="Ernakulam South to Rajagiri Route Map"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62865.52467195637!2d76.25915440113695!3d10.008987264663576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3b08730db3a5bb1d%3A0xd75994675ce7d175!2sERNAKULAM%20SOUTH%20RAILWAY%20STATION%2C%20Ernakulam%20South%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682016!3m2!1d9.9692376!2d76.29098669999999!4m5!1s0x3b080dd2c4bfaed9%3A0x616d1c1cb927fe62!2sRajagiri%20College%20of%20Social%20Sciences%20(Autonomous)%2C%20Rajagiri%20Rd%2C%20South%20Kalamassery%2C%20Kalamassery%2C%20Kochi%2C%20Kerala!3m2!1d10.053237099999999!2d76.3155973!5e0!3m2!1sen!2sin!4v1766501245718!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Venue Action Card */}
        <div className="p-8 sm:p-12 bg-[#071A33] text-white rounded-[24px] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-editorial">
          <div>
            <span className="text-xs font-mono font-bold text-[#93C5FD] uppercase tracking-widest block mb-1">
              Campus Landmark
            </span>
            <h4 className="font-serif text-3xl text-white m-0 mb-2 font-normal">
              Rajagiri College of Social Sciences (Autonomous)
            </h4>
            <p className="text-xs sm:text-sm text-white/80 m-0 font-sans font-normal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#93C5FD] shrink-0" />
              <span>Rajagiri Road, South Kalamassery, Kalamassery, Kochi, Kerala 683104</span>
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Rajagiri+College+of+Social+Sciences+Kalamassery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#071A33] hover:bg-[#EEF3F8] text-xs font-semibold font-sans uppercase tracking-[0.14em] shrink-0 shadow-pill transition-all"
          >
            <Navigation className="w-4 h-4 text-[#2563EB]" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};
