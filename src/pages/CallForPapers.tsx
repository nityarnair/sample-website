import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResponsiveTable } from '@/components/ui/ResponsiveTable';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, FileCheck, CheckCircle2, Download, ExternalLink, CreditCard } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapers: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Scholarly Contributions"
          title="Call for Papers & Abstract Submissions"
          subtitle="Authors are invited to submit original, unpublished research papers and field-based model studies across the 8 conference sub-themes."
        />

        {/* Action Header Banner */}
        <div className="bg-gradient-to-r from-[#0f4c47] to-[#13605a] text-white rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-dyuti-md">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full mb-2">
              Submission Portal
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Submit via Microsoft CMT Portal
            </h3>
            <p className="text-slate-200 text-sm max-w-xl m-0">
              All abstracts must be submitted electronically via the Microsoft CMT system.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button
              variant="gold"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.cmtSubmission}
              icon={<ExternalLink className="w-4 h-4" />}
            >
              CMT Submission Portal
            </Button>
            <Button
              variant="outline"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.brochurePdf}
              className="text-white border-white/40 hover:bg-white/10"
              icon={<Download className="w-4 h-4" />}
            >
              Brochure
            </Button>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Submission Guidelines */}
          <Card>
            <div className="flex items-center gap-2.5 mb-4 text-[#0f4c47]">
              <FileCheck className="w-6 h-6" />
              <h3 className="font-display font-bold text-xl text-slate-900 m-0">
                Abstract Guidelines
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c47] mt-2 shrink-0" />
                <span>Abstract length: <strong>250 to 300 words</strong> including Title, Author(s), Institutional Affiliation, Email ID, Keywords (4-5), Background, Methodology, Key Findings, and Policy/Practice Implications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c47] mt-2 shrink-0" />
                <span>Format: MS Word document, Times New Roman, 12 pt, 1.5 line spacing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c47] mt-2 shrink-0" />
                <span>Presentation formats: <strong>Oral Presentations</strong> and <strong>Poster Presentations</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c47] mt-2 shrink-0" />
                <span>Peer review: All submitted abstracts undergo blind review by the Academic Scientific Committee.</span>
              </li>
            </ul>
          </Card>

          {/* Publication Opportunities */}
          <Card>
            <div className="flex items-center gap-2.5 mb-4 text-[#d97706]">
              <CheckCircle2 className="w-6 h-6" />
              <h3 className="font-display font-bold text-xl text-slate-900 m-0">
                Scopus Publication
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Selected and presented high-quality research papers from DYUTI 2027 will be processed for publication as peer-reviewed book chapters in Scopus-indexed conference proceedings / Springer / Routledge volumes (subject to peer-review revisions).
            </p>
            <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl p-4 text-xs text-[#92400e] leading-relaxed">
              <strong>Notice:</strong> Only presented papers will be eligible for consideration in the post-conference Scopus publication volume.
            </div>
          </Card>
        </div>

        {/* Important Dates & Registration Fee Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Important Dates */}
          <div className="lg:col-span-5">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#0f4c47]" />
              <span>Important Dates</span>
            </h3>
            <div className="space-y-3">
              {CONFERENCE_DATA.importantDates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-xs"
                >
                  <span className="text-sm text-slate-700 font-medium">{item.event}</span>
                  <span className="text-sm font-display font-bold text-[#0f4c47] bg-[#f0faf8] px-3 py-1 rounded-md">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Table */}
          <div className="lg:col-span-7">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#0f4c47]" />
              <span>Registration Fee Structure</span>
            </h3>
            <ResponsiveTable>
              <thead className="bg-[#0f4c47] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-display font-bold text-xs uppercase tracking-wider">Participant Category</th>
                  <th className="py-3.5 px-4 font-display font-bold text-xs uppercase tracking-wider">Fee (INR)</th>
                  <th className="py-3.5 px-4 font-display font-bold text-xs uppercase tracking-wider">Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CONFERENCE_DATA.fees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">{fee.category}</td>
                    <td className="py-3.5 px-4 font-display font-bold text-[#0f4c47]">{fee.amount}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-500">{fee.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </ResponsiveTable>
          </div>
        </div>

        {/* Bank Details Card */}
        <Card className="bg-slate-50 border-slate-200">
          <h4 className="font-display font-bold text-lg text-slate-900 mb-3">
            Bank Account Details for Online Payment
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-xs text-slate-500 block">Beneficiary Name</span>
              <strong className="text-slate-800">{CONFERENCE_DATA.bankDetails.accountName}</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Account Number</span>
              <strong className="text-[#0f4c47] font-mono font-bold">{CONFERENCE_DATA.bankDetails.accountNumber}</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Bank Name</span>
              <strong className="text-slate-800">{CONFERENCE_DATA.bankDetails.bank}</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">IFSC Code</span>
              <strong className="text-slate-800 font-mono">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
