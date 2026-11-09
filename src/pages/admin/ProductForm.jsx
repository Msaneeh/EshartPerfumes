import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from "sonner";

import ProductInfo from '@/components/admin/productform/ProductInfo';
import RightColumn from '@/components/admin/productform/RightColumn';

// CHANGED: Use real Firestore service
import { getProductById, createProduct, updateProduct } from '@/lib/productService';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const isEditMode = !!id;

  // --- UI STATE ---
  const [isLoading, setIsLoading] = useState(isEditMode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); 
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null); // NEW: store the File object
  const [existingImageUrl, setExistingImageUrl] = useState(null); // NEW
  const [errors, setErrors] = useState({});

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '', brand: '', description: '', category: 'Unisex',
    size: '', concentration: 'Eau de Parfum', notes: '',
    price: '', originalPrice: '', inStock: true, featured: false,
  });

  // --- FETCH PRODUCT (If in Edit Mode) ---
  useEffect(() => {
    if (isEditMode) {
      const fetchProduct = async () => {
        try {
          const data = await getProductById(id);
          if (data) {
            setFormData({
              name: data.name || '', brand: data.brand || '',
              description: data.description || '', category: data.category || 'Unisex',
              size: data.size || '', concentration: data.concentration || 'Eau de Parfum',
              notes: data.notes || '', price: data.price || '',
              originalPrice: data.originalPrice || '',
              inStock: data.inStock ?? true, featured: data.featured ?? false,
            });
            setImagePreview(data.imageUrl);       // CHANGED: imageUrl
            setExistingImageUrl(data.imageUrl);   // CHANGED
          } else {
            toast.error("Product not found");
            navigate('/admin/products');
          }
        } catch (err) {
          toast.error("Error fetching product", { description: err.message });
        } finally {
          setIsLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, isEditMode, navigate]);

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSwitchChange = (name, checked) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image too large", { description: "Max size is 5MB" });
        return;
      }
      setImageFile(file); // Store the actual file
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      
      if (errors.image) setErrors(prev => ({ ...prev, image: null }));
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageFile(null);
    setExistingImageUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0) newErrors.price = "Valid price is required";
    if (!formData.size.trim()) newErrors.size = "Size is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    // Only require image for NEW products
    if (!isEditMode && !imageFile) newErrors.image = "Product image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const productData = {
        ...formData,
        price: Number(formData.price),
        originalPrice: formData.originalPrice ? Number(formData.originalPrice) : null,
      };

      if (isEditMode) {
        await updateProduct(
          id, 
          { ...productData, imageUrl: existingImageUrl }, 
          imageFile, 
          setUploadProgress
        );
        toast.success("Product updated successfully");
      } else {
        await createProduct(productData, imageFile, setUploadProgress);
        toast.success("Product published successfully");
      }
      
      navigate('/admin/products');
    } catch (err) {
      toast.error("Failed to save product", { description: err.message });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/admin/products" className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-serif text-brand-black mb-1">
            {isEditMode ? 'Edit Product' : 'Add New Product'}
          </h1>
          <p className="text-gray-500 text-sm">
            {isEditMode ? 'Update the details of your perfume.' : 'Add a new perfume to your collection.'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <ProductInfo formData={formData} handleChange={handleChange} errors={errors} />

        <RightColumn
          formData={formData}
          handleChange={handleChange}
          handleSwitchChange={handleSwitchChange}
          errors={errors}
          imagePreview={imagePreview}
          removeImage={removeImage}
          fileInputRef={fileInputRef}
          handleImageChange={handleImageChange}
          isEditMode={isEditMode}
          isSubmitting={isSubmitting}
          uploadProgress={uploadProgress}
        />

        <div className="lg:col-span-3 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            type="button" onClick={() => navigate('/admin/products')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit" disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-black text-white text-sm font-medium hover:bg-brand-gold flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
            {isSubmitting ? 'Publishing...' : (isEditMode ? 'Save Changes' : 'Publish Product')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;