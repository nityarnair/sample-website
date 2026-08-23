import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { ExternalLink, Compass, MapPin } from 'lucide-react';
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
    <div className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F4] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── 04 / EDITORIAL PAGE HEADER ── */}
        <PageHeader
          number="04"
          category="ATTRACTIONS"
          metaRight="Queen of the Arabian Sea · Kerala, India"
          eyebrow="Explore Kerala"
          title={
            <>
              Attractions in &amp;
              <span className="block font-serif text-[#667085] text-[2rem] sm:text-[2.75rem] font-normal mt-1">
                Around Historic Kochi
              </span>
            </>
          }
          subtitle="Acclaimed as the 'Queen of the Arabian Sea', Kochi weaves historic Portuguese and Dutch architecture with scenic palm backwaters, spice markets, and vibrant coastal culture."
        />

        {/* ── SCENIC HERO BANNER ── */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial mb-20 lg:mb-28 group max-h-[440px]">
          <img
            src="https://dyuti.in/assets/images/attraction/attraction_bnr_02.jpg"
            alt="Scenic Kochi Backwaters and Chinese Fishing Nets"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* ── DETAILED ATTRACTIONS (Alternating Editorial Layouts) ── */}
        <div className="space-y-16 lg:space-y-24 mb-20 lg:mb-28">
          {CONFERENCE_DATA.attractions.map((attraction, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={attraction.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial group">
                    <img
                      src={attraction.imageUrl}
                      alt={attraction.title}
                      className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Narrative Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                      Destination {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-6 h-px bg-[#D9DEE5]" />
                    <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#667085] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Kochi, Kerala</span>
                    </span>
                  </div>

                  <h3 className="text-[2.25rem] sm:text-[2.85rem] font-serif font-normal text-[#071A33] leading-[1.1] mb-6">
                    {attraction.title}
                  </h3>

                  <p className="text-base sm:text-[1.0625rem] text-[#667085] leading-relaxed font-sans font-normal m-0">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── QUICK TOURISM GUIDES & EXTERNAL RESOURCES ── */}
        <div className="rounded-[24px] p-8 sm:p-12 lg:p-14 bg-white border border-[#D9DEE5] shadow-editorial">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#EEF3F8] text-[#2563EB] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] font-normal m-0">
                Tourist Guides &amp; Official Travel Portals
              </h3>
              <span className="text-[11px] font-sans text-[#667085] uppercase tracking-wider">
                External State Tourism &amp; Sightseeing Resources
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tourismLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-[16px] bg-[#F7F7F4] border border-[#D9DEE5] hover:border-[#2563EB]/40 hover:bg-white transition-all flex items-center justify-between group shadow-subtle"
              >
                <span className="text-xs sm:text-sm font-sans font-medium text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {link.label}
                </span>
                <ExternalLink className="w-4 h-4 text-[#667085] group-hover:text-[#2563EB] shrink-0 ml-3 transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
