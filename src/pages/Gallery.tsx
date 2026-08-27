import React, { useState, useMemo } from 'react';
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
    <div className="pt-2 sm:pt-3 lg:pt-4 pb-20 sm:pb-28 lg:pb-32 bg-[#060D0E] text-[#0B1220] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── PAGE HEADER ── */}
        <div className="text-center pt-4 sm:pt-6 pb-10 sm:pb-14 mb-4">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-[#2563EB]" />
            <span className="text-[12px] font-sans font-bold uppercase tracking-[0.22em] text-[#F8FAFC]">
              Conference Historical Archive
            </span>
            <span className="w-6 h-0.5 bg-[#2563EB]" />
          </div>
          <h1 className="font-heading font-extrabold text-[#F8FAFC] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
            Historical Conference
            <span className="block text-[#F8FAFC]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.25rem)' }}>
              Gallery &amp; Retrospective
            </span>
          </h1>
          <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] leading-relaxed font-sans max-w-2xl mx-auto">
            Glimpses of keynote addresses, book release ceremonies, academic dialogues, and cultural exchanges over 25+ historic editions of the DYUTI international conference.
          </p>
        </div>

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
          'px-5 py-2.5 rounded-[10px] text-[12px] font-sans font-bold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer border backdrop-blur-md',
          isActive
            ? 'bg-blue-600/30 text-white border-blue-400/50 shadow-lg shadow-blue-500/10'
            : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 shadow-sm'
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
