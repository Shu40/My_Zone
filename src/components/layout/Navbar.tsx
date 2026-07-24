"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSelector from "./LanguageSelector";
import { useTheme } from "next-themes";
import { 
  Menu, X, ChevronDown, Search, ArrowRight, CheckCircle, 
  Moon, Sun, Code, Globe, Smartphone, Brain, Shield,
  Building2, Rocket, Layout, Terminal, Cpu, Database,
  Download, FileText, Lightbulb, Activity, BarChart, Factory, Landmark, BookOpen, Users, LifeBuoy, Zap, ChevronRight, Briefcase
} from "lucide-react";

// --- Massive Services Data ---
const servicesData = [
  {
    title: "Software Development",
    icon: <Code size={18} className="text-primary" />,
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
    icon: <Globe size={18} className="text-accent" />,
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
    icon: <Smartphone size={18} className="text-secondary" />,
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
    icon: <Brain size={18} className="text-success" />,
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
    icon: <Shield size={18} className="text-warning" />,
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

const solutionsData = [
  {
    title: "Business Solutions",
    icon: <Briefcase size={18} className="text-primary" />,
    items: [
      { name: "Digital Transformation", desc: "Modernize operations", badge: "Hot" },
      { name: "Business Automation", desc: "Streamline workflows" },
      { name: "Enterprise Modernization", desc: "Legacy upgrades", badge: "Enterprise" },
      { name: "Legacy System Upgrade", desc: "Tech refresh" },
      { name: "AI Transformation", desc: "Intelligent business" },
    ]
  },
  {
    title: "Industry Solutions",
    icon: <Building2 size={18} className="text-accent" />,
    items: [
      { name: "Healthcare Solution", desc: "Medical software" },
      { name: "Education ERP", desc: "School management" },
      { name: "FinTech Platform", desc: "Financial tech" },
      { name: "Retail Management", desc: "Store operations" },
      { name: "Manufacturing ERP", desc: "Factory operations" },
      { name: "Logistics Platform", desc: "Supply chain" },
      { name: "Real Estate CRM", desc: "Property management" },
      { name: "Hospitality Management", desc: "Hotel & booking" },
    ]
  },
  {
    title: "Startup Solutions",
    icon: <Rocket size={18} className="text-secondary" />,
    items: [
      { name: "MVP Development", desc: "Fast launch" },
      { name: "SaaS Product Development", desc: "Cloud products", badge: "Popular" },
      { name: "CTO as a Service", desc: "Tech leadership" },
      { name: "Product Engineering", desc: "End-to-end dev" },
      { name: "Startup Launch Package", desc: "Complete tech stack", badge: "New" },
    ]
  },
  {
    title: "AI Solutions",
    icon: <Brain size={18} className="text-success" />,
    items: [
      { name: "AI Agent", desc: "Autonomous bots" },
      { name: "AI Chatbot", desc: "Smart assistants" },
      { name: "RAG Platform", desc: "Knowledge retrieval", badge: "AI" },
      { name: "Document AI", desc: "Data extraction" },
      { name: "AI Automation", desc: "Process optimization" },
      { name: "AI Analytics", desc: "Predictive insights" },
    ]
  },
  {
    title: "Enterprise Solutions",
    icon: <Globe size={18} className="text-warning" />,
    items: [
      { name: "Cloud Migration", desc: "Seamless transition" },
      { name: "Data Engineering", desc: "Data pipelines" },
      { name: "API Integration", desc: "System connectivity" },
      { name: "Business Intelligence", desc: "Actionable insights", badge: "Enterprise" },
      { name: "Enterprise Architecture", desc: "Scalable systems" },
    ]
  }
];

const industriesData = [
  {
    title: "Healthcare & Education",
    icon: <Activity size={18} className="text-primary" />,
    items: [
      { name: "Hospital", desc: "Patient management" },
      { name: "Clinic", desc: "Outpatient software" },
      { name: "Pharmacy", desc: "Inventory & sales", badge: "Popular" },
      { name: "Telemedicine", desc: "Remote care", badge: "Hot" },
      { name: "Schools", desc: "Admin portals" },
      { name: "Colleges", desc: "Campus ERP" },
      { name: "Coaching", desc: "Student apps" },
      { name: "LMS", desc: "Online learning" },
    ]
  },
  {
    title: "Financials",
    icon: <BarChart size={18} className="text-warning" />,
    items: [
      { name: "Banking & Finance", desc: "Core banking tech", badge: "Hot" },
      { name: "Insurance", desc: "Insurtech platforms" },
      { name: "Trading", desc: "High frequency" },
      { name: "Wealth Management", desc: "Robo-advisors" }
    ]
  },
  {
    title: "Manufacturing & Core",
    icon: <Factory size={18} className="text-secondary" />,
    items: [
      { name: "Factory ERP", desc: "Production lines" },
      { name: "Warehouse", desc: "Logistics control" },
      { name: "Logistics", desc: "Supply chain" },
      { name: "Automotive", desc: "Vehicle management", badge: "New" },
      { name: "Agriculture", desc: "Farm tech" },
      { name: "Construction", desc: "Project mapping" },
    ]
  },
  {
    title: "Property & Hospitality",
    icon: <Building2 size={18} className="text-success" />,
    items: [
      { name: "Property Portal", desc: "Real estate listings" },
      { name: "CRM", desc: "Broker management" },
      { name: "Hotel", desc: "Booking systems", badge: "Popular" },
      { name: "Restaurant", desc: "Dining software" },
      { name: "Travel", desc: "Tour operators" },
    ]
  },
  {
    title: "Public Sector",
    icon: <Landmark size={18} className="text-warning" />,
    items: [
      { name: "Government", desc: "Public portals", badge: "Enterprise" },
      { name: "Smart City", desc: "Urban tech" },
      { name: "Public Transport", desc: "Ticketing" },
      { name: "Citizen Services", desc: "E-governance" },
    ]
  }
];

const resourcesData = [
  {
    title: "Knowledge",
    icon: <BookOpen size={18} className="text-primary" />,
    items: [
      { name: "Blog", desc: "Latest insights", badge: "Popular" },
      { name: "Documentation", desc: "Technical guides" },
      { name: "Developer Guides", desc: "Code resources" },
      { name: "Whitepapers", desc: "In-depth research", badge: "New" },
    ]
  },
  {
    title: "Case Studies",
    icon: <FileText size={18} className="text-accent" />,
    items: [
      { name: "Portfolio", desc: "Our best work" },
      { name: "Success Stories", desc: "Client growth" },
      { name: "Client Testimonials", desc: "What they say", badge: "Hot" },
    ]
  },
  {
    title: "Downloads",
    icon: <Download size={18} className="text-secondary" />,
    items: [
      { name: "Company Brochure", desc: "Corporate deck" },
      { name: "Pricing Guide", desc: "Cost breakdown" },
      { name: "API Documentation", desc: "Integration specs" },
      { name: "Open Source Projects", desc: "Free tools" },
    ]
  },
  {
    title: "Community",
    icon: <Users size={18} className="text-success" />,
    items: [
      { name: "GitHub", desc: "Code repos" },
      { name: "LinkedIn", desc: "Professional network" },
      { name: "Careers", desc: "Join our team", badge: "Hiring" },
      { name: "Events", desc: "Upcoming meets" },
    ]
  },
  {
    title: "Support",
    icon: <LifeBuoy size={18} className="text-warning" />,
    items: [
      { name: "Contact", desc: "Get in touch" },
      { name: "Help Center", desc: "FAQs & guides" },
    ]
  }
];

// --- Dashboard Data ---
const dashboardData = [
  {
    title: "Company Hub",
    icon: <Building2 size={18} className="text-primary" />,
    items: [
      { name: "Main Page", desc: "Core company overview", badge: "New" },
      { name: "Career Pages", desc: "Join our elite team", badge: "Hot" },
    ]
  },
  {
    title: "Media & PR",
    icon: <Globe size={18} className="text-accent" />,
    items: [
      { name: "Insights", desc: "Expert technical articles" },
      { name: "Press Release", desc: "Latest news & updates" },
    ]
  },
  {
    title: "Stakeholders",
    icon: <Landmark size={18} className="text-success" />,
    items: [
      { name: "Investors Page", desc: "Financial reports & data" },
    ]
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black border-b border-white/10 shadow-2xl py-3" : "bg-black py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="TeamLite Soft Solutions" width={48} height={48} className="object-contain hover:scale-105 transition-transform" />
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
              TeamLite
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {/* DASHBOARD MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("dashboard")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${activeDropdown === "dashboard" ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                Dashboard
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "dashboard" ? "rotate-180 text-primary" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "dashboard" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1500px] bg-[#02040a]/95 backdrop-blur-3xl mt-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 flex max-h-[85vh]"
                  >
                    <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-3 gap-6 xl:gap-8 flex-1">
                        {dashboardData.map((col, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                              {col.icon} {col.title}
                            </h4>
                            <ul className="space-y-1.5 flex-1">
                              {col.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={item.name === "Main Page" ? "/" : `/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className="group block relative rounded-lg p-3 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors flex items-center gap-2">
                                        {item.name}
                                      </span>
                                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary shrink-0" />
                                    </div>
                                    <div className="flex items-center justify-between mt-1">
                                      <p className="text-[12px] text-muted-foreground group-hover:text-white/60">
                                        {item.desc}
                                      </p>
                                      {'badge' in item && item.badge && (
                                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded text-white shrink-0 ml-2
                                          ${item.badge === 'Hot' ? 'bg-error/80' : 
                                            item.badge === 'New' ? 'bg-success/80' : 'bg-white/20'}`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-[380px] bg-gradient-to-br from-[#050816] to-[#0a0f25] border-l border-white/5 p-8 relative overflow-hidden flex flex-col justify-center">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                      
                      <div className="relative z-10">
                        <div className="inline-block p-3 rounded-2xl bg-white/10 border border-white/10 text-primary mb-6 shadow-lg shadow-primary/20 backdrop-blur-md">
                          <Activity size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Company Dashboard</h3>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                          Get a bird's-eye view of our operations, investments, and latest public announcements.
                        </p>
                        <div className="flex flex-col gap-3 mt-8">
                          <Link href="/about" className="w-full py-3.5 rounded-xl bg-primary text-white text-sm font-bold text-center hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                            About Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICES MEGA MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/services" className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${activeDropdown === "services" ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180 text-primary" : ""}`} />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1500px] bg-[#02040a]/95 backdrop-blur-3xl mt-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 flex max-h-[85vh]"
                  >
                    {/* Left Side: 5 Columns (Scrollable if needed) */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                      
                      {/* Top Bar inside Menu */}
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                        <div className="relative w-96">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input type="text" placeholder="Search services..." className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div className="flex gap-4">
                          <a href="/company-profile.pdf" download="TeamLite_Company_Profile.pdf" className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors font-medium">
                            <Download size={16} /> Download Company Profile
                          </a>
                          <Link href="/services" className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-medium">
                            View All Services <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>

                      {/* 5 Column Grid */}
                      <div className="grid grid-cols-5 gap-6 xl:gap-8 flex-1">
                        {servicesData.map((col, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                              {col.icon} {col.title}
                            </h4>
                            <ul className="space-y-1.5 flex-1">
                              {col.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/services/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block relative rounded-lg p-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors flex items-center gap-2 truncate">
                                        {item.name}
                                      </span>
                                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary shrink-0" />
                                    </div>
                                    <div className="flex items-center justify-between mt-0.5">
                                      <p className="text-[11px] text-muted-foreground truncate group-hover:text-white/60">
                                        {item.desc}
                                      </p>
                                      {item.badge && (
                                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded text-white shrink-0 ml-2
                                          ${item.badge === 'Hot' ? 'bg-error/80' : 
                                            item.badge === 'New' ? 'bg-success/80' : 
                                            item.badge === 'Enterprise' ? 'bg-primary/80' : 
                                            item.badge === 'AI' ? 'bg-accent/80' : 'bg-white/20'}`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Premium CTA */}
                    <div className="w-[380px] bg-gradient-to-br from-[#050816] to-[#0a0f25] border-l border-white/5 p-8 relative overflow-hidden flex flex-col justify-center">
                      {/* Animated Background inside CTA */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                      
                      <div className="relative z-10">
                        <div className="inline-block p-3 rounded-2xl bg-white/10 border border-white/10 text-primary mb-6 shadow-lg shadow-primary/20 backdrop-blur-md">
                          <Building2 size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Need a Custom Digital Solution?</h3>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                          Build secure, scalable software with AI, Cloud and Cybersecurity experts.
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                          {["Free Consultation", "NDA Available", "Enterprise Ready", "Agile Delivery", "Dedicated Team"].map((feat, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                              <CheckCircle size={16} className="text-success" /> {feat}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-col gap-3">
                          <Link href="/contact" className="w-full py-3.5 rounded-xl bg-primary text-white text-sm font-bold text-center hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                            Book Consultation
                          </Link>
                          <Link href="/quote" className="w-full py-3.5 rounded-xl glass text-white text-sm font-bold text-center hover:bg-white/10 transition-all border border-white/10">
                            Get Free Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            

            {/* SOLUTIONS MEGA MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${activeDropdown === "solutions" ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                Solutions
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180 text-primary" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1500px] bg-[#02040a]/95 backdrop-blur-3xl mt-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 flex max-h-[85vh]"
                  >
                    {/* Left Side: 5 Columns (Scrollable if needed) */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                      
                      {/* Top Bar inside Menu */}
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                        <div className="relative w-96">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input type="text" placeholder="Search solutions..." className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div className="flex gap-4">
                          <Link href="/solutions" className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-medium">
                            View All Solutions <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>

                      {/* 5 Column Grid */}
                      <div className="grid grid-cols-5 gap-6 xl:gap-8 flex-1">
                        {solutionsData.map((col, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                              {col.icon} {col.title}
                            </h4>
                            <ul className="space-y-1.5 flex-1">
                              {col.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/solutions/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block relative rounded-lg p-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors flex items-center gap-2 truncate">
                                        {item.name}
                                      </span>
                                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary shrink-0" />
                                    </div>
                                    <div className="flex items-center justify-between mt-0.5">
                                      <p className="text-[11px] text-muted-foreground truncate group-hover:text-white/60">
                                        {item.desc}
                                      </p>
                                      {item.badge && (
                                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded text-white shrink-0 ml-2
                                          ${item.badge === 'Hot' ? 'bg-error/80' : 
                                            item.badge === 'New' ? 'bg-success/80' : 
                                            item.badge === 'Enterprise' ? 'bg-primary/80' : 
                                            item.badge === 'AI' ? 'bg-accent/80' : 'bg-white/20'}`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Premium CTA */}
                    <div className="w-[380px] bg-gradient-to-br from-[#050816] to-[#0a0f25] border-l border-white/5 p-8 relative overflow-hidden flex flex-col justify-center">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                      <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
                      
                      <div className="relative z-10">
                        <div className="inline-block p-3 rounded-2xl bg-white/10 border border-white/10 text-accent mb-6 shadow-lg shadow-accent/20 backdrop-blur-md">
                          <Lightbulb size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Transform Your Business</h3>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                          Discover scalable software solutions tailored to your business.
                        </p>

                        <div className="flex flex-col gap-3 mt-8">
                          <Link href="/solutions" className="w-full py-3.5 rounded-xl bg-accent text-white text-sm font-bold text-center hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]">
                            Explore Solutions
                          </Link>
                          <Link href="/contact" className="w-full py-3.5 rounded-xl glass text-white text-sm font-bold text-center hover:bg-white/10 transition-all border border-white/10">
                            Book Strategy Call
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIES MEGA MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${activeDropdown === "industries" ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                Industries
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180 text-primary" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1500px] bg-[#02040a]/95 backdrop-blur-3xl mt-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 flex max-h-[85vh]"
                  >
                    <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-5 gap-6 xl:gap-8 flex-1">
                        {industriesData.map((col, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                              {col.icon} {col.title}
                            </h4>
                            <ul className="space-y-1.5 flex-1">
                              {col.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/industries/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block relative rounded-lg p-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors flex items-center gap-2 truncate">
                                        {item.name}
                                      </span>
                                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary shrink-0" />
                                    </div>
                                    <div className="flex items-center justify-between mt-0.5">
                                      <p className="text-[11px] text-muted-foreground truncate group-hover:text-white/60">
                                        {item.desc}
                                      </p>
                                      {item.badge && (
                                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded text-white shrink-0 ml-2
                                          ${item.badge === 'Hot' ? 'bg-error/80' : 
                                            item.badge === 'New' ? 'bg-success/80' : 
                                            item.badge === 'Enterprise' ? 'bg-primary/80' : 'bg-white/20'}`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-[380px] bg-gradient-to-br from-[#050816] to-[#0a0f25] border-l border-white/5 p-8 relative overflow-hidden flex flex-col justify-center">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                      <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-success/20 rounded-full blur-[80px]" />
                      
                      <div className="relative z-10">
                        <div className="inline-block p-3 rounded-2xl bg-white/10 border border-white/10 text-secondary mb-6 shadow-lg shadow-secondary/20 backdrop-blur-md">
                          <Factory size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Industries We Empower</h3>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                          Helping businesses across multiple industries with modern software.
                        </p>
                        <div className="flex flex-col gap-3 mt-8">
                          <Link href="/portfolio" className="w-full py-3.5 rounded-xl bg-secondary text-white text-sm font-bold text-center hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                            View Case Studies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RESOURCES MEGA MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${activeDropdown === "resources" ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                Resources
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "resources" ? "rotate-180 text-primary" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "resources" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1500px] bg-[#02040a]/95 backdrop-blur-3xl mt-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 flex max-h-[85vh]"
                  >
                    <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-5 gap-6 xl:gap-8 flex-1">
                        {resourcesData.map((col, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                              {col.icon} {col.title}
                            </h4>
                            <ul className="space-y-1.5 flex-1">
                              {col.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/resources/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block relative rounded-lg p-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors flex items-center gap-2 truncate">
                                        {item.name}
                                      </span>
                                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary shrink-0" />
                                    </div>
                                    <div className="flex items-center justify-between mt-0.5">
                                      <p className="text-[11px] text-muted-foreground truncate group-hover:text-white/60">
                                        {item.desc}
                                      </p>
                                      {item.badge && (
                                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded text-white shrink-0 ml-2
                                          ${item.badge === 'Hiring' ? 'bg-error/80' : 
                                            item.badge === 'New' ? 'bg-success/80' : 
                                            item.badge === 'Popular' ? 'bg-primary/80' : 'bg-white/20'}`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-[380px] bg-gradient-to-br from-[#050816] to-[#0a0f25] border-l border-white/5 p-8 relative overflow-hidden flex flex-col justify-center">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                      <div className="absolute -top-32 -right-32 w-64 h-64 bg-warning/20 rounded-full blur-[80px]" />
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                      
                      <div className="relative z-10">
                        <div className="inline-block p-3 rounded-2xl bg-white/10 border border-white/10 text-warning mb-6 shadow-lg shadow-warning/20 backdrop-blur-md">
                          <BookOpen size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Explore Resources</h3>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                          Read blogs, case studies, technical articles and company insights.
                        </p>
                        <div className="flex flex-col gap-3 mt-8">
                          <Link href="/blog" className="w-full py-3.5 rounded-xl bg-warning text-black text-sm font-bold text-center hover:bg-warning/90 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                            Visit Blog
                          </Link>
                          <Link href="/contact" className="w-full py-3.5 rounded-xl glass text-white text-sm font-bold text-center hover:bg-white/10 transition-all border border-white/10">
                            Download Company Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors py-2">
              Pricing
            </Link>
            <Link href="/experts" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors py-2">
              Experts
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <LanguageSelector />
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-muted-foreground hover:bg-white/5 hover:text-white transition-colors"
            >
              {mounted && theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link 
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-white text-background font-semibold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Simplified) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                <div className="pl-4 border-l border-white/10 space-y-4">
                  {servicesData.map((col, i) => (
                    <div key={i}>
                      <span className="text-sm font-bold text-primary mb-2 block">{col.title}</span>
                      <div className="pl-4 space-y-2">
                        {col.items.slice(0, 5).map((item, j) => (
                          <Link key={j} href="#" className="block text-sm text-muted-foreground hover:text-white">{item.name}</Link>
                        ))}
                        <Link href="#" className="text-xs text-primary mt-2 block">+ {col.items.length - 5} more...</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/solutions" className="text-lg font-bold text-white">Solutions</Link>
              <Link href="/industries" className="text-lg font-bold text-white">Industries</Link>
              <div className="border-b border-white/5 pb-4 mb-4">
                <h3 className="text-lg font-bold text-white mb-4">Dashboard</h3>
                <div className="pl-4 border-l border-white/10 space-y-3">
                  <Link href="/" className="block text-sm font-medium text-muted-foreground hover:text-white">Main Pages</Link>
                  <Link href="/careers" className="block text-sm font-medium text-muted-foreground hover:text-white">Career Pages</Link>
                  <Link href="/insights" className="block text-sm font-medium text-muted-foreground hover:text-white">Insights</Link>
                  <Link href="/investors" className="block text-sm font-medium text-muted-foreground hover:text-white">Investors Page</Link>
                  <Link href="/press" className="block text-sm font-medium text-muted-foreground hover:text-white">Press Release</Link>
                </div>
              </div>
              <Link href="/resources" className="text-lg font-bold text-white">Resources</Link>
              <Link href="/pricing" className="text-lg font-bold text-white">Pricing</Link>
              <Link href="/experts" className="text-lg font-bold text-white">Experts</Link>
              <div className="pt-2 border-t border-white/10 mt-2">
                <LanguageSelector />
              </div>
              <Link href="/contact" className="mt-4 w-full py-4 rounded-xl bg-primary text-white text-center font-semibold text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
