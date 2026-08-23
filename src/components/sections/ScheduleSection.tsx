import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Calendar, Download } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

interface ScheduleItem {
  time: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const day1Schedule: ScheduleItem[] = [
    {
      time: '08:30 — 09:30',
      title: 'Delegate Registration & Welcome Reception',
      type: 'Registration',
      location: 'Central Foyer, Rajagiri Valley Campus',
      description: 'Distribution of conference kits, badges, and proceedings documentation.',
    },
    {
      time: '09:30 — 11:00',
      title: 'Inaugural Ceremony & Release of Conference Volume',
      type: 'Inauguration',
      location: 'Main Auditorium',
      description: 'Lamp lighting ceremony, presidential address by CMI dignitaries, and official release of the Scopus-indexed volume.',
    },
    {
      time: '11:00 — 11:30',
      title: 'High Tea & Networking Break',
      type: 'Networking',
      location: 'Delegates Lounge',
      description: 'Informal interaction between national and international delegates.',
    },
    {
      time: '11:30 — 01:00',
      title: 'Keynote Address & Plenary Panel on Sustainable Development',
      type: 'Plenary',
      location: 'Main Auditorium',
      description: 'Global scholars present empirical frameworks on social work paradigms and SDG localization.',
    },
    {
      time: '01:00 — 02:00',
      title: 'Executive Luncheon',
      type: 'Hospitality',
      location: 'Rajagiri Dining Hall',
      description: 'Traditional Kerala banquet lunch provided for all registered delegates.',
    },
    {
      time: '02:00 — 04:30',
      title: 'Concurrent Track-wise Technical Paper Presentations (Tracks 01 to 04)',
      type: 'Paper Presentations',
      location: 'Seminar Halls A, B, C & D',
      description: 'Peer-reviewed oral paper presentations and poster sessions judged by session chairs.',
    },
    {
      time: '04:30 — 06:00',
      title: 'Roundtable Consultation: Civil Society, Industry & CSR Collaborations',
      type: 'Consultation',
      location: 'Board Room',
      description: 'Facilitated dialogue on multi-sectoral partnerships and sustainable impact investing.',
    },
  ];

  const day2Schedule: ScheduleItem[] = [
    {
      time: '09:00 — 10:30',
      title: 'Plenary Session II: Digital Social Work & Technological Innovations',
      type: 'Plenary',
      location: 'Main Auditorium',
      description: 'Deliberations on AI, data analytics, and digital inclusion for community transformation.',
    },
    {
      time: '10:30 — 11:00',
      title: 'Coffee & Research Poster Exhibits',
      type: 'Poster Session',
      location: 'Exhibition Gallery',
      description: 'Interactive presentation of student and scholar research posters.',
    },
    {
      time: '11:00 — 01:00',
      title: 'Concurrent Technical Paper Presentations (Tracks 05 to 08)',
      type: 'Paper Presentations',
      location: 'Seminar Halls A, B, C & D',
      description: 'Research deliberations on climate action, geriatric care, youth governance, and indigenous wisdom.',
    },
    {
      time: '01:00 — 02:00',
      title: 'Networking Luncheon',
      type: 'Hospitality',
      location: 'Rajagiri Dining Hall',
      description: 'Lunch and networking opportunities for scholars and faculty.',
    },
    {
      time: '02:00 — 03:30',
      title: 'Student & Youth Leadership Forum',
      type: 'Student Forum',
      location: 'Mini Auditorium',
      description: 'Pre-conference student research recommendations and community action plans.',
    },
    {
      time: '03:30 — 05:00',
      title: 'Valedictory Ceremony & Best Paper Awards Declaration',
      type: 'Valedictory',
      location: 'Main Auditorium',
      description: 'Conferment of Best Paper Awards, valedictory address, and resolution adoption.',
    },
  ];

  const currentSchedule = activeDay === 1 ? day1Schedule : day2Schedule;

