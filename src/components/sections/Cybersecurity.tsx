"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Lock, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

export default function Cybersecurity() {
  return (
    <section className="py-32 relative bg-[#02040a] overflow-hidden border-t border-white/5" id="cybersecurity">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Visual: Terminal / Security Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] bg-black border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
            </div>
            
            {/* Terminal Body */}
            <div className="flex-1 space-y-4">
              <div className="text-white/50"># Initiating penetration test protocol...</div>
              <div className="text-white"><span className="text-success">➜</span> root@teamlite:~$ nmap -sV -p- 192.168.1.1</div>
              <div className="text-white/50">Starting Nmap 7.92 ( https://nmap.org )</div>
              <div className="text-white/50">Scanning targets...</div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-error"
              >
                [!] Vulnerability detected: CVE-2021-44228 (Log4Shell)
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="text-white"
              >
                <span className="text-success">➜</span> root@teamlite:~$ apply_patch --auto
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3 }}
                className="text-success font-bold"
              >
                [✓] Patch applied successfully. System secured.
              </motion.div>
            </div>
            
            {/* overlay scanline */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.02),rgba(255,255,255,0))] h-[10px] animate-scanline pointer-events-none" />
          </motion.div>
          
          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-error/20 text-error text-sm font-semibold mb-6">
              <ShieldAlert size={16} /> Enterprise Security
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Zero Trust. <br />
              <span className="text-gradient">Total Control.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              We design software with a security-first mindset. From rigorous penetration testing to DevSecOps pipelines, we ensure your enterprise data remains impenetrable against modern threats.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Penetration Testing", "Security Audits", "API Security", 
                "DDoS Protection", "Data Encryption", "Compliance (HIPAA/SOC2)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} className="text-error" /> {item}
                </div>
              ))}
            </div>
            
            <Link 
              href="/services/cybersecurity"
              className="px-8 py-4 rounded-xl bg-white text-background font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Secure Your Infrastructure
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
