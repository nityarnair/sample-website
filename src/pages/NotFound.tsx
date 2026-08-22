import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="py-32 px-4 text-center bg-[#041412] text-slate-100 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto p-10 rounded-3xl bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-lg">
        <h1 className="text-8xl font-cinzel font-bold text-amber-300 mb-4 tracking-wider">404</h1>
        <h2 className="text-2xl font-cinzel font-bold text-white mb-3">Page Not Found</h2>
        <p className="text-slate-300 text-xs sm:text-sm mb-8 font-normal">
          The requested conference page may have been relocated or updated in the new DYUTI portal.
        </p>
        <div className="flex justify-center">
          <Button variant="gold" asLink href="/" icon={<Home className="w-4 h-4 text-slate-950" />}>
            Return to Conference Home
          </Button>
        </div>
      </div>
    </div>
  );
};