  return (
    <section
      id="schedule"
      className="bg-[#FFFFFF] text-[#101828] border-b border-[#D9DEE5] relative py-24 sm:py-32 lg:py-36"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── TOP SECTION ANNOTATION BAR ── */}
        <div className="flex items-center justify-between pb-5 mb-14 sm:mb-20 border-b border-[#D9DEE5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#2563EB] tabular-nums">04</span>
            <span className="w-6 h-px bg-[#D9DEE5]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
              Programme
            </span>
          </div>
          <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085]">
            Two Days of Ideas, Dialogue and Discovery
          </span>
        </div>

        {/* ── SECTION EDITORIAL HEADER & DAY TOGGLE ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2563EB]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-[#2563EB]">
                Session Chronicle
              </span>
            </div>
            <h2
              id="schedule-heading"
              className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal text-[#071A33] leading-[1.08] tracking-tight m-0"
            >
              Two days of ideas, dialogue and discovery.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-sans font-normal mt-4 leading-relaxed">
              Carefully choreographed across plenary deliberations, concurrent technical presentation tracks, youth forums, and policy roundtables.
            </p>
          </div>

          {/* ── PILL DAY SELECTOR ── */}
          <div className="inline-flex items-center p-1.5 bg-[#F7F7F4] border border-[#D9DEE5] rounded-full self-start lg:self-end shadow-subtle shrink-0">
            <button
              type="button"
              onClick={() => setActiveDay(1)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 text-xs font-sans uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeDay === 1
                  ? 'bg-[#071A33] text-white shadow-pill'
                  : 'text-[#667085] hover:text-[#071A33] bg-transparent'
              }`}
            >
              <span>Day 01 · Inauguration &amp; Tracks 01–04</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveDay(2)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 text-xs font-sans uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeDay === 2
                  ? 'bg-[#071A33] text-white shadow-pill'
                  : 'text-[#667085] hover:text-[#071A33] bg-transparent'
              }`}
            >
              <span>Day 02 · Tracks 05–08 &amp; Valedictory</span>
            </button>
          </div>
        </div>

        {/* ── EDITORIAL TIMELINE ROWS (No enclosed rectangular cards) ── */}
        <div className="border-t border-[#D9DEE5] divide-y divide-[#D9DEE5]">
          {currentSchedule.map((item, idx) => (
            <div
              key={idx}
              className="group py-8 sm:py-10 px-2 sm:px-6 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:bg-[#F7F7F4]/60 transition-all duration-300"
            >
              {/* Left Column: Prominent Time & Session Type */}
              <div className="lg:w-1/4 shrink-0">
                <div className="font-mono text-lg sm:text-xl font-bold text-[#071A33] group-hover:text-[#2563EB] transition-colors mb-2 tracking-tight">
                  {item.time}
                </div>
                <span className="inline-block text-[10.5px] font-sans font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                  {item.type}
                </span>
              </div>

              {/* Middle Column: Session Title & Description */}
              <div className="lg:w-2/4 lg:px-4">
                <h3 className="font-serif text-[1.45rem] sm:text-[1.75rem] text-[#071A33] font-normal leading-[1.25] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#667085] font-sans font-normal leading-relaxed m-0">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Venue / Location */}
              <div className="lg:w-1/4 flex lg:justify-end items-center shrink-0">
                <div className="inline-flex items-center gap-2 bg-[#F7F7F4] border border-[#D9DEE5] px-4 py-2 rounded-full text-[12px] font-sans text-[#101828] font-medium group-hover:border-[#2563EB]/30 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── SCHEDULE FOOTER WITH BROCHURE LINK ── */}
        <div className="mt-12 pt-8 border-t border-[#D9DEE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#667085] font-sans">
            <Calendar className="w-4 h-4 text-[#2563EB]" />
            <span>Detailed session chair allocations &amp; presentation timings will be circulated to registered delegates.</span>
          </div>
          <a
            href={CONFERENCE_DATA.links.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[11.5px] font-sans uppercase tracking-[0.14em] font-semibold text-[#071A33] hover:text-[#2563EB] transition-colors shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Complete Schedule (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
