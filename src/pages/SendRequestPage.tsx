import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Send, UserPlus, History } from 'lucide-react';

export default function SendRequestPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-white">
      <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Send & Request</h1>
      </div>
      <div className="flex-1 p-6 space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-primary/10 p-6 rounded-3xl flex flex-col items-center gap-3 text-primary-dark">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm"><Send size={24} /></div>
            <span className="font-bold text-sm">Send Money</span>
          </button>
          <button className="bg-blue-50 p-6 rounded-3xl flex flex-col items-center gap-3 text-blue-600">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm"><UserPlus size={24} /></div>
            <span className="font-bold text-sm">Request Money</span>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Recent Contacts</p>
            <button className="text-xs font-bold text-primary-dark flex items-center gap-1"><History size={14} /> History</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-14 h-14 bg-gray-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center font-bold text-gray-400">U{i}</div>
                <span className="text-[10px] font-medium">User {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
