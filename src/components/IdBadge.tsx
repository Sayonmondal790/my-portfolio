"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ElectricBorder from "./ElectricBorder"; // Import the new component

// Initialize our custom fonts for the badge
const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const monoFont = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function IdBadge() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      // Kept 'group' for internal hovers, removed the old border transition
      className="interactive group relative w-64 h-100 rounded-xl shadow-[0_0_40px_rgba(34,211,238,0.1)] shrink-0 bg-neutral-950"
    >
      {/* === THE ELECTRIC BORDER WRAPPER === */}
      <ElectricBorder
        color="#22d3ee"
        speed={1}
        chaos={0.15}
        borderRadius={12} // Matches Tailwind's rounded-xl
        className="w-full h-full absolute inset-0"
        style={{}} 
      >
        {/* 35mm Film Grain SVG Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none rounded-xl z-0" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>

        {/* Lanyard Clip Hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-3 bg-neutral-950 rounded-full border border-neutral-700 shadow-inner group-hover:border-cyan-900/50 transition-colors duration-500 z-10"></div>

        {/* Badge Content (Pushed outward in 3D space) */}
        <div 
          className="p-6 pt-14 flex flex-col items-center h-full text-center relative z-10 pointer-events-none" 
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Profile Photo Area */}
          <div className="w-32 h-32 mb-6 rounded-md overflow-hidden border border-neutral-700 relative shrink-0 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500 bg-neutral-900">
             <Image 
               src="/Profile.jpg" 
               alt="Sayon Mondal" 
               fill 
               className="object-cover"
               sizes="128px"
               priority
             />
          </div>
          
          {/* Typography */}
          <h3 className={`text-xl text-white tracking-tight uppercase group-hover:text-cyan-400 transition-colors duration-500 ${displayFont.className}`}>Sayon Mondal</h3>
          <p className={`text-xs text-neutral-400 mt-2 uppercase tracking-widest group-hover:text-cyan-200 transition-colors duration-500 ${monoFont.className}`}>B.Tech CSE</p>
          <p className={`text-xs text-neutral-500 mt-1 uppercase tracking-widest ${monoFont.className}`}>Brainware University</p>
          
          {/* Aesthetic Barcode Footer */}
          <div className="mt-auto w-full pt-4 border-t border-neutral-800/50 flex justify-between gap-1 opacity-60 group-hover:border-cyan-900/40 transition-colors duration-500">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-neutral-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all duration-500 h-8" 
                  style={{ width: `${Math.random() * 4 + 1}px` }}
                ></div>
              ))}
          </div>
        </div>
      </ElectricBorder>
    </motion.div>
  );
}