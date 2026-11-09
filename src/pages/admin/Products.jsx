import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Loader2 } from 'lucide-react';
import { toast } from "sonner";

import ToolBar from '@/components/admin/products/ToolBar';
import ProductsTable from '@/components/admin/products/ProductsTable';
import DeleteModal from '@/components/admin/products/DeleteModal';

import { getAllProducts, deleteProduct } from '@/lib/productService';

const Products = () => {
  // --- DATA STATE ---
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- UI STATE ---
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // --- FETCH FROM FIRESTORE ---
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      toast.error("Failed to load products", { description: err.message });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // --- HANDLERS ---
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { 
      style: 'currency', currency: 'NGN', minimumFractionDigits: 0 
    }).format(price);
  };

  // NOTE: Toggle stock would need a Firestore update.
  // For now we'll add it to productService later.
  const toggleStock = async (id) => {
    // ... Will be Firestore update
    console.log("Toggle stock for", id);
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteProduct(productToDelete.id, productToDelete.imageUrl);
      toast.success("Product deleted");
      setProducts(prev => prev.filter(p => p.id !== productToDelete.id));
    } catch (err) {
      toast.error("Failed to delete", { description: err.message });
    } finally {
      setDeleteModalOpen(false);
      setProductToDelete(null);
    }
  };

  const searchHandler = (e) => setSearchQuery(e.target.value);
  const categoryHandler = (e) => setCategoryFilter(e.target.value);
  const stockfilterHandler = (e) => setStockFilter(e.target.value);

  // --- FILTER LOGIC (unchanged) ---
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.brand?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStock = 
      stockFilter === 'all' || 
      (stockFilter === 'available' && product.inStock) || 
      (stockFilter === 'soldout' && !product.inStock);
    return matchesSearch && matchesCategory && matchesStock;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif text-brand-black mb-1">Products</h1>
          <p className="text-gray-500 text-sm">Manage your perfume collection.</p>
        </div>
        <Link 
          to="/admin/products/new"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-black text-white text-sm font-medium hover:bg-brand-gold transition-colors shadow-sm"
        >
          <Plus size={18} /> Add Product
        </Link>
      </div>

      <ToolBar 
        searchQuery={searchQuery}
        searchHandler={searchHandler}
        categoryFilter={categoryFilter}
        categoryHandler={categoryHandler}
        stockFilter={stockFilter}
        stockfilterHandler={stockfilterHandler}
      /> 

      <ProductsTable
        products={filteredProducts}
        totalCount={products.length}
        formatPrice={formatPrice}
        toggleStock={toggleStock}
        openDeleteModal={openDeleteModal}
      />

      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        productToDelete={productToDelete}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Products;