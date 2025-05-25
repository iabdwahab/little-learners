import { benefitsElements } from "../data/benefitsSection";
import SectionHeading from "./section_heading/Index";

function BenefitsSection() {
  return (
    <section>
      <SectionHeading>
        <SectionHeading.Slogan>Children Deserve Bright Future</SectionHeading.Slogan>
        <SectionHeading.Title>Our Benefits</SectionHeading.Title>
        <SectionHeading.Description>
          {`With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.`}
        </SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">{benefitsElements}</div>
    </section>
  );
}
export default BenefitsSection;
