import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { MarqueeAnnouncement } from '../sections/MarqueeAnnouncement';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#101828] selection:bg-[#071A33] selection:text-white">
      {/* 01 — Navigation Bar */}
      <Header />

      {/* 02 — Announcement Ticker directly under navigation bar */}
      <MarqueeAnnouncement />

      {/* 03 — Main Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 04 — Footer */}
      <Footer />
    </div>
  );
};
