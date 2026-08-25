import React from 'react';

import { ExternalLink } from 'lucide-react';
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
    <div className="pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-28 lg:pb-32 bg-[#F5F5F0] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── PAGE HEADER ── */}
        <div className="text-center py-14 sm:py-20 mb-4">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-[#2563EB]" />
            <span className="text-[12px] font-sans font-bold uppercase tracking-[0.22em] text-[#2563EB]">
              Explore Kerala
            </span>
            <span className="w-6 h-0.5 bg-[#2563EB]" />
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-extrabold text-[#071A33] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
            Attractions in &amp;
            <span className="block text-[#667085]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.25rem)' }}>
              Around Historic Kochi
            </span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-6" />

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#475467] leading-relaxed font-sans max-w-2xl mx-auto">
            Acclaimed as the &lsquo;Queen of the Arabian Sea&rsquo;, Kochi weaves historic Portuguese and Dutch architecture with scenic palm backwaters, spice markets, and vibrant coastal culture.
          </p>
        </div>

        {/* ── SCENIC HERO BANNER ── */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial mb-20 lg:mb-28 group max-h-[480px]">
          <img
            src="/images/dyuti27_kochi_watercolor_art.jpg"
            alt="Artistic Watercolor Panorama of Kochi — Chinese Fishing Nets, Heritage Architecture, Water Metro, and Rajagiri Campus"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* ── DETAILED ATTRACTIONS (Alternating Layouts) ── */}
        <div className="space-y-16 lg:space-y-24 mb-20 lg:mb-28">
          {CONFERENCE_DATA.attractions.map((attraction, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={attraction.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <div className="rounded-[20px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial group">
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
                  className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                      Destination {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-6 h-px bg-[#D9DEE5]" />
                    <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#667085] font-semibold">
                      Kochi, Kerala
                    </span>
                  </div>

                  <h3 className="text-[2rem] sm:text-[2.5rem] font-heading font-extrabold text-[#071A33] leading-[1.1] mb-5">
                    {attraction.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-[#667085] leading-relaxed font-sans font-normal m-0">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── QUICK TOURISM GUIDES & EXTERNAL RESOURCES ── */}
        <div className="rounded-[20px] p-8 sm:p-12 lg:p-14 bg-white border border-[#D9DEE5] shadow-editorial">
          <div className="mb-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB] block mb-1">
              Kerala Tourism Portals
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold m-0">
              Tourist Guides &amp; Official Travel Portals
            </h3>
            <span className="text-[11px] font-sans text-[#667085] uppercase tracking-wider font-semibold">
              External State Tourism &amp; Sightseeing Resources
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tourismLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5] hover:border-[#2563EB]/40 hover:bg-white transition-all flex items-center justify-between group shadow-subtle"
              >
                <span className="text-xs sm:text-sm font-sans font-semibold text-[#071A33] group-hover:text-[#2563EB] transition-colors leading-snug">
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
