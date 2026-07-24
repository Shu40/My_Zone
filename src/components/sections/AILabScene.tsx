"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Brain, Cpu, Database, Network, Activity, Crosshair, Fingerprint, Scan, Wifi } from "lucide-react";

export default function AILabScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return <div className="h-[700px] w-full flex items-center justify-center animate-pulse"><div className="w-96 h-96 rounded-full bg-white/5" /></div>;

  return (
    <div className="relative w-full h-[700px] rounded-[40px] overflow-hidden bg-[#030712] border border-white/10 shadow-[0_0_150px_rgba(37,99,235,0.15)] flex items-center justify-center perspective-[2000px]">
      
      {/* 1. AMBIENT ENVIRONMENT & LIGHTING */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/80 z-20 pointer-events-none" />
      
      {/* 2. 3D DIGITAL FLOOR GRID */}
      <motion.div 
        className="absolute bottom-0 w-[200%] h-[400px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [transform-origin:bottom]"
        style={{ transform: "rotateX(75deg) translateZ(-100px)" }}
        animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      {/* Floor Grid Glow */}
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-primary/20 to-transparent blur-3xl" />

      {/* 3. PARALLAX CONTAINER (Responds to mouse) */}
      <motion.div 
        className="relative w-full h-full transform-style-3d z-10"
        animate={{ 
          rotateY: mousePosition.x * 5, 
          rotateX: -mousePosition.y * 5,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >

        {/* --- LAYER 1: BACKGROUND NEURAL NETWORK --- */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30" style={{ transform: "translateZ(-300px)" }}>
          <motion.div 
            animate={{ rotateZ: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="relative w-[800px] h-[800px]"
          >
            {[...Array(12)].map((_, i) => (
              <div key={`bg-node-${i}`} className="absolute w-full h-full" style={{ transform: `rotate(${i * 30}deg)` }}>
                <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/50 shadow-[0_0_15px_rgba(37,99,235,1)]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- LAYER 2: LEFT SIDE - COMPUTER VISION DASHBOARD --- */}
        <motion.div 
          className="absolute left-[5%] top-[15%] w-[320px] h-[240px] glass bg-black/60 border border-white/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md"
          style={{ transform: "translateZ(100px) rotateY(15deg)" }}
        >
          {/* Header */}
          <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-2">
              <Scan size={14} className="text-secondary animate-pulse" />
              <span className="text-xs font-mono text-white/80 tracking-wider">OBJ_DETECT.EXE</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            </div>
          </div>
          {/* Camera Feed Area */}
          <div className="relative w-full h-[calc(100%-37px)] bg-[#050505] overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px]" />
            {/* Animated Bounding Box 1 */}
            <motion.div 
              className="absolute border border-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)] flex flex-col justify-between"
              animate={{ 
                x: [20, 150, 100, 20], 
                y: [20, 40, 80, 20],
                width: [60, 80, 50, 60],
                height: [80, 100, 60, 80]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-secondary text-[8px] font-mono text-white px-1 w-max">PERSON 98%</div>
              <div className="w-1.5 h-1.5 border-b border-r border-secondary self-end" />
            </motion.div>
            {/* Animated Bounding Box 2 */}
            <motion.div 
              className="absolute border border-success shadow-[0_0_10px_rgba(34,197,94,0.5)] flex flex-col justify-between"
              animate={{ 
                x: [200, 50, 220, 200], 
                y: [100, 120, 50, 100],
                width: [40, 60, 80, 40],
                height: [40, 60, 30, 40]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-success text-[8px] font-mono text-black px-1 w-max">VEHICLE 92%</div>
            </motion.div>
            {/* Scanning Line */}
            <motion.div 
              className="absolute left-0 right-0 h-0.5 bg-primary/50 shadow-[0_0_10px_rgba(37,99,235,1)]"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* --- LAYER 3: RIGHT SIDE - AI MODEL TRAINING METRICS --- */}
        <motion.div 
          className="absolute right-[5%] top-[25%] w-[280px] h-[340px] glass bg-black/60 border border-white/20 rounded-xl p-5 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col gap-4"
          style={{ transform: "translateZ(50px) rotateY(-15deg)" }}
        >
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <Activity size={16} className="text-primary" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Model Training</span>
          </div>
          
          {/* Animated Graph 1 */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] text-white/50 font-mono">
              <span>LOSS_RATE</span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>0.0412</motion.span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-error rounded-full" animate={{ width: ["100%", "30%", "25%"] }} transition={{ duration: 10, ease: "easeOut" }} />
            </div>
          </div>

          {/* Animated Graph 2 */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] text-white/50 font-mono">
              <span>ACCURACY</span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>99.2%</motion.span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-success rounded-full" animate={{ width: ["10%", "80%", "95%"] }} transition={{ duration: 10, ease: "easeOut" }} />
            </div>
          </div>

          {/* Neural Node Connections Visual */}
          <div className="flex-1 mt-2 relative border border-white/5 rounded-lg bg-black/30 flex items-center justify-center overflow-hidden">
             {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={`n-${i}`}
                  className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,1)]"
                  animate={{ 
                    x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    y: [Math.random() * 100 - 50, Math.random() * 100 - 50]
                  }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
             ))}
             {/* Glowing connection lines */}
             <svg className="absolute inset-0 w-full h-full opacity-30">
               <motion.line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#3b82f6" strokeWidth="1" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity }} />
               <motion.line x1="80%" y1="20%" x2="20%" y2="80%" stroke="#8b5cf6" strokeWidth="1" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />
             </svg>
          </div>
        </motion.div>

        {/* --- LAYER 4: CENTER CORE - THE DIGITAL BRAIN --- */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] flex items-center justify-center"
          style={{ transform: "translate(-50%, -50%) translateZ(200px)" }}
        >
          {/* Outer glowing rings */}
          <motion.div 
            className="absolute w-[350px] h-[350px] rounded-full border border-primary/30 border-dashed"
            animate={{ rotateZ: 360, scale: [1, 1.05, 1] }}
            transition={{ rotateZ: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.div 
            className="absolute w-[280px] h-[280px] rounded-full border-[2px] border-secondary/20"
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-[280px] h-[280px] rounded-full border-[2px] border-success/20"
            animate={{ rotateY: -360, rotateX: 180 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Core Sphere */}
          <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-primary to-secondary shadow-[0_0_100px_rgba(37,99,235,0.6)] flex items-center justify-center border-4 border-white/10 backdrop-blur-xl">
             <Brain size={64} className="text-white animate-pulse" />
             <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse" style={{ animationDuration: '2s' }} />
          </div>

          {/* Floating Data Particles emitted from Core */}
          {[...Array(15)].map((_, i) => (
             <motion.div
               key={`particle-${i}`}
               className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)]"
               initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
               animate={{ 
                 x: (Math.random() - 0.5) * 500, 
                 y: (Math.random() - 0.5) * 500,
                 opacity: 0,
                 scale: 0
               }}
               transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
             />
          ))}
        </motion.div>

        {/* --- LAYER 5: FOREGROUND FLOATING PANELS (Extreme Depth) --- */}
        <motion.div 
          className="absolute left-[20%] bottom-[10%] w-[180px] p-3 glass bg-primary/10 border border-primary/30 rounded-lg flex items-center gap-3 backdrop-blur-md"
          style={{ transform: "translateZ(300px)" }}
        >
          <div className="p-2 bg-primary/20 rounded-md">
            <Cpu size={20} className="text-primary animate-spin" style={{ animationDuration: '4s' }} />
          </div>
          <div>
            <div className="text-[9px] text-white/50 font-mono">TENSOR_CORES</div>
            <div className="text-xs font-bold text-white">OPTIMIZED</div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute right-[25%] bottom-[15%] w-[160px] p-3 glass bg-secondary/10 border border-secondary/30 rounded-lg flex items-center gap-3 backdrop-blur-md"
          style={{ transform: "translateZ(250px)" }}
        >
          <div className="p-2 bg-secondary/20 rounded-md">
            <Fingerprint size={20} className="text-secondary" />
          </div>
          <div>
            <div className="text-[9px] text-white/50 font-mono">SECURITY</div>
            <div className="text-xs font-bold text-white">SECURE</div>
          </div>
        </motion.div>

      </motion.div>
      
      {/* Front Ambient Vignette */}
      <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
    </div>
  );
}
