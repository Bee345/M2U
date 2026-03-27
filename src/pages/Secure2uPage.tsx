import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck, Lock, Smartphone, Fingerprint } from 'lucide-react';

export default function Secure2uPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col bg-white">
      <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <button onClick={() => navigate('/dashboard')} className="p-1"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Secure2u</h1>
      </div>
      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-8">
        <div className="relative">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary"><ShieldCheck size={64} /></div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white"><Lock size={16} /></div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Your device is secured</h2>
          <p className="text-sm text-gray-500 leading-relaxed px-4">Secure2u is active on this device. All your transactions are protected with one-tap authorization.</p>
        </div>
        <div className="w-full space-y-4 pt-8">
          <div className="bg-surface p-5 rounded-2xl flex items-center gap-4 text-left">
            <Smartphone className="text-primary-dark" size={24} />
            <div>
              <p className="text-sm font-bold">Registered Device</p>
              <p className="text-[10px] text-gray-500">iPhone 15 Pro Max (This device)</p>
            </div>
          </div>
          <div className="bg-surface p-5 rounded-2xl flex items-center gap-4 text-left">
            <Fingerprint className="text-primary-dark" size={24} />
            <div>
              <p className="text-sm font-bold">Biometric Authentication</p>
              <p className="text-[10px] text-gray-500">Enabled for faster authorization</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
