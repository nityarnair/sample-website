import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResponsiveTable } from '@/components/ui/ResponsiveTable';
import { Calendar, FileCheck, CheckCircle2, Download, ExternalLink, CreditCard, ShieldCheck, Users, Info } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapers: React.FC = () => {
  const participantTypes = [
    'Graduate Students',
    'Post Graduate Students',
    'Academicians / Faculty Members',
    'Research Scholars',
    'NGO Delegates',
    'CSR Delegates & Development Practitioners',
  ];

  return (
    <div className="py-20 sm:py-28 bg-[#F7F7F4] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          sectionNumber="06"
          eyebrow="Scholarly Submissions"
          title="Call for Papers &amp; Submission Guidelines"
          subtitle="Abstracts based on original research and practice models are invited for Oral Presentations and Poster Presentations across the 8 conference themes."
        />

        {/* Action Header Editorial Banner */}
        <div className="bg-[#071A33] border border-white/10 text-white rounded-[24px] p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-editorial">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#93C5FA] bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/15">
              <span>Microsoft CMT Portal Active</span>
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-3 leading-snug">
              Submit Your Abstract / Full Paper
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl m-0 font-sans font-normal leading-relaxed">
              All submissions must be uploaded electronically via the official Microsoft CMT portal. Peer review outcomes will be communicated systematically.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href={CONFERENCE_DATA.links.cmtSubmission}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-xs font-sans uppercase tracking-[0.14em] font-semibold bg-white text-[#071A33] hover:bg-[#EEF3F8] rounded-full transition-all flex items-center gap-2 shadow-pill"
            >
              <span>CMT Submission Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={CONFERENCE_DATA.links.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-xs font-sans uppercase tracking-[0.14em] font-semibold border border-white/30 text-white hover:bg-white/10 rounded-full transition-all flex items-center gap-2"
            >
              <span>Brochure (PDF)</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Submission Guidelines */}
          <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] m-0 font-normal">
                Guidelines for Abstract
              </h3>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>The abstract should be <strong className="text-[#071A33]">within 300 words</strong> of text including the title and keywords (MS Word Doc).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>The text should be arranged according to the following headlines: <strong className="text-[#071A33]">Objectives, Design, Model, Result, and Conclusion</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>The abstract’s title page should include the paper’s title, Author’s name, designation, institution affiliation, mailing address, contact number, and email id.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>It is essential that you specify the <strong className="text-[#071A33]">Theme and Subtheme</strong> to which your abstract pertains when submitting it.</span>
              </li>
            </ul>
          </div>

          {/* Publication Opportunities */}
          <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] m-0 font-normal">
                Publication
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 font-sans font-normal">
              Selected abstracts presented at the conference will be considered for publication as <strong className="text-[#071A33]">Scopus-indexed book chapters</strong> after the due review process.
            </p>
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5 text-xs text-[#1E40AF] leading-relaxed font-sans mb-4">
              <strong className="text-[#1E3A8A]">Presentation Formats:</strong> Oral Presentation &amp; Poster Presentation.
            </div>
            <p className="text-xs text-[#667085] font-sans">
              All submissions undergo rigorous double-blind peer review by national and international experts.
            </p>
          </div>
        </div>

        {/* Types of Participants */}
        <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#071A33] m-0 font-normal">
              Type of Participants
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs sm:text-sm text-[#101828]">
            {participantTypes.map((type, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5] text-center font-medium">
                <span className="text-[#071A33] block">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates & Registration Fee Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Important Dates */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl text-[#071A33] mb-6 flex items-center gap-2.5 font-normal">
              <Calendar className="w-5 h-5 text-[#2563EB]" />
              <span>Important Dates &amp; Deadlines</span>
            </h3>
            <div className="space-y-3">
              {CONFERENCE_DATA.importantDates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE5] rounded-[18px] p-5 flex items-center justify-between shadow-subtle"
                >
                  <span className="text-xs sm:text-sm text-[#071A33] font-medium">{item.event}</span>
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Table */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl text-[#071A33] mb-6 flex items-center gap-2.5 font-normal">
              <CreditCard className="w-5 h-5 text-[#2563EB]" />
              <span>Registration Fees</span>
            </h3>
            <div className="rounded-[18px] border border-[#D9DEE5] overflow-hidden shadow-subtle bg-white mb-4">
              <ResponsiveTable>
                <thead className="bg-[#071A33] text-white font-sans border-b border-[#071A33]">
                  <tr>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-left">Type of Participant</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-left">Registration Fees</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-left">Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9DEE5] bg-white text-[#101828] text-xs sm:text-sm">
                  {CONFERENCE_DATA.fees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F7F4] transition-colors">
                      <td className="py-4 px-4 font-semibold text-[#071A33]">{fee.category}</td>
                      <td className="py-4 px-4 font-serif text-lg text-[#071A33] font-normal">{fee.amount}</td>
                      <td className="py-4 px-4 text-xs text-[#667085]">{fee.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </ResponsiveTable>
            </div>
            <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-xs text-[#1E40AF] font-sans">
              <strong>Registration Fee Includes:</strong> Lunch on both conference days &amp; Access to all conference sessions.
            </div>
          </div>
        </div>

        {/* Bank Details Card */}
        <div className="rounded-[20px] p-8 sm:p-10 bg-white border border-[#D9DEE5] shadow-subtle mb-16">
          <h4 className="font-serif text-2xl text-[#071A33] mb-4 flex items-center gap-2 font-normal">
            <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            <span>Mode of Payment (Bank Transfer)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Account Name</span>
              <strong className="text-[#071A33] font-medium block">{CONFERENCE_DATA.bankDetails.accountName}</strong>
            </div>
            <div className="p-5 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Account Number</span>
              <strong className="text-[#071A33] font-mono font-bold block">{CONFERENCE_DATA.bankDetails.accountNumber}</strong>
            </div>
            <div className="p-5 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Bank</span>
              <strong className="text-[#071A33] block">{CONFERENCE_DATA.bankDetails.bank}</strong>
            </div>
            <div className="p-5 rounded-xl bg-[#F7F7F4] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">IFSC / NEFT Code</span>
              <strong className="text-[#2563EB] font-mono font-bold block">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
            </div>
          </div>
        </div>

        {/* Microsoft CMT Acknowledgement Card */}
        <div className="rounded-[20px] p-8 sm:p-10 bg-[#FAFAFA] border border-[#D9DEE5] shadow-subtle flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white border border-[#D9DEE5] text-[#667085] flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-xl text-[#071A33] mb-2 font-normal">Acknowledgement</h4>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal m-0">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
