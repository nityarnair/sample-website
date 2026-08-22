import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Sparkles, Award } from 'lucide-react';
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
    <header className="w-full relative z-40 bg-[#031311] border-b border-amber-500/20">
      {/* 1. Top Institutional & Conference Branding Area */}
      <div className="py-3 px-4 sm:px-8 bg-gradient-to-r from-[#031311] via-[#072421] to-[#031311]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
            <Link to="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
              <img
                src="https://dyuti.in/assets/images/dyutilogoog.jpg"
                alt="DYUTI Emblem"
                className="h-12 sm:h-14 w-auto object-contain rounded-md shadow-luxury-sm border border-amber-400/20"
              />
            </Link>
            <div className="h-8 w-px bg-amber-500/30 hidden sm:block" />
            <Link to="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
              <img
                src="https://dyuti.in/assets/images/dyuti_2027_logo_new-removebg-preview.png"
                alt="DYUTI 2027 Logo"
                className="h-14 sm:h-16 w-auto object-contain brightness-110 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-[11px] uppercase tracking-widest text-amber-300 font-cinzel font-semibold">
                Autonomous & NAAC A++
              </span>
              <span className="text-xs text-slate-300 font-display">
                NIRF #12 in India
              </span>
            </div>
            <a
              href={CONFERENCE_DATA.links.rajagiriPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-transform duration-300 hover:scale-105 p-1 rounded-lg bg-white/5 border border-amber-400/20 hover:border-amber-400/50"
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

      {/* 2. Sticky Modern Academic Luxury Navbar */}
      <nav
        className={cn(
          'sticky top-0 z-40 bg-[#051c19]/95 text-white transition-all duration-300 border-t border-b border-amber-500/25 backdrop-blur-xl',
          isScrolled && 'shadow-luxury-lg bg-[#031311]/95 border-amber-400/40'
        )}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14 sm:h-16">
          {/* Mobile Brand Title */}
          <Link
            to="/"
            className="lg:hidden font-cinzel font-bold text-lg text-amber-200 tracking-wider flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>DYUTI 2027</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {CONFERENCE_DATA.navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-2 rounded-xl text-xs font-display font-bold tracking-wider uppercase transition-all duration-200 relative',
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-gold-glow border border-amber-300/80'
                      : 'text-slate-200 hover:text-amber-300 hover:bg-white/5 border border-transparent'
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:from-amber-300 hover:to-amber-500 shadow-gold-glow hover:shadow-luxury-md border border-amber-300 transition-all duration-300 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform duration-300" />
              <span>Register Now</span>
              <ExternalLink className="w-3 h-3 opacity-75" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl text-amber-300 hover:bg-white/10 border border-amber-500/30 focus-visible:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#031311] border-b border-amber-500/30 px-5 pt-4 pb-7 space-y-2 shadow-2xl backdrop-blur-2xl">
            {CONFERENCE_DATA.navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-3 rounded-xl text-sm font-display font-bold uppercase tracking-wider transition-colors',
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-gold-glow font-extrabold'
                      : 'text-slate-200 hover:text-amber-300 hover:bg-white/5 border border-transparent'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <a
                href={CONFERENCE_DATA.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-display font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-gold-glow border border-amber-300"
              >
                <Sparkles className="w-4 h-4" />
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

