import { navigatingElements } from "@/app/data/navigatingSection";
import SectionHeading from "../section_heading/Index";

function NavigatingSection() {
  return (
    <section>
      <SectionHeading>
        <SectionHeading.Slogan>Explore More</SectionHeading.Slogan>
        <SectionHeading.Title>Navigate through our Pages</SectionHeading.Title>
        <SectionHeading.Description>
          Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our
          kindergarten school
        </SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-10 lg:grid-cols-2">{navigatingElements}</div>
    </section>
  );
}
export default NavigatingSection;
