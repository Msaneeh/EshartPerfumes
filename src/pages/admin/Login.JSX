import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoginForm from '@/components/admin/auth/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // --- State (The Logic) ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Submit Handler (The Logic) ---
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
      // 1. Firebase authenticates
      await login(email, password);
      
      // 2. Redirect. 
      navigate('/admin', { replace: true });
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-warm flex items-center justify-center px-4 py-12 relative overflow-hidden font-sans">
      
      
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/10 blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/10 blur-[100px]"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 relative z-10 overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-deepGold via-brand-gold to-brand-champagne"></div>

        <div className="p-8 md:p-10">
          
          
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

          
          <LoginForm 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            error={error}
            isLoading={isLoading}
            onSubmit={handleSubmit}
          />

          <div className="mt-8 text-center text-xs text-gray-400">
            <p>This is a private portal. Unauthorized access is prohibited.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;