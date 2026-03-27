import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Users, Plus, Send } from 'lucide-react';

export default function SplitBillPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-white">
      <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Split Bill</h1>
      </div>
      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Users size={48} /></div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Split bills easily</h2>
          <p className="text-sm text-gray-500">Create a group and split your expenses with friends and family instantly.</p>
        </div>
        <button className="w-full m2u-btn-primary flex items-center justify-center gap-2"><Plus size={20} /> Create New Group</button>
        <button className="w-full py-4 bg-surface text-black font-bold rounded-xl flex items-center justify-center gap-2"><Send size={18} /> View Pending Requests</button>
      </div>
    </motion.div>
  );
}
