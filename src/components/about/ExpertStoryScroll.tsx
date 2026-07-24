"use client";

import { motion } from "framer-motion";
import { Shield, Server, Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react";

const expertsData = [
  {
    name: "Shubham Kumar",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/600?img=11",
    accent: "from-primary to-blue-600",
    icon: <Lightbulb size={32} className="text-primary" />,
    story: [
      "As the visionary behind TeamLite, Shubham built the company on a singular premise: enterprise technology should not be a bottleneck; it should be an accelerator.",
      "With over a decade of experience leading high-stakes digital transformations for Fortune 500 companies, he has a proven track record of architecting scalable systems that drive millions in revenue.",
      "His leadership philosophy is simple: hire the smartest engineers in the room, remove the bureaucracy, and let them build extraordinary things."
    ],
    skills: ["Enterprise Architecture", "Strategic Leadership", "Digital Transformation", "Product Vision"]
  },
  {
    name: "Mayur Girase",
    role: "Lead Security Researcher",
    image: "https://i.pravatar.cc/600?img=12",
    accent: "from-error to-red-600",
    icon: <Shield size={32} className="text-error" />,
    story: [
      "In a world where a single vulnerability can cost a company its reputation, Mayur is the ultimate line of defense.",
      "As an elite Security Researcher, Mayur specializes in penetration testing, zero-day threat analysis, and building impenetrable cybersecurity infrastructures.",
      "He doesn't just secure systems after they are built; he engineers security directly into the DNA of the application architecture, ensuring absolute compliance and protection against state-level threat actors."
    ],
    skills: ["Penetration Testing", "Zero-Day Analysis", "Cryptography", "Infrastructure Security"]
  },
  {
    name: "Shivam Kumar",
    role: "Backend Architect Expert",
    image: "https://i.pravatar.cc/600?img=33",
    accent: "from-success to-emerald-600",
    icon: <Server size={32} className="text-success" />,
    story: [
      "Shivam is the mastermind behind the complex data engines that power TeamLite's most demanding applications.",
      "Specializing in distributed microservices, high-availability databases, and ultra-low latency APIs, he builds backends capable of processing millions of requests per second without breaking a sweat.",
      "When a client needs an infrastructure that can scale globally overnight, Shivam is the architect they call."
    ],
    skills: ["Distributed Systems", "Microservices", "High-Availability DBs", "GraphQL & REST APIs"]
  }
];

export default function ExpertStoryScroll() {
  return (
    <div className="w-full bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        {expertsData.map((expert, idx) => (
          <div 
            key={idx} 
            className="flex flex-col md:flex-row min-h-[90vh] items-stretch border-b border-white/5 last:border-0"
          >
            {/* Left Side: Sticky Image */}
            <div className="w-full md:w-1/2 md:sticky md:top-24 h-[50vh] md:h-[calc(100vh-120px)] flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-tr ${expert.accent} opacity-5 blur-[100px]`} />
              
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10`} />
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl inline-block mb-4 border border-white/20">
                    {expert.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{expert.name}</h2>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${expert.accent} font-bold text-lg tracking-wide uppercase`}>
                    {expert.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Scrollable Narrative */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 py-24 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Code2 className="text-muted-foreground" size={20} />
                  <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Expert Profile</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
                  The mind behind the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Architecture.</span>
                </h3>

                <div className="space-y-6 mb-12">
                  {expert.story.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Core Competencies</h4>
                  <div className="flex flex-wrap gap-3">
                    {expert.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
