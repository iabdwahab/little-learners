import TestimonialCard from "../components/testimonials_section/TestimonialCard";
import { TestimonialInterface } from "../types/testimonials";
import { prefixPath } from "../utils/global";

const testimonials: TestimonialInterface[] = [
  {
    id: "1",
    name: "Jennifer B",
    image: `${prefixPath}/person/testimonial-1.svg`,
    rating: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: "2",
    name: "David K",
    image: `${prefixPath}/person/testimonial-2.svg`,
    rating: 4,
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: "3",
    name: "Emily L",
    image: `${prefixPath}/person/testimonial-3.svg`,
    rating: 5,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: "4",
    name: "Michael S",
    image: `${prefixPath}/person/testimonial-2.svg`,
    rating: 5,
    text: "Little Learners Academy has exceeded our expectations. The curriculum is well-rounded, and the staff genuinely cares about each child's development.",
  },
  {
    id: "5",
    name: "Sarah W",
    image: `${prefixPath}/person/testimonial-3.svg`,
    rating: 4,
    text: "The community at Little Learners Academy is wonderful. My daughter has made great friends and loves going to school every day.",
  },
  {
    id: "6",
    name: "James T",
    image: `${prefixPath}/person/testimonial-1.svg`,
    rating: 5,
    text: "I can't recommend Little Learners Academy enough. The personalized attention and engaging activities have made a significant difference in my child's learning journey.",
  },
];

export const testimonialsElements = testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} {...testimonial} />);
