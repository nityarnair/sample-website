import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Floating Pill Navbar */}
        <div
          className={cn(
            'w-full bg-white/92 backdrop-blur-md border border-[#D9DEE5]/80 rounded-full px-4 sm:px-7 flex items-center justify-between transition-all duration-300',
            isScrolled
              ? 'h-[64px] sm:h-[68px] shadow-float bg-white/96 border-[#D9DEE5]'
              : 'h-[68px] sm:h-[74px] shadow-editorial bg-white/90'
          )}
        >
          {/* Logo / Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
            title="DYUTI 2027 Homepage"
          >
            <img
              src="https://dyuti.in/assets/images/dyutilogoog.jpg"
              alt="DYUTI Emblem"
              className="h-8 w-auto object-contain rounded-full border border-[#D9DEE5]/80 shadow-subtle group-hover:border-[#071A33] transition-colors"
            />
            <span className="font-serif font-semibold tracking-tight text-[#071A33] text-2xl sm:text-[1.55rem] leading-none group-hover:text-[#2563EB] transition-colors">
              DYUTI &rsquo;27
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-5 text-[13px] font-sans font-medium text-[#475467]"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  cn(
                    'transition-colors py-1.5 relative focus:outline-none whitespace-nowrap',
                    isActive
                      ? 'text-[#071A33] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#071A33] after:rounded-full'
                      : 'text-[#475467] hover:text-[#071A33]'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Register CTA */}
          <div className="hidden xl:flex items-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[42px] px-5 inline-flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.12em] font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-full transition-all shadow-pill hover:shadow-editorial"
            >
              <span>Register</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile: Register + Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-[11px] font-sans uppercase tracking-wider font-semibold bg-[#071A33] text-white rounded-full"
            >
              Register
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 text-[#071A33] border border-[#D9DEE5] rounded-full focus:outline-none bg-white shadow-subtle"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 bg-white/98 backdrop-blur-md border border-[#D9DEE5] rounded-[24px] px-6 pt-5 pb-7 space-y-1 shadow-float max-h-[80vh] overflow-y-auto animate-fadeIn">
            <div className="text-[10px] uppercase font-sans tracking-widest text-[#2563EB] font-bold pb-3 border-b border-[#D9DEE5]">
              Navigation
            </div>

            <nav className="flex flex-col">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'py-3 border-b border-[#D9DEE5]/40 transition-colors flex items-center justify-between text-[13px] font-sans',
                      isActive
                        ? 'text-[#071A33] font-semibold'
                        : 'text-[#667085] hover:text-[#071A33]'
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-30" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-3">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 flex items-center justify-center gap-2 text-[12px] font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white rounded-full shadow-pill"
              >
                <span>Register for Conference</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
