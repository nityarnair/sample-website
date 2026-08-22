import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071A33]/90 backdrop-blur-xs p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {hasPrev && onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors z-10"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {hasNext && onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors z-10"
          aria-label="Next Image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      <div
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-white/10"
        />
        {title && (
          <p className="mt-4 text-center text-white/95 text-sm sm:text-base font-serif italic max-w-xl">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};
