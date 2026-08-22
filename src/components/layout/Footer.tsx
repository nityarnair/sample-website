import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#071A33] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Branding Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://dyuti.in/assets/images/dyutilogoog.jpg"
                alt="DYUTI Emblem"
                className="h-10 w-auto object-contain rounded-xs border border-white/20"
              />
              <div>
                <h3 className="font-serif font-bold text-2xl text-white tracking-tight m-0">
                  DYUTI <span className="font-sans font-light text-sm text-[#93C5FD] tracking-widest ml-1">2027</span>
                </h3>
                <span className="text-[11px] font-sans uppercase tracking-widest text-white/50 block">
                  {CONFERENCE_DATA.edition} &bull; {CONFERENCE_DATA.acronymMeaning}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed max-w-lg font-normal">
              An international academic conference on social work and sustainable development convened annually since 1998 by <strong>{CONFERENCE_DATA.hostInstitution}</strong>.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between sm:justify-end gap-6 text-xs font-sans uppercase tracking-widest text-white/50">
            <div>
              <span className="block text-[#93C5FD] font-semibold mb-1">Venue</span>
              <span className="text-white/80">Kochi, Kerala, India</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div>
              <span className="block text-[#93C5FD] font-semibold mb-1">Accreditation</span>
              <span className="text-white/80">NAAC A++ &bull; NIRF #12 in India</span>
            </div>
          </div>
        </div>

        {/* 3-Column Navigation, Portals & Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 border-b border-white/10 text-xs font-sans">
          {/* Col 1: Navigation */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#93C5FD] font-semibold mb-5 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rajagiri" className="text-white/70 hover:text-white transition-colors">About Rajagiri</Link>
              </li>
              <li>
                <Link to="/call_for_papers" className="text-white/70 hover:text-white transition-colors">Call for Papers &amp; Guidelines</Link>
              </li>
              <li>
                <Link to="/accomodation" className="text-white/70 hover:text-white transition-colors">Accommodation</Link>
              </li>
              <li>
                <Link to="/attractions" className="text-white/70 hover:text-white transition-colors">Attractions in Kerala</Link>
              </li>
              <li>
                <Link to="/travel" className="text-white/70 hover:text-white transition-colors">Travel &amp; Directions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white transition-colors">Conference Gallery</Link>
              </li>
              <li>
                <Link to="/contactus" className="text-white/70 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Portals & Documents */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#93C5FD] font-semibold mb-5 font-sans">
              Official Portals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={CONFERENCE_DATA.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1"
                >
                  <span>Online Registration Form</span>
                  <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.cmtSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1"
                >
                  <span>Microsoft CMT Submission Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1"
                >
                  <span>Conference Brochure (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.accommodationPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1"
                >
                  <span>Hotel Directory List (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_DATA.links.rajagiriPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1"
                >
                  <span>RCSS Official Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Secretariat */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#93C5FD] font-semibold mb-5 font-sans">
              Conference Secretariat
            </h4>
            <div className="space-y-4 text-white/75">
              {CONFERENCE_DATA.contacts.map((contact) => (
                <div key={contact.name}>
                  <strong className="text-white block">{contact.name}</strong>
                  <span className="block text-white/60">{contact.role}, {contact.department}</span>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[#93C5FD] hover:underline font-mono text-[11px]"
                    >
                      {contact.email}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-white/10 text-white/50 text-[11px]">
                {CONFERENCE_DATA.hostInstitution}, Rajagiri Valley, Kalamassery, Kochi, Kerala 683104
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p className="m-0">
            &copy; {new Date().getFullYear()} DYUTI &bull; {CONFERENCE_DATA.hostInstitution}. All rights reserved.
          </p>
          <p className="m-0 font-serif italic text-white/60">
            Social Work for Sustainable Development
          </p>
        </div>
      </div>
    </footer>
  );
};
