import BenefitsSection from "./components/BenefitsSection";
import FAQsSection from "./components/faqs/Index";
import HomeLanding from "./components/home_landing/Index";
import TestimonialsSection from "./components/testimonials_section/Index";

export default function Home() {
  return (
    <main className="[&>*]:mb-20 lg:[&>*]:mb-24">
      <HomeLanding className="mt-6" />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQsSection />
    </main>
  );
}
