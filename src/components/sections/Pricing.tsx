"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-32 relative bg-background overflow-hidden border-t border-white/5" id="pricing">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent <span className="text-gradient">Engagement Models</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Whether you're a funded startup or a Fortune 500, we have an engagement model designed for your scale and velocity.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Startup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[32px] border border-white/10 flex flex-col hover:border-white/20 transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-2">MVP / Startup</h3>
            <p className="text-sm text-muted-foreground mb-8">Perfect for early-stage companies needing fast execution.</p>
            <div className="text-4xl font-bold text-white mb-8">Fixed Price</div>
            <ul className="space-y-4 mb-10 flex-1">
              {["Defined Scope", "Dedicated PM", "UI/UX Design", "Core Development", "1 Month Support"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80"><CheckCircle2 size={16} className="text-muted-foreground" /> {f}</li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all">Get Estimate</button>
          </motion.div>

          {/* Business (Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-primary/20 to-black p-10 rounded-[32px] border border-primary flex flex-col relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(37,99,235,0.15)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Most Popular</div>
            <h3 className="text-xl font-bold text-white mb-2">Dedicated Team</h3>
            <p className="text-sm text-white/70 mb-8">For growing businesses needing continuous development.</p>
            <div className="text-4xl font-bold text-white mb-8">Monthly Retainer</div>
            <ul className="space-y-4 mb-10 flex-1">
              {["Full-Stack Engineers", "Agile Sprints", "Direct Communication", "Daily Standups", "Scalable Resources"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white"><CheckCircle2 size={16} className="text-primary" /> {f}</li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">Hire a Team</button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-[32px] border border-white/10 flex flex-col hover:border-white/20 transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-sm text-muted-foreground mb-8">For large-scale digital transformation and custom infra.</p>
            <div className="text-4xl font-bold text-white mb-8">Custom Scale</div>
            <ul className="space-y-4 mb-10 flex-1">
              {["CTO as a Service", "System Architecture", "Security Audits", "SLA Guarantees", "24/7 DevOps Support"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80"><CheckCircle2 size={16} className="text-muted-foreground" /> {f}</li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all">Contact Sales</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
