import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Landmark } from 'lucide-react';
import ErrorModal from '../components/ErrorModal';

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
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-full flex flex-col bg-white"
    >
      <div className="px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate('/dashboard')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">Transfer Funds</h1>
      </div>

      <div className="flex-1 px-8 pt-4">
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

      <ErrorModal 
        isOpen={showError} 
        onClose={() => setShowError(false)}
        title="Transfer Failed"
        message="TRANSFER FAILED CONTACT YOUR ADMIN"
      />
    </motion.div>
  );
}
