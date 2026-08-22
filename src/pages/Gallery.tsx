import React, { useState, useMemo } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Lightbox } from '@/components/ui/Lightbox';
import { ZoomIn, Calendar } from 'lucide-react';

import { CONFERENCE_DATA, GalleryItem } from '@/data/conference';
import { cn } from '@/lib/utils';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Extract unique filter categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add('All');
    CONFERENCE_DATA.gallery.forEach((item) => set.add(item.year));
    return Array.from(set);
  }, []);

  // Filter items
  const filteredPhotos = useMemo(() => {
    if (activeFilter === 'All') return CONFERENCE_DATA.gallery;
    return CONFERENCE_DATA.gallery.filter((item) => item.year === activeFilter);
  }, [activeFilter]);

  const selectedPhoto: GalleryItem | null =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <div className="py-16 sm:py-24 bg-[#041412] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Conference Archive"
          eyebrowVariant="gold-luxury"
          title="DYUTI Historical Conference Gallery"
          subtitle="Glimpses of keynote addresses, book release ceremonies, academic dialogues, and cultural exchanges over 25+ historic editions."
          dark
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'px-5 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer',
                activeFilter === cat
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-gold-glow border border-amber-300 font-extrabold'
                  : 'bg-white/5 border border-amber-500/20 text-slate-300 hover:text-white hover:bg-white/10'
              )}
            >
              {cat === 'All' ? 'All Editions' : `DYUTI ${cat}`}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative bg-[#082a26] border border-amber-500/20 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-luxury-md hover:shadow-gold-glow transition-all duration-500 cursor-pointer h-72 backdrop-blur-xl"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5 font-cinzel">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> {photo.year} • {photo.category}
                </span>
                <h4 className="text-white font-display font-semibold text-sm leading-snug line-clamp-2">
                  {photo.title}
                </h4>
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-black/60 border border-amber-400/40 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <Lightbox
            isOpen={selectedPhotoIndex !== null}
            onClose={() => setSelectedPhotoIndex(null)}
            imageUrl={selectedPhoto.imageUrl}
            title={`${selectedPhoto.title} (DYUTI ${selectedPhoto.year})`}
            onPrev={() =>
              setSelectedPhotoIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1
              )
            }
            onNext={() =>
              setSelectedPhotoIndex((prev) =>
                prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0
              )
            }
            hasPrev={filteredPhotos.length > 1}
            hasNext={filteredPhotos.length > 1}
          />
        )}
      </div>
    </div>
  );
};

