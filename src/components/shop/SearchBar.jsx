import { Search } from "lucide-react"

const SearchBar = ({ searchHandler, searchQuery }) => {
  return (
        <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} strokeWidth={1.5} />
            <input 
              type="text"
              placeholder="Search by perfume or brand..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all text-sm"
              value={searchQuery}
              onChange={searchHandler}
            />
        </div>
  )
}

export default SearchBar