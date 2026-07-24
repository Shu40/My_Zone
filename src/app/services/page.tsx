"use client";

import { motion } from "framer-motion";
import { 
  Code, Globe, Smartphone, Brain, Shield, Cloud, ArrowRight,
  CheckCircle, Terminal, Layers, Layout, Lock
} from "lucide-react";
import Link from "next/link";

// Duplicated from Navbar for standalone page usage
const servicesData = [
  {
    title: "Software Development",
    icon: <Code size={24} className="text-primary" />,
    color: "from-primary/20",
    border: "group-hover:border-primary/50",
    items: [
      { name: "Custom Software", desc: "Tailored systems", badge: "Popular" },
      { name: "Enterprise Software", desc: "Scale business" },
      { name: "SaaS Development", desc: "Cloud products", badge: "Hot" },
      { name: "CRM Development", desc: "Customer management" },
      { name: "ERP Development", desc: "Resource planning" },
      { name: "HRMS", desc: "Human resources" },
      { name: "POS System", desc: "Point of sale" },
      { name: "Billing Software", desc: "Invoicing tech" },
      { name: "Inventory Management", desc: "Stock control" },
      { name: "Hospital Management", desc: "Healthcare sys" },
      { name: "School ERP", desc: "Education admin" },
      { name: "Restaurant Management", desc: "Food service" },
      { name: "Booking Management", desc: "Reservations" },
      { name: "LMS", desc: "Learning systems" },
      { name: "API Development", desc: "Integrations" },
      { name: "Microservices", desc: "Decoupled arch" },
      { name: "Legacy Modernization", desc: "Tech upgrades", badge: "Enterprise" },
    ]
  },
  {
    title: "Web Development",
    icon: <Globe size={24} className="text-accent" />,
    color: "from-accent/20",
    border: "group-hover:border-accent/50",
    items: [
      { name: "Business Website", desc: "Corporate sites" },
      { name: "Corporate Website", desc: "Brand presence" },
      { name: "Portfolio Website", desc: "Showcase work" },
      { name: "Landing Page", desc: "High conversion" },
      { name: "E-Commerce", desc: "Online stores", badge: "Popular" },
      { name: "Marketplace", desc: "Multi-vendor" },
      { name: "News Portal", desc: "Media publishing" },
      { name: "CMS Development", desc: "Content management" },
      { name: "Dashboard", desc: "Data visualization" },
      { name: "Admin Panel", desc: "System control" },
      { name: "Customer Portal", desc: "Client access" },
      { name: "Vendor Portal", desc: "Supplier access" },
      { name: "Real Estate Website", desc: "Property listings" },
      { name: "Healthcare Website", desc: "Medical sites" },
      { name: "Education Website", desc: "School portals" },
      { name: "Travel Website", desc: "Booking sites" },
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={24} className="text-secondary" />,
    color: "from-secondary/20",
    border: "group-hover:border-secondary/50",
    items: [
      { name: "Android Apps", desc: "Google Play" },
      { name: "iOS Apps", desc: "App Store" },
      { name: "Flutter Apps", desc: "Cross-platform", badge: "Hot" },
      { name: "React Native", desc: "JS mobile apps" },
      { name: "Cross Platform", desc: "Write once run anywhere" },
      { name: "Progressive Web Apps", desc: "Web to app" },
      { name: "Wearable Apps", desc: "Smartwatch dev" },
      { name: "Enterprise Mobile Apps", desc: "Internal tools", badge: "Enterprise" },
      { name: "Healthcare Apps", desc: "Telemedicine" },
      { name: "Food Delivery Apps", desc: "On-demand food" },
      { name: "Taxi Booking Apps", desc: "Ride sharing" },
      { name: "E-Commerce Apps", desc: "Mobile shopping" },
      { name: "FinTech Apps", desc: "Banking & crypto" },
    ]
  },
  {
    title: "Artificial Intelligence",
    icon: <Brain size={24} className="text-success" />,
    color: "from-success/20",
    border: "group-hover:border-success/50",
    items: [
      { name: "AI Chatbots", desc: "Smart assistants" },
      { name: "Agentic AI", desc: "Autonomous agents", badge: "New" },
      { name: "AI Automation", desc: "Workflow optimization" },
      { name: "RAG Systems", desc: "Knowledge retrieval", badge: "Hot" },
      { name: "OpenAI Integration", desc: "GPT models" },
      { name: "Gemini Integration", desc: "Google AI" },
      { name: "Claude Integration", desc: "Anthropic AI" },
      { name: "Voice AI", desc: "Speech recognition" },
      { name: "Vision AI", desc: "Image processing" },
      { name: "Document AI", desc: "Data extraction" },
      { name: "OCR", desc: "Text recognition" },
      { name: "NLP", desc: "Language processing" },
      { name: "Machine Learning", desc: "Custom models", badge: "Enterprise" },
      { name: "Predictive Analytics", desc: "Data forecasting" },
      { name: "Recommendation Engine", desc: "Smart suggestions" },
      { name: "Computer Vision", desc: "Visual data analysis" },
      { name: "Fraud Detection", desc: "Security AI" },
      { name: "Generative AI", desc: "Content creation", badge: "AI" },
    ]
  },
  {
    title: "Cybersecurity & Cloud",
    icon: <Shield size={24} className="text-warning" />,
    color: "from-warning/20",
    border: "group-hover:border-warning/50",
    items: [
      { name: "Penetration Testing", desc: "Ethical hacking" },
      { name: "Vulnerability Assessment", desc: "Risk scanning" },
      { name: "Security Audit", desc: "Compliance check" },
      { name: "API Security", desc: "Endpoint protection" },
      { name: "Cloud Security", desc: "Infrastructure safety", badge: "Enterprise" },
      { name: "Network Security", desc: "Firewalls & VPNs" },
      { name: "DevSecOps", desc: "Secure pipelines" },
      { name: "SOC Services", desc: "24/7 monitoring" },
      { name: "Compliance", desc: "ISO, HIPAA, GDPR" },
      { name: "AWS", desc: "Amazon cloud" },
      { name: "Azure", desc: "Microsoft cloud" },
      { name: "Google Cloud", desc: "GCP services" },
      { name: "Docker", desc: "Containerization" },
      { name: "Kubernetes", desc: "Orchestration", badge: "Hot" },
      { name: "Terraform", desc: "Infra as code" },
      { name: "CI/CD", desc: "Automated deployment" },
      { name: "Cloud Migration", desc: "System transition" },
      { name: "Monitoring", desc: "System health" },
      { name: "Infrastructure Automation", desc: "Zero-touch ops" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Capabilities Catalog
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          >
            Comprehensive <br />
            <span className="text-gradient">Technology Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            From custom software and AI integration to enterprise cloud architecture and cybersecurity, explore our massive catalog of 50+ specialized engineering capabilities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-white text-background font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-flex items-center gap-2"
            >
              Discuss Your Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {servicesData.map((category, idx) => (
              <div key={idx} id={category.title.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${category.color.replace('from-', 'text-').replace('/20', '')}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                    <p className="text-muted-foreground mt-2 text-lg">Explore {category.items.length} specialized solutions</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: (i % 4) * 0.1 }}
                      className={`glass p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${category.border}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <CheckCircle size={24} className="text-white/20 group-hover:text-white/60 transition-colors" />
                        {item.badge && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full 
                            ${item.badge === 'Hot' ? 'bg-error/20 text-error border border-error/30' : 
                              item.badge === 'Popular' ? 'bg-primary/20 text-primary border border-primary/30' : 
                              item.badge === 'Enterprise' ? 'bg-warning/20 text-warning border border-warning/30' :
                              'bg-success/20 text-success border border-success/30'}`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-semibold text-white/60">Learn more</span>
                        <ArrowRight size={16} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[40px] border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Book a free consultation with our solution architects today and let's build something extraordinary together.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-white text-background font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-block"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
