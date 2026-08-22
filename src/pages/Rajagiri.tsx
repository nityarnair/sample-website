import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Globe2, CheckCircle2, ArrowRight, Building2, Award, BookOpen, HeartPulse } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Rajagiri: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 bg-[#F7F7F4] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          sectionNumber="08"
          eyebrow="Host Institution Profile"
          title="Rajagiri College of Social Sciences (Autonomous)"
          subtitle="Relentlessly Towards Excellence — Established in 1955, NAAC A++ Accredited (3.83 CGPA), Ranked #12 in India (NIRF 2025) and #1 in Kerala (KIRF 2025)."
        />

        {/* Hero Institutional Card */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-white shadow-editorial mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 overflow-hidden max-h-[440px]">
              <img
                src="https://dyuti.in/assets/images/rcss/Rajagiri-College-of-Social-Sciences.jpg"
                alt="Rajagiri College of Social Sciences Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3.5 py-1.5 rounded-full mb-4">
                  Autonomous Institution (2014 – 2030)
                </span>
                <h3 className="font-serif text-3xl text-[#071A33] mb-4 font-normal">
                  A Legacy of Distinction &amp; Social Commitment
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal mb-4">
                  Rajagiri College of Social Sciences (Autonomous), Kalamassery, established in 1955 by the Carmelites of Mary Immaculate (CMI) Congregation, is one of India&apos;s premier institutions for higher education. Guided by its motto, <em>Relentlessly Towards Excellence</em>, the college has built a legacy of academic distinction, innovation, and social commitment.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal">
                  Conferred autonomous status by the University Grants Commission (UGC) in 2014, the institution continues to enjoy autonomous status up to the academic year 2029–30.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#D9DEE5] mt-6">
                <div className="text-center">
                  <span className="font-serif text-3xl text-[#071A33] block font-normal">#12</span>
                  <span className="text-[11px] text-[#667085] font-sans font-semibold">NIRF India 2025</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl text-[#2563EB] block font-normal">#1</span>
                  <span className="text-[11px] text-[#667085] font-sans font-semibold">KIRF Kerala 2025</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl text-[#071A33] block font-normal">3.83</span>
                  <span className="text-[11px] text-[#667085] font-sans font-semibold">NAAC A++ CGPA</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl text-[#2563EB] block font-normal">601–800</span>
                  <span className="text-[11px] text-[#667085] font-sans font-semibold">THE Impact SDG 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* National & Global Recognitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] m-0 font-normal">
                Institutional Recognitions
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal mb-6">
              Rajagiri was granted the prestigious status of <strong>&apos;College with Potential for Excellence&apos; (CPE)</strong> by the University Grants Commission (UGC) of India in 2016, and has received numerous honours:
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#667085] font-sans">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                <span><strong className="text-[#071A33]">India Elite Education &amp; Institutional Excellence Award 2024</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                <span><strong className="text-[#071A33]">Eat Right Campus Award by FSSAI (2025–2027)</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                <span><strong className="text-[#071A33]">Green Institution Certification</strong> from the Haritha Keralam Mission</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                <span><strong className="text-[#071A33]">Best NSS Unit Award (2023–24)</strong></span>
              </li>
            </ul>
          </div>

          <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] m-0 font-normal">
                SDG &amp; Impact Rankings
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal mb-6">
              Rajagiri has earned international recognition by being placed in the <strong>601–800 global band for SDG 3 (Good Health and Well-being)</strong> in the Times Higher Education Impact Rankings 2026.
            </p>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal">
              With world-class infrastructure, multidisciplinary academic programmes, research centres, live labs (extension departments), and a strong commitment to sustainability, Rajagiri continues to set benchmarks in higher education globally.
            </p>
          </div>
        </div>

        {/* Department of Social Work */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-white shadow-editorial mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#071A33] m-0 font-normal">
                    Department of Social Work
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal mb-4">
                  The Department of Social Work at Rajagiri College of Social Sciences (Autonomous) has a strong record in social work education, research, internationalisation, and community engagement. The Department has been <strong className="text-[#071A33]">ranked 2nd among Social Work programmes in India by Outlook-ICARE (2024)</strong> and <strong className="text-[#071A33]">2nd by India Today (2020–2024)</strong>.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal mb-4">
                  The Department has undertaken impactful research with the Vimukthi Mission, Department of Excise (Government of Kerala), K-DISC, National Human Rights Commission, Kerala State Commission for Protection of Child Rights, and Department of Social Justice.
                </p>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal">
                  The <em>Rajagiri Journal of Social Development</em> is listed in UGC CARE and received the ICSSR Adhoc Annual Grant-in-Aid for 2024–2025.
                </p>
              </div>
              <div className="pt-6 border-t border-[#D9DEE5] mt-6">
                <span className="text-xs text-[#2563EB] font-sans font-semibold block">
                  Conferences: 25 Years of Internationalisation (DYUTI 2024) • 24th ICSD Biennial (DYUTI 2025) • 10th International Summer University
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 overflow-hidden max-h-[460px] order-1 lg:order-2">
              <img
                src="https://dyuti.in/assets/images/rcss/department_of_social_work.png"
                alt="Department of Social Work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 28 Years of Internationalisation */}
        <div className="mb-16 rounded-[24px] p-8 sm:p-12 border border-[#D9DEE5] bg-white shadow-editorial">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#D9DEE5]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-[#071A33] m-0 font-normal">
                  28 Years of Internationalisation @ Rajagiri
                </h3>
                <p className="text-xs text-[#2563EB] font-sans font-semibold uppercase tracking-wider m-0">A Proud Milestone Towards Global Academic Excellence</p>
              </div>
            </div>
            <img
              src="https://dyuti.in/assets/images/25.png"
              alt="25 Years of Internationalisation Milestone"
              className="h-16 w-auto object-contain shrink-0"
            />
          </div>

          <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mb-6 font-sans font-normal">
            <strong>Internationalisation</strong> has been a catchword for Rajagiri since its inception, and the college has completed 28 years of official international collaborations across 60+ partner universities in 30 countries:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#101828]">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span>A global academic network spanning <strong>60+ partner universities across 30 countries</strong>.</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span>Student exchange programmes with short-term study opportunities ranging from <strong>1 to 6 months</strong>.</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span>Hosting full-time international students supported by the Government of India&apos;s <strong>Study in India (SII) Programme</strong>.</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span>Collaborative research, dual-degree, twinning, and international internships for global exposure.</span>
            </div>
          </div>
        </div>

        {/* Official Portal Action */}
        <div className="text-center bg-[#071A33] text-white border border-white/10 rounded-[24px] p-12 shadow-editorial">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-5">
            <Building2 className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl mb-3 font-normal">Explore RCSS Official Portal</h3>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-sans font-normal leading-relaxed">
            Discover academic programmes, research centres, live lab initiatives, and faculty publications at Rajagiri College of Social Sciences (Autonomous).
          </p>
          <a
            href={CONFERENCE_DATA.links.rajagiriPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#071A33] hover:bg-[#EEF3F8] font-sans font-semibold text-xs tracking-[0.14em] uppercase shadow-pill transition-all"
          >
            <span>Visit rcss.rajagiri.edu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
