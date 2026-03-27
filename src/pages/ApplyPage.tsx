import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, PlusCircle, CreditCard, Landmark, ShieldCheck } from 'lucide-react';

export default function ApplyPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col bg-surface">
      <div className="px-6 py-4 flex items-center gap-4 bg-white border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Apply</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Financial Products</p>
          <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><CreditCard size={24} /></div>
            <div className="flex-1">
              <p className="font-bold text-sm">Credit Cards</p>
              <p className="text-[10px] text-gray-500">Get rewards and cashback on every spend.</p>
            </div>
            <ChevronLeft className="rotate-180 text-gray-300" size={20} />
          </div>
          <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><Landmark size={24} /></div>
            <div className="flex-1">
              <p className="font-bold text-sm">Personal Loans</p>
              <p className="text-[10px] text-gray-500">Fast approval with competitive rates.</p>
            </div>
            <ChevronLeft className="rotate-180 text-gray-300" size={20} />
          </div>
          <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600"><ShieldCheck size={24} /></div>
            <div className="flex-1">
              <p className="font-bold text-sm">Insurance</p>
              <p className="text-[10px] text-gray-500">Protect what matters most to you.</p>
            </div>
            <ChevronLeft className="rotate-180 text-gray-300" size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
