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
      {/* ── CAPSULE WRAPPER ── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 pointer-events-auto pt-4 sm:pt-5">
        <div
          className={cn(
            'w-full rounded-full flex items-center justify-between px-4 sm:px-6 transition-all duration-300',
            isScrolled
              ? 'h-[64px] bg-white/97 backdrop-blur-lg border border-[#D9DEE5] shadow-float'
              : 'h-[70px] sm:h-[74px] bg-white/92 backdrop-blur-md border border-[#D9DEE5]/70 shadow-editorial'
          )}
        >
          {/* ── LOGO / WORDMARK ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none shrink-0"
            aria-label="DYUTI 2027 — Return to Homepage"
          >
            <img
              src="https://dyuti.in/assets/images/dyutilogoog.jpg"
              alt="DYUTI Conference Emblem"
              className={cn(
                'object-contain rounded-full border transition-all duration-300',
                isScrolled
                  ? 'h-8 w-8 border-[#D9DEE5]'
                  : 'h-9 w-9 border-[#D9DEE5]/80 shadow-subtle'
              )}
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif font-semibold text-[#071A33] text-[1.35rem] sm:text-[1.5rem] tracking-tight leading-none group-hover:text-[#12345B] transition-colors">
                DYUTI
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#667085] font-semibold leading-none mt-0.5">
                2027 &middot; Kochi
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAVIGATION ── */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center"
          >
            <ul className="flex items-center gap-0.5 list-none m-0 p-0">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      cn(
                        'relative px-3.5 py-2 rounded-full text-[13px] font-sans font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071A33]/30',
                        isActive
                          ? 'text-[#071A33] font-semibold bg-[#071A33]/5'
                          : 'text-[#475467] hover:text-[#071A33] hover:bg-[#071A33]/4'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#071A33]" />
                        )}
                      </>
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
              className="group h-[42px] px-5 inline-flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.13em] font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-full transition-all duration-200 shadow-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071A33]"
            >
              <span>Register</span>
              {/* Unicode arrow — no icon library dep here */}
              <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5 inline-block">
                →
              </span>
            </a>
          </div>

          {/* ── MOBILE: REGISTER PILL + HAMBURGER ── */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 h-8 inline-flex items-center text-[11px] font-sans uppercase tracking-wider font-semibold bg-[#071A33] text-white rounded-full focus-visible:outline-none"
            >
              Register
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="w-9 h-9 flex items-center justify-center text-[#071A33] border border-[#D9DEE5] rounded-full bg-white shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071A33]/30 transition-colors hover:bg-[#F7F7F4]"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        {isMobileMenuOpen && (
          <div
            className="xl:hidden mt-2.5 bg-white border border-[#D9DEE5] rounded-[22px] overflow-hidden shadow-float animate-slideDown"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer header */}
            <div className="px-5 pt-4 pb-3 border-b border-[#D9DEE5] flex items-center justify-between">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#667085] font-semibold">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#667085] hover:text-[#071A33] transition-colors"
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
                      'flex items-center justify-between px-3 py-3.5 rounded-xl text-[13.5px] font-sans transition-colors',
                      idx < navLinks.length - 1 ? 'border-b border-[#D9DEE5]/50' : '',
                      isActive
                        ? 'text-[#071A33] font-semibold bg-[#F7F7F4]'
                        : 'text-[#475467] hover:text-[#071A33] hover:bg-[#F7F7F4]/70'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#071A33] shrink-0" />
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
                className="group w-full h-[50px] flex items-center justify-center gap-2 text-[12px] font-sans uppercase tracking-[0.14em] font-semibold bg-[#071A33] text-white rounded-full shadow-pill hover:bg-[#12345B] transition-colors focus-visible:outline-none"
              >
                <span>Register for Conference</span>
                <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5 inline-block">
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
