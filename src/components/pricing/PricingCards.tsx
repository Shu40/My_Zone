"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    badge: "Best for small businesses",
    price: "₹25,000",
    features: [
      "Business Website",
      "Responsive Design",
      "5 Pages",
      "Contact Form",
      "SEO Basics",
      "Performance Optimization"
    ],
    delivery: "7–10 Days",
    maintenance: "15 Days Free",
    buttonText: "Get Started",
    highlight: false
  },
  {
    name: "Professional",
    badge: "",
    price: "₹75,000",
    features: [
      "Custom Website",
      "CMS",
      "Admin Panel",
      "API Integration",
      "Authentication",
      "Performance Optimization"
    ],
    delivery: "2–4 Weeks",
    maintenance: "1 Month Free",
    buttonText: "Request Proposal",
    highlight: false
  },
  {
    name: "Business",
    badge: "",
    price: "₹2,00,000",
    features: [
      "Web Application",
      "Dashboard",
      "Cloud Deployment",
      "Database",
      "Authentication",
      "Analytics & Testing"
    ],
    delivery: "1–2 Months",
    maintenance: "3 Months Free",
    buttonText: "Book Consultation",
    highlight: false
  },
  {
    name: "Enterprise",
    badge: "Most Popular",
    price: "Custom",
    features: [
      "Unlimited Features",
      "Dedicated Team",
      "Project Manager",
      "Cloud Infrastructure",
      "Security Audit",
      "Priority Support"
    ],
    delivery: "Custom Timeline",
    maintenance: "12 Months Free",
    buttonText: "Contact Sales",
    highlight: true
  }
];

export default function PricingCards() {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Plans</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the perfect tier for your business scale and requirements.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl glass transition-all duration-300 ${plan.highlight ? 'border-primary/50 shadow-[0_0_40px_rgba(37,99,235,0.2)] -translate-y-4 bg-primary/5' : 'border-white/10 hover:border-white/20 hover:-translate-y-2'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-bold text-white shadow-lg">
                  Most Comprehensive
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="h-5">
                  {plan.badge && <span className="text-xs text-accent font-medium">{plan.badge}</span>}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-white/50">Starting From</span>
                </div>
                <div className="text-4xl font-extrabold text-white mt-1">
                  {plan.price}
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Includes:</p>
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feat}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                 <div className="flex justify-between text-sm">
                   <span className="text-white/50">Delivery</span>
                   <span className="text-white font-medium">{plan.delivery}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-white/50">Maintenance</span>
                   <span className="text-white font-medium">{plan.maintenance}</span>
                 </div>
              </div>

              <Link 
                href="/contact"
                className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'glass border border-white/20 text-white hover:bg-white/10'}`}
              >
                {plan.buttonText} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
