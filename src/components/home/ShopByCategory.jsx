import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ShopByCategory = () => {
  const categories = [
    {
      name: "Men's Fragrances",
      slug: "men",
      image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Women's Fragrances",
      slug: "women",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Unisex Fragrances",
      slug: "unisex",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">Shop by Category</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Find the perfect fragrance that speaks to your unique personality.
          </p>
        </div>

        {/* Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              to={`/shop?category=${category.slug}`}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group shadow-lg"
            >
              
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="text-xs font-medium text-brand-gold uppercase tracking-[0.2em]">
                    Explore Collection
                  </span>
                </div>
                
                
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors duration-300">
                  <ArrowRight size={20} className="text-white group-hover:-rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;