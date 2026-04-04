import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, EyeOff, ChevronLeft, Lock } from 'lucide-react';

interface LoginPageProps {
  onLogin: (role: 'user' | 'admin') => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const role = email.toLowerCase().includes('admin') ? 'admin' : 'user';
      localStorage.setItem('m2u_auth', 'true');
      localStorage.setItem('m2u_role', role);
      localStorage.setItem('m2u_email', email);
      onLogin(role);
      navigate(role === 'admin' ? '/admin' : '/dashboard');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-full flex flex-col bg-white"
    >
      <div className="px-6 py-4">
        <button onClick={() => navigate('/')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="flex-1 px-8 pt-4">
        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-10">Please enter your credentials to continue</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-primary outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Password</label>
            <input 
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-primary outline-none transition-colors pr-10"
              placeholder="Enter your password"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 bottom-2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm font-semibold text-primary-dark">Forgot Password?</button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full m2u-btn-primary mt-8 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
            ) : (
              <>
                <Lock size={18} />
                Secure Login
              </>
            )}
          </button>
        </form>
      </div>

      <div className="p-8 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account? <button className="text-primary-dark font-bold">Sign Up</button>
        </p>
      </div>
    </motion.div>
  );
}
