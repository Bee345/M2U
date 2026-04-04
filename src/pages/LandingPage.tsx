import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col bg-primary relative overflow-hidden">
      {/* Background Pattern / Logo */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center pt-20">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center shadow-xl">
            <span className="text-primary text-4xl font-black italic">M2U</span>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-black mb-4"
        >
          Humanising Banking
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-black/70 mb-12"
        >
          Experience seamless and secure banking at your fingertips.
        </motion.p>
      </div>

      <div className="px-8 pb-12 flex flex-col gap-4">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate('/login')}
          className="w-full bg-black text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          Login to M2U
          <ChevronRight size={20} />
        </motion.button>
        
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-white/20 text-black font-bold py-4 rounded-xl border border-black/10 active:scale-95 transition-transform"
        >
          Register Now
        </motion.button>
      </div>
      
      <div className="pb-6 text-center">
        <span className="text-xs text-black/40 font-medium">v4.0.25 | Secure Banking</span>
      </div>
    </div>
  );
}
