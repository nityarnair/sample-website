import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDelegateDropdownOpen, setIsDelegateDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDelegateDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDelegateDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsDelegateDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Main primary links for desktop header
  const primaryLinks = [
    { label: 'About', path: '/rajagiri' },
    { label: 'Tracks', path: '/#tracks' },
    { label: 'Speakers', path: '/#speakers' },
    { label: 'Schedule', path: '/#schedule' },
    { label: 'Call for Papers', path: '/call_for_papers' },
  ];

  // Secondary / Delegate subpages
  const delegateLinks = [
    { label: 'Accommodation & Hotels', path: '/accomodation', desc: 'Curated hotel directories in Kochi' },
    { label: 'Travel & Venue Directions', path: '/travel', desc: 'Airport, rail & metro routes to campus' },
    { label: 'Kochi Attractions', path: '/attractions', desc: 'Historic Fort Kochi, beaches & backwaters' },
    { label: 'Photo Archive', path: '/gallery', desc: 'Glimpses from 25+ conference editions' },
  ];

  // All routes for mobile drawer
  const allMobileNavItems = [
    { label: 'Home', path: '/' },
    { label: 'About Rajagiri (RCSS)', path: '/rajagiri' },
    { label: 'Conference Tracks', path: '/#tracks' },
    { label: 'Keynote Speakers', path: '/#speakers' },
    { label: 'Program Schedule', path: '/#schedule' },
    { label: 'Important Dates', path: '/#important-dates' },
    { label: 'Call for Papers', path: '/call_for_papers' },
    { label: 'Accommodation & Stay', path: '/accomodation' },
    { label: 'Travel & Directions', path: '/travel' },
    { label: 'Kochi Attractions', path: '/attractions' },
    { label: 'Photo Gallery', path: '/gallery' },
    { label: 'Contact Secretariat', path: '/contactus' },
  ];

  const isDelegateRouteActive = ['/accomodation', '/accommodation', '/travel', '/venue', '/attractions', '/gallery'].includes(location.pathname);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#D9DEE5] transition-all duration-300',
        isScrolled ? 'py-2.5 sm:py-3 shadow-subtle' : 'py-3.5 sm:py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* LEFT: Minimal Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
          title="DYUTI 2027 Homepage"
        >
          <img
            src="https://dyuti.in/assets/images/dyutilogoog.jpg"
            alt="DYUTI Emblem"
            className="h-8 w-auto object-contain rounded-xs border border-[#D9DEE5]"
          />
          <div className="flex flex-col">
            <span className="font-serif tracking-tight text-[#071A33] text-xl leading-none group-hover:text-[#2563EB] transition-colors">
              DYUTI &rsquo;27
            </span>
            <span className="text-[10px] text-[#667085] tracking-wider uppercase font-sans mt-0.5 hidden sm:block">
              Rajagiri College of Social Sciences
            </span>
          </div>
        </Link>

        {/* CENTER / RIGHT: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <nav aria-label="Main Navigation" className="flex items-center gap-5 text-xs font-sans font-medium uppercase tracking-[0.14em]">
            {primaryLinks.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-[#667085] hover:text-[#071A33] transition-colors py-1.5 focus:outline-none"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'transition-colors py-1.5 relative focus:outline-none',
                      isActive
                        ? 'text-[#071A33] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#071A33]'
                        : 'text-[#667085] hover:text-[#071A33]'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}

            {/* Delegate Hub Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsDelegateDropdownOpen(true)}
              onMouseLeave={() => setIsDelegateDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsDelegateDropdownOpen(!isDelegateDropdownOpen)}
                aria-expanded={isDelegateDropdownOpen}
                className={cn(
                  'flex items-center gap-1 py-1.5 uppercase transition-colors focus:outline-none cursor-pointer',
                  isDelegateRouteActive ? 'text-[#071A33] font-bold' : 'text-[#667085] hover:text-[#071A33]'
                )}
              >
                <span>Information</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isDelegateDropdownOpen ? 'rotate-180' : '')} />
              </button>

              {/* Dropdown Menu */}
              {isDelegateDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn">
                  <div className="bg-white border border-[#D9DEE5] rounded-xl shadow-editorial p-2 space-y-1">
                    {delegateLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className={cn(
                          'block p-3 rounded-lg hover:bg-[#F8F8F6] transition-colors text-left group',
                          location.pathname === sub.path ? 'bg-[#F8F8F6]' : ''
                        )}
                      >
                        <div className="text-xs font-semibold text-[#071A33] group-hover:text-[#2563EB] transition-colors normal-case">
                          {sub.label}
                        </div>
                        <div className="text-[11px] text-[#667085] normal-case font-normal leading-tight mt-0.5">
                          {sub.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Direct Link */}
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                cn(
                  'transition-colors py-1.5 relative focus:outline-none',
                  isActive
                    ? 'text-[#071A33] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#071A33]'
                    : 'text-[#667085] hover:text-[#071A33]'
                )
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Thin vertical line */}
          <div className="w-px h-4 bg-[#D9DEE5]" />

          {/* Pill-shaped Primary CTA */}
          <a
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-2.5 h-[42px] inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-full transition-all shadow-subtle hover:shadow-editorial"
          >
            <span>Register Now</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[11px] font-sans uppercase tracking-wider font-semibold bg-[#071A33] text-white rounded-full shadow-subtle"
          >
            Register
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#071A33] border border-[#D9DEE5] rounded-full focus:outline-none bg-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Complete Mobile Drawer with ALL Pages */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D9DEE5] px-6 pt-4 pb-8 space-y-4 shadow-editorial max-h-[85vh] overflow-y-auto">
          <div className="text-[11px] uppercase font-sans tracking-widest text-[#2563EB] font-bold pb-2 border-b border-[#D9DEE5]">
            Conference Navigation
          </div>
          
          <nav className="flex flex-col space-y-1 text-xs font-sans uppercase tracking-[0.14em]">
            {allMobileNavItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 text-[#667085] hover:text-[#071A33] border-b border-[#D9DEE5]/40"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'py-2.5 border-b border-[#D9DEE5]/40 transition-colors flex items-center justify-between',
                      isActive ? 'text-[#071A33] font-bold bg-[#F8F8F6] px-2 rounded-xs' : 'text-[#667085] hover:text-[#071A33]'
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </NavLink>
              )
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={CONFERENCE_DATA.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white rounded-full shadow-pill"
            >
              <span>Register for Conference</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
