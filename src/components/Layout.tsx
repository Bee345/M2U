import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start sm:items-center p-0 sm:p-4">
      <div className="w-full max-w-[430px] min-h-screen sm:min-h-[844px] shadow-2xl relative overflow-hidden flex flex-col">
        <main className="flex-1 relative overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
