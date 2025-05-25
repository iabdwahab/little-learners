import { ReactNode } from "react";

function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`${className} grid justify-center gap-2.5 text-center lg:gap-3.5`}>{children}</div>;
}
export default SectionHeading;
