import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="py-32 px-4 text-center bg-[#F8F8F6] text-[#101828] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto p-12 rounded-container bg-white border border-[#D9DEE5] shadow-editorial">
        <h1 className="text-8xl font-serif text-[#071A33] mb-4">404</h1>
        <h2 className="text-3xl font-serif text-[#071A33] mb-3">Page Not Found</h2>
        <p className="text-[#667085] text-xs sm:text-sm mb-8 font-sans font-normal leading-relaxed">
          The requested conference page may have been relocated or updated in the new DYUTI 2027 portal.
        </p>
        <div className="flex justify-center">
          <Button variant="navy" asLink href="/" icon={<Home className="w-4 h-4 text-white" />}>
            Return to Conference Home
          </Button>
        </div>
      </div>
    </div>
  );
};
