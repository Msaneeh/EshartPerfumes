import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappNumber = "2348012345678"; 
  const whatsappMessage = encodeURIComponent("Hello EESHERT PERFUMES, I would like to make an enquiry.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // TRUE LIQUID GLASS UTILITY CLASSES
  const liquidGlassBase = "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_0_rgba(8,8,8,0.05)]";
  // The inner highlight gives it that "liquid" 3D edge
  const liquidGlassHighlight = "before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-b before:from-white/80 before:to-transparent before:-z-10";

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-6">
      {/* Container with Liquid Glass */}
      <div className={`max-w-7xl mx-auto ${liquidGlassBase} ${liquidGlassHighlight} rounded-full px-6 py-3 flex items-center justify-between relative`}>
        
        {/* Left: Logo and Name */}
        <div className="flex flex-col z-50 group">
          <span className="font-serif font-bold text-xl tracking-widest text-brand-black leading-none group-hover:text-brand-gold transition-colors">
            EESHERT
          </span>
          <span className="text-[10px] tracking-[0.2em] text-brand-deepGold uppercase leading-none mt-1">
            PERFUMES
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-all duration-300 relative group ${
                location.pathname === link.path 
                  ? 'text-brand-black font-semibold' 
                  : 'text-gray-600 hover:text-brand-black'
              }`}
            >
              {link.name}
              {/* Liquid Gold Underline */}
              <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-brand-gold transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 z-50">
          {/* WhatsApp Desktop Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-brand-black text-white hover:bg-brand-gold transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={16} strokeWidth={2} />
            <span>Chat with us</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-black hover:text-brand-gold transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown (Also Liquid Glass) */}
        <div
          className={`absolute top-[115%] left-0 w-full ${liquidGlassBase} rounded-3xl overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0 border-transparent'
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-gold'
                    : 'text-brand-black hover:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-brand-black px-6 py-3 rounded-full hover:bg-brand-gold transition-colors mt-2"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;