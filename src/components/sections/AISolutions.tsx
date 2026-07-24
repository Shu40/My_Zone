"use client";

import { motion } from "framer-motion";
import { BrainCircuit, MessageSquareCode, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50 + Math.random() * 50); // fast typing speed
      return () => clearTimeout(timeout);
    } else {
      // Loop the typing effect after 3 seconds
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="text-xl md:text-2xl font-mono leading-relaxed mt-2">
      <span className="opacity-50 mr-2 text-accent">{">"}</span>
      <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{displayedText}</span>
      <motion.span 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-3 h-6 bg-accent ml-1 align-middle shadow-[0_0_10px_rgba(6,182,212,0.8)]"
      />
    </div>
  );
};

const features = [
  {
    title: "Autonomous Agents",
    desc: "Deploy AI agents that execute complex multi-step workflows without human intervention.",
    icon: <Workflow size={24} />
  },
  {
    title: "Custom LLM Integration",
    desc: "Train and fine-tune models on your proprietary enterprise data for highly accurate responses.",
    icon: <BrainCircuit size={24} />
  },
  {
    title: "Conversational Interfaces",
    desc: "Next-gen chatbots and voice assistants that actually understand context and user intent.",
    icon: <MessageSquareCode size={24} />
  }
];

export default function AISolutions() {
  return (
    <section className="py-32 relative bg-background overflow-hidden border-t border-white/5" id="ai-solutions">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-accent text-sm font-semibold mb-6">
              <BrainCircuit size={16} /> Artificial Intelligence
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligence, <br />
              <span className="text-gradient">Automated.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              We integrate cutting-edge Generative AI, RAG systems, and Machine Learning models directly into your enterprise software, turning your data into an unfair competitive advantage.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{feat.title}</h4>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/services/ai" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
              Explore AI Capabilities <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group shadow-[0_0_60px_rgba(6,182,212,0.15)]"
          >
            <Image 
              src="/ai-agent-typing.png" 
              alt="AI Autonomous Calling Agent Typing" 
              fill 
              className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110" 
            />
            
            {/* Elegant overlay gradients for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-[#050914]/40 opacity-90" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            
            {/* Holographic Scanning Line */}
            <motion.div 
              className="absolute left-0 right-0 h-0.5 bg-accent/40 blur-[1px] shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Interactive Data Nodes (Floating calls) */}
            {[
              { top: '25%', left: '15%', delay: 0 },
              { top: '65%', right: '20%', delay: 1.5 },
              { top: '35%', right: '25%', delay: 3 }
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-10 h-10 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center backdrop-blur-md z-10"
                style={{ top: pos.top, left: pos.left, right: pos.right }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, delay: pos.delay, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
              </motion.div>
            ))}

            {/* Holographic Terminal Screen (Where the agent types) */}
            <div className="absolute top-1/4 left-8 right-8 bg-black/60 backdrop-blur-md border border-accent/30 rounded-xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.2)] z-20">
              <div className="flex items-center gap-2 mb-4 opacity-70 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-xs ml-2 font-mono text-accent">agent_response.exe</span>
              </div>
              <TypewriterText text="Hey! Welcome to TeamLite. How are you? Thanks for visiting." />
            </div>

            {/* Overlay UI elements to look like a call center HUD */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-center justify-between glass px-6 py-5 rounded-2xl border border-white/10 gap-4 z-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]" />
                 <span className="text-sm font-semibold text-white/90 tracking-wide">Agent Status: <span className="text-success">Active</span></span>
               </div>
               
               {/* Animated Audio Waveform */}
               <div className="flex items-center gap-1.5 h-6">
                 {[...Array(6)].map((_, i) => (
                   <motion.div
                     key={i}
                     className="w-1.5 bg-accent rounded-full"
                     animate={{ height: ['20%', '100%', '20%'] }}
                     transition={{ duration: 0.1 + Math.random() * 0.3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                   />
                 ))}
               </div>

               {/* Rapid Typing Processing Text */}
               <motion.div 
                 className="text-xs font-mono text-accent/90 flex flex-col items-end"
               >
                 <motion.span 
                   animate={{ opacity: [1, 0, 1] }} 
                   transition={{ duration: 0.8, repeat: Infinity }}
                 >
                   &gt; executing_workflow()_
                 </motion.span>
                 <span className="text-[10px] text-muted-foreground/60">Processing natural language inputs...</span>
               </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
