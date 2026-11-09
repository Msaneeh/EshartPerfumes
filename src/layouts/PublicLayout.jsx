import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // <-- Import the new Footer

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-warm text-brand-black font-sans">
      <Navbar />
      <main className="flex-grow pt-28">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  );
};

export default PublicLayout;