import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { QuickFacts } from '@/components/sections/QuickFacts';
import { AboutDyuti } from '@/components/sections/AboutDyuti';
import { ConferenceTheme } from '@/components/sections/ConferenceTheme';
import { SubThemesSection } from '@/components/sections/SubThemesSection';
import { RajagiriSection } from '@/components/sections/RajagiriSection';
import { CallForPapersSection } from '@/components/sections/CallForPapersSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';

/**
 * DYUTI 2027 Homepage
 * 
 * Strict Page Structure:
 * 1. Announcement Bar (Layout)
 * 2. Header / Navigation (Layout)
 * 3. Hero
 * 4. Conference Quick Facts
 * 5. About DYUTI
 * 6. Conference Theme
 * 7. Sub-Themes
 * 8. Rajagiri Introduction
 * 9. Call for Papers CTA
 * 10. Registration CTA
 * 11. Footer (Layout)
 */
export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#041412] text-slate-100 min-h-screen">
      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Conference Quick Facts */}
      <QuickFacts />

      {/* 5. About DYUTI */}
      <AboutDyuti />

      {/* 6. Conference Theme */}
      <ConferenceTheme />

      {/* 7. Sub-Themes */}
      <SubThemesSection />

      {/* 8. Rajagiri Introduction */}
      <RajagiriSection />

      {/* 9. Call for Papers CTA */}
      <CallForPapersSection />

      {/* 10. Registration CTA */}
      <RegistrationSection />
    </div>
  );
};
