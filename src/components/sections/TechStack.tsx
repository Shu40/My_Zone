"use client";

import { motion } from "framer-motion";
import { Layers, Database, Cloud, Cpu, Lock, Terminal } from "lucide-react";

const stack = [
  {
    category: "Frontend",
    icon: <Layers className="text-primary" size={24} />,
    techs: ["React 19", "Next.js 15", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend",
    icon: <Terminal className="text-secondary" size={24} />,
    techs: ["Node.js", "Python", "Java Spring Boot", ".NET Core", "Go", "FastAPI", "Express.js", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="text-accent" size={24} />,
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"]
  },
  {
    category: "Database",
    icon: <Database className="text-success" size={24} />,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase", "DynamoDB", "Cassandra"]
  },
  {
    category: "AI & Machine Learning",
    icon: <Cpu className="text-warning" size={24} />,
    techs: ["OpenAI", "Claude", "Gemini", "LangChain", "Llama", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    category: "Cybersecurity",
    icon: <Lock className="text-error" size={24} />,
    techs: ["OWASP", "Auth0", "JWT", "OAuth 2.0", "SonarQube", "Kali Linux", "Burp Suite", "Vault"]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 relative bg-[#030510] border-y border-white/5" id="technologies">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20"
          >
            Technology Stack
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Powered by <span className="text-gradient">Modern Tech</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We utilize the latest frameworks, cloud providers, and AI models to ensure your software is scalable, secure, and blazingly fast.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-white/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
