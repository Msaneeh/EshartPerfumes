// src/lib/mockProducts.js
export const getProductById = async (id) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const mockProducts = {
    "1": { 
      name: "Oud Royal", 
      brand: "EESHERT", 
      description: "A sophisticated fragrance that opens with fresh, spicy notes before settling into a warm, woody base.",
      category: "Unisex",
      size: "100ml",
      concentration: "Eau de Parfum",
      notes: "Oud, Amber, Rose",
      price: 85000,
      originalPrice: 95000,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
      inStock: true,
      featured: true
    }
  };

  return mockProducts[id] || null;
};