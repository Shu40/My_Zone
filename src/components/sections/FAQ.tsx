"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "MVP development usually takes 8-12 weeks depending on complexity. Large enterprise systems or complete digital transformations can range from 4 to 12 months. We use Agile methodology to deliver usable features every 2 weeks."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes, absolutely. We prioritize your intellectual property. We sign comprehensive NDAs before we even hear your project idea, ensuring your business secrets remain strictly confidential."
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes, we offer multiple tiers of SLA-backed support. From simple bug-fix retainers to 24/7 dedicated DevOps monitoring to ensure your product scales flawlessly as your user base grows."
  },
  {
    q: "What technologies do you specialize in?",
    a: "We are full-stack specialists. We primarily use Next.js, React, and Vue for frontends; Node.js, Python, and Java for backends; and AWS/Azure for cloud infrastructure. We also integrate cutting-edge Generative AI models."
  },
  {
    q: "Can you scale my existing application?",
    a: "Yes. Our cloud engineering and DevSecOps teams specialize in auditing legacy architectures and migrating them to modern, scalable microservices or serverless environments capable of handling millions of users."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-[#02040a] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden"
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-primary shrink-0" /> : <Plus className="text-muted-foreground shrink-0" />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
