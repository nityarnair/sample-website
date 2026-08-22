import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Plane, Train, Bus, Car, Navigation, Sparkles } from 'lucide-react';

export const Travel: React.FC = () => {
  const airportItems = [
    {
      id: 'airport-taxi',
      title: 'Prepaid Taxi / Uber / Ola from Airport',
      icon: <Car className="w-5 h-5" />,
      content: (
        <p>
          Cochin International Airport (COK) at Nedumbassery is approximately 22 km from Rajagiri College, Kalamassery. 24/7 prepaid taxi counters operate inside the arrival terminal. Ride-hailing services (Uber and Ola) operate round-the-clock pickups. Travel time is approximately 35 to 45 minutes.
        </p>
      ),
    },
    {
      id: 'airport-bus',
      title: 'KSRTC Low-Floor AC Feeder Buses to Metro',
      icon: <Bus className="w-5 h-5" />,
      content: (
        <p>
          KSRTC operates frequent AC feeder buses from the airport directly to Aluva Metro Station. From Aluva, board the Kochi Metro southwards to Kalamassery or Premier Junction Station (3 stops, ~8 mins).
        </p>
      ),
    },
  ];

  const railwayItems = [
    {
      id: 'rail-aluva',
      title: 'From Aluva Railway Station (AWY) — Approx. 8 km',
      icon: <Train className="w-5 h-5" />,
      content: (
        <p>
          Aluva is the nearest major railway station for trains arriving from Northern India and Malabar. Take an auto-rickshaw (approx. 15 mins) or board the Kochi Metro directly from Aluva Metro Station to Kalamassery Station.
        </p>
      ),
    },
    {
      id: 'rail-ernakulam-town',
      title: 'From Ernakulam Town (North) Station (ERN) — Approx. 11 km',
      icon: <Train className="w-5 h-5" />,
      content: (
        <p>
          Located 11 km south of the campus. Board the Kochi Metro at Town Hall Metro Station towards Aluva, and alight at Kalamassery Station (approx. 18 mins).
        </p>
      ),
    },
    {
      id: 'rail-ernakulam-junction',
      title: 'From Ernakulam Junction (South) Station (ERS) — Approx. 14 km',
      icon: <Train className="w-5 h-5" />,
      content: (
        <p>
          Ernakulam South is Kochi's primary terminal. Board the Kochi Metro directly at Maharaja's College or South Metro Station towards Aluva and alight at Kalamassery Station.
        </p>
      ),
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#041412] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Route & Navigation"
          eyebrowVariant="gold-luxury"
          title="Travel &amp; Directions to Rajagiri Campus"
          subtitle="Rajagiri College of Social Sciences (Autonomous) is situated in Kalamassery, Kochi, seamlessly connected via Cochin International Airport, Kochi Metro rail, and Southern Railway."
          dark
        />

        {/* Airport Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shadow-gold-glow">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white m-0">
                Arriving by Air (Cochin International Airport - COK)
              </h3>
              <p className="text-xs text-amber-300 font-display m-0">Distance: ~22 km to campus</p>
            </div>
          </div>
          <Accordion items={airportItems} />
        </div>

        {/* Railway Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shadow-emerald-glow">
              <Train className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white m-0">
                Arriving by Train (Southern Railway Terminals)
              </h3>
              <p className="text-xs text-emerald-300 font-display m-0">Key Stations: Aluva (AWY), Ernakulam Town (ERN), Ernakulam Jn (ERS)</p>
            </div>
          </div>
          <Accordion items={railwayItems} />
        </div>

        {/* Map & Campus Address */}
        <div className="rounded-3xl overflow-hidden border border-amber-500/30 shadow-luxury-lg bg-[#082a26]">
          <div className="p-8 bg-gradient-to-r from-[#082a26] via-[#051c19] to-[#082a26] border-b border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="font-cinzel font-bold text-xl text-white m-0">
                  Conference Venue Coordinates
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 m-0">
                Rajagiri College of Social Sciences (Autonomous), Rajagiri P.O, Kalamassery, Kochi, Kerala 683104
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Rajagiri+College+of+Social+Sciences+Kalamassery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs font-bold font-display uppercase tracking-wider shrink-0 shadow-gold-glow transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>
          <div className="w-full h-96 bg-emerald-950/40">
            <iframe
              title="Rajagiri College Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.618671408107!2d76.32629631479455!3d10.048281392818169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c39f1c79e67%3A0xb3514a6008b8b80b!2sRajagiri%20College%20of%20Social%20Sciences!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

