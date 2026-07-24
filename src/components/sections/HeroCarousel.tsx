"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";

const initialSlides = [
  {
    id: 1,
    title: "AI Software Engineer",
    description: "Futuristic AI writing code dynamically.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", // Abstract AI/Code
  },
  {
    id: 2,
    title: "Robotics & Automation",
    description: "Intelligent systems building the future.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop", // Robot arm
  },
  {
    id: 3,
    title: "Cybersecurity Operations",
    description: "Live threat detection and network defense.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", // Cyber/Lock
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description: "Scalable architecture and Kubernetes pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", // Global cloud/data
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Interactive UI/UX for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", // Mobile device
  },
  {
    id: 6,
    title: "Enterprise Software",
    description: "Live CRM and analytics dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Dashboard data
  },
  {
    id: 7,
    title: "Agentic AI",
    description: "Multi-agent planning and workflow automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop", // AI network
  },
  {
    id: 8,
    title: "Machine Learning",
    description: "Neural network training and predictive data.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", // Circuit / Tech
  },
  {
    id: 9,
    title: "UI/UX Design",
    description: "Design systems and interactive prototyping.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop", // UI wireframes
  },
  {
    id: 10,
    title: "Team Collaboration",
    description: "Agile sprints and architecture planning.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", // Team collaboration
  }
];

export default function HeroCarousel() {
  const [slides, setSlides] = useState(initialSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<typeof initialSlides[0] | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Randomize initial positions
    const shuffled = [...initialSlides].sort(() => 0.5 - Math.random());
    setSlides(shuffled);
    setIsMounted(true);
  }, []);

  // Auto-play the center image
  useEffect(() => {
    if (!isMounted) return;
    
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 3500); // 3.5 seconds for center image change
    }
    
    return () => clearInterval(interval);
  }, [isHovered, isMounted, slides.length]);

  if (!isMounted) return <div className="h-[700px] w-full flex items-center justify-center animate-pulse"><div className="w-96 h-96 rounded-full bg-white/5" /></div>;

  const activeDisplayItem = hoveredItem || slides[currentIndex];

  return (
    <div 
      className="relative w-full h-[700px] flex items-center justify-center overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none" style={{ willChange: 'transform' }} />

      {/* Decorative Orbit Rings */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-black/10 dark:border-white/10 border-dashed pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] rounded-full border border-black/5 dark:border-white/5 pointer-events-none" />

      {/* Center Core Display (Large Circle showing the image) */}
      <motion.div 
        className="absolute z-20 w-[380px] h-[380px] rounded-full border-[4px] border-white/10 shadow-[0_0_80px_rgba(37,99,235,0.4)] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDisplayItem.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full relative"
          >
            <img src={activeDisplayItem.image} alt={activeDisplayItem.title} className="w-full h-full object-cover" />
            
            {/* Gradient overlay so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            {/* Text Content inside center circle */}
            <div className="absolute inset-x-6 bottom-6 flex flex-col items-center justify-center p-5 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 text-center shadow-xl">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mb-2 shadow-[0_0_10px_rgba(37,99,235,1)]" />
              <h3 className="text-xl font-bold text-white leading-tight mb-1">{activeDisplayItem.title}</h3>
              <p className="text-xs text-white/80 font-medium">{activeDisplayItem.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Rotating Orbit Container */}
      <div 
        className="absolute w-[600px] h-[600px] flex items-center justify-center"
        style={{ 
          animation: 'spin 40s linear infinite',
          animationPlayState: isHovered ? 'paused' : 'running',
          willChange: 'transform'
        }}
      >
        {/* Render 10 orbiting nodes */}
        {slides.map((slide, i) => {
          const totalNodes = slides.length;
          const angle = (i * (360 / totalNodes)) * (Math.PI / 180);
          
          // Outer ring radius (300px) for even items, inner ring (225px) for odd items to create depth
          const radius = i % 2 === 0 ? 300 : 225; 
          
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const size = i % 2 === 0 ? "w-20 h-20" : "w-14 h-14"; 
          
          const isActive = activeDisplayItem.id === slide.id;
          
          return (
            <div 
              key={slide.id}
              className={`absolute ${size} rounded-full overflow-hidden glass transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-30 
                ${isActive ? 'scale-125 border-[3px] border-primary z-50 shadow-[0_0_30px_rgba(37,99,235,0.6)]' : 'border border-black/20 dark:border-white/20 hover:scale-110'}`}
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
                willChange: 'transform'
              }}
              onMouseEnter={() => setHoveredItem(slide)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className="w-full h-full"
                style={{ 
                  animation: 'spin 40s linear infinite reverse',
                  animationPlayState: isHovered ? 'paused' : 'running',
                  willChange: 'transform'
                }}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
