"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

const experts = [
  { name: "Shubham Kumar", role: "Founder & CEO", img: "https://i.pravatar.cc/300?img=11" },
  { name: "Mayur Girase", role: "Security Researcher", img: "https://i.pravatar.cc/300?img=12" },
  { name: "Shivam Kumar", role: "Backend Expert", img: "https://i.pravatar.cc/300?img=33" },
  { name: "Priya Sharma", role: "Cybersecurity Lead", img: "https://i.pravatar.cc/300?img=32" },
  { name: "David Kim", role: "UI/UX Design Lead", img: "https://i.pravatar.cc/300?img=68" },
  { name: "Elena Volkov", role: "Enterprise Project Manager", img: "https://i.pravatar.cc/300?img=44" }
];

export default function MeetExperts() {
  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Real Experts</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">You won't be talking to a salesperson. Your consultation will be held directly with our senior technology leads.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={expert.img} alt={expert.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{expert.name}</h3>
                <p className="text-sm text-accent mb-2">{expert.role}</p>
                <a href="#" className="text-white/40 hover:text-blue-400 transition-colors">
                  <Link2 size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
