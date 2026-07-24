"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code2, Rocket, FileCheck2 } from "lucide-react";

const steps = [
  { icon: <MessageSquare size={24} />, title: "Requirement Discussion", desc: "We understand your goals, timeline, and business needs." },
  { icon: <FileText size={24} />, title: "Technical Planning", desc: "Our architects design the tech stack and system architecture." },
  { icon: <FileCheck2 size={24} />, title: "Proposal & Estimation", desc: "You receive a transparent quote and delivery timeline." },
  { icon: <Code2 size={24} />, title: "Contract & NDA", desc: "We sign strict NDAs to protect your intellectual property." },
  { icon: <Rocket size={24} />, title: "Project Kickoff", desc: "Development begins with a dedicated project manager." }
];

export default function ConsultationProcess() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-[#0a0f1d] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Engagement <span className="text-accent">Process</span></h2>
          <p className="text-muted-foreground">From initial idea to project kickoff, we ensure total clarity and enterprise-grade professionalism.</p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-10 right-10 h-0.5 bg-gradient-to-r from-primary/10 via-accent/50 to-primary/10 z-0" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full glass border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-xl bg-[#0a0f1d]">
                  {step.icon}
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
