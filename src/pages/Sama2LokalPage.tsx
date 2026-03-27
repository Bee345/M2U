import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Heart, ShoppingBag, Utensils, Coffee } from 'lucide-react';

export default function Sama2LokalPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-surface">
      <div className="px-6 py-4 flex items-center gap-4 bg-white border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Sama2 Lokal</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="bg-primary p-6 rounded-3xl text-black space-y-2">
          <h2 className="text-xl font-black italic">Support Local Merchants</h2>
          <p className="text-xs font-medium opacity-70">Order food, groceries and more from local businesses near you.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-sm"><Utensils className="text-orange-500" /><span className="text-[10px] font-bold">Food</span></button>
          <button className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-sm"><ShoppingBag className="text-blue-500" /><span className="text-[10px] font-bold">Groceries</span></button>
          <button className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-sm"><Coffee className="text-brown-500" /><span className="text-[10px] font-bold">Coffee</span></button>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Featured Merchants</p>
          {[1,2,3].map(i => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">Local Merchant {i}</p>
                  <p className="text-[10px] text-gray-400">2.4 km away • ⭐ 4.8</p>
                </div>
                <Heart size={18} className="text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
