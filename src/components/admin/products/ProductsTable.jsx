import { Link, useNavigate } from "react-router-dom";
import { PackageOpen, Plus, MoreVertical, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductsTable = ({ products, totalCount, formatPrice, toggleStock, openDeleteModal }) => {
  const navigate = useNavigate();

  return (
    <>
      {totalCount === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-20 text-center">
          <div className="w-16 h-16 bg-brand-warm rounded-full flex items-center justify-center mx-auto mb-4">
            <PackageOpen size={28} className="text-brand-gold" />
          </div>
          <h3 className="text-xl font-serif text-brand-black mb-2">No products yet</h3>
          <p className="text-gray-500 text-sm mb-6">Get started by adding your first perfume.</p>
          <Link 
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-black text-white text-sm font-medium hover:bg-brand-gold transition-colors"
          >
            <Plus size={18} /> Add Your First Product
          </Link>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 text-center">
          <h3 className="text-lg font-serif text-brand-black mb-1">No products found</h3>
          <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-100">
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Stock</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          {/* CHANGED: imageUrl */}
                          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p 
                            className="font-medium text-sm text-brand-black cursor-pointer hover:text-brand-gold"
                            onClick={() => navigate(`/admin/products/${product.id}/edit`)}
                          >
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500">{product.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{product.category}</td>
                    <td className="p-4 text-sm font-medium text-brand-black">{formatPrice(product.price)}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => toggleStock(product.id)}
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                          product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {product.inStock ? 'Available' : 'Sold Out'}
                      </button>
                    </td>
                    <td className="p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2 text-gray-400 hover:text-brand-black rounded-lg hover:bg-gray-100">
                            <MoreVertical size={18} />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem 
                            onClick={() => navigate(`/admin/products/${product.id}/edit`)}
                            className="cursor-pointer gap-2"
                          >
                            <Edit size={14} /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => openDeleteModal(product)}
                            className="cursor-pointer gap-2 text-red-600"
                          >
                            <Trash2 size={14} /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsTable;