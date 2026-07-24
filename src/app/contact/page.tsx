import ContactHero from "@/components/contact/ContactHero";
import WhyConsultation from "@/components/contact/WhyConsultation";
import BookingForm from "@/components/contact/BookingForm";
import ConsultationProcess from "@/components/contact/ConsultationProcess";
import MeetExperts from "@/components/contact/MeetExperts";
import ContactFAQ from "@/components/contact/ContactFAQ";
import TrustIndicators from "@/components/contact/TrustIndicators";
import ContactInfo from "@/components/contact/ContactInfo";

import FinalCTA from "@/components/contact/FinalCTA";

export const metadata = {
  title: "Book Consultation | TeamLite Soft Solutions",
  description: "Schedule a free consultation with our solution architects and discover the best technology solution for your business.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden bg-[#050811]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-1/3 h-[500px] bg-accent/10 rounded-full blur-[150px] opacity-40" />
        <div className="absolute top-[30%] left-1/4 w-1/4 h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="w-full relative z-10 flex flex-col items-center">
        <ContactHero />
        <TrustIndicators />
        <WhyConsultation />
        <ConsultationProcess />
        <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col xl:flex-row gap-12" id="booking">
           <div className="w-full xl:w-2/3">
             <BookingForm />
           </div>
           <div className="w-full xl:w-1/3 space-y-12">
             <ContactInfo />

           </div>
        </div>
        <MeetExperts />
        <ContactFAQ />
        <FinalCTA />
      </div>
    </main>
  );
}
