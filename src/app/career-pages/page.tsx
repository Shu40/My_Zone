"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, GraduationCap, Heart, Users, MapPin, 
  ArrowRight, Search, Star, ChevronDown, 
  Coffee, Globe, Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Mock Data ---
const positions = [
  { id: 1, title: "Senior AI Engineer", department: "Engineering", location: "Remote", type: "Full-time", experience: "5+ Years", icon: <Zap size={20} /> },
  { id: 2, title: "Product Designer", department: "Design", location: "New York, NY", type: "Full-time", experience: "3+ Years", icon: <Star size={20} /> },
  { id: 3, title: "Cloud Security Architect", department: "Cybersecurity", location: "London, UK", type: "Full-time", experience: "7+ Years", icon: <Globe size={20} /> },
  { id: 4, title: "Marketing Director", department: "Marketing", location: "San Francisco, CA", type: "Full-time", experience: "8+ Years", icon: <Users size={20} /> },
  { id: 5, title: "Backend Developer (Node.js)", department: "Engineering", location: "Remote", type: "Contract", experience: "2+ Years", icon: <Briefcase size={20} /> },
  { id: 6, title: "Data Scientist", department: "Data", location: "Toronto, CA", type: "Full-time", experience: "4+ Years", icon: <Zap size={20} /> },
];

const values = [
  { title: "Innovation First", desc: "We push boundaries and explore new technologies.", icon: <Zap size={24} /> },
  { title: "Radical Candor", desc: "Open, honest, and direct communication always.", icon: <Heart size={24} /> },
  { title: "Continuous Growth", desc: "Dedicated budgets for learning and development.", icon: <GraduationCap size={24} /> },
  { title: "Global Team", desc: "Diverse perspectives from over 20 countries.", icon: <Globe size={24} /> },
];

export default function CareerPages() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const departments = ["All", ...Array.from(new Set(positions.map(p => p.department)))];

  const filteredPositions = positions.filter(pos => 
    (activeDepartment === "All" || pos.department === activeDepartment) &&
    (pos.title.toLowerCase().includes(searchTerm.toLowerCase()) || pos.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black selection:bg-primary/30 selection:text-white pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 max-w-[1200px] mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Careers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 max-w-[1200px] mb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[3rem] blur-3xl -z-10" />
        <div className="bg-[#050816]/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold mb-6">
              <Star size={16} /> We are hiring globally
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Build the future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">with TeamLite.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join a team of elite engineers, designers, and innovators building enterprise software that shapes industries. Do the best work of your life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center gap-2"
              >
                View Openings <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl glass text-white font-bold hover:bg-white/10 transition-all border border-white/10">
                Life at TeamLite
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 max-w-[1200px] mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just write code; we build culture. These are the principles that guide our everyday decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="container mx-auto px-6 max-w-[1200px] mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Find your next role at TeamLite.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search jobs..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
              />
            </div>
            <div className="relative">
              <select 
                value={activeDepartment}
                onChange={(e) => setActiveDepartment(e.target.value)}
                className="w-full sm:w-48 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none transition-all cursor-pointer"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-[#050816]">{dept}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredPositions.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="glass border border-white/5 hover:border-white/20 p-6 rounded-2xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1.5"><Coffee size={14} /> {job.type}</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 px-6 py-3 rounded-lg bg-white/5 hover:bg-primary hover:text-white text-white/80 font-medium transition-all text-center md:text-left border border-white/10"
                >
                  Apply Now (Google Form)
                </a>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPositions.length === 0 && (
            <div className="text-center py-20 glass border border-white/5 rounded-2xl">
              <Search className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">No positions found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
