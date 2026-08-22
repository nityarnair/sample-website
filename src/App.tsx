import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Rajagiri } from '@/pages/Rajagiri';
import { CallForPapers } from '@/pages/CallForPapers';
import { Accommodation } from '@/pages/Accommodation';
import { Attractions } from '@/pages/Attractions';
import { Travel } from '@/pages/Travel';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rajagiri" element={<Rajagiri />} />
          
          {/* Support both legacy snake_case and modern clean URLs */}
          <Route path="call_for_papers" element={<CallForPapers />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          
          <Route path="accomodation" element={<Accommodation />} />
          <Route path="accommodation" element={<Accommodation />} />
          
          <Route path="attractions" element={<Attractions />} />
          <Route path="travel" element={<Travel />} />
          <Route path="gallery" element={<Gallery />} />
          
          <Route path="contactus" element={<Contact />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
