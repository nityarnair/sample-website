import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ThemeCard } from '@/components/cards/ThemeCard';
import { CONFERENCE_DATA } from '@/data/conference';

export const ThemeGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academic Scope"
          eyebrowVariant="gold"
          title="Major Sub-Themes"
          subtitle="Deliberating on 8 interconnected thematic areas for sustainable societies, human rights, and social innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFERENCE_DATA.subThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};
