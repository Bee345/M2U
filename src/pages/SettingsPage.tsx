import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, User, Settings, Bell, HelpCircle, LogOut } from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('m2u_auth');
    window.location.href = '/';
  };

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-surface">
      <div className="px-6 py-4 flex items-center gap-4 bg-white border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">More Options</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="bg-white p-6 rounded-3xl flex items-center gap-4 shadow-sm">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black font-black text-xl italic">MB</div>
          <div>
            <h2 className="text-lg font-bold">Mikke Beezee</h2>
            <p className="text-xs text-gray-500">coachmikkebeezee@gmail.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account Settings</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <User size={20} className="text-gray-400" />
              <span className="text-sm font-bold flex-1 text-left">Profile Information</span>
              <ChevronLeft className="rotate-180 text-gray-300" size={18} />
            </button>
            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <Settings size={20} className="text-gray-400" />
              <span className="text-sm font-bold flex-1 text-left">App Settings</span>
              <ChevronLeft className="rotate-180 text-gray-300" size={18} />
            </button>
            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <Bell size={20} className="text-gray-400" />
              <span className="text-sm font-bold flex-1 text-left">Notifications</span>
              <ChevronLeft className="rotate-180 text-gray-300" size={18} />
            </button>
            <button className="w-full p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <HelpCircle size={20} className="text-gray-400" />
              <span className="text-sm font-bold flex-1 text-left">Help Center</span>
              <ChevronLeft className="rotate-180 text-gray-300" size={18} />
            </button>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full py-5 bg-red-50 text-red-600 font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>
    </motion.div>
  );
}
