"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Newspaper, Calendar, ArrowRight, Download, Share2, Mail, Megaphone } from "lucide-react";
import Link from "next/link";

const releases = [
  {
    id: 1,
    title: "TeamLite Officially Launches to Transform Enterprise Software",
    date: "November 15, 2026",
    category: "Corporate",
    excerpt: "TeamLite officially launches its operations, bringing cutting-edge AI and scalable cloud engineering solutions to modern businesses globally."
  },
  {
    id: 2,
    title: "Launch of 'TeamLite Core': The Next Generation Enterprise Architecture",
    date: "September 22, 2026",
    category: "Product Launch",
    excerpt: "TeamLite Core introduces a revolutionary approach to monolithic-to-microservices migration, reducing transition times by up to 60% for enterprise clients."
  },
  {
    id: 3,
    title: "TeamLite Partners with Microsoft Azure for Cloud-Native Security",
    date: "August 10, 2026",
    category: "Partnership",
    excerpt: "Strategic partnership aims to integrate deep zero-trust security protocols natively into Azure deployments for joint enterprise customers."
  },
  {
    id: 4,
    title: "Named 'Top Innovator in Enterprise AI' by TechRadar 2026",
    date: "July 05, 2026",
    category: "Awards",
    excerpt: "Industry recognition for our breakthrough work in deploying large language models securely within highly regulated financial environments."
  }
];

export default function PressReleasePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black selection:bg-primary/30 selection:text-white pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 max-w-[1200px] mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Press Release</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-[1200px] mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-lg shadow-primary/20 backdrop-blur-md">
            <Megaphone size={32} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Newsroom</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The latest announcements, product launches, and corporate updates from TeamLite.
          </p>
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-6 max-w-[1200px] mb-32 grid lg:grid-cols-3 gap-12">
        
        {/* Left Col: Timeline */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Latest Announcements</h2>
            <div className="text-sm text-primary font-semibold cursor-pointer hover:text-white transition-colors">View Archive</div>
          </div>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {releases.map((release, idx) => (
              <motion.div 
                key={release.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary transition-colors z-10">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{release.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> {release.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{release.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{release.excerpt}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <button className="text-sm font-semibold text-white hover:text-primary transition-colors flex items-center gap-1">Read Full <ArrowRight size={14} /></button>
                    <button className="text-white/50 hover:text-white transition-colors"><Share2 size={16} /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Col: Sidebar */}
        <div className="space-y-8">
          {/* Media Contact */}
          <div className="glass p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Media Contact</h3>
            <p className="text-sm text-muted-foreground mb-6">For press inquiries, interviews, or media resources.</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-white font-medium">Press Team</div>
                <a href="mailto:shubhamkumar47746@gmail.com" className="text-sm text-primary hover:underline">shubhamkumar47746@gmail.com</a>
              </div>
            </div>
            <a href="mailto:kumarshubham35568@gmail.com" className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-all flex items-center justify-center">
              Send Inquiry
            </a>
          </div>

          {/* Press Kit Download */}
          <div className="glass p-8 rounded-[24px] border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Press Kit</h3>
            <p className="text-sm text-muted-foreground mb-6 relative z-10">Download official logos, brand guidelines, and executive headshots.</p>
            <a href="/logo.png" download="TeamLite_PressKit.zip" className="w-full py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-primary/90 transition-all flex items-center justify-center gap-2 relative z-10">
              <Download size={16} /> Download Assets (ZIP)
            </a>
          </div>
          
          {/* Executive Quotes */}
          <div className="glass p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
            <Newspaper className="text-white/20 w-12 h-12 mb-4" />
            <blockquote className="text-lg text-white font-medium italic mb-4 leading-relaxed">
              "We are entering an era where enterprise software is no longer a bottleneck, but a catalyst for unprecedented scale and innovation."
            </blockquote>
            <div className="text-sm text-primary font-bold">— David Chen, CTO</div>
          </div>
        </div>

      </section>

    </div>
  );
}
