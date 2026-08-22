import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResponsiveTable } from '@/components/ui/ResponsiveTable';
import { Button } from '@/components/ui/Button';
import { Calendar, FileCheck, CheckCircle2, Download, ExternalLink, CreditCard, ShieldCheck } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapers: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#F8F8F6] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          sectionNumber="06"
          eyebrow="Scholarly Submissions"
          eyebrowVariant="blue"
          title="Call for Papers &amp; Submission Guidelines"
          subtitle="Academicians, practitioners, PhD scholars, and students are invited to submit original, empirical, and practice-based extended abstracts across the 8 conference tracks."
        />

        {/* Action Header Editorial Banner */}
        <div className="bg-[#071A33] border border-white/10 text-white rounded-sm p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-editorial">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-[#93C5FD] bg-white/10 px-3 py-1 rounded-xs mb-3 border border-white/15">
              <span>Microsoft CMT Portal Active</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Submit Your Extended Abstract
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
              className="px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold bg-white text-[#071A33] hover:bg-[#EFF6FF] rounded-sm transition-colors flex items-center gap-2 shadow-subtle"
            >
              <span>CMT Submission Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={CONFERENCE_DATA.links.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold border border-white/30 text-white hover:bg-white/10 rounded-sm transition-colors flex items-center gap-2"
            >
              <span>Brochure (PDF)</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Submission Guidelines */}
          <div className="rounded-sm p-8 sm:p-9 bg-white border border-[#D9DEE5] shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#071A33] m-0">
                Abstract Guidelines
              </h3>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#667085] leading-relaxed font-sans font-normal">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>Length: <strong className="text-[#071A33]">250 to 300 words</strong> including Title, Author(s), Institutional Affiliation, Email ID, Keywords (4-5), Background, Methodology, Key Findings, and Policy/Practice Implications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>Format: MS Word document (.docx), Times New Roman, 12 pt, 1.5 line spacing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>Presentation formats: <strong className="text-[#071A33]">Oral Presentations</strong> (15 mins) and <strong className="text-[#071A33]">Poster Presentations</strong> (A1 size portrait).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span>Peer review: All submitted abstracts undergo double-blind review by the Academic Scientific Committee.</span>
              </li>
            </ul>
          </div>

          {/* Publication Opportunities */}
          <div className="rounded-sm p-8 sm:p-9 bg-white border border-[#D9DEE5] shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#071A33] m-0">
                Scopus Book Publications
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 font-sans font-normal">
              Selected and presented high-quality research papers from DYUTI 2027 will be processed for publication as peer-reviewed book chapters in Scopus-indexed conference proceedings / Springer / Routledge volumes (subject to peer-review revisions).
            </p>
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-sm p-4 text-xs text-[#1E40AF] leading-relaxed font-sans">
              <strong className="text-[#1E3A8A]">Important Requirement:</strong> Only registered and physically/virtually presented papers by at least one author will be eligible for post-conference Scopus publication indexing.
            </div>
          </div>
        </div>

        {/* Important Dates & Registration Fee Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Important Dates */}
          <div className="lg:col-span-5">
            <h3 className="font-serif font-bold text-xl text-[#071A33] mb-6 flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-[#2563EB]" />
              <span>Key Submission Deadlines</span>
            </h3>
            <div className="space-y-3">
              {CONFERENCE_DATA.importantDates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE5] rounded-sm p-4 flex items-center justify-between shadow-subtle"
                >
                  <span className="text-xs sm:text-sm text-[#071A33] font-medium">{item.event}</span>
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 rounded-xs">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Table */}
          <div className="lg:col-span-7">
            <h3 className="font-serif font-bold text-xl text-[#071A33] mb-6 flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-[#2563EB]" />
              <span>Registration Fee Structure</span>
            </h3>
            <div className="rounded-sm border border-[#D9DEE5] overflow-hidden shadow-subtle bg-white">
              <ResponsiveTable>
                <thead className="bg-[#071A33] text-white font-sans border-b border-[#071A33]">
                  <tr>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-left">Participant Category</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-left">Fee (INR)</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-left">Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9DEE5] bg-white text-[#101828] text-xs sm:text-sm">
                  {CONFERENCE_DATA.fees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F8F6] transition-colors">
                      <td className="py-4 px-4 font-semibold text-[#071A33]">{fee.category}</td>
                      <td className="py-4 px-4 font-serif font-bold text-base text-[#071A33]">{fee.amount}</td>
                      <td className="py-4 px-4 text-xs text-[#667085]">{fee.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </ResponsiveTable>
            </div>
          </div>
        </div>

        {/* Bank Details Card */}
        <div className="rounded-sm p-8 bg-white border border-[#D9DEE5] shadow-subtle">
          <h4 className="font-serif font-bold text-lg text-[#071A33] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            <span>Official Bank Details for NEFT / RTGS Online Transfer</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Beneficiary Name</span>
              <strong className="text-[#071A33] font-medium block">{CONFERENCE_DATA.bankDetails.accountName}</strong>
            </div>
            <div className="p-4 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Account Number</span>
              <strong className="text-[#071A33] font-mono font-bold block">{CONFERENCE_DATA.bankDetails.accountNumber}</strong>
            </div>
            <div className="p-4 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">Bank Name</span>
              <strong className="text-[#071A33] block">{CONFERENCE_DATA.bankDetails.bank}</strong>
            </div>
            <div className="p-4 rounded-sm bg-[#F8F8F6] border border-[#D9DEE5]">
              <span className="text-xs text-[#667085] block mb-1">IFSC Code</span>
              <strong className="text-[#2563EB] font-mono font-bold block">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
