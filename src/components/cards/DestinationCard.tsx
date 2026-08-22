import React from 'react';
import { MapPin } from 'lucide-react';
import { AttractionItem } from '@/data/conference';

export interface DestinationCardProps {
  attraction: AttractionItem;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ attraction }) => {
  return (
    <div className="group bg-gradient-to-b from-[#082824]/90 to-[#041714]/95 border border-amber-500/20 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-luxury-md hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full backdrop-blur-xl">
      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-emerald-950">
        <img
          src={attraction.imageUrl}
          alt={attraction.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041714] via-transparent to-transparent opacity-80" />
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-amber-200 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Kochi, Kerala</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-amber-200 transition-colors">
          {attraction.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed m-0 font-normal">
          {attraction.description}
        </p>
      </div>
    </div>
  );
};

