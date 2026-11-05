import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductSection from '@/components/productDetail/ProductSection';
import RelatedProducts from '@/components/productDetail/RelatedProducts';

const ProductDetails = () => {
  const { slug } = useParams(); // Grabs the slug from the URL
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Mock database of products (simulating Firebase)
  // In the future, you will fetch this from Firestore using the slug
  const mockDatabase = {
    "oud-royal": {
      id: "1",
      name: "Oud Royal",
      brand: "EESHERT",
      price: 85000,
      originalPrice: 95000,
      size: "100ml",
      inStock: true,
      category: "Unisex",
      description: "A sophisticated fragrance that opens with fresh, spicy notes before settling into a warm, woody base. Oud Royal is crafted for those who command attention without saying a word.",
      notes: "Oud, Amber, Rose, Spices",
      images: [
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    "velvet-rose": {
      id: "2",
      name: "Velvet Rose",
      brand: "EESHERT",
      price: 72000,
      originalPrice: null,
      size: "50ml",
      inStock: true,
      category: "Women",
      description: "An elegant and romantic scent. Velvet Rose captures the essence of a blooming garden at dawn, blending soft floral notes with a hint of vanilla.",
      notes: "Rose, Vanilla, Peony",
      images: [
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop"
      ]
    }
  };

  // Simulate fetching data based on the URL param
  useEffect(() => {
    // If the slug exists in mock data, set it. Otherwise, redirect or show 404.
    if (mockDatabase[slug]) {
      setProduct(mockDatabase[slug]);
    } else {
      // Fallback for demo purposes (so you can see the page)
      setProduct(mockDatabase["oud-royal"]); 
    }
  }, [slug]);

  if (!product) {
    return <div className="min-h-screen pt-40 text-center">Loading...</div>;
  }

  // Format Price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);
  };

  // --- WHATSAPP LOGIC ---
  const handleWhatsAppOrder = () => {
    // 1. Your friend's number (no +, no leading 0)
    const phoneNumber = "2348012345678"; 
    
    // 2. Current page URL
    const productUrl = window.location.href;

    // 3. Build the message
    const message = `Hello EESHERT PERFUMES! I would like to order:\n\n*Product:* ${product.name}\n*Size:* ${product.size}\n*Price:* ${formatPrice(product.price)}\n*Link:* ${productUrl}\n\nIs this available?`;
    
    // 4. Encode and open
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-warm font-sans pb-20">
      
      <div className="max-w-7xl mx-auto px-4 pt-32">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-brand-black font-medium">{product.name}</span>
        </nav>

        {/* MAIN PRODUCT SECTION */}

        <ProductSection 
            product={product} 
            activeImage={activeImage} 
            setActiveImage={setActiveImage} 
            handleWhatsAppOrder={handleWhatsAppOrder} 
            formatPrice={formatPrice}
        />

        {/* RELATED PRODUCTS (Mocked) */}

        <RelatedProducts />

      </div>
    </div>
  );
};

export default ProductDetails;