import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONFERENCE_DATA } from '@/data/conference';

const REGISTRATION_URL = 'https://forms.gle/XTZZmXS1tjkvfm9u6';

const navLinks = [
  { label: 'Home', path: '/', exact: true },
  { label: 'Rajagiri', path: '/rajagiri' },
  { label: 'Call for Papers', path: '/call_for_papers' },
  { label: 'Attractions', path: '/attractions' },
  { label: 'Travel', path: '/travel' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Accommodation', path: '/accomodation' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll-aware shadow/blur enhancement
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full pointer-events-none"
      role="banner"
    >
      {/* ── CURVED FLOATING NAVBAR CONTAINER ── */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 pointer-events-auto pt-3.5 sm:pt-4">
        <div
          className={cn(
            'w-full rounded-full flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 bg-[#071A33] text-white border border-white/15 shadow-[0_12px_40px_rgba(7,26,51,0.4)] gap-4 lg:gap-6 2xl:gap-8',
            isScrolled
              ? 'h-[64px] sm:h-[68px] backdrop-blur-xl border-white/20 shadow-[0_16px_45px_rgba(7,26,51,0.5)]'
              : 'h-[70px] sm:h-[74px]'
          )}
          style={{ backgroundColor: '#071A33' }}
        >
          {/* ── LEFT SECTION: BRANDING & 2 BANNERS/LOGOS ── */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* DYUTI Emblem + Title Link */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none shrink-0"
              aria-label="DYUTI 2027 — Return to Homepage"
            >
              <img
                src="https://dyuti.in/assets/images/dyutilogoog.jpg"
                alt="DYUTI Conference Emblem"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-full border border-white/30 shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-white text-[1.2rem] sm:text-[1.35rem] tracking-tight leading-none group-hover:text-[#93C5FD] transition-colors">
                  DYUTI
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#93C5FD] font-bold leading-none mt-1">
                  2027 &middot; Kochi
                </span>
              </div>
            </Link>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-px h-7 bg-white/20 mx-0.5" />

            {/* Official DYUTI 2027 Conference Banner Logo */}
            <Link
              to="/"
              className="hidden sm:flex items-center focus-visible:outline-none transition-transform duration-200 hover:scale-105"
              aria-label="DYUTI 2027 Official Theme Logo"
            >
              <img
                src="https://dyuti.in/assets/images/dyuti_2027_logo_new-removebg-preview.png"
                alt="DYUTI 2027 Official Logo Banner"
                className="h-8 sm:h-9 w-auto max-w-[130px] lg:max-w-[160px] object-contain brightness-110 drop-shadow-sm"
              />
            </Link>
          </div>

          {/* ── CENTER SECTION: DESKTOP NAVIGATION WITH EXTRA SPACING ── */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center justify-center flex-1 mx-2 2xl:mx-4"
          >
            <ul className="flex items-center gap-2 2xl:gap-4 list-none m-0 p-0">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      cn(
                        'relative px-3.5 2xl:px-4.5 py-2.5 rounded-full text-[13.5px] 2xl:text-[14px] font-sans font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]',
                        isActive
                          ? 'text-white font-semibold bg-white/18 shadow-inner'
                          : 'text-white/85 hover:text-white hover:bg-white/12'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0" />
                        )}
                        <span>{item.label}</span>
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── RIGHT SECTION: RAJAGIRI LOGO & CTA REGISTER BUTTON ── */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-3.5 shrink-0">
            {/* Official Rajagiri College Logo Banner */}
            <a
              href={CONFERENCE_DATA.links.rajagiriPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm transition-all duration-200 hover:scale-105 flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              title="Rajagiri College of Social Sciences (Autonomous)"
              aria-label="Rajagiri College of Social Sciences Website"
            >
              <img
                src="https://dyuti.in/assets/images/rajagiri.webp"
                alt="Rajagiri College of Social Sciences"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </a>

            {/* Desktop Register CTA Button */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[42px] px-5 sm:px-6 inline-flex items-center gap-2 text-[13px] font-sans font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] rounded-full transition-all duration-200 shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
            >
              <span>Register</span>
              <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </a>
          </div>

          {/* ── MOBILE: RAJAGIRI LOGO + REGISTER + HAMBURGER ── */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <a
              href={CONFERENCE_DATA.links.rajagiriPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-2 py-1 rounded-full border border-white/40 shadow-sm flex items-center"
              title="Rajagiri College"
            >
              <img
                src="https://dyuti.in/assets/images/rajagiri.webp"
                alt="Rajagiri"
                className="h-5 w-auto object-contain"
              />
            </a>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 h-8 inline-flex items-center text-[11.5px] font-sans font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] rounded-full focus-visible:outline-none shadow-sm"
            >
              Register
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="w-8 h-8 flex items-center justify-center text-white border border-white/25 rounded-full bg-white/12 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] transition-colors hover:bg-white/20"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER (Dark Navy Theme with Curved Edges) ── */}
        {isMobileMenuOpen && (
          <div
            className="xl:hidden mt-2.5 bg-[#071A33] border border-white/15 text-white rounded-[28px] overflow-hidden shadow-[0_16px_45px_rgba(7,26,51,0.5)] animate-slideDown"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer header with Logos */}
            <div className="px-5 pt-4 pb-3 border-b border-white/12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://dyuti.in/assets/images/dyutilogoog.jpg"
                  alt="DYUTI Logo"
                  className="h-7 w-7 rounded-full border border-white/20"
                />
                <img
                  src="https://dyuti.in/assets/images/dyuti_2027_logo_new-removebg-preview.png"
                  alt="DYUTI 2027 Banner"
                  className="h-6 w-auto object-contain brightness-110"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-3.5 py-4 space-y-1.5">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between px-4 py-3 rounded-full text-[14.5px] font-sans font-medium transition-colors',
                      isActive
                        ? 'text-white font-semibold bg-white/18 shadow-inner'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#60A5FA] shrink-0" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Rajagiri Banner Link + Register CTA in Drawer */}
            <div className="px-4 pb-5 pt-2 space-y-3">
              <a
                href={CONFERENCE_DATA.links.rajagiriPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-slate-50 flex items-center justify-between text-[#071A33] text-xs font-semibold shadow-sm transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="https://dyuti.in/assets/images/rajagiri.webp"
                    alt="Rajagiri College of Social Sciences"
                    className="h-6 w-auto object-contain"
                  />
                  <span>Rajagiri College (Autonomous)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#071A33]/70" />
              </a>

              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-[48px] flex items-center justify-center gap-2 text-[13px] font-sans font-semibold bg-[#2563EB] text-white rounded-full shadow-md shadow-blue-600/30 hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none"
              >
                <span>Register for Conference</span>
                <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                  →
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

