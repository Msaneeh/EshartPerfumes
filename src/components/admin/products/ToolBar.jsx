import { Search } from "lucide-react"

const ToolBar = ({ searchQuery, searchHandler, categoryFilter, categoryHandler, stockFilter, stockfilterHandler }) => {
  return (
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search products or brands..." 
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 text-sm"
            value={searchQuery}
            onChange={searchHandler}
          />
        </div>

        {/* Category Filter */}
        <select 
          className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 cursor-pointer"
          value={categoryFilter}
          onChange={categoryHandler}
        >
          <option value="all">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>

        {/* Stock Filter */}
        <select 
          className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 cursor-pointer"
          value={stockFilter}
          onChange={stockfilterHandler}
        >
          <option value="all">All Stock</option>
          <option value="available">Available</option>
          <option value="soldout">Sold Out</option>
        </select>
      </div>
  )
}

export default ToolBar