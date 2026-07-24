"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, UserCheck, Clock, Building2 } from "lucide-react";

const indicators = [
  { text: "Enterprise Ready", icon: <Building2 size={16} /> },
  { text: "NDA Available", icon: <ShieldCheck size={16} /> },
  { text: "100% Confidential", icon: <Lock size={16} /> },
  { text: "Dedicated Project Manager", icon: <UserCheck size={16} /> },
  { text: "Secure Communication", icon: <CheckCircle2 size={16} /> },
  { text: "24×7 Support", icon: <Clock size={16} /> },
];

export default function TrustIndicators() {
  return (
    <div className="w-full border-y border-white/5 bg-white/[0.02] py-4">
      <div className="container mx-auto px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {indicators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-white/60 font-medium">
              <span className="text-accent/70">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
