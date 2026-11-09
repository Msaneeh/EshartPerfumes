import { useAuth } from '@/context/AuthContext';
import StaCards from '@/components/admin/dashbord/StaCards';
import RecentProducts from '@/components/admin/dashbord/RecentProducts';
import QuickAction from '@/components/admin/dashbord/QuickAction';

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
            {getGreeting()}, {user?.name || 'Aisha'}.
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