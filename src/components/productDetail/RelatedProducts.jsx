import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { getAllProducts } from '@/lib/productService';

const RelatedProducts = ({ currentProductId }) => {
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const allProducts = await getAllProducts();
        
        // 1. Filter out the current product
        // 2. Grab only the first 4 products
        const filtered = allProducts
          .filter(p => p.id !== currentProductId)
          .slice(0, 4);
          
        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch related products", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (currentProductId) {
      fetchRelated();
    }
  }, [currentProductId]);

  if (isLoading) {
    return (
      <div className="border-t border-gray-200 pt-16 flex justify-center py-10">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold" />
      </div>
    );
  }

  if (relatedProducts.length === 0) {
    return null; // Don't show the section if there are no other products
  }

  const formatPrice = (price) => {
    if (!price) return '₦0';
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="border-t border-gray-200 pt-16">
      <h2 className="text-3xl font-serif text-brand-black mb-8">You May Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer" 
            onClick={() => {
              navigate(`/product/${product.id}`);
              window.scrollTo(0, 0); // Scroll to top when navigating
            }}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 bg-white aspect-[3/4]">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${!product.inStock && 'opacity-50 grayscale'}`}
              />
            </div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              {product.brand}
            </p>
            <h3 className="font-serif font-semibold text-lg text-brand-black group-hover:text-brand-gold transition-colors">
              {product.name}
            </h3>
            <p className="font-medium text-brand-black mt-1">
              {formatPrice(product.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;