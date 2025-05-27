"use client";

import { testimonialsElements } from "@/app/data/testimonialsSection";
import SectionHeading from "../section_heading/Index";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import TestimonialsWrapper from "./TestimonialsWrapper";

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

      <TestimonialsWrapper />
    </section>
  );
}
export default TestimonialsSection;
