import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

// Custom SVG Icons (matching your Contact page style)
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="1.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className}
  >
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="1.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white pt-20 pb-8 px-4 relative overflow-hidden font-sans">
      
      {/* Decorative gold glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-serif text-3xl tracking-widest mb-2">EESHERT</h3>
              <p className="text-[10px] tracking-[0.3em] text-brand-gold uppercase">
                PERFUMES
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Elevate your presence with our exclusive collection of premium fragrances. 
              Curated for those who leave a lasting impression.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/2348012345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a 
                href="https://instagram.com/eeshert" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="mailto:hello@eeshert.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  Home
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  Shop All
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  About Us
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  Contact
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-400">+234 801 234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-400">hello@eeshert.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-400">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} EESHERT PERFUMES. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;