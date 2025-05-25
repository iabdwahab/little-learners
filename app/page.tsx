import BenefitsSection from "./components/BenefitsSection";
import HomeLanding from "./components/home_landing/Index";

export default function Home() {
  return (
    <main className="[&>*]:mb-20 lg:[&>*]:mb-24">
      <HomeLanding className="mt-6" />
      <BenefitsSection />
    </main>
  );
}
