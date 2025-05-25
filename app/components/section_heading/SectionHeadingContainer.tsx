import { ReactNode } from "react";

function SectionHeadingContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`${className} mb-10 grid justify-center gap-2.5 text-center lg:gap-3.5`}>{children}</div>;
}

export default SectionHeadingContainer;
