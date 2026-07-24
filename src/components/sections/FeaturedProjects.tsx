"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "global-fintech-platform",
    title: "Global FinTech Platform",
    desc: "A high-frequency trading platform built for a Fortune 500 bank capable of processing 10k transactions per second.",
    tech: ["Next.js", "Go", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostics",
    desc: "Computer vision and predictive analytics dashboard used by 50+ hospitals to detect anomalies in X-Ray scans.",
    tech: ["React", "Python", "TensorFlow", "Azure"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "enterprise-erp-system",
    title: "Enterprise ERP System",
    desc: "Custom ERP solution for a massive supply chain company, integrating inventory, HR, and accounting into one ecosystem.",
    tech: ["Angular", "Java", "MongoDB", "GCP"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 relative bg-background overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Featured Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Case <span className="text-gradient">Studies</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/portfolio" className="px-6 py-3 rounded-full glass flex items-center gap-2 hover:bg-white/10 transition-colors">
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass rounded-[24px] overflow-hidden border border-white/10 group flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="h-64 w-full relative overflow-hidden bg-black">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm gap-4">
                  <Link href={`/portfolio/${project.id}`} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </Link>
                  <Link href={`/portfolio/${project.id}`} className="w-12 h-12 rounded-full bg-black/50 text-white border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <GitBranch size={20} />
                  </Link>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 bg-white/5 rounded-md text-muted-foreground">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">{project.desc}</p>
                
                <Link href={`/portfolio/${project.id}`} className="inline-flex items-center gap-2 font-semibold text-primary hover:text-white transition-colors">
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
