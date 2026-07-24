"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm text-white/50 mb-1">Email Us</p>
              <a href="mailto:kumarshubham35568@gmail.com" className="text-white hover:text-primary transition-colors font-medium">kumarshubham35568@gmail.com</a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-sm text-white/50 mb-1">Call Us / WhatsApp</p>
              <a href="tel:+919263884941" className="text-white hover:text-accent transition-colors font-medium">+91 9263884941</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-sm text-white/50 mb-1">Office Address</p>
              <p className="text-white/90 text-sm leading-relaxed">Vadodara, Gujarat<br/>India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-sm text-white/50 mb-1">Business Hours</p>
              <p className="text-white/90 text-sm">Mon - Fri: 9:00 AM - 6:00 PM (IST)</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Styled Google Maps Placeholder */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="w-full h-48 rounded-3xl overflow-hidden border border-white/10 relative group"
      >
        <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
          <a href="#" className="px-4 py-2 rounded-lg bg-white text-black font-bold text-sm">View on Maps</a>
        </div>
        {/* Grayscale map image placeholder */}
        <div className="w-full h-full bg-[#1a1a2e] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-50 flex items-center justify-center">
          <MapPin className="text-primary/50" size={32} />
        </div>
      </motion.div>
    </div>
  );
}
