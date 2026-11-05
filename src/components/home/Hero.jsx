
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 py-12 md:py-20">
      
      {/* Left Column: Content */}
      <div className="flex-1 space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2">
          <span className="h-[1px] w-8 bg-brand-gold"></span>
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            The Essence of Luxury
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-brand-black">
          Discover Your <br />
          <span className="italic text-brand-gold">Signature</span> <br />
          Scent.
        </h1>

        <p className="text-gray-600 text-lg max-w-md leading-relaxed">
          Curated premium fragrances designed to leave a lasting impression. 
          Elevate your everyday presence with EESHERT.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Link 
            to="/shop"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-black text-white font-medium hover:bg-brand-gold transition-all duration-300 text-center flex items-center justify-center gap-2 group"
          >
            Explore Collection
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-black/20 text-brand-black font-medium hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Column: Image and Decor */}
      <div className="flex-1 relative w-full max-w-lg mt-12 md:mt-0">
        {/* Decorative Background Blobs */}
        <div className="absolute inset-0 transform translate-x-6 translate-y-6 md:translate-x-12 md:translate-y-12">
           <div className="w-full h-full rounded-[2rem] border-2 border-brand-gold/20"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-gold/10 blur-3xl rounded-full"></div>
        
        
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10">
          <img 
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop" 
            alt="Luxury Perfume Photography" 
            className="w-full h-[400px] md:h-[600px] object-cover object-center"
          />
          {/* Subtle Gradient Overlay on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;