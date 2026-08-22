import React from 'react';
import { MapPin } from 'lucide-react';
import { AttractionItem } from '@/data/conference';

export interface DestinationCardProps {
  attraction: AttractionItem;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ attraction }) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-dyuti-sm hover:shadow-dyuti-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={attraction.imageUrl}
          alt={attraction.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#08211e]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <MapPin className="w-3 h-3 text-amber-400" />
          <span>Kochi, Kerala</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-[#0f4c47] transition-colors">
          {attraction.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed m-0">
          {attraction.description}
        </p>
      </div>
    </div>
  );
};
