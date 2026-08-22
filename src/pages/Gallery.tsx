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
    <div className="py-16 sm:py-24 bg-[#F8F8F6] text-[#101828] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Conference Archive"
          eyebrowVariant="blue"
          title="DYUTI Historical Conference Gallery"
          subtitle="Glimpses of keynote addresses, book release ceremonies, academic dialogues, and cultural exchanges over 25+ historic editions."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'px-5 py-2 rounded-sm text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border',
                activeFilter === cat
                  ? 'bg-[#071A33] text-white border-[#071A33] shadow-subtle'
                  : 'bg-white border-[#D9DEE5] text-[#667085] hover:text-[#071A33] hover:border-[#071A33]/40'
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
              className="group relative bg-white border border-[#D9DEE5] hover:border-[#12345B]/40 rounded-sm overflow-hidden shadow-subtle hover:shadow-editorial transition-all duration-300 cursor-pointer h-72"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/90 via-[#071A33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-sans font-semibold text-[#93C5FD] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {photo.year} &bull; {photo.category}
                </span>
                <h4 className="font-serif font-medium text-sm leading-snug line-clamp-2 text-white">
                  {photo.title}
                </h4>
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-sm bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
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
