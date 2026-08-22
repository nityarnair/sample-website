import React from 'react';
import { HeroEditorial } from '@/components/sections/HeroEditorial';
import { ConferenceMeta } from '@/components/sections/ConferenceMeta';
import { EditorialSection } from '@/components/sections/EditorialSection';
import { ConferenceTheme } from '@/components/sections/ConferenceTheme';
import { ThemeList } from '@/components/sections/ThemeList';
import { InstitutionSection } from '@/components/sections/InstitutionSection';
import { ConferenceCTA } from '@/components/sections/ConferenceCTA';
import { RegistrationCTA } from '@/components/sections/RegistrationCTA';

/**
 * DYUTI 2027 Homepage — Editorial / International Conference Direction
 * 
 * Strict Editorial Composition:
 * 01 — Announcement (Layout)
 * 02 — Header (Layout)
 * 03 — Hero (HeroEditorial)
 * 04 — Conference Information (ConferenceMeta)
 * 05 — About DYUTI (EditorialSection)
 * 06 — Conference Theme (ConferenceTheme)
 * 07 — Thematic Areas (ThemeList)
 * 08 — Rajagiri (InstitutionSection)
 * 09 — Call for Papers (ConferenceCTA)
 * 10 — Registration (RegistrationCTA)
 * 11 — Footer (Layout)
 */
export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#101716] text-[#F7F4EC] min-h-screen">
      {/* 03 — Hero: Editorial Asymmetric Layout with Massive Typography */}
      <HeroEditorial />

      {/* 04 — Conference Information: Horizontal Editorial Strip */}
      <ConferenceMeta />

      {/* 05 — About DYUTI: Editorial Narrative & Photography Spread */}
      <EditorialSection />

      {/* 06 — Conference Theme: Full-Width Deep Emerald Quote Spread */}
      <ConferenceTheme />

      {/* 07 — Thematic Areas: Numbered Editorial 2-Column List */}
      <ThemeList />

      {/* 08 — Rajagiri: Host Institution 55/45 Editorial Section */}
      <InstitutionSection />

      {/* 09 — Call for Papers: Deep Emerald Editorial CTA */}
      <ConferenceCTA />

      {/* 10 — Registration: Minimal Ivory Conversion Section */}
      <RegistrationCTA />
    </div>
  );
};
