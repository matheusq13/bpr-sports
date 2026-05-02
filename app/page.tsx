import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import IncludedSection from "@/components/IncludedSection";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import PricingSection from "@/components/PricingSection";
import JotformSection from "@/components/JotformSection";
import AudienceSection from "@/components/AudienceSection";
import ValueSection from "@/components/ValueSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import UrgencyStrip from "@/components/UrgencyStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-rubra-black text-rubra-white">
      <Header />
      <Hero />
      <UrgencyStrip />
      <PainSection />
      <SolutionSection />
      <IncludedSection />
      <ScheduleTimeline />
      <PricingSection />
      <JotformSection />
      <AudienceSection />
      <ValueSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
