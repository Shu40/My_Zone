"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ScrollRevealTransition({
  heroContent,
  nextContent,
}: {
  heroContent: React.ReactNode;
  nextContent: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin the hero section while the next section scrolls over it
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      pin: heroRef.current,
      pinSpacing: false,
    });

    // Optional: Add a slight parallax or fade to the hero as it gets covered
    gsap.to(heroRef.current, {
      yPercent: 15,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    
    // Animate a curved mask if desired, or let the CSS handle it naturally
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Pinned Hero Section */}
      <div ref={heroRef} className="h-screen w-full relative z-0">
        {heroContent}
      </div>

      {/* Revealing Next Section */}
      <div 
        ref={revealRef} 
        className="relative z-10 w-full mt-[-10vh] will-change-transform"
      >
        {/* SVG Curve at the top of the next section */}
        <div 
          ref={curveRef}
          className="w-full h-[10vh] sm:h-[15vh] lg:h-[20vh] relative -mb-[1px] pointer-events-none"
        >
          <svg 
            viewBox="0 0 1440 320" 
            className="absolute bottom-0 w-full h-full object-fill" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,320 L1440,320 L1440,0 C1440,250 800,250 720,50 C640,250 0,250 0,0 Z" 
              fill="var(--background, #020817)" 
            />
          </svg>
        </div>
        
        {/* Rest of the page content */}
        <div className="w-full bg-background relative z-10">
          {nextContent}
        </div>
      </div>
    </div>
  );
}
