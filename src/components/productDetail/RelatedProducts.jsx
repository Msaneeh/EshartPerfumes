import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
     const navigate = useNavigate();

  return (
    <>
    <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-serif text-brand-black mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reusing a simplified card for related products */}
            {[1, 2, 3, 4].map((item) => (
               <div key={item} className="group cursor-pointer" onClick={() => navigate('/product/velvet-rose')}>
                 <div className="relative overflow-hidden rounded-2xl mb-4 bg-white aspect-[3/4]">
                   <img 
                     src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop" 
                     alt="Related Product" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                 </div>
                 <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">EESHERT</p>
                 <h3 className="font-serif font-semibold text-lg text-brand-black group-hover:text-brand-gold transition-colors">Velvet Rose</h3>
                 <p className="font-medium text-brand-black mt-1">₦72,000</p>
               </div>
            ))}
          </div>
    </div>
    </>
  )
}

export default RelatedProducts