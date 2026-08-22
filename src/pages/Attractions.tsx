import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExternalLink, Compass } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Attractions: React.FC = () => {
  const tourismLinks = [
    { label: '10 Best Places to Visit in Kerala', url: 'https://www.tripadvisor.in/Attractions-g297631-Activities-Kerala.html' },
    { label: 'Tourist Destinations of Kerala (Category Listing)', url: 'https://www.keralatourism.org/destination/' },
    { label: 'Welcome to Kerala Tourism (Official Portal)', url: 'https://www.keralatourism.org/' },
    { label: 'Kerala Tourism - Promoting God’s Own Country', url: 'http://www.keralatourism.com/' },
    { label: '10 Best Places to Visit in Kochi', url: 'https://www.tripadvisor.in/Attractions-g297633-Activities-Kochi_Cochin_Kerala.html' },
    { label: '19 Must See Places Near Kochi', url: 'http://paradise-kerala.com/blog/9-must-see-places-near-kochi/' },
  ];

  return (
    <div className="py-20 sm:py-28 bg-[#F7F7F4] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          sectionNumber="07"
          eyebrow="Explore Kerala"
          eyebrowVariant="blue"
          title="Attractions in &amp; Around Kochi"
          subtitle="Acclaimed as the 'Queen of the Arabian Sea', Kochi weaves historic Portuguese and Dutch architecture with scenic palm backwaters and vibrant coastal culture."
        />

        {/* Scenic Banner */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-white shadow-editorial mb-16 max-h-[360px]">
          <img
            src="https://dyuti.in/assets/images/attraction/attraction_bnr_02.jpg"
            alt="Scenic Kochi Backwaters and Chinese Fishing Nets"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Tourism Links */}
        <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] m-0 font-normal">
              Tourist Guides &amp; External Resources
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tourismLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-[14px] bg-[#F7F7F4] border border-[#D9DEE5] hover:border-[#12345B] hover:bg-white transition-all flex items-center justify-between group shadow-subtle"
              >
                <span className="text-xs sm:text-sm font-sans font-medium text-[#071A33] group-hover:text-[#2563EB] transition-colors">
                  {link.label}
                </span>
                <ExternalLink className="w-4 h-4 text-[#667085] group-hover:text-[#2563EB] shrink-0 ml-2 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Attractions Alternating Grid */}
        <div className="space-y-10 mb-16">
          {CONFERENCE_DATA.attractions.map((attraction, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={attraction.id}
                className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-white shadow-editorial grid grid-cols-1 lg:grid-cols-12"
              >
                <div className={`lg:col-span-6 overflow-hidden max-h-[360px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs font-mono font-bold text-[#2563EB] mb-2 uppercase tracking-widest">
                    Destination 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#071A33] mb-4 font-normal">
                    {attraction.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal m-0">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
