import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start sm:items-center p-0 sm:p-4">
      <div className="w-full max-w-[430px] min-h-screen sm:min-h-[844px] bg-white shadow-2xl relative overflow-hidden flex flex-col">
        {/* Status Bar Placeholder */}
        <div className="h-10 bg-white flex justify-between items-center px-6 pt-2 shrink-0">
          <span className="text-sm font-semibold">9:35</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <span className="text-xs font-bold">70%</span>
          </div>
        </div>
        
        <main className="flex-1 relative overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
