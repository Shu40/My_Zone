"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "TeamLite transformed our legacy systems into a modern cloud architecture in record time. Their AI expertise is unmatched.",
    name: "Sarah Jenkins",
    role: "CTO, Global Finance Corp",
    rating: 5
  },
  {
    quote: "The most professional engineering team we've ever partnered with. Flawless execution and incredible attention to security.",
    name: "David Chen",
    role: "VP Engineering, MedTech AI",
    rating: 5
  },
  {
    quote: "They delivered our SaaS product 3 months ahead of schedule. The code quality and scalable infrastructure is world-class.",
    name: "Elena Rodriguez",
    role: "Founder, SaaS Startups",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-[#02040a] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-warning/20 text-warning text-sm font-semibold mb-6"
          >
            Client Success
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-10 rounded-[32px] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all hover:-translate-y-2 shadow-2xl"
            >
              <div>
                <div className="flex gap-1 mb-6 text-warning">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-white mb-8 font-light italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
