import React, { useState } from 'react';

import SearchBar from '@/components/shop/SearchBar';
import Filters from '@/components/shop/Filters';
import Product from '@/components/shop/Product';

const Shop = () => {
  // --- MOCK DATA & STATE ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Mock data representing Firestore products
  const allProducts = [
    { id: 1, name: "Sauvage Eau de Parfum", brand: "DIOR", price: 85000, size: "100ml", category: "Men", inStock: true, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop", createdAt: "2023-10-01" },
    { id: 2, name: "Libre Eau de Parfum", brand: "YSL", price: 78000, size: "90ml", category: "Women", inStock: true, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop", createdAt: "2023-10-05" },
    { id: 3, name: "Bleu de Chanel", brand: "CHANEL", price: 95000, size: "100ml", category: "Men", inStock: false, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop", createdAt: "2023-10-02" },
    { id: 4, name: "Baccarat Rouge 540", brand: "MFK", price: 250000, size: "70ml", category: "Unisex", inStock: true, image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop", createdAt: "2023-10-10" },
    { id: 5, name: "Oud Wood", brand: "TOM FORD", price: 180000, size: "50ml", category: "Unisex", inStock: true, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop", createdAt: "2023-10-08" },
    { id: 6, name: "Good Girl", brand: "CAROLINA HERRERA", price: 82000, size: "80ml", category: "Women", inStock: true, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop", createdAt: "2023-10-12" },
  ];

  const categories = ['All', 'Men', 'Women', 'Unisex'];

  // Format price to Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);
  };

  const searchHandler = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="min-h-screen bg-brand-warm font-sans pb-20">
      
      {/*  HEADER */}
      <div className="bg-brand-black pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading & Intro */}
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Collection</h1>
          <p className="text-gray-400 max-w-2xl">
            Discover our curated selection of premium fragrances. From timeless classics to modern masterpieces, find the scent that defines you.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        
        {/* 2. FILTER & SEARCH BAR (Liquid Glass Container) */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(8,8,8,0.05)] rounded-2xl p-4 md:p-6 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          
          {/* Search Bar */}
          <SearchBar searchHandler={searchHandler} searchQuery={searchQuery} />

          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            
            {/* Category Filter */}

            <Filters categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

          </div>
        </div>

        {/* 3. PRODUCT GRID */}

        <Product allProducts={allProducts} formatPrice={formatPrice} />

        {/* 5. PAGINATION / LOAD MORE */}
        {allProducts.length > 0 && (
          <div className="mt-16 flex justify-center">
            <button className="px-8 py-4 rounded-full border border-gray-300 text-brand-black font-medium hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 flex items-center gap-2">
              Load More Perfumes
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Shop;