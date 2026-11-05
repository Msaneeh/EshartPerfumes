// src/pages/public/Home.jsx
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import ShopByCategory from '@/components/home/ShopByCategory';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCollection />
      <ShopByCategory />
    </div>
  );
};
export default Home;