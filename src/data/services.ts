export interface ServiceDetails {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: {
    what: string;
    why: string;
  };
  whyTeamlite: string;
  features: string[];
  techStack: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  packages: {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
  }[];
  industries: string[];
  portfolio: {
    title: string;
    description: string;
    image: string;
  }[];
  benefits: {
    title: string;
    metric: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    id: string;
    title: string;
  }[];
  pricing: {
    competitorAverage: string;
    teamlitePrice: string;
  };
  pricingBreakdown: {
    phase: string;
    description: string;
    cost: string;
  }[];
  images: string[];
}

const defaultStats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Support Available", value: "24/7" }
];

export const servicesData: Record<string, ServiceDetails> = {
  "custom-software": {
    id: "custom-software",
    title: "Custom Software Development",
    category: "Software Development",
    description: "Tailored software systems built to automate your daily operations. Perfect for small businesses, agencies, and retail shops looking to scale without breaking the bank.",
    overview: {
      what: "Custom software tailored precisely to the unique workflows of your business. We build systems that adapt to you, not the other way around.",
      why: "Off-the-shelf solutions often include bloatware and lack specific features. Custom software streamlines operations, reduces manual work, and scales as you grow."
    },
    whyTeamlite: "We believe premium software shouldn't be a luxury. TeamLite offers affordable, high-quality development designed specifically for local businesses and shop owners to compete digitally.",
    features: [
      "Custom Built for Your Specific Workflow",
      "Easy-to-use Dashboard",
      "Mobile-Friendly Interface",
      "Free 3 Months Maintenance",
      "No Hidden Server Costs",
      "Automated Reporting & Analytics",
      "Role-Based Access Control",
      "Third-party API Integrations"
    ],
    techStack: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Redis", "TypeScript"],
    process: [
      { step: 1, title: "Discovery", description: "We analyze your requirements and define project scope." },
      { step: 2, title: "Design", description: "Creating intuitive UI/UX workflows and prototypes." },
      { step: 3, title: "Development", description: "Agile building of core features and integrations." },
      { step: 4, title: "Testing", description: "Rigorous QA to ensure a bug-free experience." },
      { step: 5, title: "Deployment", description: "Launching your software to production environments." }
    ],
    packages: [
      {
        name: "Starter",
        price: "$1,500",
        description: "Perfect for small internal tools.",
        features: ["Core Features", "Basic Dashboard", "Email Support", "1 Month Maintenance"]
      },
      {
        name: "Professional",
        price: "$3,500",
        description: "Ideal for growing businesses needing automation.",
        features: ["Advanced Workflows", "API Integrations", "Priority Support", "3 Months Maintenance"],
        isPopular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Large scale enterprise systems.",
        features: ["Microservices", "Custom SLAs", "Dedicated Team", "24/7 Phone Support"]
      }
    ],
    industries: ["Retail", "Healthcare", "Logistics", "Real Estate", "Finance", "Education"],
    portfolio: [
      { title: "InventoryPro", description: "Automated inventory management system.", image: "/software_development_dashboard.png" },
      { title: "StaffSync", description: "HR & Payroll automation platform.", image: "/ecommerce_mobile_app.png" },
      { title: "LogiTrack", description: "Real-time logistics tracking software.", image: "/cybersecurity_shield.png" }
    ],
    benefits: [
      { title: "Time Saved", metric: "40%", description: "Reduction in manual administrative tasks." },
      { title: "ROI Increase", metric: "3x", description: "Average return on investment in the first year." },
      { title: "Error Rate", metric: "⬇ 90%", description: "Drastic reduction in human errors via automation." }
    ],
    stats: defaultStats,
    testimonials: [
      { name: "John Doe", role: "CEO", company: "RetailMax", content: "The custom CRM TeamLite built transformed our sales process completely." },
      { name: "Jane Smith", role: "Operations Head", company: "Logistics Hub", content: "Affordable and highly scalable. Best technical decision we've made." }
    ],
    faqs: [
      { question: "How long does it take?", answer: "Usually 4-12 weeks depending on complexity." },
      { question: "Do I own the source code?", answer: "Yes, you have full IP rights upon completion." },
      { question: "Do you provide post-launch support?", answer: "Yes, 3 months of free maintenance is included." }
    ],
    relatedServices: [
      { id: "business-website", title: "Business Website Development" },
      { id: "android-apps", title: "Android App Development" }
    ],
    pricing: {
      competitorAverage: "$5,000+",
      teamlitePrice: "$1,500"
    },
    pricingBreakdown: [
      { phase: "Requirements & UI/UX Design", description: "UI/UX planning and workflow mapping", cost: "$300" },
      { phase: "Core Development", description: "Building the main features and database", cost: "$700" },
      { phase: "Security Implementation", description: "Full security protocol integration", cost: "$200" },
      { phase: "Testing & Deployment", description: "Bug fixing, making it live, server setup", cost: "$200" },
      { phase: "Service Charge", description: "Project management and handling", cost: "$100" }
    ],
    images: ["/software_development_dashboard.png", "/ecommerce_mobile_app.png", "/cybersecurity_shield.png"]
  }
};

