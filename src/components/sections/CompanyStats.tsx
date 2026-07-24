"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Globe2, Code2, Award } from "lucide-react";

const stats = [
  { label: "Enterprise Projects", value: 50, suffix: "+", icon: <Code2 className="text-primary" size={24} /> },
  { label: "Countries Served", value: 5, suffix: "+", icon: <Globe2 className="text-accent" size={24} /> },
  { label: "Expert Developers", value: 18, suffix: "+", icon: <Users className="text-secondary" size={24} /> },
  { label: "Client Satisfaction", value: 99, suffix: "%", icon: <Award className="text-success" size={24} /> },
];

export default function CompanyStats() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.icon}
              </div>
              <div className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                <Counter target={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}
