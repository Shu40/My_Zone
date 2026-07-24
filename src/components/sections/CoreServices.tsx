"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Shield, Cloud, Paintbrush, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description: "Scalable, secure, and robust enterprise software solutions tailored to your unique business needs.",
    icon: <Code size={32} />,
    color: "from-primary/20 to-transparent",
    border: "group-hover:border-primary/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]",
  },
  {
    title: "AI & Machine Learning",
    description: "Agentic AI, LLMs, and intelligent automation systems that drive future-proof digital transformation.",
    icon: <Brain size={32} />,
    color: "from-secondary/20 to-transparent",
    border: "group-hover:border-secondary/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Advanced threat detection, penetration testing, and enterprise-grade security architecture.",
    icon: <Shield size={32} />,
    color: "from-success/20 to-transparent",
    border: "group-hover:border-success/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  },
  {
    title: "Cloud Engineering",
    description: "AWS, Azure, and Google Cloud infrastructure, migration, and DevOps automation.",
    icon: <Cloud size={32} />,
    color: "from-accent/20 to-transparent",
    border: "group-hover:border-accent/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver premium user experiences.",
    icon: <Smartphone size={32} />,
    color: "from-warning/20 to-transparent",
    border: "group-hover:border-warning/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
  },
  {
    title: "UI/UX Design",
    description: "Award-winning product design, design systems, and responsive enterprise interfaces.",
    icon: <Paintbrush size={32} />,
    color: "from-error/20 to-transparent",
    border: "group-hover:border-error/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
  },
];

const getInitialAnimation = (idx: number) => {
  const animations = [
    { opacity: 0, x: -50 },
    { opacity: 0, y: 50 },
    { opacity: 0, x: 50 },
    { opacity: 0, scale: 0.8 },
    { opacity: 0, rotate: -10, y: 30 },
    { opacity: 0, rotateX: 90, perspective: 1000 },
  ];
  return animations[idx % animations.length];
};

export default function CoreServices() {
  return (
    <section className="py-24 relative bg-background overflow-hidden" id="services">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Core <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We engineer intelligent software, secure cloud architecture, and state-of-the-art AI systems to solve complex enterprise challenges.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={getInitialAnimation(idx)}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group relative glass p-8 rounded-2xl overflow-hidden transition-all duration-300 border border-white/5 ${service.border} ${service.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors"
                >
                  Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex justify-center"
        >
          <Link 
            href="/services" 
            className="px-8 py-4 rounded-full glass border border-white/10 hover:border-primary/50 text-white font-bold text-lg hover:bg-white/5 transition-all shadow-lg flex items-center gap-2 group"
          >
            View All 50+ Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
