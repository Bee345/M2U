import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MoreHorizontal, 
  CreditCard, 
  ArrowRightLeft, 
  FileText, 
  Smartphone, 
  Users, 
  Send, 
  QrCode, 
  Heart,
  ChevronRight,
  Home,
  PlusCircle,
  Tag,
  ShieldCheck,
  LogOut
} from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(200000000);

  useEffect(() => {
    const savedBalance = localStorage.getItem('m2u_balance');
    if (savedBalance) {
      setBalance(Number(savedBalance));
    } else {
      localStorage.setItem('m2u_balance', '200000000');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('m2u_auth');
    localStorage.removeItem('m2u_role');
    navigate('/login');
    window.location.reload();
  };

  const actions = [
    { id: 'transfer', label: 'Transfer', icon: <ArrowRightLeft className="text-primary" />, color: 'bg-white' },
    { id: 'pay-bills', label: 'Pay Bills', icon: <FileText className="text-primary" />, color: 'bg-white' },
    { id: 'reload', label: 'Reload', icon: <Smartphone className="text-primary" />, color: 'bg-white' },
    { id: 'pay-card', label: 'Pay Card', icon: <CreditCard className="text-primary" />, color: 'bg-white' },
    { id: 'split-bill', label: 'Split Bill', icon: <Users className="text-primary" />, color: 'bg-white' },
    { id: 'send-request', label: 'Send & Request', icon: <Send className="text-primary" />, color: 'bg-white' },
    { id: 'scan-pay', label: 'Scan & Pay', icon: <QrCode className="text-primary" />, color: 'bg-white' },
    { id: 'sama2-lokal', label: 'Sama2 Lokal', icon: <Heart className="text-primary" />, color: 'bg-white' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col bg-surface"
    >
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-gray-100">
        <button onClick={() => navigate('/')} className="p-1">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">Accounts</h1>
        <button onClick={handleLogout} className="p-1 text-red-500">
          <LogOut size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
        {/* Account Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="m2u-card relative overflow-hidden py-4"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium opacity-90">Savings Account-i</span>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <CreditCard size={20} />
            </div>
          </div>
          
          <div className="space-y-1 mb-2">
            <h2 className="text-2xl font-bold tracking-widest">1234 5678 90</h2>
            <p className="text-xs opacity-70 uppercase tracking-wider">Available Balance</p>
            <p className="text-3xl font-black">RM {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          </div>

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* View Transactions Link */}
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/transactions')}
            className="text-primary-dark font-bold text-sm flex items-center gap-1"
          >
            View Transactions
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-4 gap-y-8 gap-x-4">
          {actions.map((action, index) => (
            <motion.button
              key={action.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                if (action.id === 'transfer') navigate('/withdraw');
                if (action.id === 'pay-bills') navigate('/pay-bills');
                if (action.id === 'reload') navigate('/deposit');
                if (action.id === 'pay-card') navigate('/pay-card');
                if (action.id === 'split-bill') navigate('/split-bill');
                if (action.id === 'send-request') navigate('/send-request');
                if (action.id === 'scan-pay') navigate('/scan-pay');
                if (action.id === 'sama2-lokal') navigate('/sama2-lokal');
              }}
              className="m2u-icon-btn group"
            >
              <div className="m2u-icon-container group-active:scale-90 transition-transform">
                {action.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Balance Details */}
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">Current balance</span>
            <span className="font-bold">RM {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">One-day float</span>
            <span className="font-bold">RM 100.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">Two-day float</span>
            <span className="font-bold">RM 0.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium leading-tight">Late clearing/ Outstation cheque float</span>
            <span className="font-bold">RM 0.00</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 shrink-0">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-primary">
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </button>
        <button onClick={() => navigate('/apply')} className="flex flex-col items-center gap-1 text-gray-400">
          <PlusCircle size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Apply</span>
        </button>
        <button onClick={() => navigate('/promos')} className="flex flex-col items-center gap-1 text-gray-400">
          <Tag size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Promos</span>
        </button>
        <button onClick={() => navigate('/secure2u')} className="flex flex-col items-center gap-1 text-gray-400">
          <ShieldCheck size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Secure2u</span>
        </button>
      </div>
    </motion.div>
  );
}
