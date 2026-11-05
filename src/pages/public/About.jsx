import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-warm font-sans pb-20">
      
      {/* 1. HERO: ABOUT OUR BRAND */}
      <div className="bg-brand-black pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            The Essence of <br className="hidden md:block" /> EESHERT PERFUMES
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        
        {/* 2. BRAND STORY & 5. LIFESTYLE IMAGERY */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-serif text-brand-black">Crafted for the Discerning</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              EESHERT PERFUMES was born from a simple desire: to make luxury accessible. We believe that a fragrance is more than just a scent—it is a signature, a memory, and an unspoken introduction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We meticulously source premium fragrances from around the world, ensuring that every bottle we sell delivers the depth, longevity, and sophistication our clients expect.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop" 
                alt="Perfume craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 & 4. WHAT MAKES US DIFFERENT / QUALITY CLAIMS */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">Why Choose Us?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are committed to providing an exceptional experience from the moment you browse to the moment you spray.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "100% Authentic",
              desc: "We guarantee the authenticity of every single bottle. No imitations, no compromises."
            },
            {
              title: "Curated Selection",
              desc: "We don't just sell everything. We handpick fragrances that offer the best performance and uniqueness."
            },
            {
              title: "Personal Service",
              desc: "Ordering is simple and direct. We are always a WhatsApp message away to help you choose."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center mb-6 text-brand-gold">
                <CheckCircle2 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 5. WIDE LIFESTYLE IMAGERY */}
        <div className="mb-24 rounded-3xl overflow-hidden h-[400px] relative group">
          <img 
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop" 
            alt="Luxury lifestyle" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <h2 className="text-white font-serif text-3xl md:text-5xl tracking-widest text-center px-4">
               Leave a Lasting Impression
             </h2>
          </div>
        </div>

        {/* 6. CTA: EXPLORE COLLECTION */}
        <div className="text-center pb-10">
          <h2 className="text-3xl font-serif text-brand-black mb-6">Ready to find your signature?</h2>
          <Link 
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-black text-white font-medium hover:bg-brand-gold transition-all duration-300 group shadow-lg"
          >
            Explore Our Collection
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;