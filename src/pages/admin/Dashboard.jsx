import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  CheckCircle, 
  XCircle, 
  Star, 
  Plus, 
  List, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  // --- MOCK DATA (To be replaced with Firestore fetching) ---
  const stats = {
    total: 24,
    available: 20,
    soldOut: 4,
    featured: 6
  };

  const recentProducts = [
    { id: 1, name: "Oud Royal", price: "85,000", inStock: true, date: "Oct 24, 2023", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=150&auto=format&fit=crop" },
    { id: 2, name: "Velvet Rose", price: "72,000", inStock: true, date: "Oct 22, 2023", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=150&auto=format&fit=crop" },
    { id: 3, name: "Noir Extreme", price: "95,000", inStock: false, date: "Oct 20, 2023", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=150&auto=format&fit=crop" },
    { id: 4, name: "Golden Amber", price: "110,000", inStock: true, date: "Oct 18, 2023", image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=150&auto=format&fit=crop" },
  ];

  // Greeting logic based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Total Products', value: stats.total, icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Available', value: stats.available, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Sold Out', value: stats.soldOut, icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Featured', value: stats.featured, icon: Star, color: 'text-brand-gold', bg: 'bg-brand-gold/10' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg} ${stat.color}`}>
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-serif font-bold text-brand-black">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* D. RECENT PRODUCTS TABLE (Takes up 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-serif font-semibold text-lg text-brand-black">Recent Products</h2>
            <Link to="/admin/products" className="text-sm font-medium text-brand-gold hover:text-brand-deepGold flex items-center gap-1 transition-colors">
              View All <ArrowUpRight size={16} />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-xs uppercase tracking-wider text-gray-500">
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-medium text-sm text-brand-black">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-600">₦{product.price}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                        product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Sold Out'}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500 text-right">{product.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* C & E. QUICK ACTIONS & STORE STATUS (Takes up 1 column) */}
        <div className="space-y-6">
          
          {/* Quick Actions */}
          <div className="bg-brand-black rounded-2xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="font-serif font-semibold text-lg text-white mb-4 relative z-10">Quick Actions</h2>
            <div className="space-y-3 relative z-10">
              <Link 
                to="/admin/products/new" 
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <Plus size={18} className="text-brand-gold" />
                  <span className="text-sm font-medium">Add New Product</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              
              <Link 
                to="/admin/products" 
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <List size={18} className="text-brand-gold" />
                  <span className="text-sm font-medium">Manage Products</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Store Status */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-serif font-semibold text-lg text-brand-black mb-4">Store Status</h2>
            
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <span className="text-sm text-gray-500">Storefront</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </span>
            </div>

            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-sm font-medium text-brand-black hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <ExternalLink size={16} />
              Preview Storefront
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;