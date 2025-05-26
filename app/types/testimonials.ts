export interface TestimonialInterface {
  id: string;
  name: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}

export interface TestimonialButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}
