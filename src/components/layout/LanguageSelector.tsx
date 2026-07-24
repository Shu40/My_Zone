"use client";

import { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English (En)", label: "Global (En)" },
  { code: "hi", name: "Hindi (Hi)", label: "India (Hi)" },
  { code: "es", name: "Spanish (Es)", label: "Spain (Es)" },
  { code: "fr", name: "French (Fr)", label: "France (Fr)" },
  { code: "de", name: "German (De)", label: "Germany (De)" },
  { code: "ar", name: "Arabic (Ar)", label: "UAE (Ar)" },
  { code: "zh-CN", name: "Chinese (Zh)", label: "China (Zh)" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(languages[0]);

  // Read current language from cookie on mount
  useEffect(() => {
    const match = document.cookie.match(new RegExp('(^| )googtrans=([^;]+)'));
    if (match) {
      const code = match[2].split('/')[2];
      if (code) {
        const found = languages.find(l => l.code === code);
        if (found) setActiveLang(found);
      }
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    if (langCode === "en") {
      // Clear cookie to revert to default English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
    } else {
      // Set google translate cookie using exact format: /sourceLang/targetLang
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/;`;
    }
    window.location.reload();
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors px-3 py-2 rounded-full hover:bg-white/5"
      >
        <Globe size={18} />
        {activeLang.label}
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-48 bg-[#0a0f25]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 py-2"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setIsOpen(false);
                  changeLanguage(lang.code);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                  activeLang.code === lang.code 
                    ? "bg-primary/20 text-white font-bold" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {lang.name}
                {activeLang.code === lang.code && (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
