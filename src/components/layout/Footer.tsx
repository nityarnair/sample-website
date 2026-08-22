import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Twitter, Download } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08211e] text-slate-300 pt-16 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: About DYUTI */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://dyuti.in/assets/images/25.png"
                alt="DYUTI 25+ Years Logo"
                className="h-12 w-auto filter brightness-0 invert opacity-90"
              />
              <div>
                <h4 className="text-white font-display font-bold text-lg leading-tight m-0">DYUTI 2027</h4>
                <p className="text-xs text-amber-400 font-medium m-0">{CONFERENCE_DATA.edition}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              <strong>{CONFERENCE_DATA.fullName}</strong> — {CONFERENCE_DATA.acronymMeaning}. An annual academic forum organized by {CONFERENCE_DATA.hostInstitution} addressing critical social development priorities.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={CONFERENCE_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d97706] hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONFERENCE_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d97706] hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONFERENCE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d97706] hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONFERENCE_DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d97706] hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h5 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">
              Pages
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rajagiri" className="text-slate-300 hover:text-amber-400 transition-colors">Rajagiri College</Link>
              </li>
              <li>
                <Link to="/call_for_papers" className="text-slate-300 hover:text-amber-400 transition-colors">Call for Papers</Link>
              </li>
              <li>
                <Link to="/accomodation" className="text-slate-300 hover:text-amber-400 transition-colors">Accommodation</Link>
              </li>
              <li>
                <Link to="/attractions" className="text-slate-300 hover:text-amber-400 transition-colors">Attractions in Kerala</Link>
              </li>
              <li>
                <Link to="/travel" className="text-slate-300 hover:text-amber-400 transition-colors">Travel & Directions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-amber-400 transition-colors">Conference Gallery</Link>
              </li>
              <li>
                <Link to="/contactus" className="text-slate-300 hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Registration & Documents */}
          <div>
            <h5 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">
              Conference Portal
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={CONFERENCE_DATA.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <span>Online Registration</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.cmtSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>Microsoft CMT Submission</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.accommodationPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Hotels & Stay List (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.rajagiriPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <span>RCSS Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h5 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">
              Contact Organizers
            </h5>
            <div className="space-y-4 text-sm">
              {CONFERENCE_DATA.contacts.map((contact) => (
                <div key={contact.name} className="border-l-2 border-[#d97706] pl-3 py-0.5">
                  <p className="text-white font-semibold m-0">{contact.name}</p>
                  <p className="text-xs text-slate-300 m-0">{contact.role}, {contact.department}</p>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline mt-1"
                    >
                      <Mail className="w-3 h-3" /> {contact.email}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-2 flex items-start gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 text-[#d97706] mt-0.5" />
                <span>
                  {CONFERENCE_DATA.hostInstitution}, Rajagiri Valley, Kalamassery, Kochi, Kerala 683104
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="m-0">
            Copyright &copy; {new Date().getFullYear()} DYUTI | {CONFERENCE_DATA.hostInstitution}. All rights reserved.
          </p>
          <p className="m-0 text-slate-500">
            Social Work for Sustainable Development
          </p>
        </div>
      </div>
    </footer>
  );
};
