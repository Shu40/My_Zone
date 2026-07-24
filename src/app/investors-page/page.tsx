"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InvestorsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black selection:bg-primary/30 selection:text-white pt-32 pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass border border-white/10 p-12 md:p-20 rounded-[3rem] max-w-3xl w-full mx-6 relative"
      >
        <div className="w-20 h-20 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-xl shadow-primary/20">
          <Rocket size={40} className="animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Investor Relations
        </h1>
        
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-lg mb-8">
          <Clock size={20} /> Coming Soon
        </div>
        
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
          We are currently preparing our comprehensive financial reports, corporate governance documents, and investor dashboard. Check back shortly for updates.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
        >
          <ArrowLeft size={18} /> Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
