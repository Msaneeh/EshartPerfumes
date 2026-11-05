import { Route, Routes } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
// import AdminLayout from "@/layouts/adminLayout";
// import ProtectedRoute from "@/router/ProtectedRoute";

// Public Pages
import Home from "@/pages/public/Home";
import Shop from "@/pages/public/Shop";
import ProductDetails from "@/pages/public/ProductDetails";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";

// Admin Pages
// import Login from "@/pages/admin/Login"
// import Dashboard from "@/pages/admin/Dashboard"; // Create a placeholder for this

export default function AppRouter() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN LOGIN (Publicly accessible) */}
      {/* <Route path="/admin/login" element={<Login />} /> */}

      {/* PROTECTED ADMIN ROUTES */}
      {/* <Route element={<ProtectedRoute />}> 
        <Route element={<AdminLayout />}>
           <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path='*' /> */}
    </Routes>
  );
}