"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cloud, Cpu, BarChart } from "lucide-react";
// import HeroGlobe from "@/components/HeroGlobe"; // To be implemented

import TrustedBy from "@/components/sections/TrustedBy";
import CompanyStats from "@/components/sections/CompanyStats";
import CoreServices from "@/components/sections/CoreServices";
import Solutions from "@/components/sections/Solutions";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Products from "@/components/sections/Products";

import AISolutions from "@/components/sections/AISolutions";
import Cybersecurity from "@/components/sections/Cybersecurity";
import CloudEngineering from "@/components/sections/CloudEngineering";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import HeroCarousel from "@/components/sections/HeroCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center pt-10 pb-20">
        {/* Background Aurora / Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-primary/20 rounded-[100%] blur-[150px] pointer-events-none opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[400px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Content (Spans 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 lg:col-span-7"
          >
            {/* Trust Badges Ribbon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-warning">
                <span className="flex text-[10px]">★★★★★</span> 5/5 Rating
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-white/80">
                100+ Projects
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-success">
                <ShieldCheck size={14} /> NDA Protected
              </div>
            </motion.div>
            
            {/* Main Headline */}
            <div className="flex flex-col mb-4">
              <h2 className="text-lg md:text-xl font-medium text-primary mb-3 tracking-wide uppercase flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                Explore Ideas with TeamLite
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-indigo-500 italic">"GO-TO"</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                  Technology Partner.
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              We design, build, and scale enterprise-grade digital products. From secure cloud infrastructure to autonomous AI agents, we deliver technology that powers industry leaders.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 w-full sm:w-auto rounded-xl bg-white text-background font-bold text-center transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Build Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 w-full sm:w-auto rounded-xl glass border border-white/10 font-bold text-white text-center hover:bg-white/5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                Explore Enterprise Solutions
              </Link>
            </div>
            
            {/* Secondary Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-4 text-sm font-medium text-muted-foreground"
            >
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-success animate-pulse" /> Enterprise Ready</span>
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> 24/7 Support</span>
            </motion.div>
            
          </motion.div>
          
          {/* Right 3D/Visual Composition (Spans 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-5 relative w-full"
          >
            <HeroCarousel />
          </motion.div>
          
        </div>
      </section>
      
      <TrustedBy />
      <CompanyStats />
      <CoreServices />
      <Solutions />
      <TechStack />
      <Process />
      <WhyChooseUs />
      <FeaturedProjects />
      <Products />
      
      {/* New Deep Dive Sections */}
      <AISolutions />
      <Cybersecurity />
      <CloudEngineering />
      
      {/* Social Proof & Conversion */}
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactCTA />
      
    </main>
  );
}

// Temporary Globe Icon for visual placeholder
function GlobeIcon() {
  return (
    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 glass flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
      <div className="w-63 h-63 rounded-full border border-white/10" />
      <span className="absolute font-semibold text-accent/50 tracking-widest uppercase">TeamLite</span>
    </div>
  )
}

function FloatingElement({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute glass p-4 rounded-2xl ${className}`}
    >
      {icon}
    </motion.div>
  )
}
