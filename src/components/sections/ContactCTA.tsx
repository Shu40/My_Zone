"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-32 relative bg-background overflow-hidden border-t border-white/5">
      {/* Massive Aurora Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/20 rounded-[100%] blur-[150px] pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/20 rounded-[100%] blur-[120px] pointer-events-none opacity-60" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass border border-white/20 rounded-[40px] p-12 md:p-24 shadow-[0_0_100px_rgba(37,99,235,0.2)] backdrop-blur-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8">
            <Sparkles size={16} className="text-warning" /> Start Your Transformation
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white leading-tight">
            Ready to build <br />
            something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">extraordinary?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Join the visionary companies partnering with TeamLite to engineer the future. Book a free consultation with our senior architects today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-background font-black text-lg hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center gap-2"
            >
              Book Strategy Call <ArrowRight size={20} />
            </Link>
            <Link 
              href="/portfolio"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl glass border border-white/20 font-bold text-white text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
