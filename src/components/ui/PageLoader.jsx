import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-warm">
      <Loader2 className="w-10 h-10 animate-spin text-brand-gold mb-4" />
      <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Loading...</p>
    </div>
  );
};

export default PageLoader;