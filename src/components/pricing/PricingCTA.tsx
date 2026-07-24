"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Still not sure?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Talk to our solution architect and receive a free project estimation within 24 hours. No commitment required.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/contact"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-background font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 w-full sm:w-auto rounded-full glass border border-white/10 font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/50 transition-all"
          >
            Get Custom Quote <FileText size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
