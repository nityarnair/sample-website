import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

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
      className="py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] text-[#101828] border-b border-[#D9DEE5] relative"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-14 sm:mb-20 border-b border-[#D9DEE5] text-xs font-sans uppercase tracking-[0.18em] text-[#667085]">
          <div className="flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold">04</span>
            <span className="w-8 h-px bg-[#D9DEE5]" />
            <span className="text-[#071A33] font-semibold">PROGRAM SCHEDULE</span>
          </div>
          <span>Two Days of Discourse</span>
        </div>

        {/* Header & Pill Day Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#2563EB] font-bold block mb-3">
              Chronicle of Sessions
            </span>
            <h2
              id="schedule-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#071A33] leading-[1.12] m-0"
            >
              Conference Itinerary &amp; Timeline
            </h2>
          </div>

          {/* Soft Pill Day Selector Buttons */}
          <div className="inline-flex border border-[#D9DEE5] rounded-full p-1.5 bg-[#F7F7F4] self-start md:self-auto shadow-subtle">
            <button
              type="button"
              onClick={() => setActiveDay(1)}
              className={`px-7 py-2.5 text-xs font-sans uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer ${
                activeDay === 1
                  ? 'bg-[#071A33] text-white shadow-pill'
                  : 'text-[#667085] hover:text-[#071A33]'
              }`}
            >
              Day 01 — Inauguration &amp; Tracks 01-04
            </button>
            <button
              type="button"
              onClick={() => setActiveDay(2)}
              className={`px-7 py-2.5 text-xs font-sans uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer ${
                activeDay === 2
                  ? 'bg-[#071A33] text-white shadow-pill'
                  : 'text-[#667085] hover:text-[#071A33]'
              }`}
            >
              Day 02 — Tracks 05-08 &amp; Valedictory
            </button>
          </div>
        </div>

        {/* Clean Editorial Timeline with Horizontal Separators */}
        <div className="border-t border-[#D9DEE5] divide-y divide-[#D9DEE5]">
          {currentSchedule.map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:bg-[#F7F7F4]/50 transition-colors px-2 sm:px-4"
            >
              {/* Time & Type */}
              <div className="lg:w-1/4 shrink-0">
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#071A33] mb-2">
                  <Clock className="w-4 h-4 text-[#2563EB]" />
                  <span>{item.time}</span>
                </div>
                <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                  {item.type}
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:w-2/4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] mb-2 leading-snug font-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] font-sans font-normal leading-relaxed m-0">
                  {item.description}
                </p>
              </div>

              {/* Location */}
              <div className="lg:w-1/4 flex lg:justify-end items-center text-xs text-[#667085] font-sans font-medium">
                <div className="flex items-center gap-1.5 bg-[#F7F7F4] border border-[#D9DEE5] px-4 py-2 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-[#071A33]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
