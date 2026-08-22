import React from 'react';
import { HeroEditorial } from '@/components/sections/HeroEditorial';
import { ConferenceMeta } from '@/components/sections/ConferenceMeta';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { EditorialTracks } from '@/components/sections/EditorialTracks';
import { SpeakersSection } from '@/components/sections/SpeakersSection';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { CallForPapersSection } from '@/components/sections/CallForPapersSection';
import { ImportantDatesTimeline } from '@/components/sections/ImportantDatesTimeline';
import { RegistrationCTA } from '@/components/sections/RegistrationCTA';
import { InstitutionSection } from '@/components/sections/InstitutionSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

/**
 * DYUTI 2027 Homepage — Editorial Visual Rhythm:
 * 
 * 01 — HeroEditorial (Warm Off-White: #F7F7F4)
 * 02 — ConferenceMeta (Off-White Metadata Strip: #F7F7F4)
 * 03 — EditorialIntro (Pure White: #FFFFFF)
 * 04 — EditorialTracks (Deep Navy: #071A33)
 * 05 — SpeakersSection (Warm Off-White: #F7F7F4)
 * 06 — ScheduleSection (Pure White: #FFFFFF)
 * 07 — CallForPapersSection (Light Blue Tint: #EEF3F8)
 * 08 — ImportantDatesTimeline (Warm Off-White: #F7F7F4)
 * 09 — RegistrationCTA (Deep Navy: #071A33)
 * 10 — InstitutionSection (Pure White: #FFFFFF)
 * 11 — PartnersSection (Warm Off-White: #F7F7F4)
 */
export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#F7F7F4] text-[#101828] min-h-screen">
      {/* 01 — Editorial Hero (Off-White: #F7F7F4) */}
      <HeroEditorial />

      {/* 02 — Key Conference Metadata Strip */}
      <ConferenceMeta />

      {/* 03 — Conference Introduction (White: #FFFFFF) */}
      <EditorialIntro />

      {/* 04 — Thematic Conference Tracks (Navy: #071A33) */}
      <EditorialTracks />

      {/* 05 — Speakers & Academic Leadership (Off-White: #F7F7F4) */}
      <SpeakersSection />

      {/* 06 — Program Schedule (White: #FFFFFF) */}
      <ScheduleSection />

      {/* 07 — Call for Papers (Light Blue: #EEF3F8) */}
      <CallForPapersSection />

      {/* 08 — Important Dates Timeline (Off-White: #F7F7F4) */}
      <ImportantDatesTimeline />

      {/* 09 — Registration & Fees (Navy: #071A33) */}
      <RegistrationCTA />

      {/* 10 — Host Institution (White: #FFFFFF) */}
      <InstitutionSection />

      {/* 11 — Institutional Accreditations & Partners (Off-White: #F7F7F4) */}
      <PartnersSection />
    </div>
  );
};
