"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // The loading screen stays for 2.2 seconds to build anticipation
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#050505]"
      initial={{ y: 0 }}
      // This is the cinematic slide-up exit!
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="flex flex-col items-center gap-6"
      >
        {/* The Bouncing Dots Sequence */}
        <div className="flex gap-2">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full" 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 1, repeat: Infinity, delay: 0, ease: "easeInOut" }} 
          />
          <motion.div 
            className="w-2 h-2 bg-white rounded-full" 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 1, repeat: Infinity, delay: 0.2, ease: "easeInOut" }} 
          />
          <motion.div 
            className="w-2 h-2 bg-white rounded-full" 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 1, repeat: Infinity, delay: 0.4, ease: "easeInOut" }} 
          />
        </div>
        
        {/* Technical Loading Text */}
        <div className="text-xs tracking-[0.3em] text-neutral-500 font-mono uppercase">
          Preparing the Portfolio...
        </div>
      </motion.div>
    </motion.div>
  );
}