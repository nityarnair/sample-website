import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Hotel, Download, MapPin, Info } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';

export const Accommodation: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Delegate Stay"
          title="Accommodation & Hotels Near Rajagiri"
          subtitle="A range of budget, standard, and executive hotels are conveniently located around Kalamassery and Kakkanad."
        />

        {/* Advisory Card */}
        <div className="bg-[#f0faf8] border border-[#d5eee9] rounded-2xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0f4c47] text-white flex items-center justify-center shrink-0">
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#0f4c47] mb-1">
                Accommodation Guidelines for Delegates
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl m-0">
                Accommodation is not included in the standard registration fee. Participants are requested to directly book hotels in Kalamassery, Edappally, or Kakkanad (Infopark area). Download the curated list of verified hotels and contact numbers below.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="lg"
            asLink
            href={CONFERENCE_DATA.links.accommodationPdf}
            icon={<Download className="w-4 h-4" />}
            className="shrink-0"
          >
            Download Hotel List (PDF)
          </Button>
        </div>

        {/* Hotel Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
              Kalamassery (Close to Venue)
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Within 1 to 3 km of Rajagiri College. Ideal for walking or quick auto-rickshaw commutes.
            </p>
            <span className="text-xs font-semibold text-[#0f4c47] bg-[#f0faf8] px-2.5 py-1 rounded-md">
              Approx. 5–10 mins travel
            </span>
          </Card>

          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0f4c47] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
              Edappally & Lulu Mall Area
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              3 to 5 km from campus. Connected directly via Kochi Metro (Kalamassery & Edappally stations) with numerous dining options.
            </p>
            <span className="text-xs font-semibold text-[#0f4c47] bg-[#f0faf8] px-2.5 py-1 rounded-md">
              Approx. 10–15 mins via Metro / Taxi
            </span>
          </Card>

          <Card>
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
              Kakkanad & Infopark
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              5 to 8 km from campus. Offers premier business hotels and serviced apartments with modern amenities.
            </p>
            <span className="text-xs font-semibold text-[#0f4c47] bg-[#f0faf8] px-2.5 py-1 rounded-md">
              Approx. 15–20 mins via Taxi
            </span>
          </Card>
        </div>

        {/* Assistance Help */}
        <Card className="border-amber-200 bg-[#fffbeb] text-center p-8">
          <Info className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
          <h4 className="font-display font-bold text-xl text-slate-900 mb-2">
            Need Assistance with Accommodation?
          </h4>
          <p className="text-sm text-slate-700 max-w-lg mx-auto mb-4">
            Our volunteer hospitality committee will gladly assist delegates and student groups in finding suitable stay.
          </p>
          <a
            href="mailto:dyuti@rajagiri.edu"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4c47] hover:underline"
          >
            Contact Hospitality: dyuti@rajagiri.edu
          </a>
        </Card>
      </div>
    </div>
  );
};
