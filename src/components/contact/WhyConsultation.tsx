"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Free Project Discussion",
  "Business Requirement Analysis",
  "Technical Architecture Planning",
  "Cost Estimation",
  "Timeline Planning",
  "AI Strategy",
  "Cloud Architecture",
  "Cybersecurity Recommendations",
  "Technology Stack Recommendation"
];

export default function WhyConsultation() {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Consultation?</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Get actionable insights from our senior architects before you commit to any development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 hover:bg-white/5 hover:border-white/10 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                <Check size={16} />
              </div>
              <h3 className="font-semibold text-white/90 mt-1">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
