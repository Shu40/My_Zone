"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Tag, Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "AI & Machine Learning", "Cloud Computing", "Cybersecurity", "Digital Transformation", "Engineering"];

const articles = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Software",
    excerpt: "How large language models are fundamentally changing the way we build and interact with enterprise applications, leading to unprecedented productivity gains.",
    category: "AI & Machine Learning",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    date: "Oct 24, 2026",
    trending: true,
  },
  {
    id: 2,
    title: "Zero Trust Architecture: Beyond the Buzzword",
    excerpt: "A practical guide to implementing zero trust security models in legacy infrastructure without disrupting business operations.",
    category: "Cybersecurity",
    author: "James Wilson",
    readTime: "6 min read",
    date: "Oct 18, 2026",
    trending: false,
  },
  {
    id: 3,
    title: "Migrating to Multi-Cloud: Lessons Learned",
    excerpt: "Key strategies for balancing workloads across AWS, Azure, and GCP while maintaining high availability and cost efficiency.",
    category: "Cloud Computing",
    author: "Elena Rodriguez",
    readTime: "10 min read",
    date: "Oct 12, 2026",
    trending: true,
  },
  {
    id: 4,
    title: "Automating Legacy Workflows with RPA",
    excerpt: "Discover how robotic process automation is bridging the gap between old monolithic systems and modern agile microservices.",
    category: "Digital Transformation",
    author: "Michael Chang",
    readTime: "5 min read",
    date: "Sep 29, 2026",
    trending: false,
  }
];

export default function InsightsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredArticles = articles.filter(article => activeCategory === "All" || article.category === activeCategory);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black selection:bg-primary/30 selection:text-white pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 max-w-[1200px] mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Insights</span>
        </div>
      </div>

      {/* Hero Section - Featured Article */}
      <section className="container mx-auto px-6 max-w-[1200px] mb-24">
        <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
          
          <div className="relative z-20 p-8 md:p-16 flex flex-col justify-end min-h-[500px]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6 w-fit backdrop-blur-md">
              <TrendingUp size={16} /> Featured Insight
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Architecting for Scale: How We Handled 10M Concurrent Users
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              An inside look at the distributed systems engineering and caching strategies that allow our enterprise platforms to scale effortlessly during peak load.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><User size={16} /> David Chen, CTO</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="container mx-auto px-6 max-w-[1200px] mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex overflow-x-auto pb-2 custom-scrollbar gap-2 hide-scroll-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat 
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full md:w-64 bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-all"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-6 max-w-[1200px] mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col"
            >
              <div className="h-48 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform duration-500">
                  <Tag size={48} />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-primary text-sm font-semibold mb-3">{article.category}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-white/50 pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-2"><User size={14} /> {article.author}</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 max-w-[800px]">
        <div className="glass p-12 rounded-[2rem] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] -z-10" />
          
          <h2 className="text-3xl font-bold text-white mb-4">Stay ahead of the curve</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest engineering insights, architectural patterns, and tech trends delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-white/30 mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

    </div>
  );
}
