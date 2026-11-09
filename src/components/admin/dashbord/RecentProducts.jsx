

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const RecentProducts = ({ recentProducts, className = "" }) => {
  return (
                <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>

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
  )
}

export default RecentProducts