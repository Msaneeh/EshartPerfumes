import { SlidersHorizontal } from "lucide-react"

const Filters = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
              <SlidersHorizontal size={16} className="text-gray-500 mr-2 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat 
                      ? 'bg-brand-black text-white shadow-md' 
                      : 'bg-white/50 text-gray-600 hover:bg-white hover:text-brand-black border border-transparent hover:border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
        </div>
  )
}

export default Filters