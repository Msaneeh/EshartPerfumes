
import { Link } from "react-router-dom";
import { Search, ArrowRight } from 'lucide-react';

const Product = ({ allProducts, formatPrice, setSearchQuery, setSelectedCategory }) => {
  return (
    <>
      {allProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-brand-warm aspect-[4/5] mb-4">
                <img 
                  src={product.imageUrl} // CHANGED from product.image
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${!product.inStock && 'opacity-50 grayscale'}`}
                />
                
                {/* In Stock / Sold Out Badge */}
                <div className="absolute top-3 left-3">
                  {product.inStock ? (
                    <span className="bg-white/90 backdrop-blur-md text-brand-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      In stock
                    </span>
                  ) : (
                    <span className="bg-brand-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Sold out
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col px-2 pb-2">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {product.brand}
                </p>
                <h3 className="font-serif font-semibold text-lg text-brand-black leading-tight mb-2 group-hover:text-brand-gold transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-4 flex items-end justify-between">
                  <div>
                    <p className="text-lg font-medium text-brand-black">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{product.size}</p>
                  </div>
                  
                  {/* View Product Action (Disabled if Sold Out) */}
                  <Link 
                    to={product.inStock ? `/product/${product.id}` : '#'}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                      product.inStock 
                        ? 'bg-brand-warm text-brand-black hover:bg-brand-gold hover:text-white' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={(e) => !product.inStock && e.preventDefault()}
                  >
                    <ArrowRight size={18} strokeWidth={2} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* EMPTY STATE */
        <div className="py-24 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-16 h-16 bg-brand-warm rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={24} className="text-brand-gold" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-serif text-brand-black mb-2">No perfumes found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We couldn't find any products matching your search. Try a different search term or category.
          </p>
          <button 
            onClick={() => { 
              setSearchQuery(''); 
              setSelectedCategory('All'); 
            }}
            className="mt-8 px-6 py-3 bg-brand-black text-white rounded-full text-sm font-medium hover:bg-brand-gold transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
};

export default Product;