// Fallback data for services not yet explicitly defined
export const getServiceDetails = (slug: string): ServiceDetails => {
  if (servicesData[slug]) {
    return servicesData[slug];
  }
  
  // Format slug to Title Case
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    id: slug,
    title: title,
    category: "Professional Services",
    description: `High-quality ${title} solutions made affordable for small businesses, shops, and startups. We deliver premium results tailored to your exact needs.`,
    overview: {
      what: `${title} tailored to modern industry standards. We create robust systems that meet your exact operational requirements.`,
      why: `Investing in professional ${title} ensures reliability, scalability, and competitive advantage in a digital-first world.`
    },
    whyTeamlite: "We believe in empowering local businesses and shop owners with top-tier technology at a fraction of the cost. Affordable, transparent, and built for your success.",
    features: [
      "Tailored to Small Businesses",
      "Highly Affordable Pricing",
      "Easy to Manage",
      "Dedicated Support",
      "Full Security Included",
      "Scalable Architecture",
      "Modern UI/UX Design",
      "Performance Optimized"
    ],
    techStack: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "MongoDB"],
    process: [
      { step: 1, title: "Consultation", description: "Understanding your vision and business goals." },
      { step: 2, title: "Strategy", description: "Mapping out the architecture and timeline." },
      { step: 3, title: "Execution", description: "Building the solution with iterative feedback." },
      { step: 4, title: "Quality Assurance", description: "Thorough testing across all devices." },
      { step: 5, title: "Launch & Support", description: "Going live and providing ongoing maintenance." }
    ],
    packages: [
      {
        name: "Basic",
        price: "$999",
        description: "Essential features to get started.",
        features: ["Core implementation", "Standard design", "Email support"]
      },
      {
        name: "Pro",
        price: "$1,999",
        description: "Advanced features for growing brands.",
        features: ["Custom implementation", "Premium design", "Priority support", "Analytics setup"],
        isPopular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale solution for large operations.",
        features: ["Unlimited revisions", "Dedicated manager", "24/7 Phone support", "Custom integrations"]
      }
    ],
    industries: ["E-commerce", "SaaS", "Healthcare", "Education", "Real Estate", "Finance"],
    portfolio: [
      { title: "Project Alpha", description: `A successful ${title} implementation.`, image: "/software_development_dashboard.png" },
      { title: "Project Beta", description: `Award-winning ${title} solution.`, image: "/ecommerce_mobile_app.png" },
      { title: "Project Gamma", description: `Enterprise-grade ${title} platform.`, image: "/cybersecurity_shield.png" }
    ],
    benefits: [
      { title: "Efficiency", metric: "2x", description: "Double your operational efficiency." },
      { title: "Uptime", metric: "99.9%", description: "Guaranteed reliability." },
      { title: "Cost Savings", metric: "30%", description: "Lower long-term maintenance costs." }
    ],
    stats: defaultStats,
    testimonials: [
      { name: "Alex Johnson", role: "Founder", company: "TechStart", content: `TeamLite delivered the best ${title} service we could ask for. Highly recommended!` },
      { name: "Sarah Williams", role: "Director", company: "GlobalCorp", content: "Professional, fast, and incredibly affordable. A game changer for our business." }
    ],
    faqs: [
      { question: "Do you offer custom packages?", answer: "Yes, we can tailor a package specifically for your requirements and budget." },
      { question: "What is the typical turnaround time?", answer: "Depending on scope, most projects are completed within 2 to 6 weeks." },
      { question: "Are there any hidden fees?", answer: "No, our pricing is 100% transparent. What you see is what you pay." },
      { question: "Do you provide ongoing support?", answer: "Absolutely, all projects include a post-launch support period." }
    ],
    relatedServices: [
      { id: "custom-software", title: "Custom Software Development" },
      { id: "business-website", title: "Business Website Development" },
      { id: "e-commerce", title: "E-Commerce Development" }
    ],
    pricing: {
      competitorAverage: "$3,000+",
      teamlitePrice: "Approx $1,500"
    },
    pricingBreakdown: [
      { phase: "Planning & UI/UX Design", description: "Understanding your shop's needs", cost: "$300" },
      { phase: "Core Implementation", description: "Building the core solution", cost: "$700" },
      { phase: "Security Implementation", description: "Full security integration", cost: "$200" },
      { phase: "Deployment & Support", description: "Making it live and providing training", cost: "$200" },
      { phase: "Service Charge", description: "Handling fees", cost: "$100" }
    ],
    images: ["/software_development_dashboard.png", "/ecommerce_mobile_app.png", "/cybersecurity_shield.png"]
  };
};
