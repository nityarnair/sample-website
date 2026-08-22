import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { CONFERENCE_DATA } from '@/data/conference';

export const Attractions: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Explore Kerala"
          title="Attractions in and Around Kochi"
          subtitle="Known as the 'Queen of the Arabian Sea', Kochi combines centuries of cultural heritage with tranquil backwaters and beaches."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFERENCE_DATA.attractions.map((attraction) => (
            <DestinationCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </div>
  );
};
