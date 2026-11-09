import React from 'react'

const ProductInfo = ({ formData, handleChange, errors }) => {
  return (
    <>
              <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="font-serif font-semibold text-lg text-brand-black border-b border-gray-100 pb-3">Product Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Name *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Oud Royal"
                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm ${
                  errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-gold/50'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Brand</label>
              <input 
                type="text" 
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g. EESHERT"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description *</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe the fragrance, its mood, and who it's for..."
                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm resize-none ${
                  errors.description ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-gold/50'
                }`}
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 text-sm cursor-pointer"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Size *</label>
                <input 
                  type="text" 
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="e.g. 100ml"
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm ${
                    errors.size ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-gold/50'
                  }`}
                />
                {errors.size && <p className="text-red-500 text-xs mt-1">{errors.size}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Concentration</label>
                <select 
                  name="concentration"
                  value={formData.concentration}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 text-sm cursor-pointer"
                >
                  <option value="Eau de Parfum">Eau de Parfum (EDP)</option>
                  <option value="Eau de Toilette">Eau de Toilette (EDT)</option>
                  <option value="Parfum">Parfum (Extrait)</option>
                  <option value="Eau de Cologne">Eau de Cologne (EDC)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Fragrance Notes (Optional)</label>
                <input 
                  type="text" 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Oud, Rose, Amber"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductInfo