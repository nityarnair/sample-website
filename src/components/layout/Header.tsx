import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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

  // Handle scroll state for compact mode
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

  const navLinks = [
    { label: 'Home', path: '/', isExternal: false },
    { label: 'About', path: '/rajagiri', isExternal: false },
    { label: 'Call for Papers', path: '/call_for_papers', isExternal: false },
    { label: 'Accommodation', path: '/accomodation', isExternal: false },
    { label: 'Attractions', path: '/attractions', isExternal: false },
    { label: 'Travel', path: '/travel', isExternal: false },
    { label: 'Gallery', path: '/gallery', isExternal: false },
    { label: 'Contact', path: '/contactus', isExternal: false },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#D9DEE5] transition-all duration-200',
        isScrolled ? 'py-2.5 shadow-subtle' : 'py-3.5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* LEFT: Editorial Wordmark / Branding */}
        <Link
          to="/"
          className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-[#12345B]"
          title="DYUTI 2027 Homepage"
        >
          <img
            src="https://dyuti.in/assets/images/dyutilogoog.jpg"
            alt="DYUTI Emblem"
            className="h-9 w-auto object-contain rounded-xs border border-[#D9DEE5]"
          />
          <div className="flex flex-col">
            <span className="font-serif tracking-tight text-[#071A33] font-bold text-lg leading-none group-hover:text-[#2563EB] transition-colors">
              DYUTI <span className="font-sans font-light text-xs text-[#2563EB] tracking-widest uppercase ml-1">2027</span>
            </span>
            <span className="text-[10px] text-[#667085] tracking-wider uppercase font-sans mt-0.5 hidden sm:block">
              Rajagiri College of Social Sciences
            </span>
          </div>
        </Link>

        {/* RIGHT: Editorial Navigation & Primary Action */}
        <div className="hidden xl:flex items-center gap-7">
          <nav aria-label="Main Navigation" className="flex items-center gap-5 text-xs font-sans uppercase tracking-wider">
            {navLinks.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#667085] hover:text-[#071A33] transition-colors py-1 flex items-center gap-0.5 focus:outline-none focus:text-[#071A33]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#667085]" />
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'transition-colors py-1 relative focus:outline-none',
                      isActive
                        ? 'text-[#071A33] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#071A33]'
                        : 'text-[#667085] hover:text-[#071A33] font-medium'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Thin vertical separator */}
          <div className="w-px h-4 bg-[#D9DEE5]" />

          {/* Primary CTA */}
          <a
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-sm transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#12345B] shadow-subtle"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Medium Screen & Mobile Header Navigation Menu */}
        <div className="flex xl:hidden items-center gap-3">
          <a
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-sm transition-colors flex items-center gap-1 shadow-subtle"
          >
            <span>Register</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#071A33] hover:text-[#2563EB] border border-[#D9DEE5] hover:border-[#12345B] rounded-sm focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#D9DEE5] px-6 pt-4 pb-6 space-y-3 shadow-editorial">
          <nav className="flex flex-col space-y-2 text-xs font-sans uppercase tracking-wider">
            {navLinks.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-[#667085] hover:text-[#071A33] border-b border-[#D9DEE5]/60"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#667085]" />
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'py-2 border-b border-[#D9DEE5]/60 transition-colors',
                      isActive
                        ? 'text-[#071A33] font-bold pl-2 border-l-2 border-l-[#071A33]'
                        : 'text-[#667085] hover:text-[#071A33]'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="pt-3">
            <a
              href={CONFERENCE_DATA.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white hover:bg-[#12345B] rounded-sm transition-colors"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
