"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
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

import LenisProvider from "@/components/providers/LenisProvider";
import ScrollRevealTransition from "@/components/animations/ScrollRevealTransition";
import HeroParticles from "@/components/animations/HeroParticles";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import HeroStats from "@/components/sections/HeroStats";
import { ArrowRight, ShieldCheck, Code2, Cloud, Cpu, BarChart, Zap, Globe, Star, CheckCircle, ChevronRight } from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Speed up the video playback
    }
  }, []);

  return (
    <LenisProvider>
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
        <ScrollRevealTransition
          heroContent={
            <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 pb-32 overflow-hidden">
              {/* Background Video v1 */}
              <div className="absolute inset-0 z-0">
                <video 
                  ref={videoRef}
                  src="/v1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-70 blur-[3px]"
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Overlay for text visibility */}
              </div>
              
              {/* Background Aurora / Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-primary/20 rounded-[100%] blur-[150px] pointer-events-none opacity-50 z-0" />
              <div className="absolute top-1/4 left-1/4 w-[40%] h-[400px] bg-indigo-500/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50 z-0" />
              
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
              
              <HeroParticles />
              
              {/* Main Content Container */}
              <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mt-10">
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col items-center text-center max-w-4xl gap-8"
                >
                  {/* Premium Trust Badges Grid */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, staggerChildren: 0.1 }}
                    className="flex flex-wrap justify-center items-center gap-3 w-full"
                  >
                    {[
                      { icon: <Star size={14} className="text-warning" />, text: "5/5 Client Rating" },
                      { icon: <Zap size={14} className="text-primary" />, text: "Fast Delivery" },
                      { icon: <ShieldCheck size={14} className="text-success" />, text: "NDA Protected" },
                      { icon: <Globe size={14} className="text-indigo-400" />, text: "Global Delivery" },
                      { icon: <Cloud size={14} className="text-sky-400" />, text: "Cloud Ready" },
                      { icon: <Cpu size={14} className="text-purple-400" />, text: "AI Powered" }
                    ].map((badge, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg glass transition-colors cursor-default group"
                      >
                        {badge.icon}
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">{badge.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Main Headline */}
                  <div className="flex flex-col mb-2 mt-4 relative">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter text-white">
                      Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-indigo-500">AI, Cloud</span> & <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Enterprise Software.
                      </span>
                    </h1>
                  </div>
                  
                  <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-light">
                    We help startups, SMEs, and enterprises build secure, scalable AI-powered software, cloud platforms, and cybersecurity solutions that power modern businesses.
                  </p>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 w-full sm:w-auto relative z-20">
                    <Link 
                      href="/contact"
                      className="group relative px-8 py-4 w-full sm:w-auto rounded-xl bg-white text-background font-bold text-center overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Build Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                    <Link 
                      href="/services"
                      className="group px-8 py-4 w-full sm:w-auto rounded-xl glass border border-white/10 font-bold text-white text-center hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Explore Enterprise Solutions
                        <ChevronRight size={18} className="text-primary group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
                
                {/* 3 Horizontal Capability Boxes */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-full max-w-6xl mt-24 mb-12 relative z-20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {[
                      {
                        title: "AI & Machine Learning",
                        desc: "Custom LLMs, autonomous agents, and intelligent predictive models.",
                        icon: <Cpu className="text-purple-400" size={24} />
                      },
                      {
                        title: "Cloud Infrastructure",
                        desc: "Scalable architecture on Azure, AWS, and Google Cloud.",
                        icon: <Cloud className="text-sky-400" size={24} />
                      },
                      {
                        title: "Enterprise Security",
                        desc: "Zero-trust networks and military-grade data encryption.",
                        icon: <ShieldCheck className="text-success" size={24} />
                      }
                    ].map((item, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.15) }}
                        key={idx} 
                        className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col items-start gap-5 group cursor-default hover:scale-[1.02]"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-base text-white/60 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Stats Section below the 3 boxes */}
                <HeroStats />

                {/* Cloud Logos below stats */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="w-full mt-20 flex flex-col items-center"
                >
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">Powered by Leading Cloud Providers</p>
                  <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-9 brightness-0 invert" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="GCP" className="h-8 brightness-0 invert" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" className="h-8 brightness-0 invert" />
                  </div>
                </motion.div>

              </div>
              <ScrollIndicator />
            </section>
          }
          nextContent={
            <>
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
            </>
          }
        />
      </main>
    </LenisProvider>
  );
}

// Temporary Globe Icon for visual placeholder
function GlobeIcon() {
  return (
    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 glass">
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
      className={`absolute glass ${className}`}
    >
      {icon}
    </motion.div>
  )
}
