"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="w-full pt-20 pb-16 relative">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-8 border border-white/10"
        >
          TeamLite Pricing
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Simple, Transparent <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pricing</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Flexible pricing for startups, growing businesses, and enterprises. Every project is tailored to your business goals.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="#estimator"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-background font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Get Free Quote <Calculator size={18} />
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 w-full sm:w-auto rounded-full glass border border-white/10 font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/50 transition-all group"
          >
            Book Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
