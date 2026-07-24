export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  duration: string;
  image: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  metrics: { value: string; label: string }[];
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "global-fintech-platform",
    title: "Global FinTech Platform",
    subtitle: "High-frequency trading infrastructure for a Fortune 500 bank",
    client: "Confidential Fortune 500 Bank",
    category: "Financial Technology",
    duration: "14 Months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    overview: "We architected and developed a next-generation trading platform capable of processing over 10,000 transactions per second with sub-millisecond latency. The system incorporates real-time risk analysis and automated compliance reporting.",
    challenges: [
      { title: "Latency Requirements", description: "The platform required absolute sub-millisecond response times under peak loads to remain competitive." },
      { title: "Data Security", description: "Strict compliance with international banking regulations and absolute data encryption at all states." },
      { title: "System Reliability", description: "Zero downtime tolerance, requiring an architecture that could self-heal and failover instantly." }
    ],
    solutions: [
      { title: "Microservices Architecture", description: "Implemented a fully decoupled architecture using Go and Rust for critical trading path components." },
      { title: "In-memory Data Grid", description: "Utilized Redis cluster and custom state management to achieve the required latency targets." },
      { title: "Multi-region Deployment", description: "Active-active AWS deployment across 3 geographic regions for immediate failover." }
    ],
    metrics: [
      { value: "10k+", label: "Transactions / sec" },
      { value: "<0.8ms", label: "Average Latency" },
      { value: "99.999%", label: "Uptime Achieved" },
      { value: "$2B+", label: "Daily Volume" }
    ],
    technologies: ["Next.js", "Go", "Rust", "PostgreSQL", "Redis", "AWS", "Kubernetes", "Kafka"]
  },
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostics",
    subtitle: "Computer vision dashboard for anomaly detection in medical imaging",
    client: "MedTech Global Health",
    category: "Healthcare & AI",
    duration: "11 Months",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    overview: "Developed a predictive analytics and computer vision suite currently utilized by over 50 hospitals. The system analyzes X-Ray and MRI scans to highlight potential anomalies, significantly reducing diagnostic time for radiologists.",
    challenges: [
      { title: "Model Accuracy", description: "False positives/negatives in medical imaging can have severe consequences, demanding extreme precision." },
      { title: "Data Privacy (HIPAA)", description: "Handling sensitive patient data requires robust anonymization and secure processing pipelines." },
      { title: "Integration", description: "Seamlessly connecting with legacy Hospital Information Systems (HIS) and PACS." }
    ],
    solutions: [
      { title: "Custom Deep Learning", description: "Trained specialized convolutional neural networks (CNNs) on a proprietary dataset of 2M+ verified scans." },
      { title: "Edge Processing", description: "Deployed inference nodes locally at hospitals to ensure data never leaves the premises unnecessarily." },
      { title: "HL7/FHIR Compliance", description: "Built custom integration layers to communicate securely with existing hospital infrastructure." }
    ],
    metrics: [
      { value: "98.7%", label: "Detection Accuracy" },
      { value: "50+", label: "Hospitals Integrated" },
      { value: "45min", label: "Time Saved per Patient" },
      { value: "1M+", label: "Scans Processed" }
    ],
    technologies: ["React", "Python", "TensorFlow", "PyTorch", "Azure", "Docker", "DICOM", "FastAPI"]
  },
  {
    id: "enterprise-erp-system",
    title: "Enterprise ERP System",
    subtitle: "Unified operations ecosystem for a multinational supply chain",
    client: "Global Logistics Corp",
    category: "Enterprise Software",
    duration: "18 Months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    overview: "Engineered a custom Enterprise Resource Planning solution that unified inventory, HR, fleet management, and accounting. Replaced 12 disparate legacy systems with a single, cohesive ecosystem.",
    challenges: [
      { title: "System Fragmentation", description: "Data was siloed across multiple legacy applications, causing reporting delays and inaccuracies." },
      { title: "User Adoption", description: "A massive workforce resistant to change required an exceptionally intuitive interface." },
      { title: "Scale", description: "Managing real-time tracking for a fleet of 10,000+ vehicles globally." }
    ],
    solutions: [
      { title: "Centralized Data Lake", description: "Consolidated all business data into a unified BigQuery warehouse for real-time analytics." },
      { title: "Modular Architecture", description: "Built the application as micro-frontends to allow different departments to update independently." },
      { title: "IoT Integration", description: "Processed real-time telemetry from fleet sensors for predictive maintenance and routing." }
    ],
    metrics: [
      { value: "12 to 1", label: "Systems Consolidated" },
      { value: "30%", label: "Operational Cost Reduction" },
      { value: "10k+", label: "Active Vehicles Tracked" },
      { value: "15,000", label: "Daily Active Users" }
    ],
    technologies: ["Angular", "Java", "Spring Boot", "MongoDB", "GCP", "BigQuery", "IoT Core", "RabbitMQ"]
  }
];
