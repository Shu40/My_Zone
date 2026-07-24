"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹5,000",
    period: "/month",
    features: ["Security Updates", "Bug Fixes", "Email Support"],
    highlight: false
  },
  {
    name: "Professional",
    price: "₹15,000",
    period: "/month",
    features: ["Everything in Basic", "Performance Monitoring", "Monthly Backup", "Priority Support"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["24×7 Monitoring", "Dedicated Engineer", "SLA", "Advanced Security"],
    highlight: false
  }
];

export default function MaintenancePlans() {
  return (
    <section className="w-full py-20 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
             <ShieldCheck size={32} />
           </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Maintenance <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Plans</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Keep your software secure, fast, and up-to-date after launch.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl transition-all ${plan.highlight ? 'bg-primary/10 border border-primary/30 shadow-[0_0_30px_rgba(37,99,235,0.15)] -translate-y-2' : 'glass border border-white/10'}`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-white/50">{plan.period}</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={16} className={plan.highlight ? "text-primary" : "text-white/40"} />
                    <span className="text-sm text-white/80">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
