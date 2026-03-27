import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, PlusCircle, CheckCircle2 } from 'lucide-react';

export default function DepositPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center px-8 text-center bg-white"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="text-green-500" size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Deposit Successful</h2>
        <p className="text-gray-500 mb-10">Your funds have been added to your account balance.</p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full m2u-btn-primary"
        >
          Back to Dashboard
        </button>
      </motion.div>
    );
  }

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
        <h1 className="text-lg font-bold">Deposit Funds</h1>
      </div>

      <div className="flex-1 px-8 pt-8">
        <div className="bg-primary/10 p-4 rounded-xl flex items-start gap-3 mb-8">
          <PlusCircle className="text-primary-dark shrink-0" size={20} />
          <p className="text-xs text-gray-600 leading-relaxed">
            Add funds to your Savings Account-i instantly using your linked bank account.
          </p>
        </div>

        <form onSubmit={handleDeposit} className="space-y-6">
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

          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Source</p>
            <div className="border-2 border-primary bg-primary/5 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold">FPX</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Online Banking</p>
                  <p className="text-[10px] text-gray-500">Instant Transfer</p>
                </div>
              </div>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
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
              'Confirm Deposit'
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
