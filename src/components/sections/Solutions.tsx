"use client";

import { motion } from "framer-motion";
import { Building2, HeartPulse, GraduationCap, Landmark, ShoppingBag, Factory, Shield, Truck, Home, Utensils, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  { name: "Enterprise Software", icon: <Building2 size={24} />, color: "text-primary" },
  { name: "Healthcare", icon: <HeartPulse size={24} />, color: "text-error" },
  { name: "Education", icon: <GraduationCap size={24} />, color: "text-warning" },
  { name: "FinTech", icon: <Landmark size={24} />, color: "text-success" },
  { name: "Retail", icon: <ShoppingBag size={24} />, color: "text-accent" },
  { name: "Manufacturing", icon: <Factory size={24} />, color: "text-secondary" },
  { name: "Government", icon: <Shield size={24} />, color: "text-primary" },
  { name: "Logistics", icon: <Truck size={24} />, color: "text-warning" },
  { name: "Real Estate", icon: <Home size={24} />, color: "text-success" },
  { name: "Hospitality", icon: <Utensils size={24} />, color: "text-error" },
];

const getInitialAnimation = (idx: number) => {
  const animations = [
    { opacity: 0, scale: 0.5, rotate: -15 },
    { opacity: 0, y: -50 },
    { opacity: 0, x: 50 },
    { opacity: 0, scale: 1.2 },
    { opacity: 0, rotateY: 90 },
  ];
  return animations[idx % animations.length];
};

export default function Solutions() {
  return (
    <section className="py-24 relative overflow-hidden" id="solutions">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20"
            >
              Industry Solutions
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Solutions for Every <span className="text-gradient">Enterprise</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              We build specialized digital products tailored to the unique regulatory, scalability, and operational requirements of your specific industry.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/solutions" className="px-6 py-3 rounded-full glass flex items-center gap-2 hover:bg-white/10 transition-colors">
              View All Solutions <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={getInitialAnimation(idx)}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group border border-white/5 hover:border-white/20 transition-all cursor-pointer"
            >
              <Link href={`/solutions/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-col items-center gap-4 w-full h-full">
              <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors">{item.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
