"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
    >
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
        Scroll to Explore
      </span>
      <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-1 relative backdrop-blur-sm shadow-md">
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shadow-md"
        />
      </div>
    </motion.div>
  );
}
