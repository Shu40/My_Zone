"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const timelines = [
  { name: "Landing Page", time: "5–7 Days" },
  { name: "Business Website", time: "7–14 Days" },
  { name: "Corporate Website", time: "2–4 Weeks" },
  { name: "Web Application", time: "4–10 Weeks" },
  { name: "Mobile App", time: "6–12 Weeks" },
  { name: "AI Solution", time: "4–12 Weeks" },
  { name: "Enterprise Software", time: "2–6 Months" },
];

export default function ProjectTimeline() {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Estimated <span className="text-accent">Timelines</span></h2>
          <p className="text-muted-foreground">Standard delivery estimates for our primary service offerings.</p>
        </div>

        <div className="glass rounded-3xl border border-white/10 overflow-hidden">
          {timelines.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`flex items-center justify-between p-6 ${idx !== timelines.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}
            >
              <div className="font-medium text-white/90">{item.name}</div>
              <div className="flex items-center gap-2 text-accent font-mono bg-accent/10 px-4 py-1.5 rounded-full text-sm">
                <Clock size={14} /> {item.time}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
