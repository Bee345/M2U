import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Landmark, AlertCircle, X } from 'lucide-react';

export default function WithdrawalPage() {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWithdraw = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col bg-white"
    >
      <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">Transfer Funds</h1>
      </div>

      <div className="flex-1 px-8 pt-8">
        <div className="bg-primary/10 p-4 rounded-xl flex items-start gap-3 mb-8">
          <Landmark className="text-primary-dark shrink-0" size={20} />
          <p className="text-xs text-gray-600 leading-relaxed">
            Transfer funds securely to any local bank account. Please ensure all details are correct.
          </p>
        </div>

        <form onSubmit={handleWithdraw} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Bank Name</label>
            <input 
              type="text"
              required
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-primary outline-none transition-colors"
              placeholder="e.g. CIMB Bank"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Account Number</label>
            <input 
              type="text"
              required
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-primary outline-none transition-colors"
              placeholder="Enter account number"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Amount (RM)</label>
            <div className="relative">
              <span className="absolute left-0 bottom-2 font-bold">RM</span>
              <input 
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border-b-2 border-gray-200 py-2 pl-8 focus:border-primary outline-none transition-colors font-bold text-xl"
                placeholder="0.00"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full m2u-btn-primary mt-12 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
            ) : (
              'Transfer Now'
            )}
          </button>
        </form>
      </div>

      {/* Error Popup */}
      <AnimatePresence>
        {showError && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowError(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-[320px] rounded-3xl p-8 relative z-10 text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transfer Failed</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                TRANSFER FAILED CONTACT YOUR ADMIN
              </p>
              <button 
                onClick={() => setShowError(false)}
                className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl active:scale-95 transition-transform"
              >
                Dismiss
              </button>
              <button 
                onClick={() => setShowError(false)}
                className="absolute top-4 right-4 text-gray-400"
              >
                <X size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
