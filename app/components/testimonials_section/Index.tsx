"use client";

import { testimonialsElements } from "@/app/data/testimonialsSection";
import SectionHeading from "../section_heading/Index";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

function TestimonialsSection() {
  return (
    <section>
      <SectionHeading>
        <SectionHeading.Slogan>Their Happy Words 🤗</SectionHeading.Slogan>
        <SectionHeading.Title>Our Testimonials</SectionHeading.Title>
        <SectionHeading.Description>
          Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
        </SectionHeading.Description>
      </SectionHeading>

      <div className="flex items-center gap-10">
        <BackButton className="hidden lg:block" />
        <div className="flex flex-nowrap gap-10 overflow-hidden p-1.5">{testimonialsElements}</div>
        <NextButton className="hidden lg:block" />
      </div>

      <div className="mt-10 flex items-center justify-center gap-5 lg:hidden">
        <BackButton />
        <NextButton />
      </div>
    </section>
  );
}
export default TestimonialsSection;
