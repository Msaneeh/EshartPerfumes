import { MessageCircle, Check, X, ShieldCheck, Truck } from 'lucide-react';

const ProductSection = ({ product, activeImage, setActiveImage, handleWhatsAppOrder, formatPrice }) => {
  // SAFETY CHECK: If images array is missing, fallback to imageUrl
  const imageList = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          
      {/* LEFT COLUMN: IMAGE GALLERY */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Main Image */}
        <div className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
          <img 
            src={imageList[activeImage] || imageList[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Availability Badge */}
          <div className="absolute top-6 left-6">
            {product.inStock ? (
              <span className="bg-white/90 backdrop-blur-md text-brand-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Check size={14} className="text-green-600"/> In Stock
              </span>
            ) : (
              <span className="bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <X size={14} /> Sold Out
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail Navigation (Only show if more than 1 image) */}
        {imageList.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {imageList.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  activeImage === index ? 'border-brand-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: PRODUCT INFO */}
      <div className="w-full lg:w-1/2 flex flex-col">
        
        {/* Brand */}
        <p className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">
          {product.brand}
        </p>
        
        {/* Product Name */}
        <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">
          {product.name}
        </h1>
        
        {/* Pricing */}
        <div className="flex items-end gap-4 mb-8">
          <p className="text-3xl font-medium text-brand-black">{formatPrice(product.price)}</p>
          {product.originalPrice && (
            <p className="text-lg text-gray-400 line-through mb-1">{formatPrice(product.originalPrice)}</p>
          )}
        </div>

        {/* Size */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500 mb-2">Size</p>
          <div className="inline-flex px-6 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-brand-black">
            {product.size}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-serif font-semibold mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Fragrance Notes */}
        {product.notes && (
          <div className="mb-10">
            <h3 className="text-lg font-serif font-semibold mb-3">Fragrance Notes</h3>
            <p className="text-gray-600">{product.notes}</p>
          </div>
        )}

        {/* ACTION: Order on WhatsApp */}
        <div className="mt-auto space-y-4">
          <button 
            onClick={handleWhatsAppOrder}
            disabled={!product.inStock}
            className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-semibold text-lg transition-all duration-300 ${
              product.inStock 
                ? 'bg-brand-black text-white hover:bg-brand-gold shadow-xl hover:shadow-2xl' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <MessageCircle size={24} />
            {product.inStock ? 'Order on WhatsApp' : 'Currently Sold Out'}
          </button>
          
          {/* Product Info Points */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck size={18} className="text-brand-gold" />
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Truck size={18} className="text-brand-gold" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductSection;