import { X, UploadCloud } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const RightColumn = ({ 
  formData, handleChange, handleSwitchChange, errors, 
  imagePreview, removeImage, fileInputRef, handleImageChange,
  isEditMode, isSubmitting, uploadProgress  // NEW PROPS
}) => {
  return (
    <div className="space-y-6">
      
      {/* PRICING */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 className="font-serif font-semibold text-lg text-brand-black border-b border-gray-100 pb-3">Pricing</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Selling Price (₦) *</label>
          <input 
            type="number" name="price" value={formData.price} onChange={handleChange}
            placeholder="85000"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 ${
              errors.price ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-gold/50'
            }`}
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Original Price (Optional)</label>
          <input 
            type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange}
            placeholder="95000"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-gold/50"
          />
        </div>
      </div>

      {/* IMAGE */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-serif font-semibold text-lg border-b border-gray-100 pb-3 mb-4">
          Product Image {!isEditMode && '*'}
        </h2>
        
        {imagePreview ? (
          <div className="relative rounded-xl overflow-hidden aspect-square border border-gray-200 group">
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            <button
              type="button" onClick={removeImage}
              className="absolute top-2 right-2 p-2 bg-white/90 text-red-600 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div 
            onClick={() => fileInputRef.current.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer flex flex-col items-center justify-center aspect-square ${
              errors.image ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-brand-gold'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-brand-warm flex items-center justify-center mb-3">
              <UploadCloud size={24} className="text-brand-gold" />
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">Click to upload</p>
            <p className="text-xs text-gray-400">JPG, PNG or WEBP (max 5MB)</p>
          </div>
        )}

        <input 
          type="file" ref={fileInputRef} onChange={handleImageChange}
          accept="image/png, image/jpeg, image/webp"
          className="hidden" 
        />
        {errors.image && <p className="text-red-500 text-xs mt-2 text-center">{errors.image}</p>}
        
        {/* UPLOAD PROGRESS BAR */}
        {isSubmitting && uploadProgress > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
              <span>Uploading image...</span>
              <span>{Math.round(uploadProgress)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-gold transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* STATUS */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-serif font-semibold text-lg border-b border-gray-100 pb-3">Status & Visibility</h2>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Available</p>
            <p className="text-xs text-gray-400">In stock and ready to sell</p>
          </div>
          <Switch 
            checked={formData.inStock}
            onCheckedChange={(checked) => handleSwitchChange('inStock', checked)}
            className="data-[state=checked]:bg-green-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Featured</p>
            <p className="text-xs text-gray-400">Show on the homepage</p>
          </div>
          <Switch 
            checked={formData.featured}
            onCheckedChange={(checked) => handleSwitchChange('featured', checked)}
            className="data-[state=checked]:bg-brand-gold"
          />
        </div>
      </div>

    </div>
  );
};

export default RightColumn;