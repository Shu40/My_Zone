"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Factory, School, ShoppingCart, Activity } from "lucide-react";

export default function TrustedBy() {
  const clients = [
    { name: "Acme Corp", icon: <Building2 size={32} /> },
    { name: "GlobalBank", icon: <Landmark size={32} /> },
    { name: "TechManufacture", icon: <Factory size={32} /> },
    { name: "EduWorld", icon: <School size={32} /> },
    { name: "RetailMax", icon: <ShoppingCart size={32} /> },
    { name: "HealthPlus", icon: <Activity size={32} /> },
  ];

  // Duplicate for infinite scroll effect
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 border-t border-white/5 bg-background overflow-hidden relative">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by Innovative Startups & Fortune 500 Enterprises
        </p>
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust based on content width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-16 items-center px-8"
        >
          {marqueeClients.map((client, idx) => (
            <div key={idx} className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors grayscale hover:grayscale-0 opacity-50 hover:opacity-100">
              {client.icon}
              <span className="text-xl font-bold tracking-tight">{client.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
