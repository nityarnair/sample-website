import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Lightbox } from '@/components/ui/Lightbox';
import { ZoomIn } from 'lucide-react';
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
    <div className="pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-28 lg:pb-32 bg-[#F5F5F0] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── 06 / EDITORIAL PAGE HEADER ── */}
        <PageHeader
          number="06"
          category="ARCHIVE"
          metaRight="25+ Editions of Academic Dialogue &middot; 1998–2026"
          eyebrow="Conference Historical Archive"
          title={
            <>
              Historical Conference
              <span className="block font-heading text-[#667085] text-[1.85rem] sm:text-[2.5rem] font-bold mt-1">
                Gallery &amp; Retrospective
              </span>
            </>
          }
          subtitle="Glimpses of keynote addresses, book release ceremonies, academic dialogues, and cultural exchanges over 25+ historic editions of the DYUTI international conference."
        />

        {/* ── FILTER CONTROLS ── */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14 lg:mb-18">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  'px-5 py-2.5 rounded-[10px] text-[12px] font-sans font-bold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer border',
                  isActive
                    ? 'bg-[#071A33] text-white border-[#071A33] shadow-sm'
                    : 'bg-white border-[#D9DEE5] text-[#667085] hover:text-[#071A33] hover:border-[#071A33]/40 shadow-subtle'
                )}
              >
                {cat === 'All' ? 'All Editions' : `DYUTI ${cat}`}
              </button>
            );
          })}
        </div>

        {/* ── IMAGE GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-28">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhotoIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${photo.title} (DYUTI ${photo.year})`}
              className="group relative bg-white border border-[#D9DEE5] hover:border-[#2563EB]/40 rounded-[20px] overflow-hidden shadow-editorial transition-all duration-500 cursor-pointer h-80 flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/90 via-[#071A33]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white z-10">
                <span className="text-[10.5px] font-mono font-bold text-[#93C5FD] uppercase tracking-[0.16em] mb-1.5 block">
                  DYUTI {photo.year} &middot; {photo.category}
                </span>
                <h4 className="font-heading text-base sm:text-[17px] leading-snug line-clamp-2 text-white font-bold m-0">
                  {photo.title}
                </h4>
                
                {/* Floating Zoom Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-[10px] bg-white/20 backdrop-blur-xs flex items-center justify-center text-white border border-white/25 shadow-subtle">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── LIGHTBOX INTEGRATION ── */}
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
