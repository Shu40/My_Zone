"use client";

import { motion } from "framer-motion";
import { CloudCog, Server, Network } from "lucide-react";

export default function CloudEngineering() {
  return (
    <section className="py-32 relative bg-background overflow-hidden border-t border-white/5" id="cloud">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-semibold mb-6"
          >
            <CloudCog size={16} /> Cloud Infrastructure
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Architected for <span className="text-gradient">Infinite Scale.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Deploy your applications globally with multi-cloud, serverless, and Kubernetes orchestration designed to handle millions of requests instantly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AWS Solutions", desc: "Elastic compute, S3 storage, and serverless Lambda pipelines.", icon: <Server size={32} /> },
            { title: "Azure Enterprise", desc: "Microsoft ecosystem integration and secure Active Directory.", icon: <CloudCog size={32} /> },
            { title: "GCP & Kubernetes", desc: "Global load balancing and automated container orchestration.", icon: <Network size={32} /> }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-10 rounded-[32px] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
