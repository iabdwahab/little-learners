import { testimonialsElements } from "@/app/data/testimonialsSection";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { useRef } from "react";

function TestimonialsWrapper() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (testimonialsRef.current) {
      const wrapper = testimonialsRef.current;
      const wrapperWidth = wrapper.offsetWidth;

      wrapper.scrollBy({
        left: direction === "left" ? -((wrapperWidth + 28) / 3) : (wrapperWidth + 28) / 3,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className="flex items-center gap-10">
        <BackButton onClick={() => scroll("left")} className="hidden lg:block" />

        <div ref={testimonialsRef} className="flex flex-nowrap gap-10 overflow-hidden p-1.5">
          {testimonialsElements}
        </div>

        <NextButton onClick={() => scroll("right")} className="hidden lg:block" />
      </div>

      <div className="mt-10 flex items-center justify-center gap-5 lg:hidden">
        <BackButton onClick={() => scroll("left")} />
        <NextButton onClick={() => scroll("right")} />
      </div>
    </>
  );
}
export default TestimonialsWrapper;
