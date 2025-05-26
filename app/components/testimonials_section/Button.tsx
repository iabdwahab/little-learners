import { TestimonialButtonProps } from "@/app/types/testimonials";

function Button({ children, onClick, className }: TestimonialButtonProps) {
  return (
    <button onClick={onClick} className={`${className} rounded-lg border-2 bg-white p-3.5`}>
      {children}
    </button>
  );
}
export default Button;
