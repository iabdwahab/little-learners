import SectionHeading from "../section_heading/Index";
import FAQ from "./FAQ";

function FAQsSection() {
  return (
    <section>
      <SectionHeading>
        <SectionHeading.Slogan>Solutions For The Doubts</SectionHeading.Slogan>
        <SectionHeading.Title>Frequently Asked Questions</SectionHeading.Title>
        <SectionHeading.Description>
          Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.
        </SectionHeading.Description>
      </SectionHeading>

      <div className="grid grid-cols-2 gap-4">
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
    </section>
  );
}
export default FAQsSection;
