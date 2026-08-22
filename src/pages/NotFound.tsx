import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 px-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-7xl font-display font-extrabold text-[#0f4c47] mb-4">404</h1>
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-3">Page Not Found</h2>
        <p className="text-slate-600 text-sm mb-8">
          The conference page you are looking for might have been moved or is currently unavailable.
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="primary" asLink href="/" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};
