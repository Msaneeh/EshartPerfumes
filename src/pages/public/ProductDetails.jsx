import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import ProductSection from '@/components/productDetail/ProductSection';
import RelatedProducts from '@/components/productDetail/RelatedProducts';
import { getProductById } from '@/lib/productService';

const ProductDetails = () => {
  // CHANGED: We now use the Firestore document ID, not a slug
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        
        if (data) {
          // Ensure the ProductSection receives an array of images
          // We create a fake array with the single Cloudinary imageUrl.
          // If you add multi-image support later, you'd use data.images here.
          const formattedData = {
            ...data,
            images: [data.imageUrl] 
          };
          setProduct(formattedData);
        } else {
          toast.error("Product not found");
          navigate('/shop'); // Redirect to shop if ID is invalid
        }
      } catch (error) {
        toast.error("Error loading product", { description: error.message });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-brand-gold mb-4" />
        <p className="text-gray-500 font-medium">Loading product...</p>
      </div>
    );
  }

  if (!product) return null;

  // Format Price
  const formatPrice = (price) => {
    if (!price) return '₦0';
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);
  };

  // --- WHATSAPP LOGIC ---
  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348012345678"; 
    const productUrl = window.location.href;
    const message = `Hello EESHERT PERFUMES! I would like to order:\n\n*Product:* ${product.name}\n*Size:* ${product.size}\n*Price:* ${formatPrice(product.price)}\n*Link:* ${productUrl}\n\nIs this available?`;
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

        {/* RELATED PRODUCTS (Mocked for now) */}
<RelatedProducts currentProductId={id} />

      </div>
    </div>
  );
};

export default ProductDetails;