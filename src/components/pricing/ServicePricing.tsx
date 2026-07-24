"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Website Development",
    items: [
      { name: "Landing Page", price: "₹15k+" },
      { name: "Business Website", price: "₹25k+" },
      { name: "Corporate Website", price: "₹50k+" },
      { name: "E-Commerce", price: "₹80k+" },
      { name: "Enterprise Website", price: "Custom" },
    ]
  },
  {
    title: "Web Application",
    items: [
      { name: "CRM", price: "₹1.5L+" },
      { name: "ERP", price: "₹3L+" },
      { name: "Admin Dashboard", price: "₹80k+" },
      { name: "Booking Platform", price: "₹2L+" },
      { name: "Marketplace", price: "₹5L+" },
    ]
  },
  {
    title: "Mobile Applications",
    items: [
      { name: "Android App", price: "₹80k+" },
      { name: "iOS App", price: "₹1L+" },
      { name: "Flutter App", price: "₹1.2L+" },
      { name: "Enterprise Mobile App", price: "Custom" },
    ]
  },
  {
    title: "Artificial Intelligence",
    items: [
      { name: "AI Chatbot", price: "₹50k+" },
      { name: "Agentic AI", price: "₹2L+" },
      { name: "RAG System", price: "₹2.5L+" },
      { name: "LLM Integration", price: "₹1L+" },
      { name: "AI Automation", price: "Custom" },
    ]
  },
  {
    title: "Machine Learning",
    items: [
      { name: "Prediction Model", price: "₹80k+" },
      { name: "Computer Vision", price: "₹2L+" },
      { name: "OCR", price: "₹1L+" },
      { name: "Recommendation System", price: "₹1.5L+" },
    ]
  },
  {
    title: "Cybersecurity",
    items: [
      { name: "Security Audit", price: "₹30k+" },
      { name: "Penetration Testing", price: "₹50k+" },
      { name: "API Security", price: "₹40k+" },
      { name: "Cloud Security Review", price: "₹75k+" },
      { name: "Compliance", price: "Custom" },
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS Deployment", price: "₹25k+" },
      { name: "Docker Setup", price: "₹20k+" },
      { name: "CI/CD", price: "₹30k+" },
      { name: "Kubernetes", price: "₹75k+" },
      { name: "Cloud Migration", price: "Custom" },
    ]
  }
];

export default function ServicePricing() {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Service-Based <span className="text-accent">Pricing</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Detailed starting prices for our specialized development services.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-sm text-white/70">{item.name}</span>
                    <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
