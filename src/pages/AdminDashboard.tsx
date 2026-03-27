import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Settings, 
  LogOut,
  Plus,
  Minus,
  DollarSign,
  Activity
} from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(200000000);
  const [amount, setAmount] = useState('');
  const [logs, setLogs] = useState<{ id: number, type: 'add' | 'remove', amount: number, date: string }[]>([]);

  useEffect(() => {
    const savedBalance = localStorage.getItem('m2u_balance');
    if (savedBalance) {
      setBalance(Number(savedBalance));
    }
    const savedLogs = localStorage.getItem('m2u_admin_logs');
    if (savedLogs) {
      setLogs(JSON.parse(savedLogs));
    }
  }, []);

  const updateBalance = (type: 'add' | 'remove') => {
    const numAmount = Number(amount);
    if (!numAmount || numAmount <= 0) return;

    let newBalance = balance;
    if (type === 'add') {
      newBalance += numAmount;
    } else {
      newBalance -= numAmount;
    }

    setBalance(newBalance);
    localStorage.setItem('m2u_balance', newBalance.toString());

    const newLog = {
      id: Date.now(),
      type,
      amount: numAmount,
      date: new Date().toLocaleString()
    };
    const updatedLogs = [newLog, ...logs].slice(0, 10);
    setLogs(updatedLogs);
    localStorage.setItem('m2u_admin_logs', JSON.stringify(updatedLogs));
    setAmount('');
  };

  const handleLogout = () => {
    localStorage.removeItem('m2u_auth');
    localStorage.removeItem('m2u_role');
    navigate('/login');
    window.location.reload();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col bg-gray-50"
    >
      {/* Admin Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-gray-900 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Settings size={18} className="text-black" />
          </div>
          <h1 className="text-lg font-bold">Admin Console</h1>
        </div>
        <button onClick={handleLogout} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <LogOut size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Users size={16} />
              <span className="text-xs font-bold uppercase">Total Users</span>
            </div>
            <p className="text-2xl font-black">1,284</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Activity size={16} />
              <span className="text-xs font-bold uppercase">Active Now</span>
            </div>
            <p className="text-2xl font-black text-green-500">42</p>
          </div>
        </div>

        {/* Balance Control Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <DollarSign size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">User Balance Control</span>
          </div>
          
          <div className="mb-8">
            <p className="text-xs text-gray-500 mb-1">Current User Balance</p>
            <p className="text-3xl font-black text-gray-900">RM {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">RM</span>
              <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary transition-colors font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => updateBalance('add')}
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform shadow-lg shadow-green-500/20"
              >
                <Plus size={20} />
                Load Money
              </button>
              <button 
                onClick={() => updateBalance('remove')}
                className="flex items-center justify-center gap-2 bg-red-500 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform shadow-lg shadow-red-500/20"
              >
                <Minus size={20} />
                Remove Money
              </button>
            </div>
          </div>
        </div>

        {/* Recent Admin Actions */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 px-2">Recent Actions</h3>
          <div className="space-y-3">
            {logs.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl text-center border border-dashed border-gray-200">
                <p className="text-gray-400 text-sm italic">No recent actions recorded</p>
              </div>
            ) : (
              logs.map(log => (
                <div key={log.id} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${log.type === 'add' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {log.type === 'add' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{log.type === 'add' ? 'Balance Loaded' : 'Balance Removed'}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{log.date}</p>
                    </div>
                  </div>
                  <p className={`font-black ${log.type === 'add' ? 'text-green-600' : 'text-red-600'}`}>
                    {log.type === 'add' ? '+' : '-'} RM {log.amount.toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-gray-900 rounded-3xl p-6 text-white">
          <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">System Health</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm opacity-80">API Status</span>
              <span className="text-xs font-bold text-green-400">OPERATIONAL</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-green-400 h-full w-[98%]"></div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm opacity-80">Database Latency</span>
              <span className="text-xs font-bold">12ms</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
