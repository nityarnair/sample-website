import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#071A33] text-white pt-16 pb-12 border-t border-white/10"
      aria-label="Footer Navigation and Secretariat Contacts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">

          {/* Col 1: Pages Links (5 cols) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#93C5FD] font-bold">
              Pages
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs text-white/80 font-sans">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <Link to="/rajagiri" className="hover:text-white transition-colors">RAJAGIRI</Link>
              <Link to="/call_for_papers" className="hover:text-white transition-colors">CALL FOR PAPERS</Link>
              <Link to="/accomodation" className="hover:text-white transition-colors">ACCOMMODATION</Link>
              <a
                href={CONFERENCE_DATA.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#93C5FD] font-semibold hover:text-white transition-colors flex items-center gap-1"
              >
                <span>REGISTRATION</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <Link to="/gallery" className="hover:text-white transition-colors">GALLERY</Link>
              <Link to="/attractions" className="hover:text-white transition-colors">ATTRACTIONS</Link>
              <Link to="/travel" className="hover:text-white transition-colors">TRAVEL</Link>
            </div>
          </div>

          {/* Col 2: Secretariat Contacts (5 cols) */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#93C5FD] font-bold">
              Contact
            </h4>
            <div className="space-y-4 text-xs text-white/80 font-sans">
              <div>
                <p className="font-bold text-white text-sm">Dr. Sr. Bincy C.C</p>
                <p className="text-white/70">Assistant Professor,</p>
                <p className="text-white/70">Department of Social Work</p>
              </div>

              <div>
                <p className="font-bold text-white text-sm">Dr. V. Kalyani</p>
                <p className="text-white/70">Assistant Professor,</p>
                <p className="text-white/70">Department of Social Work</p>
                <p className="mt-1">
                  <a
                    href="mailto:dyuti@rajagiri.edu"
                    className="text-[#93C5FD] hover:underline flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>dyuti@rajagiri.edu</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Emblem & Logo (3 cols) */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <img
              src="https://dyuti.in/assets/images/25.png"
              alt="DYUTI Silver Jubilee"
              className="w-24 sm:w-28 h-auto object-contain drop-shadow-md brightness-110"
              loading="lazy"
            />
            <div className="text-left md:text-right">
              <span className="text-[11px] text-white/50 block font-sans">Host Institution</span>
              <span className="text-xs text-white/90 font-semibold block font-sans">Rajagiri College of Social Sciences</span>
              <span className="text-[11px] text-white/60 block font-sans">(Autonomous), Kalamassery, Kochi</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60 font-sans">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Copyright &copy; 2026 DYUTI | Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>By</span>
            <a
              href="http://rlabz.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#93C5FD] hover:underline font-semibold"
            >
              RlabZ
            </a>
          </div>

          {/* Social Icons matching dyuti.in */}
          <div className="flex items-center gap-4">
            <a
              href={CONFERENCE_DATA.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors p-1.5"
              aria-label="Facebook"
            >
              <img
                src="https://dyuti.in/assets/images/fb_icon.png"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href={CONFERENCE_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors p-1.5"
              aria-label="Instagram"
            >
              <img
                src="https://dyuti.in/assets/images/instagram.png"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href={CONFERENCE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors p-1.5"
              aria-label="LinkedIn"
            >
              <img
                src="https://dyuti.in/assets/images/linkedin.png"
                alt="LinkedIn"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href={CONFERENCE_DATA.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors p-1.5"
              aria-label="Twitter / X"
            >
              <img
                src="https://dyuti.in/assets/images/twitter.png"
                alt="Twitter"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
