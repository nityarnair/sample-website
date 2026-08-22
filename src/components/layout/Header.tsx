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

  // Handle scroll state for navbar compact mode
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
    { label: 'Rajagiri', path: '/rajagiri', isExternal: false },
    { label: 'Call for Papers', path: '/call_for_papers', isExternal: false },
    { label: 'Accommodation', path: '/accomodation', isExternal: false },
    { label: 'Registration', path: CONFERENCE_DATA.links.registrationForm, isExternal: true },
    { label: 'Gallery', path: '/gallery', isExternal: false },
    { label: 'Attractions', path: '/attractions', isExternal: false },
    { label: 'Travel', path: '/travel', isExternal: false },
    { label: 'Contact', path: '/contactus', isExternal: false },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-[#101716]/95 backdrop-blur-md border-b border-[#C89B3C]/20 transition-all duration-300',
        isScrolled ? 'py-2 shadow-lg shadow-black/40' : 'py-3.5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* LEFT: Editorial Branding */}
        <Link
          to="/"
          className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-[#C89B3C]"
          title="DYUTI 2027 Homepage"
        >
          <img
            src="https://dyuti.in/assets/images/dyutilogoog.jpg"
            alt="DYUTI Emblem"
            className="h-9 w-auto object-contain rounded-xs border border-[#C89B3C]/30"
          />
          <div className="flex flex-col">
            <span className="font-serif tracking-tight text-white font-bold text-lg leading-none group-hover:text-[#C89B3C] transition-colors">
              DYUTI <span className="font-sans font-light text-xs text-[#C89B3C] tracking-widest uppercase ml-1">2027</span>
            </span>
            <span className="text-[10px] text-white/50 tracking-wider uppercase font-sans mt-0.5 hidden sm:block">
              Rajagiri College of Social Sciences
            </span>
          </div>
        </Link>

        {/* RIGHT: Minimal Editorial Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <nav aria-label="Main Navigation" className="flex items-center gap-5 text-xs font-sans uppercase tracking-wider">
            {navLinks.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#C89B3C] transition-colors py-1 flex items-center gap-0.5 focus:outline-none focus:text-[#C89B3C]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C89B3C]/70" />
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'transition-colors py-1 relative focus:outline-none',
                      isActive
                        ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#C89B3C]'
                        : 'text-white/70 hover:text-white'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Thin divider */}
          <div className="w-px h-4 bg-white/20" />

          {/* Primary Action */}
          <a
            href={CONFERENCE_DATA.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-sans uppercase tracking-widest font-semibold bg-[#C89B3C] text-[#101716] hover:bg-[#F7F4EC] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
          >
            <span>Register</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-white/80 hover:text-[#C89B3C] border border-white/10 hover:border-[#C89B3C]/40 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#101716] border-b border-[#C89B3C]/30 px-6 pt-4 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-sans uppercase tracking-wider">
            {navLinks.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-white/70 hover:text-[#C89B3C] border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C89B3C]" />
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'py-2 border-b border-white/5 transition-colors',
                      isActive
                        ? 'text-[#C89B3C] font-semibold pl-2 border-l-2 border-l-[#C89B3C]'
                        : 'text-white/70 hover:text-white'
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
              className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold bg-[#C89B3C] text-[#101716]"
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
