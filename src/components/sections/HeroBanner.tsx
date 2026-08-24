import React, { useState } from 'react';

/**
 * Official DYUTI 2027 Hero Banner Section
 * Faithfully mirrors the banner on dyuti.in with responsive rendering,
 * smooth image loading transition, and high-fidelity display.
 */
export const HeroBanner: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="w-full bg-[#071A33] overflow-hidden"
      aria-label="DYUTI 2027 Official Banner"
    >
      <div className="w-full max-w-[1920px] mx-auto relative">
        {/* Aspect Ratio Container for Banner */}
        <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[21/8] lg:aspect-[24/8] min-h-[220px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px] xl:min-h-[540px] bg-[#071A33] flex items-center justify-center overflow-hidden">
          
          {/* Skeleton / Loading Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#12345B] to-[#071A33] animate-pulse flex items-center justify-center">
              <div className="text-center text-white/50 space-y-2">
                <span className="font-heading font-extrabold text-2xl tracking-widest text-white/30">DYUTI 2027</span>
              </div>
            </div>
          )}

          {/* Official Banner Image */}
          <img
            src="https://dyuti.in/assets/images/banner1/Banner_image_final_1.jpg_cropped.png"
            alt="DYUTI 2027 National Conference — Social Work for Sustainable Development: Empowering Communities through Innovation, Inclusion, and Partnership"
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};
