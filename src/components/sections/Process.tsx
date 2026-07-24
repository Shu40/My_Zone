"use client";

import { motion } from "framer-motion";
import { Search, PenTool, GitMerge, Layout, Code2, Bug, Rocket, Headphones, ArrowRight } from "lucide-react";

const steps = [
  { name: "Discovery", icon: <Search size={22} />, desc: "Deep business analysis, requirement gathering, and roadmap planning." },
  { name: "Architecture", icon: <GitMerge size={22} />, desc: "Designing scalable cloud infrastructures and selecting optimal tech stacks." },
  { name: "Prototyping", icon: <Layout size={22} />, desc: "Creating intuitive UI/UX wireframes and interactive user journeys." },
  { name: "Development", icon: <Code2 size={22} />, desc: "Agile, sprint-based coding for robust frontends and scalable microservices." },
  { name: "QA & Testing", icon: <Bug size={22} />, desc: "Rigorous automated testing, security audits, and user acceptance." },
  { name: "Deployment", icon: <Rocket size={22} />, desc: "Zero-downtime CI/CD pipeline execution and production launch." },
  { name: "Integration", icon: <PenTool size={22} />, desc: "Seamlessly connecting new applications with your existing legacy systems." },
  { name: "24/7 Support", icon: <Headphones size={22} />, desc: "Continuous monitoring, performance scaling, and proactive maintenance." },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden" id="process">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[30%] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-6 border border-white/10"
            >
              Enterprise Methodology
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              How We Deliver <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Excellence at Scale.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-light max-w-md md:text-right"
          >
            A battle-tested, 8-step development lifecycle engineered for speed, security, and uncompromising quality.
          </motion.p>
        </div>

        {/* Compact 4x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          
          {/* Animated Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="relative group z-10"
            >
              <div className="h-full bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.02] hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)] overflow-hidden flex flex-col justify-between min-h-[260px]">
                
                {/* Massive Watermark Number */}
                <div className="absolute -right-4 -bottom-6 text-9xl font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none select-none">
                  {idx + 1}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 mb-6 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {step.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
