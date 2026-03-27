import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, CreditCard, Plus } from 'lucide-react';

export default function PayCardPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-white">
      <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Pay Card</h1>
      </div>
      <div className="flex-1 p-6 space-y-6">
        <div className="m2u-card-dark p-6 rounded-3xl text-white space-y-8 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium italic">VISA PLATINUM</span>
            <div className="w-10 h-6 bg-yellow-400/20 rounded flex items-center justify-center border border-yellow-400/30">
              <div className="w-6 h-4 bg-yellow-400/40 rounded-sm"></div>
            </div>
          </div>
          <p className="text-xl font-bold tracking-[0.2em]">4567 •••• •••• 1234</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] opacity-60 uppercase">Outstanding Balance</p>
              <p className="text-2xl font-bold">RM 1,240.50</p>
            </div>
            <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-xs">Pay Now</button>
          </div>
        </div>
        <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-400 font-bold text-sm">
          <Plus size={18} /> Link Another Card
        </button>
      </div>
    </motion.div>
  );
}
