import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react';

export default function TransactionsPage() {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, title: 'Starbucks Coffee', date: '24 Mar 2026', amount: '-RM 18.50', type: 'debit', category: 'Food & Beverage' },
    { id: 2, title: 'Salary Credit', date: '23 Mar 2026', amount: '+RM 4,500.00', type: 'credit', category: 'Income' },
    { id: 3, title: 'TNG Reload', date: '22 Mar 2026', amount: '-RM 50.00', type: 'debit', category: 'Transport' },
    { id: 4, title: 'GrabFood', date: '22 Mar 2026', amount: '-RM 32.40', type: 'debit', category: 'Food & Beverage' },
    { id: 5, title: 'Transfer to Mom', date: '21 Mar 2026', amount: '-RM 200.00', type: 'debit', category: 'Transfer' },
    { id: 6, title: 'Netflix Subscription', date: '20 Mar 2026', amount: '-RM 45.00', type: 'debit', category: 'Entertainment' },
    { id: 7, title: 'Interest Credit', date: '19 Mar 2026', amount: '+RM 2.45', type: 'credit', category: 'Interest' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="h-full flex flex-col bg-white"
    >
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/dashboard')} className="p-1">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold">History</h1>
        </div>
        <button className="p-2 text-gray-400">
          <Search size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-6 bg-surface">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Activity</p>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {tx.type === 'credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{tx.title}</p>
                    <p className="text-[10px] text-gray-400">{tx.date} • {tx.category}</p>
                  </div>
                </div>
                <p className={`text-sm font-black ${
                  tx.type === 'credit' ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
