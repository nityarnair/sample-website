import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#071A33] text-white pt-24 pb-14 border-t border-white/10"
      aria-label="Footer Navigation and Secretariat Contacts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Theme (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://dyuti.in/assets/images/dyutilogoog.jpg"
                alt="DYUTI Emblem"
                className="h-10 w-auto object-contain rounded-full border border-white/20"
              />
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white block leading-none tracking-tight">
                  DYUTI 2027
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed max-w-md font-normal">
              <strong>Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership.</strong>
            </p>

            <div className="pt-2">
              <a
                href={CONFERENCE_DATA.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[12px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] text-xs font-sans uppercase tracking-[0.14em] font-bold transition-all shadow-sm"
              >
                <span>Register for Conference</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.16em] text-[#93C5FD] font-bold">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rajagiri" className="hover:text-white transition-colors">About RCSS</Link>
              </li>
              <li>
                <Link to="/call_for_papers" className="hover:text-white transition-colors">Call for Papers</Link>
              </li>
              <li>
                <a href="/#tracks" className="hover:text-white transition-colors">Conference Tracks</a>
              </li>
              <li>
                <a href="/#speakers" className="hover:text-white transition-colors">Speakers</a>
              </li>
              <li>
                <a href="/#schedule" className="hover:text-white transition-colors">Schedule</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Delegate Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.16em] text-[#93C5FD] font-bold">
              Delegate Hub
            </h4>
            <ul className="space-y-3.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/accomodation" className="hover:text-white transition-colors">Hotels &amp; Stay</Link>
              </li>
              <li>
                <Link to="/attractions" className="hover:text-white transition-colors">Kochi Sights</Link>
              </li>
              <li>
                <Link to="/travel" className="hover:text-white transition-colors">Travel Advisory</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-white transition-colors">Secretariat</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.16em] text-[#93C5FD] font-bold">
              Conference Secretariat
            </h4>
            <div className="space-y-3 text-xs text-white/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#93C5FD] mt-0.5 shrink-0" />
                <span>Rajagiri College of Social Sciences (Autonomous), Rajagiri Valley P.O, Kalamassery, Kochi - 683 039, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <a href="mailto:dyuti@rajagiri.edu" className="hover:text-white transition-colors">dyuti@rajagiri.edu</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <span>+91 484-2911 346 / 2911 321</span>
              </div>
              <div className="pt-2">
                <a
                  href={CONFERENCE_DATA.links.rajagiriPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#93C5FD] hover:underline"
                >
                  <span>rcss.rajagiri.edu</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55 font-sans">
          <div>
            &copy; 2027 DYUTI &bull; Rajagiri College of Social Sciences (Autonomous). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>NAAC A++ (3.83 CGPA)</span>
            <span>&bull;</span>
            <span>NIRF #12 in India</span>
            <span>&bull;</span>
            <span>UGC Autonomous</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
