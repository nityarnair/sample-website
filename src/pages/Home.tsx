import React from 'react';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { ConferenceOverview } from '@/components/sections/ConferenceOverview';
import { MajorSubThemes } from '@/components/sections/MajorSubThemes';

/**
 * DYUTI 2027 Official Homepage
 * Strictly and faithfully contains the EXACT content of dyuti.in:
 * 
 * 01 — Official DYUTI 2027 Banner
 * 02 — Conference Overview ("DYUTI 2027", "About DYUTI", "Background")
 * 03 — Major Sub Themes (8 Official Tracks)
 * (Announcement ticker is positioned directly under the navigation bar in Layout.tsx)
 */
export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#F5F5F0] text-[#0B1220] min-h-screen">
      {/* 01 — Official Conference Banner */}
      <HeroBanner />

      {/* 02 — DYUTI 2027 Overview, About DYUTI & Background */}
      <ConferenceOverview />

      {/* 03 — The 8 Major Sub-Themes */}
      <MajorSubThemes />
    </div>
  );
};

export default Home;
