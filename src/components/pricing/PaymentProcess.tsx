"use client";

import { motion } from "framer-motion";

const steps = [
  { percent: "40%", label: "Advance", desc: "To initiate the project and begin design & architecture." },
  { percent: "40%", label: "Development", desc: "Upon completion of major development milestones." },
  { percent: "20%", label: "Delivery", desc: "Before final deployment and handover to production." }
];

export default function PaymentProcess() {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Standard <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Payment Process</span></h2>
          <p className="text-muted-foreground">Clear and milestone-driven payment structure for all projects.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-white/10 -translate-y-1/2 z-0" />
           
           {steps.map((step, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.2 }}
               className="relative z-10 glass p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center bg-[#0b0f19]"
             >
               <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                 <span className="text-3xl font-extrabold text-white">{step.percent}</span>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{step.label}</h3>
               <p className="text-sm text-white/50">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
