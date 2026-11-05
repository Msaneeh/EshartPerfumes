import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext'; // Import the Auth Context

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from context
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // UI State
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    
    try {
      await login(email, password);
      
      // CRUCIAL FIX: Wait 200ms for the AuthContext to propagate 
      // the state update before navigating.
      setTimeout(() => {
        navigate('/admin', { replace: true });
      }, 200);
      
    } catch (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
      setIsLoading(false); // Only stop loading on error
    }
  };
  return (
    <div className="min-h-screen bg-brand-warm flex items-center justify-center px-4 py-12 relative overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/10 blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/10 blur-[100px]"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 relative z-10 overflow-hidden">
        
        {/* Top Gold Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-deepGold via-brand-gold to-brand-champagne"></div>

        <div className="p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="font-serif font-bold text-3xl tracking-widest text-brand-black leading-none">
                EESHERT
              </span>
              <span className="text-[10px] tracking-[0.3em] text-brand-gold uppercase leading-none mt-2">
                PERFUMES
              </span>
            </div>
            <h1 className="text-2xl font-serif text-brand-black mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Sign in to manage your store.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@eeshert.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all text-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all text-sm"
                />
                {/* Show/Hide Password Toggle */}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-black transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-brand-gold focus:ring-brand-gold cursor-pointer"
                />
                <span className="text-sm text-gray-600 group-hover:text-brand-black transition-colors">Remember me</span>
              </label>
              <button 
                type="button"
                className="text-sm font-medium text-brand-gold hover:text-brand-deepGold transition-colors"
                onClick={() => alert('Password reset link sent to your email (Mock).')}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 mt-6 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-brand-black hover:bg-brand-gold shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-8 text-center text-xs text-gray-400">
            <p>This is a private portal. Unauthorized access is prohibited.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;