"use client";

import { useRef, useState } from "react";
import IconContainer from "./IconContainer";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggleFAQ() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`${isOpen ? "bg-white" : "bg-orange-95"} rounded-[10px] border-2`}>
      <button onClick={toggleFAQ} className="flex w-full items-center justify-between gap-[10px] px-6 py-5">
        <h4 className="text-lg font-semibold">What are the school hours at Little Learners Academy?</h4>
        <IconContainer isOpen={isOpen} />
      </button>

      <hr className={`${isOpen ? "w-[calc(100%-60px)]" : "w-0"} bg-grey-15 mx-auto h-[2px] w-0 border-none duration-150`} />

      <div ref={contentRef} className={`overflow-hidden duration-300`} style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : 0 }}>
        <p className="px-6 pt-6 pb-[30px] font-medium">
          Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.
        </p>
      </div>
    </div>
  );
}
export default FAQ;
