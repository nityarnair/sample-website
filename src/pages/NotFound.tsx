import React from 'react';
import { Home as HomeIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 sm:py-36 px-4 sm:px-8 bg-[#F7F7F4] text-[#101828] min-h-[75vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Editorial Annotation */}
        <div className="inline-flex items-center gap-3 pb-3 mb-8 border-b border-[#D9DEE5]">
          <span className="font-mono text-[11px] font-bold text-[#2563EB] tabular-nums">404</span>
          <span className="w-6 h-px bg-[#D9DEE5]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#071A33] font-semibold">
            Page Not Found
          </span>
        </div>

        {/* Display 404 Heading */}
        <div className="font-serif text-[7.5rem] sm:text-[10rem] lg:text-[12rem] font-light text-[#071A33] leading-none mb-4 select-none tracking-tight">
          404
        </div>

        <h1 className="text-[2.25rem] sm:text-[3rem] font-serif font-normal text-[#071A33] mb-4">
          The requested page could not be found.
        </h1>

        <p className="text-[#667085] text-base sm:text-lg max-w-xl mx-auto mb-10 font-sans font-normal leading-relaxed">
          The conference page you are looking for may have been updated, relocated, or temporarily archived in the new DYUTI 2027 portal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="navy"
            size="lg"
            asLink
            href="/"
            icon={<HomeIcon className="w-4 h-4 text-white" />}
            showArrow
          >
            Return to Conference Home
          </Button>
          <Button
            variant="outline"
            size="lg"
            asLink
            href="/contactus"
          >
            Contact Secretariat
          </Button>
        </div>

      </div>
    </div>
  );
};
