"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IdBadge from "../components/IdBadge";
import Preloader from "../components/Preloader";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";

const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const bodyFont = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const monoFont = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// --- ANIMATION INSTRUCTIONS ---
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* === THE NEON BACKGROUND === */}
      <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className={`min-h-screen p-8 md:p-16 max-w-[1400px] mx-auto overflow-hidden relative z-10 ${bodyFont.className}`}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* The Hero Section */}
            <header className="mb-24 mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-center md:items-start gap-24 perspective-1000">
              
              {/* Left Side: Text and Socials */}
              <div className="flex-1">
                <motion.h1 
                  variants={itemVariants}
                  className={`${displayFont.className} text-6xl md:text-8xl tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-400`}
                >
                  Sayon Mondal
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-neutral-400 text-xl md:text-2xl max-w-2xl leading-relaxed font-light"
                >
                  Innovative Software Engineer specializing in Python development, algorithmic design, and machine learning architecture.
                </motion.p>
                
                {/* Social Links Row */}
                <motion.div variants={itemVariants} className="flex gap-6 mt-10">
                  <a 
                    href="https://github.com/Sayonmondal790" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="interactive text-neutral-500 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    <FaGithub className="w-7 h-7" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sayon-mondal-73b23a305/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="interactive text-neutral-500 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    <FaLinkedin className="w-7 h-7" />
                  </a>
                  <a 
                    href="mailto:sayonmondal9091@gmail.com" 
                    className="interactive text-neutral-500 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    <Mail className="w-7 h-7" />
                  </a>
                </motion.div>
              </div>

              {/* Right Side: The 3D ID Badge */}
              <motion.div variants={itemVariants} className="hidden md:block relative">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[50px] -z-10 rounded-full" />
                <IdBadge />
              </motion.div>

            </header>

            {/* The Bento Grid Container */}
            <motion.section 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[220px]"
            >
              
              {/* Box 1: The Master Projects Box */}
              <div className="interactive relative overflow-hidden group border border-neutral-800/50 bg-neutral-950/40 backdrop-blur-md rounded-2xl p-8 md:col-span-2 md:row-span-2 hover:border-cyan-500/50 transition-all duration-500 flex flex-col gap-6">
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                
                <div className="relative z-10">
                  <h2 className={`text-xs text-neutral-500 uppercase tracking-widest font-semibold ${monoFont.className}`}>Featured Projects</h2>
                  
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300">AI Stock Prediction Engine</h3>
                    <p className="text-neutral-400 mt-3 max-w-2xl leading-relaxed text-sm md:text-base pr-4">
                      Engineered an end-to-end algorithmic trading system using XGBoost on historical OHLCV data. Designed a modular 4-stage pipeline for data ingestion, feature engineering, and model inference.
                    </p>
                    <div className={`text-xs text-cyan-400 ${monoFont.className} mt-5 border border-cyan-900/50 inline-block px-3 py-1.5 rounded-md bg-cyan-950/40 backdrop-blur-md`}>
                      Status: Outperformed buy-and-hold benchmark
                    </div>
                  </div>

                  <hr className="border-neutral-800/50 my-6 group-hover:border-cyan-900/40 transition-colors duration-500" />

                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300">Architect-Diagram-Tool</h3>
                    <p className="text-neutral-400 mt-3 max-w-2xl leading-relaxed text-sm md:text-base pr-4">
                      Full-stack AI automation tool using Python and FastAPI to dynamically analyze and map complex GitHub codebases into interactive architecture diagrams.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2: Core Tech Stack */}
              <div className="interactive relative overflow-hidden group border border-neutral-800/50 bg-neutral-950/40 backdrop-blur-md rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                
                <div className="relative z-10">
                  <h2 className={`text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-6 ${monoFont.className}`}>Toolkit</h2>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "C", "TensorFlow", "PyTorch", "Git"].map((skill) => (
                      <span key={skill} className={`px-3 py-1.5 bg-neutral-900/80 border border-neutral-800 rounded-full text-xs font-medium text-neutral-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-950/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-default ${monoFont.className}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Box 3: Experience / Education */}
              <div className="interactive relative overflow-hidden group border border-neutral-800/50 bg-neutral-950/40 backdrop-blur-md rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                <div className="relative z-10">
                  <h2 className={`text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-6 ${monoFont.className}`}>Background</h2>
                  <ul className="space-y-6 text-neutral-300">
                    <li className="cursor-default">
                      <p className="font-medium text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300">Software Engineering Intern</p>
                      <p className={`text-sm text-neutral-500 mt-1 group-hover:text-cyan-600 transition-colors duration-300 ${monoFont.className}`}>Agni Rath Aerospace</p>
                    </li>
                    <li className="cursor-default">
                      <p className="font-medium text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300">AI/ML Bootcamp</p>
                      <p className={`text-sm text-neutral-500 mt-1 group-hover:text-cyan-600 transition-colors duration-300 ${monoFont.className}`}>Samsung Innovation Camp</p>
                    </li>
                  </ul>
                </div>
              </div>

            </motion.section>
          </motion.div>
        </main>
      )}
    </>
  );
}