import { Package, CheckCircle, XCircle, Star } from "lucide-react";

const StaCards = ({ stats }) => {
  return (
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
  )
}

export default StaCards