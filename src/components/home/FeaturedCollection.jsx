import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCollection = () => {
  // Mock data based on the defined schema
  const featuredProducts = [
    {
      id: "1",
      slug: "oud-royal",
      name: "Oud Royal",
      brand: "EESHERT",
      size: "100ml",
      price: "85,000",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "2",
      slug: "velvet-rose",
      name: "Velvet Rose",
      brand: "EESHERT",
      size: "50ml",
      price: "72,000",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "3",
      slug: "noir-extreme",
      name: "Noir Extreme",
      brand: "EESHERT",
      size: "100ml",
      price: "95,000",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "4",
      slug: "golden-amber",
      name: "Golden Amber",
      brand: "EESHERT",
      size: "100ml",
      price: "110,000",
      image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-2">Featured Collection</h2>
          <p className="text-gray-500 max-w-md">Handpicked selections for the discerning individual.</p>
        </div>
        <Link 
          to="/shop" 
          className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-deepGold transition-colors group"
        >
          View All 
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Product  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            
            
            <div className="relative overflow-hidden rounded-2xl mb-5 bg-white aspect-[3/4] shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Link 
                  to={`/product/${product.slug}`}
                  className="bg-white text-brand-black px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  View Product
                </Link>
              </div>
            </div>

            
            <div className="space-y-1 flex-grow">
              <p className="text-xs font-medium text-brand-gold uppercase tracking-wider">
                {product.brand}
              </p>
              <h3 className="font-serif font-semibold text-lg text-brand-black group-hover:text-brand-gold transition-colors">
                <Link to={`/product/${product.slug}`}>
                  {product.name}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">{product.size}</p>
              <p className="font-medium text-brand-black pt-1">₦{product.price}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-10 text-center md:hidden">
        <Link 
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-deepGold transition-colors"
        >
          View All Products →
        </Link>
      </div>

    </section>
  );
};

export default FeaturedCollection;