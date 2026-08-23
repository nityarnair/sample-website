import React, { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { ResponsiveTable } from '@/components/ui/ResponsiveTable';
import { Calendar, FileCheck, CheckCircle2, Download, CreditCard, ShieldCheck, Users, Info, ChevronDown, ChevronUp } from 'lucide-react';
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
    <div className="py-20 sm:py-28 lg:py-32 bg-[#F5F5F0] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── 02 / EDITORIAL PAGE HEADER ── */}
        <PageHeader
          number="02"
          category="CALL FOR PAPERS"
          metaRight="Oral &amp; Poster Submissions &middot; Scopus Indexing"
          eyebrow="Scholarly Submissions &amp; Guidelines"
          title={
            <>
              Call for Papers
              <span className="block font-heading text-[#667085] text-[1.85rem] sm:text-[2.5rem] font-bold mt-1">
                &amp; Submission Guidelines
              </span>
            </>
          }
          subtitle="Abstracts based on original empirical research, theoretical inquiries, and innovative practice models are invited for Oral and Poster Presentations across the 8 conference themes."
        />

        {/* ── MAIN SUBMISSION ACTION BANNER (Deep Navy #071A33) ── */}
        <div className="bg-[#071A33] border border-white/10 text-white rounded-[24px] p-8 sm:p-12 lg:p-14 mb-20 lg:mb-28 shadow-editorial">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#93C5FD] bg-white/10 px-3.5 py-1.5 rounded-[8px] mb-4 border border-white/15">
                Microsoft CMT Portal Active &middot; Deadline: 25 Sept 2026
              </span>
              <h2 className="text-[2.25rem] sm:text-[2.85rem] font-heading font-extrabold text-white mb-3 leading-tight">
                Submit Your Abstract or Full Paper
              </h2>
              <p className="text-white/80 text-sm sm:text-base m-0 font-sans font-normal leading-relaxed">
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

        {/* ── CONFERENCE THEMES ── */}
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-[#D9DEE5]">
            <div>
              <span className="text-[11.5px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB] block mb-1">
                Thematic Areas
              </span>
              <h3 className="font-heading text-[1.75rem] sm:text-[2.1rem] font-bold text-[#071A33] m-0">
                Eight Conference Sub-Themes
              </h3>
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#667085] hidden sm:inline font-semibold">
              Select a theme to inspect focus areas
            </span>
          </div>

          <div className="divide-y divide-[#D9DEE5] border-y border-[#D9DEE5] bg-white rounded-[20px] overflow-hidden shadow-subtle">
            {CONFERENCE_DATA.subThemes.map((track, idx) => {
              const isExpanded = expandedTheme === idx;
              return (
                <div
                  key={track.id}
                  className="transition-colors hover:bg-[#F5F5F0]/60"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedTheme(isExpanded ? null : idx)}
                    className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-6 sm:gap-8">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#2563EB] tabular-nums shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-heading text-lg sm:text-xl font-bold text-[#071A33] m-0 leading-snug">
                          {track.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#667085] font-sans font-normal mt-1 m-0 line-clamp-1">
                          {track.topics.join(' · ')}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4 shrink-0 text-[#667085] hover:text-[#071A33]">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 bg-[#F5F5F0] border-t border-[#D9DEE5]/60">
                      <div className="flex flex-wrap gap-2 pt-2">
                        {track.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-block text-[12px] font-sans text-[#071A33] bg-white border border-[#D9DEE5] px-3.5 py-1.5 rounded-[8px] shadow-subtle"
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
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[20px] bg-white border border-[#D9DEE5] shadow-editorial">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[12px] bg-[#E8F0F7] text-[#2563EB] flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold m-0">
                Guidelines for Abstract
              </h3>
            </div>

            <ol className="space-y-4 text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal m-0 pl-0 list-none">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#2563EB] mt-0.5">01</span>
                <span>The abstract should be <strong className="text-[#071A33]">within 300 words</strong> of text including the title and keywords (MS Word document).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#2563EB] mt-0.5">02</span>
                <span>The text should be arranged according to the following headlines: <strong className="text-[#071A33]">Objectives, Design, Model, Result, and Conclusion</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#2563EB] mt-0.5">03</span>
                <span>The abstract&apos;s title page must include the paper title, Author&apos;s full name, academic designation, institutional affiliation, mailing address, contact phone, and email ID.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#2563EB] mt-0.5">04</span>
                <span>It is essential that you specify the <strong className="text-[#071A33]">Theme and Subtheme</strong> to which your abstract pertains when submitting it.</span>
              </li>
            </ol>
          </div>

          {/* Publication Opportunities (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[20px] bg-white border border-[#D9DEE5] shadow-editorial">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[12px] bg-[#E8F0F7] text-[#2563EB] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold m-0">
                Publication &amp; Presentation Formats
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 font-sans font-normal">
              Selected papers presented at the conference will be published as <strong className="text-[#071A33]">Scopus-indexed book chapters / peer-reviewed conference volumes</strong> following double-blind peer review.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-[14px] bg-[#E8F0F7] border border-[#D9DEE5] text-xs sm:text-sm text-[#071A33] font-sans">
                <strong className="text-[#2563EB] block font-mono text-[11px] uppercase tracking-wider mb-1 font-bold">Presentation Formats</strong>
                <span>Oral Paper Presentations (15 mins + Q&amp;A) &amp; Poster Presentations with dedicated display gallery.</span>
              </div>
              <div className="p-4 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5] text-xs text-[#667085] font-sans">
                <span>All submissions undergo rigorous double-blind peer review by an international scientific review panel.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── TYPES OF PARTICIPANTS ── */}
        <div className="mb-20 lg:mb-28 p-8 sm:p-10 rounded-[20px] bg-white border border-[#D9DEE5] shadow-editorial">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-[12px] bg-[#E8F0F7] text-[#2563EB] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold m-0">
              Eligible Participant Categories
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {participantTypes.map((type, idx) => (
              <div key={idx} className="p-4 rounded-[12px] bg-[#F5F5F0] border border-[#D9DEE5] text-center font-sans text-xs sm:text-sm font-bold text-[#071A33] shadow-subtle flex items-center justify-center">
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── IMPORTANT DATES & REGISTRATION FEES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 lg:mb-28">
          
          {/* Important Deadlines (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="font-heading text-2xl sm:text-3xl text-[#071A33] mb-6 flex items-center gap-2.5 font-bold">
              <Calendar className="w-5 h-5 text-[#2563EB]" />
              <span>Submission Deadlines</span>
            </h3>
            <div className="space-y-3">
              {CONFERENCE_DATA.importantDates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE5] rounded-[14px] p-5 flex items-center justify-between shadow-subtle"
                >
                  <span className="text-xs sm:text-sm text-[#071A33] font-semibold">{item.event}</span>
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#E8F0F7] border border-[#BFDBFE] px-3 py-1 rounded-[6px] shrink-0">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Fees Table (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-heading text-2xl sm:text-3xl text-[#071A33] mb-6 flex items-center gap-2.5 font-bold">
              <CreditCard className="w-5 h-5 text-[#2563EB]" />
              <span>Registration Fees</span>
            </h3>
            <div className="rounded-[16px] border border-[#D9DEE5] overflow-hidden shadow-subtle bg-white mb-4">
              <ResponsiveTable>
                <thead className="bg-[#071A33] text-white font-sans">
                  <tr>
                    <th className="py-4 px-5 font-bold text-xs uppercase tracking-wider text-left">Type of Participant</th>
                    <th className="py-4 px-5 font-bold text-xs uppercase tracking-wider text-left">Registration Fees</th>
                    <th className="py-4 px-5 font-bold text-xs uppercase tracking-wider text-left">Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9DEE5] bg-white text-[#0B1220] text-xs sm:text-sm">
                  {CONFERENCE_DATA.fees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-[#F5F5F0] transition-colors">
                      <td className="py-4 px-5 font-bold text-[#071A33]">{fee.category}</td>
                      <td className="py-4 px-5 font-heading text-lg text-[#071A33] font-extrabold">{fee.amount}</td>
                      <td className="py-4 px-5 text-xs text-[#667085]">{fee.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </ResponsiveTable>
            </div>
            <div className="p-4 rounded-[14px] bg-[#E8F0F7] border border-[#BFDBFE] text-xs text-[#071A33] font-sans">
              <strong>Registration Fee Includes:</strong> Conference kit, badge, certificate, lunch on both conference days (7 &amp; 8 Jan 2027), tea/refreshments, and access to all plenaries and track sessions.
            </div>
          </div>
        </div>

        {/* ── BANK TRANSFER DETAILS STRIP ── */}
        <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-editorial mb-20 lg:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-[12px] bg-[#E8F0F7] text-[#2563EB] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-2xl sm:text-3xl text-[#071A33] font-bold m-0">
                Mode of Payment (NEFT / RTGS Bank Transfer)
              </h4>
              <span className="text-[11px] font-sans text-[#667085] uppercase tracking-wider font-semibold">
                Official RCSS Conference Bank Account
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Account Name</span>
              <strong className="text-[#071A33] font-semibold block">{CONFERENCE_DATA.bankDetails.accountName}</strong>
            </div>
            <div className="p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Account Number</span>
              <strong className="text-[#071A33] font-mono font-bold block">{CONFERENCE_DATA.bankDetails.accountNumber}</strong>
            </div>
            <div className="p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Bank &amp; Branch</span>
              <strong className="text-[#071A33] font-semibold block">{CONFERENCE_DATA.bankDetails.bank}</strong>
            </div>
            <div className="p-5 rounded-[14px] bg-[#F5F5F0] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">IFSC / NEFT Code</span>
              <strong className="text-[#2563EB] font-mono font-bold block">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
            </div>
          </div>
        </div>

        {/* ── MICROSOFT CMT ACKNOWLEDGEMENT ── */}
        <div className="rounded-[16px] p-6 sm:p-8 bg-white/80 border border-[#D9DEE5] flex items-start gap-4">
          <div className="w-9 h-9 rounded-[10px] bg-white border border-[#D9DEE5] text-[#667085] flex items-center justify-center shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading text-lg text-[#071A33] mb-1 font-bold">Microsoft CMT Acknowledgement</h4>
            <p className="text-xs text-[#667085] leading-relaxed font-sans font-normal m-0">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
