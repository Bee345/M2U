import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, QrCode, Image, Zap } from 'lucide-react';

export default function ScanPayPage() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col bg-black text-white">
      <div className="px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/dashboard')} className="p-1 text-white"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold">Scan & Pay</h1>
        <div className="w-8"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-10">
        <div className="w-full aspect-square border-2 border-primary rounded-3xl relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/5"></div>
          <QrCode size={120} className="text-primary/20" />
          <motion.div animate={{ y: [0, 240, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(255,188,0,0.8)]"></motion.div>
        </div>
        <p className="mt-8 text-sm text-center opacity-70">Align QR code within the frame to scan</p>
      </div>
      <div className="p-10 flex justify-around items-center">
        <button className="flex flex-col items-center gap-2"><div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Image size={20} /></div><span className="text-[10px] font-bold">Album</span></button>
        <button className="flex flex-col items-center gap-2"><div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black"><QrCode size={28} /></div><span className="text-[10px] font-bold text-primary">My Code</span></button>
        <button className="flex flex-col items-center gap-2"><div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Zap size={20} /></div><span className="text-[10px] font-bold">Flash</span></button>
      </div>
    </motion.div>
  );
}
