"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Clock, Headset, Brain } from "lucide-react";

const reasons = [
  {
    title: "Enterprise Security",
    desc: "ISO compliant processes with rigorous security audits, penetration testing, and secure-by-default architecture.",
    icon: <ShieldCheck size={28} className="text-success" />
  },
  {
    title: "Scalable Architecture",
    desc: "Cloud-native microservices engineered to handle millions of requests with 99.99% uptime guarantees.",
    icon: <Zap size={28} className="text-warning" />
  },
  {
    title: "Agile Expert Team",
    desc: "Senior full-stack developers, AI researchers, and UX architects working as an extension of your team.",
    icon: <Users size={28} className="text-primary" />
  },
  {
    title: "Fast Delivery",
    desc: "Accelerated go-to-market strategies utilizing pre-built enterprise components and automated CI/CD pipelines.",
    icon: <Clock size={28} className="text-accent" />
  },
  {
    title: "Dedicated Support",
    desc: "24/7 proactive monitoring, rapid bug fixing, and long-term maintenance partnerships.",
    icon: <Headset size={28} className="text-error" />
  },
  {
    title: "AI-First Development",
    desc: "Integrating Generative AI and machine learning models to give your product a competitive technological edge.",
    icon: <Brain size={28} className="text-secondary" />
  }
];

const getInitialAnimation = (idx: number) => {
  const animations = [
    { opacity: 0, x: -50, rotate: -5 },
    { opacity: 0, y: -50 },
    { opacity: 0, x: 50, rotate: 5 },
    { opacity: 0, scale: 0.8 },
    { opacity: 0, y: 50 },
    { opacity: 0, rotateY: -90 },
  ];
  return animations[idx % animations.length];
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error/10 text-error text-sm font-medium mb-6 border border-error/20"
            >
              Why Choose TeamLite
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              The Trusted <br />
              <span className="text-gradient">Technology</span> <br />
              Partner.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              We don't just write code. We build robust, secure, and scalable digital businesses. From startups to Fortune 500s, organizations trust us with their most critical systems.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-8 py-4 rounded-full bg-white text-background font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Consult With An Expert
            </motion.button>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={getInitialAnimation(idx)}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="mb-6 p-3 inline-block rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
