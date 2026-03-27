import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, FileText, Search, Plus } from 'lucide-react';

export default function PayBillsPage() {
  const navigate = useNavigate();
  const billers = [
    { id: 1, name: 'Tenaga Nasional Berhad', category: 'Utilities' },
    { id: 2, name: 'Indah Water Konsortium', category: 'Utilities' },
    { id: 3, name: 'Telekom Malaysia', category: 'Telecommunications' },
    { id: 4, name: 'Astro', category: 'Entertainment' },
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-white">
      <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Pay Bills</h1>
      </div>
      <div className="flex-1 p-6 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 outline-none text-sm" placeholder="Search billers..." />
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Saved Billers</p>
          {billers.map(b => (
            <div key={b.id} className="flex items-center justify-between p-4 bg-surface rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary"><FileText size={20} /></div>
                <div>
                  <p className="text-sm font-bold">{b.name}</p>
                  <p className="text-[10px] text-gray-400">{b.category}</p>
                </div>
              </div>
              <button className="text-primary-dark font-bold text-xs">Pay</button>
            </div>
          ))}
          <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-400 font-bold text-sm">
            <Plus size={18} /> Add New Biller
          </button>
        </div>
      </div>
    </motion.div>
  );
}
