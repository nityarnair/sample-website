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
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Conference Memories"
          title="DYUTI Historical Conference Gallery"
          subtitle="Glimpses of keynote addresses, book release ceremonies, academic dialogues, and cultural exchanges over the years."
        />

        {/* Filter Pills (Replacing legacy Isotope) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-200',
                activeFilter === cat
                  ? 'bg-[#0f4c47] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
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
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-dyuti-sm hover:shadow-dyuti-lg transition-all duration-300 cursor-pointer h-64"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {photo.year} • {photo.category}
                </span>
                <h4 className="text-white font-display font-semibold text-sm leading-snug line-clamp-2">
                  {photo.title}
                </h4>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Lightbox (Replacing legacy Fancybox) */}
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
