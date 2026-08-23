import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      {/* ── COMPACT DARK NAVY NAVBAR WRAPPER ── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 pointer-events-auto pt-3.5 sm:pt-4">
        <div
          className={cn(
            'w-full rounded-[20px] flex items-center justify-between px-4 sm:px-6 transition-all duration-300 bg-[#071A33] text-white border border-white/12 shadow-float',
            isScrolled
              ? 'h-[62px] sm:h-[64px] bg-[#071A33]/98 backdrop-blur-xl border-white/18'
              : 'h-[66px] sm:h-[68px]'
          )}
        >
          {/* ── LOGO / WORDMARK ── */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none shrink-0"
            aria-label="DYUTI 2027 — Return to Homepage"
          >
            <img
              src="https://dyuti.in/assets/images/dyutilogoog.jpg"
              alt="DYUTI Conference Emblem"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-full border border-white/20 shadow-sm transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-white text-[1.25rem] sm:text-[1.4rem] tracking-tight leading-none group-hover:text-[#93C5FD] transition-colors">
                DYUTI
              </span>
              <span className="font-sans text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-[#93C5FD] font-bold leading-none mt-1">
                2027 &middot; Kochi
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAVIGATION ── */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center"
          >
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      cn(
                        'relative px-3.5 py-2 rounded-[12px] text-[13.5px] font-sans font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]',
                        isActive
                          ? 'text-white font-semibold bg-white/12 shadow-inner'
                          : 'text-white/75 hover:text-white hover:bg-white/8'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-center gap-1.5">
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

          {/* ── DESKTOP REGISTER CTA ── */}
          <div className="hidden xl:flex items-center shrink-0">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[42px] px-5 inline-flex items-center gap-2 text-[13px] font-sans font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] rounded-[12px] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
            >
              <span>Register</span>
              <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </a>
          </div>

          {/* ── MOBILE: REGISTER BUTTON + HAMBURGER ── */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 h-8 inline-flex items-center text-[11.5px] font-sans font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] rounded-[10px] focus-visible:outline-none"
            >
              Register
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="w-9 h-9 flex items-center justify-center text-white border border-white/18 rounded-[10px] bg-white/10 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] transition-colors hover:bg-white/18"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER (Dark Navy Theme) ── */}
        {isMobileMenuOpen && (
          <div
            className="xl:hidden mt-2.5 bg-[#071A33] border border-white/15 text-white rounded-[20px] overflow-hidden shadow-float animate-slideDown"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer header */}
            <div className="px-5 pt-4 pb-3 border-b border-white/12 flex items-center justify-between">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#93C5FD] font-bold">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-3 py-2">
              {navLinks.map((item, idx) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between px-3.5 py-3 rounded-[12px] text-[14px] font-sans transition-colors',
                      idx < navLinks.length - 1 ? 'border-b border-white/6' : '',
                      isActive
                        ? 'text-white font-semibold bg-white/12'
                        : 'text-white/75 hover:text-white hover:bg-white/8'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Register CTA */}
            <div className="px-4 pb-4 pt-2">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-[48px] flex items-center justify-center gap-2 text-[13px] font-sans font-semibold bg-[#2563EB] text-white rounded-[14px] shadow-sm hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none"
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
