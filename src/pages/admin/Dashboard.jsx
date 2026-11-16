import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getAllProducts } from '@/lib/productService';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import StaCards from '@/components/admin/dashbord/StaCards';
import RecentProducts from '@/components/admin/dashbord/RecentProducts';
import QuickAction from '@/components/admin/dashbord/QuickAction';

const Dashboard = () => {
  const { user } = useAuth();
  
  // --- STATE ---
  const [stats, setStats] = useState({ total: 0, available: 0, soldOut: 0, featured: 0 });
  const [recentProducts, setRecentProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const products = await getAllProducts(); // Fetches all products from Firestore

        // 1. Calculate Statistics
        const calculatedStats = {
          total: products.length,
          available: products.filter(p => p.inStock).length,
          soldOut: products.filter(p => !p.inStock).length,
          featured: products.filter(p => p.featured).length,
        };
        setStats(calculatedStats);

        // 2. Get Recent Products (The first 4, since getAllProducts sorts by newest)
        setRecentProducts(products.slice(0, 4));

      } catch (error) {
        toast.error("Failed to load dashboard data", { description: error.message });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Greeting logic based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* A. WELCOME SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-brand-black mb-1">
            {getGreeting()}, {user?.name || 'Admin'}.
          </h1>
          <p className="text-gray-500">Here's an overview of your store today.</p>
        </div>
      </div>

      {/* B. STATISTICS CARDS */}
      <StaCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* D. RECENT PRODUCTS TABLE (Takes up 2 columns) */}
        <RecentProducts recentProducts={recentProducts} className="lg:col-span-2" />

        {/* C & E. QUICK ACTIONS & STORE STATUS (Takes up 1 column) */}
        <QuickAction />
      </div>
    </div>
  );
};

export default Dashboard;