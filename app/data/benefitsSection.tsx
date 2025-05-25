import TopIconCard from "../components/TopIconCard";
import { TopIconCardInterface } from "../types/topIconCard";

const benefits: TopIconCardInterface[] = [
  {
    id: 1,
    iconSrc: "/icons/benefits/holistic.svg",
    title: "Holistic Learning Approach",
    description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    id: 2,
    iconSrc: "/icons/benefits/experienced.svg",
    title: "Experienced Educators",
    description: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    id: 3,
    iconSrc: "/icons/benefits/nurturing.svg",
    title: "Nurturing Environment",
    description: "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    id: 4,
    iconSrc: "/icons/benefits/play.svg",
    title: "Play-Based Learning",
    description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    id: 5,
    iconSrc: "/icons/benefits/individualized.svg",
    title: "Individualized Attention",
    description: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    id: 6,
    iconSrc: "/icons/benefits/parent.svg",
    title: "Parent Involvement",
    description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

export const benefitsElements = benefits.map((benefit) => <TopIconCard key={benefit.id} {...benefit} />);
