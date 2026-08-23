import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Globe2, CheckCircle2, Award, BookOpen, HeartPulse, Building2 } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Rajagiri: React.FC = () => {
  const stats = [
    { value: '#12', label: 'NIRF India 2025', sub: 'Top College in India' },
    { value: '#1', label: 'KIRF Kerala 2025', sub: 'State Ranking' },
    { value: '3.83', label: 'NAAC A++ CGPA', sub: 'Highest Accreditation' },
    { value: '60+', label: 'Global Alliances', sub: 'Across 30+ Countries' },
    { value: '601–800', label: 'THE Impact SDG 3', sub: 'Good Health & Well-being' },
    { value: '26th', label: 'DYUTI Edition', sub: 'Legacy Since 1998' },
  ];

  const recognitions = [
    'India Elite Education & Institutional Excellence Award 2024',
    'Eat Right Campus Award by FSSAI (2025–2027)',
    'Green Institution Certification from Haritha Keralam Mission',
    'Best NSS Unit Award (2023–24)',
    'College with Potential for Excellence (CPE) by UGC India',
  ];

  return (
    <div className="py-20 sm:py-28 lg:py-32 bg-[#F5F5F0] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── 01 / EDITORIAL PAGE HEADER ── */}
        <PageHeader
          number="01"
          category="RAJAGIRI"
          metaRight="Kalamassery, Kochi &middot; Autonomous &middot; Estd. 1955"
          eyebrow="Host Institution Profile"
          title={
            <>
              Rajagiri College
              <span className="block font-heading text-[#667085] text-[1.85rem] sm:text-[2.5rem] font-bold mt-1">
                of Social Sciences (Autonomous)
              </span>
            </>
          }
          subtitle="Relentlessly Towards Excellence — Established in 1955, NAAC A++ Accredited (3.83 CGPA), Ranked #12 in India (NIRF 2025) and #1 in Kerala (KIRF 2025)."
        />

        {/* ── HERO INSTITUTIONAL COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 lg:mb-28">
          
          {/* Left Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-[#2563EB]" />
                <span className="text-[11.5px] font-sans uppercase tracking-[0.18em] font-bold text-[#2563EB]">
                  Autonomous Institution (2014 – 2030)
                </span>
              </div>

              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-heading font-extrabold text-[#071A33] leading-[1.1] mb-5">
                A Legacy of Distinction &amp; Social Commitment
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#667085] leading-relaxed font-sans font-normal mb-5">
                Rajagiri College of Social Sciences (Autonomous), Kalamassery, established in 1955 by the Carmelites of Mary Immaculate (CMI) Congregation, is one of India&apos;s premier institutions for higher education. Guided by its motto, <em className="text-[#071A33] font-semibold not-italic">Relentlessly Towards Excellence</em>, the college has built a legacy of academic distinction, innovation, and social commitment.
              </p>

              <p className="text-[15px] sm:text-[16px] text-[#667085] leading-relaxed font-sans font-normal mb-8">
                Conferred autonomous status by the University Grants Commission (UGC) in 2014, the institution continues to enjoy autonomous status up to the academic year 2029–30, providing world-class education that integrates empirical inquiry with grassroots developmental change.
              </p>
            </div>

            <div>
              <Button
                variant="navy"
                size="md"
                asLink
                href={CONFERENCE_DATA.links.rajagiriPortal}
                target="_blank"
                rel="noopener noreferrer"
                showArrow
              >
                Visit Official RCSS Portal
              </Button>
            </div>
          </div>

          {/* Right Campus Photograph (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-[#E8EDF2] shadow-editorial group">
              <img
                src="https://dyuti.in/assets/images/rcss/Rajagiri-College-of-Social-Sciences.jpg"
                alt="Rajagiri College of Social Sciences Campus"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── UNBOXED STATISTICS ── */}
        <div className="py-10 border-y border-[#D9DEE5] mb-20 lg:mb-28">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="font-heading text-[2.1rem] sm:text-[2.5rem] font-extrabold text-[#071A33] leading-none mb-1 tabular-nums group-hover:text-[#2563EB] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[13px] font-sans font-bold text-[#0B1220] mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11.5px] font-sans text-[#667085]">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── INSTITUTIONAL RECOGNITIONS & SDG IMPACT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 lg:mb-28 items-start">
          
          {/* Recognitions List (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[12px] bg-white border border-[#D9DEE5] flex items-center justify-center text-[#2563EB] shadow-subtle">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-[1.65rem] sm:text-[1.95rem] font-bold text-[#071A33] m-0">
                Institutional Recognitions
              </h3>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#667085] leading-relaxed font-sans font-normal mb-8">
              Rajagiri was granted the prestigious status of <strong className="text-[#071A33]">&apos;College with Potential for Excellence&apos; (CPE)</strong> by the University Grants Commission (UGC) of India in 2016, and has received numerous honours:
            </p>

            <div className="space-y-3.5">
              {recognitions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-[14px] bg-white border border-[#D9DEE5] shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span className="text-[13.5px] font-sans font-medium text-[#071A33] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SDG Impact & Global Standing (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[12px] bg-white border border-[#D9DEE5] flex items-center justify-center text-[#2563EB] shadow-subtle">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-[1.65rem] sm:text-[1.95rem] font-bold text-[#071A33] m-0">
                SDG &amp; Global Impact
              </h3>
            </div>

            <div className="p-7 sm:p-9 rounded-[20px] bg-white border border-[#D9DEE5] shadow-editorial space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB] block mb-2">
                  Times Higher Education Impact Rankings
                </span>
                <h4 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold mb-3">
                  Global Band 601–800 for SDG 3
                </h4>
                <p className="text-[13.5px] text-[#667085] leading-relaxed font-sans font-normal m-0">
                  Rajagiri has earned international recognition by being placed in the <strong>601–800 global band for SDG 3 (Good Health and Well-being)</strong> in the Times Higher Education Impact Rankings 2026.
                </p>
              </div>

              <div className="pt-6 border-t border-[#D9DEE5]">
                <p className="text-[13.5px] text-[#667085] leading-relaxed font-sans font-normal m-0">
                  With world-class infrastructure, multidisciplinary academic programmes, dedicated research centres, live labs (extension departments), and a deep commitment to social sustainability, Rajagiri continues to set benchmarks in higher education globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── DEPARTMENT OF SOCIAL WORK ── */}
        <div className="rounded-[24px] overflow-hidden border border-[#D9DEE5] bg-white shadow-editorial mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-[12px] bg-[#E8F0F7] text-[#2563EB] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-[#071A33] m-0">
                    Department of Social Work
                  </h3>
                </div>

                <p className="text-[14.5px] sm:text-[15.5px] text-[#667085] leading-relaxed font-sans font-normal mb-4">
                  The Department of Social Work at Rajagiri College of Social Sciences (Autonomous) has a legendary record in social work education, research, internationalisation, and community engagement. The Department has been <strong className="text-[#071A33]">ranked #2 among Social Work programmes in India by Outlook-ICARE (2024)</strong> and <strong className="text-[#071A33]">#2 by India Today (2020–2024)</strong>.
                </p>

                <p className="text-[14.5px] sm:text-[15.5px] text-[#667085] leading-relaxed font-sans font-normal mb-4">
                  The Department has undertaken impactful research with the Vimukthi Mission, Department of Excise (Government of Kerala), K-DISC, National Human Rights Commission, Kerala State Commission for Protection of Child Rights, and Department of Social Justice.
                </p>

                <p className="text-[14.5px] sm:text-[15.5px] text-[#667085] leading-relaxed font-sans font-normal mb-0">
                  The <em>Rajagiri Journal of Social Development</em> is listed in UGC CARE and received the ICSSR Adhoc Annual Grant-in-Aid for 2024–2025.
                </p>
              </div>

              <div className="pt-6 border-t border-[#D9DEE5] mt-8">
                <span className="text-[12.5px] text-[#2563EB] font-sans font-semibold block">
                  Conferences: 25 Years of Internationalisation (DYUTI 2024) &bull; 24th ICSD Biennial (DYUTI 2025) &bull; 10th International Summer University
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden max-h-[480px] order-1 lg:order-2 bg-[#E8EDF2]">
              <img
                src="https://dyuti.in/assets/images/rcss/department_of_social_work.png"
                alt="Department of Social Work at Rajagiri"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── 28 YEARS OF INTERNATIONALISATION ── */}
        <div className="mb-20 lg:mb-28 rounded-[24px] p-8 sm:p-12 lg:p-14 border border-[#D9DEE5] bg-white shadow-editorial">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#D9DEE5]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#E8F0F7] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-[#071A33] m-0">
                  28 Years of Internationalisation @ Rajagiri
                </h3>
                <p className="text-xs text-[#2563EB] font-sans font-semibold uppercase tracking-wider m-0 mt-1">
                  A Proud Milestone Towards Global Academic Excellence
                </p>
              </div>
            </div>
            <img
              src="https://dyuti.in/assets/images/25.png"
              alt="25 Years of Internationalisation Milestone"
              className="h-16 w-auto object-contain shrink-0"
            />
          </div>

          <p className="text-[#667085] text-[14.5px] sm:text-[15.5px] leading-relaxed mb-8 font-sans font-normal">
            <strong className="text-[#071A33]">Internationalisation</strong> has been a foundational pillar for Rajagiri since its inception, having completed 28 years of official international collaborations across 60+ partner universities in 30 countries:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] sm:text-[13.5px] text-[#0B1220]">
            <div className="flex items-start gap-3 p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span className="font-sans leading-relaxed">A global academic network spanning <strong>60+ partner universities across 30 countries</strong>.</span>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span className="font-sans leading-relaxed">Student exchange programmes with study opportunities ranging from <strong>1 to 6 months</strong>.</span>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span className="font-sans leading-relaxed">Hosting international students supported by the Government of India&apos;s <strong>Study in India (SII) Programme</strong>.</span>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <span className="font-sans leading-relaxed">Collaborative research, dual-degree, twinning, and international internships for global exposure.</span>
            </div>
          </div>
        </div>

        {/* ── OFFICIAL RCSS PORTAL BANNER WITH BLURRED RAJAGIRI CAMPUS BACKGROUND ── */}
        <div className="relative text-center text-white border border-white/15 rounded-[24px] sm:rounded-[28px] p-10 sm:p-16 shadow-editorial overflow-hidden">
          {/* Blurred Background Campus Image */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src="https://dyuti.in/assets/images/rcss/Rajagiri-College-of-Social-Sciences.jpg"
              alt="Rajagiri College Campus Background"
              className="w-full h-full object-cover object-center filter blur-md scale-110 brightness-50"
              loading="lazy"
            />
            {/* Deep Navy Atmospheric Gradient Overlay for crisp readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071A33]/88 via-[#071A33]/78 to-[#071A33]/90" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-[16px] bg-white/15 backdrop-blur-md text-white mb-5 border border-white/20 shadow-sm">
              <Building2 className="w-7 h-7 text-[#93C5FD]" />
            </div>
            <h3 className="font-heading text-[2rem] sm:text-[2.65rem] font-extrabold mb-3 tracking-tight">
              Explore RCSS Official Portal
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans font-normal leading-relaxed">
              Discover academic programmes, research centres, live lab initiatives, and faculty publications at Rajagiri College of Social Sciences (Autonomous).
            </p>
            <Button
              variant="white"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.rajagiriPortal}
              target="_blank"
              rel="noopener noreferrer"
              showArrow
              className="shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Visit rcss.rajagiri.edu
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
