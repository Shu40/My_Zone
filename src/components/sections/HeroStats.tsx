"use client";

import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 5, suffix: "+", label: "Years Excellence" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function HeroStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div 
      ref={ref} 
      className="w-full max-w-6xl mx-auto mt-16 px-6 relative z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 glass shadow-2xl backdrop-blur-md"
      >
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center space-y-2 group"
          >
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter flex items-center group-hover:text-primary transition-colors duration-300">
              {inView ? (
                <CountUp end={stat.value} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              <span className="text-primary ml-1">{stat.suffix}</span>
            </h3>
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
