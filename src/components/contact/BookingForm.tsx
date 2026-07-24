"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, Globe, ArrowRight, ArrowLeft, Send, Edit2 } from "lucide-react";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [bookedSlots, setBookedSlots] = useState<Record<number, string[]>>({});

  useEffect(() => {
    const stored = localStorage.getItem("teamlite_booked_slots");
    if (stored) {
      setBookedSlots(JSON.parse(stored));
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    linkedin: "",
    website: "",
    communication: "Email",
    
    projectType: "Website",
    industry: "Other",
    budget: "₹1L-5L",
    timeline: "Flexible",
    stage: "Idea",
    description: "",
    
    features: [] as string[],
    date: null as number | null,
    time: null as string | null
  });

  // Generate an array of dates from 1 to 31
  const availableDates = Array.from({ length: 31 }, (_, i) => i + 1);
  const allTimes = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"];

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleFeature = (feat: string) => {
    setFormData(prev => {
      const exists = prev.features.includes(feat);
      return {
        ...prev,
        features: exists ? prev.features.filter(f => f !== feat) : [...prev.features, feat]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 4) {
        handleNext();
        return;
    }

    if (!formData.date || !formData.time) {
      alert("Please select a date and time for the consultation.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send real email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Save booking to localStorage for local validation
        const updatedBooked = { ...bookedSlots };
        if (!updatedBooked[formData.date as number]) {
          updatedBooked[formData.date as number] = [];
        }
        updatedBooked[formData.date as number].push(formData.time as string);
        
        localStorage.setItem("teamlite_booked_slots", JSON.stringify(updatedBooked));
        setBookedSlots(updatedBooked);
  
        setIsSuccess(true);
      } else {
        alert("There was an error submitting your request. Please ensure the server is configured properly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditRequest = () => {
    setIsSuccess(false);
    setStep(4);
  };

  if (isSuccess) {
    return (
      <div className="glass p-8 md:p-12 rounded-3xl border border-primary/30 flex flex-col items-center text-center shadow-[0_0_50px_rgba(37,99,235,0.15)] min-h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center text-success mb-6 border border-success/30 relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <Check size={40} />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-white mb-2 relative z-10"
        >
          Welcome to TeamLite!
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 mb-8 max-w-md relative z-10"
        >
          Your request is now <span className="text-success font-medium">Active</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-lg bg-black/40 border border-white/10 rounded-2xl p-6 text-left mb-8 relative z-10"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <h4 className="text-white font-bold">Active Request Details</h4>
            <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-mono">ID: #{Math.floor(Math.random() * 10000) + 1000}</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Scheduled For</span>
              <span className="text-white font-medium flex items-center gap-2">
                <CalendarIcon size={14} className="text-primary"/> Date: {formData.date}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Time Slot</span>
              <span className="text-white font-medium flex items-center gap-2">
                <Clock size={14} className="text-primary"/> {formData.time} (IST)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Response Time</span>
              <span className="text-white font-medium">Within 2 Hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Communication</span>
              <span className="text-white font-medium px-3 py-1 bg-white/5 rounded-md border border-white/10">{formData.communication}</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 relative z-10"
        >
          <button onClick={handleEditRequest} className="px-6 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
            <Edit2 size={16} /> Edit / Re-Request
          </button>
          <a href="/" className="px-6 py-3 rounded-xl bg-white text-background font-bold hover:bg-gray-200 transition-colors">
            Return Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: "25%" }}
          animate={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Project Request</h2>
          <p className="text-sm text-white/50">Step {step} of 4 • {step === 1 ? 'Personal Info' : step === 2 ? 'Project Info' : step === 3 ? 'Requirements' : 'Schedule Meeting'}</p>
        </div>
        <div className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-mono">
          Autosaving draft...
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">First Name *</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Last Name *</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Doe" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Company Name</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Email Address *</label>
                  <input type="email" required name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="+1 234 567 890" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Country</label>
                  <input name="country" value={formData.country} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="United States" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">City</label>
                  <input name="city" value={formData.city} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="New York" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Preferred Communication (We will respond here)</label>
                <div className="flex flex-wrap gap-3">
                  {["Email", "Phone", "Google Meet", "Zoom", "Microsoft Teams", "WhatsApp"].map(method => (
                    <button 
                      key={method} type="button"
                      onClick={() => setFormData(prev => ({...prev, communication: method}))}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${formData.communication === method ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'} border`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Project Type *</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none">
                    {["Website", "Web Application", "Mobile App", "AI Solution", "Machine Learning", "Cybersecurity", "Cloud", "DevOps", "Custom Software", "SaaS", "Other"].map(opt => <option key={opt} value={opt} className="bg-[#050811]">{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Industry</label>
                  <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none">
                    {["Healthcare", "Education", "Finance", "Retail", "Manufacturing", "Real Estate", "Government", "Hospitality", "Travel", "Other"].map(opt => <option key={opt} value={opt} className="bg-[#050811]">{opt}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none">
                    {["₹25k-50k", "₹50k-1L", "₹1L-5L", "₹5L-10L", "₹10L+"].map(opt => <option key={opt} value={opt} className="bg-[#050811]">{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none">
                    {["ASAP", "1 Month", "2 Months", "3 Months", "Flexible"].map(opt => <option key={opt} value={opt} className="bg-[#050811]">{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Project Stage</label>
                  <select name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none">
                    {["Idea", "Planning", "Design", "Development", "Existing Product"].map(opt => <option key={opt} value={opt} className="bg-[#050811]">{opt}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Project Description *</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="Briefly describe your project goals and requirements..." />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <label className="text-sm text-white/70 block">Required Features</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Authentication", "Admin Panel", "Dashboard", "Payment Gateway", "Notifications", "AI", "Analytics", "Cloud Hosting", "API Integration", "Chat System", "Multi Language", "File Upload"].map(feat => {
                    const isSelected = formData.features.includes(feat);
                    return (
                      <button
                        key={feat} type="button"
                        onClick={() => toggleFeature(feat)}
                        className={`flex items-center gap-2 p-3 text-left rounded-xl transition-all border ${isSelected ? "bg-primary/10 border-primary/50 text-white" : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10"}`}
                      >
                        <div className={`shrink-0 w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-primary bg-primary" : "border-white/30"}`}>
                          {isSelected && <Check size={10} className="text-white" />}
                        </div>
                        <span className="text-sm">{feat}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CalendarIcon size={20} className="text-accent" /> Select Consultation Date
                </h3>
                <div className="flex items-center gap-1 text-xs text-white/50 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                  <Globe size={12} /> IST (UTC+5:30)
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white/70 mb-3">Available Dates (Current Month)</p>
                <div className="flex flex-wrap gap-2">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setFormData(prev => ({...prev, date, time: null}))}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all border ${formData.date === date ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'}`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {formData.date && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-6 border-t border-white/10"
                >
                  <p className="text-sm font-medium text-white/70 mb-3">Available Times</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {allTimes.map((time) => {
                      const isBooked = bookedSlots[formData.date as number]?.includes(time);
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={isBooked}
                          onClick={() => setFormData(prev => ({...prev, time}))}
                          className={`py-2 rounded-xl text-sm font-medium transition-all border ${
                            isBooked 
                              ? 'bg-black/40 border-white/5 text-white/20 cursor-not-allowed line-through' 
                              : formData.time === time 
                                ? 'bg-accent text-background border-accent shadow-[0_0_15px_rgba(45,212,191,0.4)]' 
                                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-white/40 mt-3">* Crossed out times have already been booked by other users.</p>
                </motion.div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-6 flex items-center justify-between border-t border-white/10">
          {step > 1 ? (
            <button type="button" onClick={handlePrev} className="px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors flex items-center gap-2">
              <ArrowLeft size={18} /> Back
            </button>
          ) : <div />}
          
          <button 
            type={step === 4 ? "submit" : "button"}
            onClick={step < 4 ? handleNext : undefined}
            disabled={isSubmitting || (step === 4 && (!formData.date || !formData.time))}
            className="px-8 py-3 rounded-xl bg-white text-background font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-background" /> Processing...</span>
            ) : step === 4 ? (
              <span className="flex items-center gap-2">Submit Request <Send size={18} /></span>
            ) : (
              <span className="flex items-center gap-2">Continue <ArrowRight size={18} /></span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
