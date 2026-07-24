"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Activity, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = use(params);
  
  // Format the slug into a readable title
  const rawPath = resolvedParams.slug;
  const mainTopic = rawPath[rawPath.length - 1] || "Page";
  
  const title = mainTopic
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const category = rawPath.length > 1 
    ? rawPath[0].charAt(0).toUpperCase() + rawPath[0].slice(1) 
    : "Overview";

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={16} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white">{category}</span>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{title}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block p-4 rounded-3xl bg-primary/10 border border-primary/20 text-primary mb-6 shadow-lg shadow-primary/20 backdrop-blur-md">
              <Lightbulb size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We provide enterprise-grade expertise and consulting for {title}. Let our experts help you navigate your digital transformation journey efficiently and affordably.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Feature Card 1 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4">Why choose TeamLite for {title}?</h2>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in delivering high-quality, scalable solutions tailored exactly to your needs. Instead of paying enterprise agency prices, we bring top-tier talent directly to you at highly affordable rates.
            </p>
          </motion.section>

          {/* Feature Card 2 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#0a0f25] to-[#050816] border border-primary/30 rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
              <Activity size={120} />
            </div>
            <h2 className="text-2xl font-bold mb-4 relative z-10">Affordable & Transparent</h2>
            <p className="text-white/70 leading-relaxed relative z-10">
              Unlike huge corporate agencies that charge massive overhead fees, our services are built for startups, retail owners, and mid-sized businesses. High performance doesn't have to break the bank.
            </p>
          </motion.section>
        </div>

        {/* Bottom CTA Book Consultant */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-10 text-center max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Let's Discuss {title}</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our consultants are ready to outline a strategy that works for your budget and timeline.
            </p>
            <Link href="/contact" className="inline-block py-4 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] hover:-translate-y-1">
              Book Consultant
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
