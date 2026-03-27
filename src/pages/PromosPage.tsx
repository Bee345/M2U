import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Tag, Gift, Percent } from 'lucide-react';

export default function PromosPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col bg-surface">
      <div className="px-6 py-4 flex items-center gap-4 bg-white border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Promotions</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['All', 'Dining', 'Shopping', 'Travel', 'Health'].map(cat => (
            <button key={cat} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${cat === 'All' ? 'bg-primary text-black' : 'bg-white text-gray-500'}`}>{cat}</button>
          ))}
        </div>
        <div className="space-y-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-lg text-[10px] font-black italic">HOT DEAL</div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-base">Exclusive {i === 1 ? 'Dining' : i === 2 ? 'Travel' : 'Shopping'} Offer</h3>
                <p className="text-xs text-gray-500">Enjoy up to 20% off when you pay with your M2U Visa Card at participating outlets.</p>
                <div className="pt-2 flex items-center gap-4 text-[10px] font-bold text-gray-400">
                  <span className="flex items-center gap-1"><Gift size={12} /> Reward Points</span>
                  <span className="flex items-center gap-1"><Percent size={12} /> Cashback</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
