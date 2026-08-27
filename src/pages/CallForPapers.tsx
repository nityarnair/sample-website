import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapers: React.FC = () => {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null);

  const participantTypes = [
    'Graduate Students',
    'Post Graduate Students',
    'Academicians / Faculty Members',
    'Research Scholars',
    'NGO Delegates',
    'CSR Delegates & Development Practitioners',
  ];

  return (
    <div className="pt-2 sm:pt-3 lg:pt-4 pb-20 sm:pb-28 lg:pb-32 bg-[#060D0E] text-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── PAGE HEADER ── */}
        <div className="text-center pt-4 sm:pt-6 pb-10 sm:pb-14 mb-4">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-[#2563EB]" />
            <span className="text-[12px] font-sans font-bold uppercase tracking-[0.22em] text-[#F8FAFC]">
              Scholarly Submissions &amp; Guidelines
            </span>
            <span className="w-6 h-0.5 bg-[#2563EB]" />
          </div>
          <h1 className="font-heading font-extrabold text-[#F8FAFC] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
            Call for Papers
            <span className="block text-[#F8FAFC]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.25rem)' }}>
              &amp; Submission Guidelines
            </span>
          </h1>
          <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-[#F8FAFC] leading-relaxed font-sans max-w-2xl mx-auto">
            Abstracts based on original empirical research, theoretical inquiries, and innovative practice models are invited for Oral and Poster Presentations across the 8 conference themes.
          </p>
        </div>

        {/* ── MAIN SUBMISSION ACTION BANNER (Deep Navy #071A33) ── */}
      <div className="bg-white/10 backdrop-blur-md border border-white/15 text-white rounded-[24px] p-8 sm:p-12 lg:p-14 mb-20 lg:mb-28 shadow-2xl">
  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
    <div className="max-w-2xl">
      <span className="inline-flex items-center text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#D4F933] bg-white/10 px-3.5 py-1.5 rounded-[8px] mb-4 border border-white/15 backdrop-blur-sm">
        Microsoft CMT Portal Active &middot; Deadline: 25 Sept 2026
      </span>
      <h2 className="text-[2.25rem] sm:text-[2.85rem] font-heading font-extrabold text-white mb-3 leading-tight">
        Submit Your Abstract or Full Paper
      </h2>
      <p className="text-slate-300 text-sm sm:text-base m-0 font-sans font-normal leading-relaxed">
        All submissions must be uploaded electronically via the official Microsoft Conference Management Toolkit (CMT). Peer review outcomes will be communicated systematically.
      </p>
    </div>

    <div className="flex flex-wrap gap-3.5 shrink-0">
      <Button
        variant="primary"
        size="lg"
        asLink
        href={CONFERENCE_DATA.links.cmtSubmission}
        target="_blank"
        rel="noopener noreferrer"
        showArrow
      >
        Submit Your Paper
      </Button>
      <Button
        variant="white"
        size="lg"
        asLink
        href={CONFERENCE_DATA.links.brochurePdf}
        target="_blank"
        rel="noopener noreferrer"
        icon={<Download className="w-4 h-4" />}
      >
        Brochure (PDF)
      </Button>
    </div>
  </div>
</div>

        {/* ── OFFICIAL CONFERENCE THEME BANNER ── */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[24px] p-6 sm:p-8 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
  <div className="max-w-xl">
    <span className="text-[11.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4F933] block mb-2">
      Official Conference Identity &amp; Scope
    </span>
    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2 leading-snug">
      DYUTI 2027 Thematic Framework
    </h3>
    <p className="text-xs sm:text-sm text-slate-300 font-sans font-normal m-0 leading-relaxed">
      Advancing empirical research across community innovation, social inclusion, human rights, and global partnership initiatives.
    </p>
  </div>
  <div className="w-full md:w-auto shrink-0 max-w-[380px] bg-white/5 p-4 rounded-[18px] border border-white/10 backdrop-blur-sm">
    <img
      src="/images/dyuti27_theme_banner.png"
      alt="DYUTI 27 — Social Work for Sustainable Development"
      className="w-full h-auto object-contain brightness-110"
      loading="lazy"
    />
  </div>
</div>

        {/* ── CONFERENCE THEMES ── */}
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-[#D9DEE5]">
            <div>
              <span className="text-[11.5px] font-mono font-bold uppercase tracking-[0.18em] text-[#F8FAFC] block mb-1">
                Thematic Areas
              </span>
              <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-[#F8FAFC] m-0">
                Eight Conference Sub-Themes
              </h3>
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#F8FAFC] hidden sm:inline font-semibold">
              Select a theme to inspect focus areas
            </span>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/15 bg-white/10 backdrop-blur-md rounded-[20px] overflow-hidden shadow-2xl">
  {CONFERENCE_DATA.subThemes.map((track, idx) => {
    const isExpanded = expandedTheme === idx;
    return (
      <div
        key={track.id}
        className="transition-colors hover:bg-white/5"
      >
        <button
          type="button"
          onClick={() => setExpandedTheme(isExpanded ? null : idx)}
          className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-6 sm:gap-8">
            <span className="font-mono text-sm sm:text-base font-bold text-[#D4F933] tabular-nums shrink-0">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white m-0 leading-snug">
                {track.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-normal mt-1 m-0 line-clamp-1">
                {track.topics.join(' · ')}
              </p>
            </div>
          </div>
          <div className="ml-4 shrink-0 text-slate-400 hover:text-white transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {isExpanded && (
          <div className="px-6 sm:px-8 pb-8 pt-2 bg-white/5 border-t border-white/10">
            <div className="flex flex-wrap gap-2 pt-2">
              {track.topics.map((topic, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-block text-[12px] font-sans text-slate-200 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-[8px] backdrop-blur-sm shadow-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>
        </div>

        {/* ── GUIDELINES FOR ABSTRACT & PUBLICATION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 lg:mb-28 items-start">

  {/* Submission Guidelines (6 cols) */}
  <div className="lg:col-span-6 p-8 sm:p-10 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
    <div className="mb-6">
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#D4F933] block mb-1">
        Submission Protocol
      </span>
      <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold m-0">
        Guidelines for Abstract
      </h3>
    </div>

    <ol className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal m-0 pl-0 list-none">
      <li className="flex items-start gap-3">
        <span className="font-mono text-xs font-bold text-[#D4F933] mt-0.5">01</span>
        <span>The abstract should be <strong className="text-white">within 300 words</strong> of text including the title and keywords (MS Word document).</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="font-mono text-xs font-bold text-[#D4F933] mt-0.5">02</span>
        <span>The text should be arranged according to the following headlines: <strong className="text-white">Objectives, Design, Model, Result, and Conclusion</strong>.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="font-mono text-xs font-bold text-[#D4F933] mt-0.5">03</span>
        <span>The abstract&apos;s title page must include the paper title, Author&apos;s full name, academic designation, institutional affiliation, mailing address, contact phone, and email ID.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="font-mono text-xs font-bold text-[#D4F933] mt-0.5">04</span>
        <span>It is essential that you specify the <strong className="text-white">Theme and Subtheme</strong> to which your abstract pertains when submitting it.</span>
      </li>
    </ol>
  </div>

  {/* Publication Opportunities (6 cols) */}
  <div className="lg:col-span-6 p-8 sm:p-10 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
    <div className="mb-6">
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#D4F933] block mb-1">
        Peer Review &amp; Formats
      </span>
      <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold m-0">
        Publication &amp; Presentation Formats
      </h3>
    </div>

    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans font-normal">
      Selected papers presented at the conference will be published as <strong className="text-white">Scopus-indexed book chapters / peer-reviewed conference volumes</strong> following double-blind peer review.
    </p>

    <div className="space-y-3 mb-6">
      <div className="p-4 rounded-[14px] bg-white/5 border border-white/10 backdrop-blur-sm text-xs sm:text-sm text-slate-200 font-sans">
        <strong className="text-[#D4F933] block font-mono text-[11px] uppercase tracking-wider mb-1 font-bold">Presentation Formats</strong>
        <span>Oral Paper Presentations (15 mins + Q&amp;A) &amp; Poster Presentations with dedicated display gallery.</span>
      </div>
      <div className="p-4 rounded-[14px] bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-slate-300 font-sans">
        <span>All submissions undergo rigorous double-blind peer review by an international scientific review panel.</span>
      </div>
    </div>
  </div>

</div>

      {/* ── TYPES OF PARTICIPANTS ── */}
<div className="mb-16 lg:mb-20 p-8 sm:p-10 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
  <div className="mb-6">
    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#D4F933] block mb-1">
      Delegates &amp; Attendees
    </span>
    <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold m-0">
      Eligible Participant Categories
    </h3>
    <p className="text-xs sm:text-sm text-slate-300 font-sans m-0 mt-0.5">
      Scholars and practitioners eligible to register and present papers
    </p>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
    {participantTypes.map((type, idx) => (
      <div 
        key={idx} 
        className="p-4 rounded-[12px] bg-white/5 border border-white/10 backdrop-blur-sm text-center font-sans text-xs sm:text-sm font-semibold text-slate-200 shadow-sm flex items-center justify-center hover:border-[#D4F933] hover:bg-white/10 hover:text-white hover:shadow-lg transition-all cursor-default"
      >
        <span>{type}</span>
      </div>
    ))}
  </div>
</div>

  {/* ── 01. SUBMISSION DEADLINES & MILESTONES (FULL WIDTH CARDS) ── */}
<div className="mb-16 lg:mb-20">
  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
    <div>
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#D4F933] block mb-1">
        Timeline &amp; Dates
      </span>
      <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold m-0">
        Submission Deadlines &amp; Key Milestones
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 font-sans m-0 mt-0.5">
        Critical timeline for abstract review, author acceptance, and conference attendance
      </p>
    </div>
    <span className="hidden sm:inline-flex items-center text-[11px] font-mono uppercase tracking-wider text-[#D4F933] bg-white/10 border border-white/15 backdrop-blur-sm px-3 py-1 rounded-[6px] font-bold">
      IST (UTC+05:30)
    </span>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {/* Step 1: Abstract Submission */}
    <div className="bg-white/10 backdrop-blur-md border-2 border-[#D4F933]/60 rounded-[18px] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#D4F933] transition-all">
      <div className="absolute top-0 right-0 bg-[#D4F933] text-[#071A33] text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-bl-[10px]">
        Active Call
      </div>
      <div>
        <span className="font-mono text-xs font-bold text-[#D4F933] uppercase tracking-wider block mb-2">
          Stage 01
        </span>
        <h4 className="font-heading text-lg text-white font-bold mb-2">
          Last Date of Abstract Submission
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
          Original empirical abstracts (max 300 words) submitted via Microsoft CMT.
        </p>
      </div>
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-sans uppercase font-medium">Deadline</span>
        <span className="font-mono text-sm font-bold text-[#D4F933] bg-white/10 border border-white/15 px-2.5 py-1 rounded-[6px] backdrop-blur-sm">
          25 Sept 2026
        </span>
      </div>
    </div>

    {/* Step 2: Acceptance Notification */}
    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[18px] p-6 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all">
      <div>
        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Stage 02
        </span>
        <h4 className="font-heading text-lg text-white font-bold mb-2">
          Notification of Acceptance
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
          Double-blind peer review outcomes communicated directly to corresponding authors.
        </p>
      </div>
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-sans uppercase font-medium">Channel</span>
        <span className="font-mono text-xs font-bold text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-[6px]">
          CMT Portal
        </span>
      </div>
    </div>

    {/* Step 3: Registration Commencement */}
    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[18px] p-6 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all">
      <div>
        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Stage 03
        </span>
        <h4 className="font-heading text-lg text-white font-bold mb-2">
          Registration Commencement
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
          Delegate pass booking and author registration portals formally open.
        </p>
      </div>
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-sans uppercase font-medium">Starts</span>
        <span className="font-mono text-xs font-bold text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-[6px]">
          10 Aug 2026
        </span>
      </div>
    </div>

    {/* Step 4: Conference Days */}
    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[18px] p-6 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all">
      <div>
        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Stage 04
        </span>
        <h4 className="font-heading text-lg text-white font-bold mb-2">
          Conference Days
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
          2-day international symposium at Rajagiri College, Kalamassery campus.
        </p>
      </div>
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-sans uppercase font-medium">Venue</span>
        <span className="font-mono text-xs font-bold text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-[6px]">
          07–08 Jan 2027
        </span>
      </div>
    </div>
  </div>
</div>

       {/* ── 02. REGISTRATION FEES & INCLUSIONS (LUXURY CARDS) ── */}
<div className="mb-16 lg:mb-20">
  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
    <div>
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#D4F933] block mb-1">
        Passes &amp; Pricing
      </span>
      <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold m-0">
        Registration Fees &amp; Delegate Passes
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 font-sans m-0 mt-0.5">
        Select your delegate category to participate in paper presentation tracks and plenaries
      </p>
    </div>
  </div>

  {/* 3 Tier Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
    {/* Tier 1: Students / Scholars */}
    <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-7 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
            Tier 01
          </span>
          <span className="text-[10px] font-mono uppercase font-bold text-[#D4F933] bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-[6px]">
            Scholar Pass
          </span>
        </div>
        <h4 className="font-heading text-xl text-white font-bold mb-2">
          Students / Research Scholars
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
          For graduate students, postgraduates, and full-time PhD research scholars.
        </p>
        <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/10">
          <span className="font-heading text-4xl text-white font-extrabold tracking-tight">
            ₹ 750
          </span>
          <span className="text-xs text-slate-400 font-sans font-medium">/ delegate</span>
        </div>
        <ul className="space-y-3 text-xs text-slate-200 font-sans font-medium mb-8">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Access to all technical presentation tracks</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Author Certificate of Presentation</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Executive lunch &amp; refreshments on both days</span>
          </li>
        </ul>
      </div>
      <a
        href={CONFERENCE_DATA.links.registrationForm}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 rounded-[12px] bg-white/10 hover:bg-[#D4F933] text-white hover:text-[#071A33] font-sans text-xs font-bold text-center border border-white/15 transition-all block"
      >
        Register as Student / Scholar &rarr;
      </a>
    </div>

    {/* Tier 2: Academicians / Faculty (Featured) */}
    <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-7 sm:p-8 border-2 border-[#D4F933] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 right-0 bg-[#D4F933] text-[#071A33] text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-bl-[10px]">
        Popular
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase font-bold text-[#D4F933] tracking-wider">
            Tier 02
          </span>
          <span className="text-[10px] font-mono uppercase font-bold text-white bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-[6px]">
            Faculty Pass
          </span>
        </div>
        <h4 className="font-heading text-xl text-white font-bold mb-2">
          Academicians / Faculty Members
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
          For professors, associate faculty, lecturers, and academic researchers.
        </p>
        <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/10">
          <span className="font-heading text-4xl text-white font-extrabold tracking-tight">
            ₹ 1,000
          </span>
          <span className="text-xs text-slate-400 font-sans font-medium">/ delegate</span>
        </div>
        <ul className="space-y-3 text-xs text-slate-200 font-sans font-medium mb-8">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Access to all keynotes, plenaries &amp; paper tracks</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Official Conference Kit, badge &amp; certificate</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Executive lunch &amp; banquet tea on both days</span>
          </li>
        </ul>
      </div>
      <a
        href={CONFERENCE_DATA.links.registrationForm}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 rounded-[12px] bg-[#D4F933] hover:bg-[#bce022] text-[#071A33] font-sans text-xs font-bold text-center shadow-lg transition-all block"
      >
        Register as Faculty Member &rarr;
      </a>
    </div>

    {/* Tier 3: NGO & CSR Delegates */}
    <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-7 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
            Tier 03
          </span>
          <span className="text-[10px] font-mono uppercase font-bold text-[#D4F933] bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-[6px]">
            Industry Pass
          </span>
        </div>
        <h4 className="font-heading text-xl text-white font-bold mb-2">
          NGO &amp; CSR Delegates
        </h4>
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
          For development practitioners, corporate sustainability leaders, and NGO heads.
        </p>
        <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/10">
          <span className="font-heading text-4xl text-white font-extrabold tracking-tight">
            ₹ 1,500
          </span>
          <span className="text-xs text-slate-400 font-sans font-medium">/ delegate</span>
        </div>
        <ul className="space-y-3 text-xs text-slate-200 font-sans font-medium mb-8">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Access to plenaries, industry roundtables &amp; tracks</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Exclusive delegate folder, kit &amp; formal certificate</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F933] mt-1.5 shrink-0" />
            <span>Executive buffet lunch on both conference days</span>
          </li>
        </ul>
      </div>
      <a
        href={CONFERENCE_DATA.links.registrationForm}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 rounded-[12px] bg-white/10 hover:bg-[#D4F933] text-white hover:text-[#071A33] font-sans text-xs font-bold text-center border border-white/15 transition-all block"
      >
        Register as NGO / CSR Delegate &rarr;
      </a>
    </div>
  </div>

  {/* Unified Inclusions Banner */}
  <div className="p-6 rounded-[16px] bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
    <strong className="font-bold text-white block mb-1">Every Registration Pass Includes:</strong>
    <span>Conference kit, official delegate badge, verified certificate of participation/presentation, executive buffet lunch on both conference days (7 &amp; 8 January 2027), morning and evening tea/refreshments, and unrestricted entry to all plenaries and thematic paper tracks.</span>
  </div>
</div>

      {/* ── 03. MODE OF PAYMENT & OFFICIAL RCSS BANK DETAILS ── */}
<div className="rounded-[24px] p-8 sm:p-12 bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl mb-16 lg:mb-20">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
    <div>
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#D4F933] block mb-1">
        Banking Coordinates
      </span>
      <h4 className="font-heading text-2xl sm:text-3xl text-white font-bold m-0">
        Mode of Payment (NEFT / RTGS Bank Transfer)
      </h4>
      <span className="text-xs font-sans text-slate-300 uppercase tracking-wider font-semibold">
        Official RCSS Conference Bank Account &middot; Verified Gateway
      </span>
    </div>
    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4F933] bg-[#D4F933]/10 border border-[#D4F933]/20 px-3.5 py-1.5 rounded-[8px] font-bold self-start sm:self-auto">
      Direct Wire &middot; Instant Receipt
    </span>
  </div>

  {/* 4 Clean Metric Cards with 1-Click Copy */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm mb-8">
    <div className="p-5 rounded-[16px] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all">
      <div>
        <span className="text-[11px] text-slate-400 font-sans uppercase font-bold tracking-wider block mb-1">
          Account Name
        </span>
        <strong className="text-white font-sans font-bold text-sm block leading-snug">
          {CONFERENCE_DATA.bankDetails.accountName}
        </strong>
      </div>
    </div>

    <div className="p-5 rounded-[16px] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all">
      <div>
        <span className="text-[11px] text-slate-400 font-sans uppercase font-bold tracking-wider block mb-1">
          Account Number
        </span>
        <strong className="text-white font-mono font-bold text-base block tracking-tight">
          {CONFERENCE_DATA.bankDetails.accountNumber}
        </strong>
      </div>
    </div>

    <div className="p-5 rounded-[16px] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all">
      <div>
        <span className="text-[11px] text-slate-400 font-sans uppercase font-bold tracking-wider block mb-1">
          Bank &amp; Branch
        </span>
        <strong className="text-white font-sans font-bold text-sm block leading-snug">
          {CONFERENCE_DATA.bankDetails.bank}
        </strong>
      </div>
    </div>

    <div className="p-5 rounded-[16px] bg-[#D4F933]/5 border border-[#D4F933]/20 flex flex-col justify-between hover:bg-[#D4F933]/15 hover:border-[#D4F933]/50 transition-all">
      <div>
        <span className="text-[11px] text-[#D4F933] font-sans uppercase font-bold tracking-wider block mb-1">
          IFSC / NEFT Code
        </span>
        <strong className="text-[#D4F933] font-mono font-extrabold text-base block tracking-tight">
          {CONFERENCE_DATA.bankDetails.ifsc}
        </strong>
      </div>
    </div>
  </div>

  {/* Action Row */}
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
    <p className="text-xs text-slate-400 font-sans m-0">
      * Please preserve the transaction UTR number or transfer receipt screenshot to upload during online delegate registration.
    </p>
    <div className="flex items-center gap-3 shrink-0">
      <Button
        variant="primary"
        size="md"
        asLink
        href={CONFERENCE_DATA.links.registrationForm}
        target="_blank"
        rel="noopener noreferrer"
        showArrow
      >
        Proceed to Delegate Registration
      </Button>
    </div>
  </div>
</div>

{/* ── MICROSOFT CMT ACKNOWLEDGEMENT ── */}
<div className="rounded-[16px] p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
  <h4 className="font-heading text-lg text-white mb-1 font-bold">Microsoft CMT Acknowledgement</h4>
  <p className="text-xs text-slate-300 leading-relaxed font-sans font-normal m-0">
    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
  </p>
</div>

      </div>
    </div>
  );
};
