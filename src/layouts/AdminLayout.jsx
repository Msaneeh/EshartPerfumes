import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  LogOut, 
  Menu, 
  ExternalLink,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useAuth } from '@/context/AuthContext';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
  ];

  //  Sidebar Content
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-brand-black text-white w-full">
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <Link to="/admin" className="flex flex-col">
          <span className="font-serif font-bold text-xl tracking-widest text-white leading-none">
            EESHERT
          </span>
          <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase leading-none mt-1">
            Admin Portal
          </span>
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                isActive 
                  ? 'bg-brand-gold text-brand-black' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
              {item.name}
            </Link>
          );
        })}
      </nav>

    
      <div className="p-4 border-t border-white/10 space-y-2">
        <a 
          href="/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <ExternalLink size={18} strokeWidth={1.5} />
          View Storefront
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={18} strokeWidth={1.5} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-warm flex">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:block w-64 fixed inset-y-0 left-0 z-50">
        <SidebarContent />
      </aside>

      
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        
        {/* TOP NAVIGATION HEADER */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40">
          
          {/* Left: Mobile Menu & Breadcrumb */}
          <div className="flex items-center gap-4">
            {/* Mobile Drawer Trigger */}
            <div className="lg:hidden">
              <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 text-gray-600 hover:text-brand-black">
                    <Menu size={24} />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 border-r-0">
                  {/* Visually hidden title for accessibility */}
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SidebarContent />
                </SheetContent>
              </Sheet>
            </div>

            {/* Page Title (Dynamic based on route) */}
            <h1 className="text-xl font-serif font-semibold text-brand-black capitalize">
              {navItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
            </h1>
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-4 md:gap-6">
            
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-brand-black leading-tight">{user?.name || 'Admin'}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-black text-brand-gold flex items-center justify-center font-serif font-bold">
                {user?.name?.charAt(0) || 'A'}
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;