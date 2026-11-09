import React, { useState, useEffect } from 'react';
import { getAllProducts } from '@/lib/productService';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import SearchBar from '@/components/shop/SearchBar';
import Filters from '@/components/shop/Filters';
import Product from '@/components/shop/Product';

const Shop = () => {
  // --- FIREBASE DATA STATE ---
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- FILTER STATE ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Men', 'Women', 'Unisex'];

  // --- FETCH FROM FIRESTORE ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        toast.error("Failed to load products", { description: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Format price to Naira
  const formatPrice = (price) => {
    if (!price) return '₦0';
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);
  };

  const searchHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  // --- FILTER LOGIC ---
  const filteredProducts = products.filter((product) => {
    const matchesSearch = 
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.brand?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-warm font-sans pb-20">
      
      {/* HEADER */}
      <div className="bg-brand-black pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Collection</h1>
          <p className="text-gray-400 max-w-2xl">
            Discover our curated selection of premium fragrances. From timeless classics to modern masterpieces, find the scent that defines you.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        
        {/* FILTER & SEARCH BAR */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(8,8,8,0.05)] rounded-2xl p-4 md:p-6 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          
          <SearchBar searchHandler={searchHandler} searchQuery={searchQuery} />

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Filters categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
          </div>
        </div>

        {/* PRODUCT GRID / LOADING STATE */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="w-10 h-10 animate-spin text-brand-gold mb-4" />
            <p className="text-gray-500 font-medium">Loading collection...</p>
          </div>
        ) : (
          <Product 
            allProducts={filteredProducts} 
            formatPrice={formatPrice} 
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {/* PAGINATION / LOAD MORE */}
        {!isLoading && filteredProducts.length > 0 && (
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