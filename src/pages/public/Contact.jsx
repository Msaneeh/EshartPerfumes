import React, { useState } from 'react';
import { Clock, Plus, Minus } from 'lucide-react';

// --- CUSTOM SVG ICONS ---
const WhatsAppIcon = ({ size = 32, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PhoneIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Contact = () => {
  // Mock store settings (Will come from StoreContext later)
  const storeSettings = {
    whatsappNumber: "2348012345678",
    displayPhone: "+234 801 234 5678",
    instagramUrl: "https://instagram.com/eeshert",
    instagramHandle: "@eeshert",
    businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  };

  const whatsappMessage = encodeURIComponent("Hello EESHERT PERFUMES! I have an enquiry.");
  const whatsappLink = `https://wa.me/${storeSettings.whatsappNumber}?text=${whatsappMessage}`;

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Delivery within Kano typically takes 1-2 business days. Orders outside Kano take 3-5 business days depending on the location."
    },
    {
      question: "Are your perfumes original?",
      answer: "Yes, we guarantee 100% authenticity on all our fragrances. We source directly from trusted distributors."
    },
    {
      question: "Do you offer payment on delivery?",
      answer: "Yes, we offer payment on delivery for customers within certain areas in Kano. For other locations, we require full payment before dispatch."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-warm font-sans pb-20">
      
      {/* 1. PAGE HEADER */}
      <div className="bg-brand-black pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Contact Us
          </h1>
          {/* 2. SHORT INTRODUCTORY MESSAGE */}
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a question about a specific scent, or need help placing an order? We're here to help. The fastest way to reach us is via WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* 3. PROMINENT WHATSAPP CONTACT CARD */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-brand-black rounded-3xl p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-brand-gold/30 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                <WhatsAppIcon size={32} className="text-brand-gold" />
              </div>
              <h2 className="text-3xl font-serif text-white mb-2">Chat on WhatsApp</h2>
              <p className="text-gray-400">Our primary customer service channel. Click to start a conversation instantly.</p>
            </div>
            
            <div className="mt-12 flex items-center justify-between relative z-10">
              <span className="text-brand-gold font-medium">Message us now</span>
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-black group-hover:scale-110 transition-transform">
                <span className="text-xl font-serif">→</span>
              </div>
            </div>
          </a>

          {/* 4, 5, 6. OTHER CONTACT INFO */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 flex flex-col justify-center gap-8">
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold">
                <PhoneIcon size={20} />
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Call Us</h3>
                <p className="text-gray-500">{storeSettings.displayPhone}</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold">
                <InstagramIcon size={20} />
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Follow Us</h3>
                <a 
                  href={storeSettings.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-gold transition-colors"
                >
                  {storeSettings.instagramHandle}
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold">
                <Clock size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Business Hours</h3>
                <p className="text-gray-500">{storeSettings.businessHours}</p>
                <p className="text-gray-400 text-sm mt-1">Closed on Sundays</p>
              </div>
            </div>

          </div>
        </div>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-brand-black text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-brand-black">{faq.question}</span>
                  <span className="text-brand-gold ml-4 flex-shrink-0">
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;