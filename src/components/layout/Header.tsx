import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { label: 'About', path: '/rajagiri' },
    { label: 'Tracks', path: '/#tracks' },
    { label: 'Speakers', path: '/#speakers' },
    { label: 'Schedule', path: '/#schedule' },
    { label: 'Call for Papers', path: '/call_for_papers' },
    { label: 'Accommodation', path: '/accomodation' },
    { label: 'Travel', path: '/travel' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contactus' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#D9DEE5] transition-all duration-300',
        isScrolled ? 'py-3 shadow-subtle' : 'py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* LEFT: Minimal Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          title="DYUTI 2027"
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

        {/* CENTER / RIGHT: Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          <nav aria-label="Main Navigation" className="flex items-center gap-6 text-xs font-sans font-medium uppercase tracking-[0.14em]">
            {navLinks.slice(0, 5).map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-[#667085] hover:text-[#071A33] transition-colors py-1 focus:outline-none"
                >
                  {item.label}
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
                        : 'text-[#667085] hover:text-[#071A33]'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
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
            className="px-4 py-2 text-[11px] font-sans uppercase tracking-wider font-semibold bg-[#071A33] text-white rounded-full"
          >
            Register
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#071A33] border border-[#D9DEE5] rounded-full focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D9DEE5] px-6 pt-4 pb-6 space-y-3 shadow-editorial">
          <nav className="flex flex-col space-y-2.5 text-xs font-sans uppercase tracking-[0.14em]">
            {navLinks.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-[#667085] hover:text-[#071A33] border-b border-[#D9DEE5]/60"
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
                      'py-2 border-b border-[#D9DEE5]/60 transition-colors',
                      isActive ? 'text-[#071A33] font-bold' : 'text-[#667085] hover:text-[#071A33]'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>

          <div className="pt-3">
            <a
              href={CONFERENCE_DATA.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold bg-[#071A33] text-white rounded-full shadow-pill"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
