import React from 'react';
import { HeroEditorial } from '@/components/sections/HeroEditorial';
import { ConferenceMeta } from '@/components/sections/ConferenceMeta';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { EditorialTracks } from '@/components/sections/EditorialTracks';
import { SpeakersSection } from '@/components/sections/SpeakersSection';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { ImportantDatesTimeline } from '@/components/sections/ImportantDatesTimeline';
import { ConferenceCTA } from '@/components/sections/ConferenceCTA';
import { RegistrationCTA } from '@/components/sections/RegistrationCTA';
import { InstitutionSection } from '@/components/sections/InstitutionSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

/**
 * DYUTI 2027 Homepage — Editorial White & Navy Design System
 * 
 * Editorial Sequence:
 * 01 — HeroEditorial (Large Split Layout with Typography & Academic Imagery)
 * 02 — ConferenceMeta (4-Column Horizontal Key Metadata)
 * 03 — EditorialIntro (01: Asymmetric Statement & Genesis)
 * 04 — EditorialTracks (02: 8 Subthemes as Interactive Editorial Rows)
 * 05 — SpeakersSection (03: Academic Leadership & Keynotes)
 * 06 — ScheduleSection (04: Program Timeline & Session Tables)
 * 07 — ImportantDatesTimeline (05: Horizontal Milestone Timeline)
 * 08 — ConferenceCTA (06: Call for Papers & Guidelines)
 * 09 — RegistrationCTA (07: Category Fee Tables & Bank Transfers)
 * 10 — InstitutionSection (08: Rajagiri College of Social Sciences Profile)
 * 11 — PartnersSection (Accreditations & Indexing)
 */
export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#F8F8F6] text-[#101828] min-h-screen">
      {/* 01 — Editorial Hero */}
      <HeroEditorial />

      {/* 02 — Key Conference Metadata Strip */}
      <ConferenceMeta />

      {/* 03 — Conference Introduction (01) */}
      <EditorialIntro />

      {/* 04 — Thematic Conference Tracks (02 - Editorial Rows) */}
      <EditorialTracks />

      {/* 05 — Speakers & Academic Leadership (03) */}
      <SpeakersSection />

      {/* 06 — Program Schedule (04) */}
      <ScheduleSection />

      {/* 07 — Important Dates Timeline (05) */}
      <ImportantDatesTimeline />

      {/* 08 — Call for Papers (06) */}
      <ConferenceCTA />

      {/* 09 — Registration & Fees (07) */}
      <RegistrationCTA />

      {/* 10 — Host Institution (08) */}
      <InstitutionSection />

      {/* 11 — Institutional Accreditations & Partners */}
      <PartnersSection />
    </div>
  );
};
