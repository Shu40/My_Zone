import ExpertStoryScroll from "@/components/about/ExpertStoryScroll";
import { History, Award, Rocket, Users } from "lucide-react";

export default function ExpertsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#02040a]">
      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <History size={16} /> Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Behind the <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We started with a simple belief: Enterprise software doesn't have to be slow, bloated, and hard to use. 
              Our founders, a team of ex-FAANG engineers and cybersecurity researchers, came together to build a new kind of agency. 
              One that prioritizes speed, security, and cutting-edge AI over legacy bureaucracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            <div className="glass p-8 rounded-2xl border border-white/5 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Rocket className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">10+ Years</h3>
              <p className="text-muted-foreground">Combined Industry Experience</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+ Products</h3>
              <p className="text-muted-foreground">Successfully Delivered</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Award className="text-success" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100% Secure</h3>
              <p className="text-muted-foreground">Zero Major Breaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Sticky Scroll Component */}
      <ExpertStoryScroll />

    </main>
  );
}
