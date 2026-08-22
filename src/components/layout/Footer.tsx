import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Twitter, Download, Sparkles, Award } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#041715] via-[#031311] to-[#020b0a] text-slate-300 pt-16 border-t border-amber-500/25 relative overflow-hidden" role="contentinfo">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Accreditation & Institution Spotlight Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#072824]/90 to-emerald-950/80 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury-md backdrop-blur-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 shadow-gold-glow">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-cinzel font-bold text-lg m-0">
                Rajagiri College of Social Sciences (Autonomous)
              </h4>
              <p className="text-xs text-amber-300 font-display m-0">
                NAAC A++ Accredited (CGPA 3.83/4) &bull; NIRF #12 in India &bull; KIRF #1 in Kerala
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={CONFERENCE_DATA.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:from-amber-300 hover:to-amber-500 shadow-gold-glow border border-amber-300 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Column 1: About DYUTI */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://dyuti.in/assets/images/25.png"
                alt="DYUTI 25+ Years Logo"
                className="h-12 w-auto filter brightness-0 invert opacity-90 drop-shadow-md"
              />
              <div>
                <h4 className="text-white font-cinzel font-bold text-lg leading-tight m-0">DYUTI 2027</h4>
                <p className="text-xs text-amber-400 font-medium m-0 tracking-wide">{CONFERENCE_DATA.edition}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              <strong>{CONFERENCE_DATA.fullName}</strong> — {CONFERENCE_DATA.acronymMeaning}. An international academic forum organized by {CONFERENCE_DATA.hostInstitution} advancing social justice and sustainable development.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONFERENCE_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-amber-500/20 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 shadow-luxury-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONFERENCE_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-amber-500/20 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 shadow-luxury-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONFERENCE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-amber-500/20 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 shadow-luxury-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONFERENCE_DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-amber-500/20 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 shadow-luxury-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h5 className="font-cinzel font-bold text-amber-200 text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Navigation</span>
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rajagiri" className="text-slate-300 hover:text-amber-300 transition-colors">Host Institution</Link>
              </li>
              <li>
                <Link to="/call_for_papers" className="text-slate-300 hover:text-amber-300 transition-colors">Call for Papers</Link>
              </li>
              <li>
                <Link to="/accomodation" className="text-slate-300 hover:text-amber-300 transition-colors">Accommodation & Stay</Link>
              </li>
              <li>
                <Link to="/attractions" className="text-slate-300 hover:text-amber-300 transition-colors">Attractions in Kerala</Link>
              </li>
              <li>
                <Link to="/travel" className="text-slate-300 hover:text-amber-300 transition-colors">Travel & Directions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-amber-300 transition-colors">Conference Gallery</Link>
              </li>
              <li>
                <Link to="/contactus" className="text-slate-300 hover:text-amber-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Registration & Documents */}
          <div>
            <h5 className="font-cinzel font-bold text-amber-200 text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Conference Portal</span>
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={CONFERENCE_DATA.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Online Registration</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.cmtSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <span>Microsoft CMT Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.accommodationPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hotels & Stay List (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.rajagiriPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <span>RCSS Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h5 className="font-cinzel font-bold text-amber-200 text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Contact Organizers</span>
            </h5>
            <div className="space-y-4 text-xs sm:text-sm">
              {CONFERENCE_DATA.contacts.map((contact) => (
                <div key={contact.name} className="border-l-2 border-amber-400/60 pl-3 py-1 bg-white/5 rounded-r-lg">
                  <p className="text-white font-semibold m-0">{contact.name}</p>
                  <p className="text-xs text-slate-300 m-0">{contact.role}, {contact.department}</p>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-1 text-xs text-amber-300 hover:underline mt-1 font-mono"
                    >
                      <Mail className="w-3 h-3 text-amber-400" /> {contact.email}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-2 flex items-start gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  {CONFERENCE_DATA.hostInstitution}, Rajagiri Valley, Kalamassery, Kochi, Kerala 683104
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-amber-500/20 py-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="m-0">
            Copyright &copy; {new Date().getFullYear()} DYUTI | {CONFERENCE_DATA.hostInstitution}. All rights reserved.
          </p>
          <p className="m-0 text-amber-300/80 font-serif italic text-sm">
            Social Work for Sustainable Development
          </p>
        </div>
      </div>
    </footer>
  );
};

