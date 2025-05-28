import NavigatingCard from "../components/navigating_section/NavigatingCard";
import { NavigatingCardInterface } from "../types/navigatingSection";

const navigatingLinks: NavigatingCardInterface[] = [
  {
    id: 1,
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    url: "/about",
  },
  {
    id: 2,
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    url: "/academics",
  },
  {
    id: 3,
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    url: "/student-life",
  },
  {
    id: 4,
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    url: "/admissions",
  },
];

export const navigatingElements = navigatingLinks.map((link) => <NavigatingCard key={link.id} {...link} />);
