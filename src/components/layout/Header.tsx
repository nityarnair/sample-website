import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Edit3 } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll state for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full relative z-40 bg-white">
      {/* 1. Top Institutional & Conference Branding Area */}
      <div className="border-b border-slate-200/80 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="shrink-0 transition-transform hover:scale-[1.02]">
              <img
                src="https://dyuti.in/assets/images/dyutilogoog.jpg"
                alt="DYUTI Emblem"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <Link to="/" className="shrink-0 transition-transform hover:scale-[1.02]">
              <img
                src="https://dyuti.in/assets/images/dyuti_2027_logo_new-removebg-preview.png"
                alt="DYUTI 2027 Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONFERENCE_DATA.links.rajagiriPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-transform hover:scale-[1.02]"
              title="Rajagiri College of Social Sciences"
            >
              <img
                src="https://dyuti.in/assets/images/rajagiri.webp"
                alt="Rajagiri College of Social Sciences"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sticky Modern Academic Navbar */}
      <nav
        className={cn(
          'sticky top-0 z-40 bg-[#0f4c47] text-white transition-all duration-200 border-b border-[#0a3d38]',
          isScrolled && 'shadow-md bg-[#0a3d38]/95 backdrop-blur-md'
        )}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          {/* Mobile Label */}
          <Link
            to="/"
            className="lg:hidden font-display font-bold text-lg text-white tracking-tight flex items-center gap-2"
          >
            <span>DYUTI 2027</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {CONFERENCE_DATA.navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-2 rounded-lg text-xs font-display font-bold tracking-wider uppercase transition-all duration-150',
                    isActive
                      ? 'bg-[#d97706] text-white shadow-sm'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action CTA (Registration) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONFERENCE_DATA.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-display font-bold uppercase tracking-wider bg-gradient-to-r from-[#d97706] to-[#b45309] text-white hover:from-[#b45309] hover:to-[#92400e] shadow-dyuti-gold hover:shadow-lg transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Registration</span>
              <ExternalLink className="w-3 h-3 opacity-75" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#062b27] border-b border-[#0a3d38] px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-fadeIn">
            {CONFERENCE_DATA.navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-2.5 rounded-lg text-sm font-display font-bold uppercase tracking-wider transition-colors',
                    isActive
                      ? 'bg-[#d97706] text-white'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <a
                href={CONFERENCE_DATA.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-display font-bold uppercase tracking-wider bg-gradient-to-r from-[#d97706] to-[#b45309] text-white shadow-dyuti-gold"
              >
                <Edit3 className="w-4 h-4" />
                <span>Online Registration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
