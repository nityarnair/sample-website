import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Card } from '@/components/ui/Card';
import { Plane, Train, Bus, Car, Navigation } from 'lucide-react';

export const Travel: React.FC = () => {
  const airportItems = [
    {
      id: 'airport-taxi',
      title: 'Prepaid Taxi / Uber / Ola from Airport',
      icon: <Car className="w-5 h-5" />,
      content: (
        <p>
          Cochin International Airport (COK) at Nedumbassery is approximately 22 km from Rajagiri College, Kalamassery. 24/7 prepaid taxi counters are available inside the arrival terminal. Ride-hailing services (Uber and Ola) operate regular pickups. Travel time is around 35 to 45 minutes depending on traffic.
        </p>
      ),
    },
    {
      id: 'airport-bus',
      title: 'KSRTC Low-Floor AC Electric Buses (Feeder to Metro)',
      icon: <Bus className="w-5 h-5" />,
      content: (
        <p>
          KSRTC operates frequent AC feeder buses from the airport to Aluva Metro Station. From Aluva, board the Kochi Metro southwards to Kalamassery or Premier Junction Metro Station (3 stops, approx. 8 mins).
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
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="How to Reach"
          title="Travel & Directions to Rajagiri Campus"
          subtitle="Rajagiri College of Social Sciences (Autonomous) is located in Kalamassery, Kochi, accessible via Kochi International Airport, Kochi Metro, and Southern Railway."
        />

        {/* Airport Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#0f4c47] text-white flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 m-0">
                Arriving by Air (Cochin International Airport - COK)
              </h3>
              <p className="text-xs text-slate-500 m-0">Distance: ~22 km to campus</p>
            </div>
          </div>
          <Accordion items={airportItems} />
        </div>

        {/* Railway Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#d97706] text-white flex items-center justify-center">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 m-0">
                Arriving by Train (Southern Railway Stations)
              </h3>
              <p className="text-xs text-slate-500 m-0">Key stations: Aluva (AWY), Ernakulam Town (ERN), Ernakulam Jn (ERS)</p>
            </div>
          </div>
          <Accordion items={railwayItems} />
        </div>

        {/* Map & Campus Address */}
        <Card className="p-0 overflow-hidden">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display font-bold text-lg text-white m-0">
                Conference Venue Address
              </h4>
              <p className="text-xs text-slate-300 m-0 mt-1">
                Rajagiri College of Social Sciences (Autonomous), Rajagiri P.O, Kalamassery, Kochi, Kerala 683104
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Rajagiri+College+of+Social+Sciences+Kalamassery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f4c47] hover:bg-[#0a3d38] text-white text-xs font-bold font-display uppercase tracking-wider shrink-0 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>
          <div className="w-full h-80 bg-slate-100">
            <iframe
              title="Rajagiri College Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.618671408107!2d76.32629631479455!3d10.048281392818169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c39f1c79e67%3A0xb3514a6008b8b80b!2sRajagiri%20College%20of%20Social%20Sciences!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
