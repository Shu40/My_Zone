"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is pricing calculated?",
    answer: "Pricing is calculated based on the complexity, features required, technology stack, and timeline. Our base rates start according to the type of project, and add-ons are included based on your business needs."
  },
  {
    question: "Do you sign NDA?",
    answer: "Yes, we prioritize your intellectual property. We sign a strict Non-Disclosure Agreement (NDA) before any project discussions to ensure complete confidentiality."
  },
  {
    question: "Do you provide source code?",
    answer: "Absolutely. Upon final payment and project delivery, full ownership of the source code and intellectual property rights are transferred to you."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, all our plans include a free maintenance period after delivery to ensure smooth operation. We also offer extended monthly maintenance plans for long-term support."
  },
  {
    question: "Can pricing change?",
    answer: "The price quoted in the final contract is fixed for the agreed scope of work. Any additional features or scope changes requested later will be quoted separately via a change request."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we work with clients globally. We are experienced in collaborating across different time zones and delivering to international enterprise standards."
  }
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 relative bg-[#050811] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Frequently Asked <span className="text-accent">Questions</span></h2>
          <p className="text-muted-foreground">Clear answers about our pricing and engagement model.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary/50 rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(37,99,235,0.1)]' : 'border-white/10 rounded-xl hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>{faq.question}</span>
                  <ChevronDown size={20} className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
