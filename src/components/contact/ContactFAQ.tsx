"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long is the consultation?",
    answer: "Our standard initial consultation lasts for 30 minutes. However, if your project scope is large, we can extend the call or schedule a follow-up deep-dive session."
  },
  {
    question: "Is the consultation completely free?",
    answer: "Yes, the initial consultation is 100% free with absolutely no commitment required. It's an opportunity for us to understand your needs and for you to evaluate our expertise."
  },
  {
    question: "Will you sign an NDA?",
    answer: "Yes. We can sign a Non-Disclosure Agreement (NDA) before the consultation begins to ensure your idea and intellectual property are fully protected."
  },
  {
    question: "Can you provide a cost estimate on the call?",
    answer: "If your requirements are clear, our architects can provide a rough ballpark estimate during the call. A detailed, formal proposal and exact timeline will be sent within 24 hours after the meeting."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we work with enterprise clients globally. We easily accommodate different time zones for meetings and development syncs."
  },
  {
    question: "How soon can development start?",
    answer: "Depending on our current capacity and your project scope, we can typically kick off a project within 1 to 2 weeks after the contract is signed and the advance payment is processed."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 relative bg-[#0a0f1d] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Consultation <span className="text-accent">FAQ</span></h2>
          <p className="text-muted-foreground">Everything you need to know before booking your call.</p>
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
