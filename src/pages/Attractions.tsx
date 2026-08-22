import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { CONFERENCE_DATA } from '@/data/conference';

export const Attractions: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#F8F8F6] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Explore Kerala"
          eyebrowVariant="blue"
          title="Attractions in &amp; Around Kochi"
          subtitle="Acclaimed as the 'Queen of the Arabian Sea', Kochi weaves historic Portuguese and Dutch architecture with scenic palm backwaters and vibrant art biennales."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CONFERENCE_DATA.attractions.map((attraction) => (
            <DestinationCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </div>
  );
};
