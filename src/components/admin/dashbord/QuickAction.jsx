import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Plus, List } from "lucide-react";



const QuickAction = () => {
  return (
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
  )
}

export default QuickAction;