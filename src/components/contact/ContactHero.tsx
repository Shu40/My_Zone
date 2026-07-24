"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, CalendarCheck } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="w-full pt-20 pb-16 relative">
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-accent text-xs font-bold tracking-widest uppercase mb-8 border border-white/10"
        >
          Free Expert Consultation
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Let's Build Something <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Extraordinary</span> Together
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Schedule a free consultation with our solution architects and discover the best enterprise-grade technology solution tailored for your business goals.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="#booking"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-background font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Book Free Consultation <CalendarCheck size={18} />
          </Link>
          <a 
            href="tel:+919876543210"
            className="px-8 py-4 w-full sm:w-auto rounded-full glass border border-white/10 font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/50 transition-all"
          >
            Call Now <PhoneCall size={18} />
          </a>
        </motion.div>
      </div>

      {/* Animated AI Particles / 3D Grid background simulation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 overflow-hidden">
         <div className="w-full h-full relative" style={{ perspective: '1000px' }}>
            <motion.div 
              animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] max-w-[2000px] max-h-[2000px]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                transformStyle: 'preserve-3d'
              }}
            />
         </div>
      </div>
    </section>
  );
}
