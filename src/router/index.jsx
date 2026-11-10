import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/router/ProtectedRoute";

// Loading Fallback
import PageLoader from "@/components/ui/PageLoader";

// --- LAZY LOADED PUBLIC PAGES ---
const Home = lazy(() => import("@/pages/public/Home"));
const Shop = lazy(() => import("@/pages/public/Shop"));
const ProductDetails = lazy(() => import("@/pages/public/ProductDetails"));
const About = lazy(() => import("@/pages/public/About"));
const Contact = lazy(() => import("@/pages/public/Contact"));

// --- LAZY LOADED ADMIN PAGES ---
const Login = lazy(() => import("../pages/admin/Login"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const Products = lazy(() => import("../pages/admin/Products"));
const ProductForm = lazy(() => import("../pages/admin/ProductForm"));

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          {/* Redirect root "/" to "/shop" (or keep Home if you have a landing page) */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<Login />} />

        {/* PROTECTED ADMIN */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/products/new" element={<ProductForm />} />
            <Route path="/admin/products/:id/edit" element={<ProductForm />} />
          </Route>
        </Route>

        {/* 404 NOT FOUND - REDIRECT TO SHOP */}
        {/* The "*" catches any URL that doesn't match the above */}
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
    </Suspense>
  );
}