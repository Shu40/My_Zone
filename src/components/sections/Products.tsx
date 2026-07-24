"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, Calculator, CalendarClock, MessageSquare, HardDrive } from "lucide-react";
import Link from "next/link";

const products = [
  { name: "TeamHRMS", desc: "Enterprise HR & Payroll Management", icon: <Users size={24} /> },
  { name: "SalesCRM Pro", desc: "AI-Powered Customer Relationship", icon: <LayoutDashboard size={24} /> },
  { name: "NexusERP", desc: "Global Supply Chain & Operations", icon: <HardDrive size={24} /> },
  { name: "LiteInvoice", desc: "Automated Billing & Accounting", icon: <Calculator size={24} /> },
  { name: "AgentChat AI", desc: "Customer Support Automation", icon: <MessageSquare size={24} /> },
  { name: "TimeSync", desc: "Attendance & Roster Tracking", icon: <CalendarClock size={24} /> },
];

export default function Products() {
  return (
    <section className="py-24 relative bg-background border-t border-white/5" id="products">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20"
          >
            SaaS Products
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready-to-Deploy <span className="text-gradient">Platforms</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            License our pre-built enterprise SaaS products to jumpstart your digital transformation at a fraction of custom development time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-white/20 transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {prod.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{prod.name}</h3>
                <p className="text-sm text-muted-foreground">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/products" className="text-sm font-semibold text-white underline hover:text-primary transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
