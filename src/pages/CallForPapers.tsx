import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResponsiveTable } from '@/components/ui/ResponsiveTable';
import { Button } from '@/components/ui/Button';
import { Calendar, FileCheck, CheckCircle2, Download, ExternalLink, CreditCard, Sparkles } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const CallForPapers: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#041412] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Scholarly Submissions"
          eyebrowVariant="gold-luxury"
          title="Call for Papers &amp; Abstract Guidelines"
          subtitle="Academicians, practitioners, PhD scholars, and students are invited to submit original, empirical, and practice-based abstracts across the 8 conference tracks."
          dark
        />

        {/* Action Header Luxury Banner */}
        <div className="bg-gradient-to-r from-[#082a26] via-[#093933] to-[#082a26] border-2 border-amber-400/40 text-white rounded-3xl p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-gold-glow backdrop-blur-2xl">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-cinzel font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3.5 py-1 rounded-full mb-3 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Microsoft CMT Portal Open</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mb-2">
              Submit Your Extended Abstract
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl m-0 font-normal">
              All submissions must be uploaded electronically via the official Microsoft CMT portal. Peer review outcomes will be communicated systematically.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button
              variant="gold"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.cmtSubmission}
              icon={<ExternalLink className="w-4 h-4 text-slate-950" />}
            >
              CMT Submission Portal
            </Button>
            <Button
              variant="outline"
              size="lg"
              asLink
              href={CONFERENCE_DATA.links.brochurePdf}
              icon={<Download className="w-4 h-4" />}
            >
              Brochure (PDF)
            </Button>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Submission Guidelines */}
          <div className="rounded-3xl p-8 sm:p-9 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md">
            <div className="flex items-center gap-3 mb-6 text-amber-300">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white m-0">
                Abstract Guidelines
              </h3>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>Length: <strong>250 to 300 words</strong> including Title, Author(s), Institutional Affiliation, Email ID, Keywords (4-5), Background, Methodology, Key Findings, and Policy/Practice Implications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>Format: MS Word document (.docx), Times New Roman, 12 pt, 1.5 line spacing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>Presentation formats: <strong>Oral Presentations</strong> (15 mins) and <strong>Poster Presentations</strong> (A1 size portrait).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>Peer review: All submitted abstracts undergo blind review by the Academic Scientific Committee.</span>
              </li>
            </ul>
          </div>

          {/* Publication Opportunities */}
          <div className="rounded-3xl p-8 sm:p-9 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md">
            <div className="flex items-center gap-3 mb-6 text-emerald-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white m-0">
                Scopus Book Publications
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              Selected and presented high-quality research papers from DYUTI 2027 will be processed for publication as peer-reviewed book chapters in Scopus-indexed conference proceedings / Springer / Routledge volumes (subject to peer-review revisions).
            </p>
            <div className="bg-gradient-to-r from-amber-500/15 to-transparent border border-amber-400/30 rounded-2xl p-4 text-xs text-amber-200 leading-relaxed">
              <strong>Important Requirement:</strong> Only registered and physically/virtually presented papers by at least one author will be eligible for post-conference Scopus publication indexing.
            </div>
          </div>
        </div>

        {/* Important Dates & Registration Fee Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Important Dates */}
          <div className="lg:col-span-5">
            <h3 className="font-cinzel font-bold text-xl text-white mb-6 flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Key Submission Deadlines</span>
            </h3>
            <div className="space-y-3.5">
              {CONFERENCE_DATA.importantDates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#072421]/90 border border-amber-500/20 rounded-2xl p-4 flex items-center justify-between shadow-luxury-sm"
                >
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item.event}</span>
                  <span className="text-xs sm:text-sm font-cinzel font-bold text-amber-300 bg-black/40 border border-amber-400/30 px-3 py-1 rounded-xl">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Table */}
          <div className="lg:col-span-7">
            <h3 className="font-cinzel font-bold text-xl text-white mb-6 flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-amber-400" />
              <span>Registration Fee Structure</span>
            </h3>
            <div className="rounded-2xl border border-amber-500/30 overflow-hidden shadow-luxury-md">
              <ResponsiveTable>
                <thead className="bg-[#082a26] text-amber-300 border-b border-amber-500/30 font-cinzel">
                  <tr>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-left">Participant Category</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-left">Fee (INR)</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-left">Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-500/20 bg-[#051c19]/90 text-slate-200 text-xs sm:text-sm">
                  {CONFERENCE_DATA.fees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-semibold text-white">{fee.category}</td>
                      <td className="py-4 px-4 font-cinzel font-bold text-amber-300">{fee.amount}</td>
                      <td className="py-4 px-4 text-xs text-slate-300">{fee.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </ResponsiveTable>
            </div>
          </div>
        </div>

        {/* Bank Details Card */}
        <div className="rounded-3xl p-8 bg-[#072421]/90 border border-amber-500/30 shadow-luxury-md backdrop-blur-xl">
          <h4 className="font-cinzel font-bold text-lg text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Bank Account Details for Online NEFT / RTGS Transfer</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-black/30 border border-amber-500/20">
              <span className="text-xs text-slate-400 block mb-1">Beneficiary Name</span>
              <strong className="text-white font-medium">{CONFERENCE_DATA.bankDetails.accountName}</strong>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-amber-500/20">
              <span className="text-xs text-slate-400 block mb-1">Account Number</span>
              <strong className="text-amber-300 font-mono font-bold">{CONFERENCE_DATA.bankDetails.accountNumber}</strong>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-amber-500/20">
              <span className="text-xs text-slate-400 block mb-1">Bank Name</span>
              <strong className="text-white">{CONFERENCE_DATA.bankDetails.bank}</strong>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-amber-500/20">
              <span className="text-xs text-slate-400 block mb-1">IFSC Code</span>
              <strong className="text-amber-300 font-mono font-bold">{CONFERENCE_DATA.bankDetails.ifsc}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

