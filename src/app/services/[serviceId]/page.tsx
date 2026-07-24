"use client";

import { use, useEffect, useState } from "react";
import { getServiceDetails, ServiceDetails } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, ChevronRight, Shield, Zap, TrendingUp, Users, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const resolvedParams = use(params);
  const [service, setService] = useState<ServiceDetails | null>(null);
  const [isBillModalOpen, setIsBillModalOpen] = useState(false);

  useEffect(() => {
    const data = getServiceDetails(resolvedParams.serviceId);
    setService(data);
  }, [resolvedParams.serviceId]);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  // Calculate bill totals
  const subtotal = service.pricingBreakdown.reduce((acc, item) => {
    const costNum = parseInt(item.cost.replace(/[^0-9]/g, ''), 10);
    return acc + (isNaN(costNum) ? 0 : costNum);
  }, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/services" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={16} /> All Services
          </Link>
          <ChevronRight size={14} />
          <span className="text-white">{service.category}</span>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="relative h-[300px] lg:h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
          >
             {service.images && service.images[0] && (
               <Image src={service.images[0]} alt={service.title} fill className="object-cover" />
             )}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content (Left) */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Why TeamLite */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Shield size={24} />
                </div>
                <h2 className="text-2xl font-bold">Why TeamLite for {service.title}?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.whyTeamlite}
              </p>
            </motion.section>

            {/* Visual Break / Image 2 */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.15 }}
               className="relative h-[250px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
               {service.images && service.images[1] && (
                 <Image src={service.images[1]} alt="Service details" fill className="object-cover" />
               )}
            </motion.div>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-accent" /> Available Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle className="text-success shrink-0 mt-0.5" size={18} />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Sidebar / Pricing (Right) */}
          <div className="space-y-6">
            
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#0a0f25] to-[#050816] border border-primary/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.1)]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
                <TrendingUp size={120} />
              </div>
              
              <h3 className="text-xl font-bold mb-6 relative z-10">Pricing Details</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Corporate Agencies</p>
                  <p className="text-2xl font-medium text-white/50 line-through decoration-error/50">
                    {service.pricing.competitorAverage}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-success font-medium mb-1 flex items-center gap-2">
                    Affordable Small Business Price <Zap size={14} />
                  </p>
                  <p className="text-4xl font-bold text-white">
                    {service.pricing.teamlitePrice}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Transparent pricing designed for shopkeepers and startups.</p>
                </div>

                {/* View Detailed Bill Button */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <button 
                    onClick={() => setIsBillModalOpen(true)}
                    className="w-full py-4 rounded-xl glass text-white text-sm font-bold text-center hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2"
                  >
                    <FileText size={16} /> View Detailed Bill
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-white/10 text-white">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">We Support Local</h4>
                <p className="text-sm text-muted-foreground">We help everyday shop owners go digital without massive budgets.</p>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.45 }}
               className="relative h-[200px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
               {service.images && service.images[2] && (
                 <Image src={service.images[2]} alt="Premium service" fill className="object-cover" />
               )}
            </motion.div>

          </div>
        </div>

        {/* Bottom CTA Book Consultant */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-10 text-center max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to upgrade your business?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Don't let budget stop you from growing. Talk to our experts today and see how our highly affordable <span className="font-bold text-white">{service.title}</span> can transform your shop.
            </p>
            <Link href="/contact" className="inline-block py-4 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] hover:-translate-y-1">
              Book Consultant
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Detailed Bill Modal */}
      <AnimatePresence>
        {isBillModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0a0f25] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 shrink-0">
                <div className="flex items-center gap-3">
                  <FileText className="text-primary" />
                  <h3 className="text-xl font-bold">Detailed Estimate Bill</h3>
                </div>
                <button 
                  onClick={() => setIsBillModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 overflow-y-auto">
                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-sm text-muted-foreground mb-1">Service Provided:</p>
                  <p className="text-lg font-bold text-white">{service.title}</p>
                  <p className="text-xs text-success mt-2 flex items-center gap-1">
                    <Shield size={12} /> Full Security Included
                  </p>
                </div>

                {/* Line Items */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider mb-2 px-2">
                    <span>Description</span>
                    <span>Amount</span>
                  </div>
                  
                  {service.pricingBreakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                      <div>
                        <span className="font-medium text-white block">{item.phase}</span>
                        <span className="text-muted-foreground text-xs">{item.description}</span>
                      </div>
                      <span className="text-white font-medium">{item.cost}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="bg-black/50 p-6 rounded-xl border border-white/5 space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>GST (18%)</span>
                    <span>${gst.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                    <span className="font-bold text-white">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">${total.toLocaleString()}</span>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end gap-4 shrink-0">
                <button 
                  onClick={() => setIsBillModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
                >
                  Close
                </button>
                <Link 
                  href="/contact"
                  className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  Approve & Proceed
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
