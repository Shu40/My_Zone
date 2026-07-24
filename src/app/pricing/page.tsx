import PricingHero from "@/components/pricing/PricingHero";
import ProjectEstimator from "@/components/pricing/ProjectEstimator";
import PricingCards from "@/components/pricing/PricingCards";
import ServicePricing from "@/components/pricing/ServicePricing";
import MaintenancePlans from "@/components/pricing/MaintenancePlans";
import ProjectTimeline from "@/components/pricing/ProjectTimeline";
import PaymentProcess from "@/components/pricing/PaymentProcess";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";

export const metadata = {
  title: "Pricing | TeamLite Soft Solutions",
  description: "Transparent, flexible pricing for enterprise software, web applications, and AI solutions.",
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden bg-[#0b0f19]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-primary/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute top-[40%] right-1/4 w-1/3 h-[400px] bg-accent/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-1/2 h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="w-full relative z-10 flex flex-col items-center">
        <PricingHero />
        <ProjectEstimator />
        <PricingCards />
        <ServicePricing />
        <MaintenancePlans />
        <ProjectTimeline />
        <PaymentProcess />
        <PricingFAQ />
        <PricingCTA />
      </div>
    </main>
  );
}
