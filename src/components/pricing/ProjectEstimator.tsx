"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Calculator, Zap, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

const projectTypes = [
  { id: "website", name: "Website", baseCost: 25000, baseTimeline: 2 },
  { id: "webapp", name: "Web Application", baseCost: 150000, baseTimeline: 6 },
  { id: "mobile", name: "Mobile App", baseCost: 120000, baseTimeline: 8 },
  { id: "ai", name: "AI Solution", baseCost: 200000, baseTimeline: 10 },
  { id: "ml", name: "Machine Learning", baseCost: 150000, baseTimeline: 8 },
  { id: "cyber", name: "Cybersecurity", baseCost: 50000, baseTimeline: 3 },
  { id: "cloud", name: "Cloud Migration", baseCost: 75000, baseTimeline: 4 },
  { id: "custom", name: "Custom Software", baseCost: 300000, baseTimeline: 12 },
];

const featureList = [
  { id: "auth", name: "Authentication", cost: 15000, weeks: 1 },
  { id: "payments", name: "Payment Gateway", cost: 25000, weeks: 1 },
  { id: "admin", name: "Admin Panel", cost: 40000, weeks: 2 },
  { id: "dashboard", name: "Dashboard", cost: 30000, weeks: 2 },
  { id: "api", name: "API Integration", cost: 20000, weeks: 1 },
  { id: "chatbot", name: "AI Chatbot", cost: 50000, weeks: 2 },
  { id: "cloud", name: "Cloud Hosting", cost: 25000, weeks: 1 },
  { id: "notifications", name: "Notifications", cost: 15000, weeks: 1 },
  { id: "analytics", name: "Analytics", cost: 30000, weeks: 1 },
];

const timelineOptions = [
  { id: "urgent", name: "Urgent (ASAP)", multiplier: 1.5, weeksMultiplier: 0.6 },
  { id: "normal", name: "Normal", multiplier: 1.0, weeksMultiplier: 1.0 },
  { id: "flexible", name: "Flexible", multiplier: 0.8, weeksMultiplier: 1.4 },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("normal");
  const [budget, setBudget] = useState(500000); // For slider

  const [estimatedCost, setEstimatedCost] = useState(0);
  const [estimatedWeeks, setEstimatedWeeks] = useState(0);
  const [recommendedPlan, setRecommendedPlan] = useState("Starter");

  useEffect(() => {
    // Calculate Cost
    const type = projectTypes.find((t) => t.id === selectedType);
    if (!type) return;

    let cost = type.baseCost;
    let weeks = type.baseTimeline;

    selectedFeatures.forEach((featId) => {
      const feat = featureList.find((f) => f.id === featId);
      if (feat) {
        cost += feat.cost;
        weeks += feat.weeks;
      }
    });

    const timeOpt = timelineOptions.find((t) => t.id === timeline);
    if (timeOpt) {
      cost = cost * timeOpt.multiplier;
      weeks = Math.ceil(weeks * timeOpt.weeksMultiplier);
    }

    setEstimatedCost(cost);
    setEstimatedWeeks(weeks);

    // Recommend Plan
    if (cost > 300000) setRecommendedPlan("Enterprise");
    else if (cost > 100000) setRecommendedPlan("Business");
    else if (cost > 40000) setRecommendedPlan("Professional");
    else setRecommendedPlan("Starter");
  }, [selectedType, selectedFeatures, timeline, budget]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) => 
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="w-full py-20 relative" id="estimator">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Interactive Project <span className="text-accent">Estimator</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Get an instant, transparent estimate for your next project. Select your requirements below.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Controls */}
          <div className="lg:col-span-2 space-y-8 glass p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Zap size={20} className="text-accent"/> 1. Project Type</h3>
              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedType === type.id ? "bg-accent text-background shadow-[0_0_15px_rgba(6,182,212,0.4)]" : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"}`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Calculator size={20} className="text-accent"/> 2. Select Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {featureList.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-start gap-2 p-3 text-left rounded-xl transition-all border ${isSelected ? "bg-primary/10 border-primary/50 text-white" : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10"}`}
                    >
                      <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-primary bg-primary" : "border-white/30"}`}>
                        {isSelected && <Check size={10} className="text-white" />}
                      </div>
                      <span className="text-sm">{feat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Clock size={20} className="text-accent"/> 3. Timeline & Urgency</h3>
              <div className="flex flex-wrap gap-3">
                {timelineOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setTimeline(opt.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${timeline === opt.id ? "bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"}`}
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
               <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
                 <span className="flex items-center gap-2"><TrendingUp size={20} className="text-accent"/> 4. Maximum Budget</span>
                 <span className="text-primary font-mono">{formatCurrency(budget)}</span>
               </h3>
               <input 
                 type="range" 
                 min="50000" 
                 max="2000000" 
                 step="10000"
                 value={budget}
                 onChange={(e) => setBudget(Number(e.target.value))}
                 className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
               />
               <p className="text-xs text-muted-foreground mt-2">Adjusting budget filters recommended enterprise solutions.</p>
            </div>
          </div>

          {/* Right Result Panel */}
          <div className="lg:col-span-1 glass p-8 rounded-3xl border border-primary/20 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.1)]">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Estimation Result</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white/60 mb-1 font-mono uppercase tracking-widest">Estimated Cost</p>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={estimatedCost}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
                    >
                      {formatCurrency(estimatedCost)}<span className="text-lg text-white/40 font-normal">+</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div>
                  <p className="text-sm text-white/60 mb-1 font-mono uppercase tracking-widest">Est. Timeline</p>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={estimatedWeeks}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-white"
                    >
                      {estimatedWeeks > 4 ? `${Math.floor(estimatedWeeks / 4)} - ${Math.ceil(estimatedWeeks / 4) + 1} Months` : `${estimatedWeeks} - ${estimatedWeeks + 2} Weeks`}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <p className="text-xs text-white/60 mb-2 uppercase tracking-wider">Recommended Plan</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-lg">
                    <Check size={18} /> {recommendedPlan} Plan
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link 
                href="/contact"
                className="w-full py-4 rounded-xl bg-white text-background font-bold text-center block hover:bg-gray-200 transition-colors"
              >
                Request Detailed Quote
              </Link>
              <p className="text-xs text-center text-white/40 mt-4 flex items-center justify-center gap-1">
                <Info size={12} /> This is a rough estimation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
