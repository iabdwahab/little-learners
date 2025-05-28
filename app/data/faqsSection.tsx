import FAQ from "../components/faqs/FAQ";
import { FAQInterface } from "../types/faqs";

const faqs: FAQInterface[] = [
  {
    id: 1,
    title: "What are the school hours at Little Learners Academy?",
    content: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    title: "What is the teacher-to-student ratio at Little Learners Academy?",
    content:
      "We maintain a low teacher-to-student ratio to ensure personalized attention for each child. Our typical ratio is 1 teacher for every 10 students in preschool and 1 teacher for every 15 students in kindergarten.",
  },
  {
    id: 3,
    title: "Is there a uniform policy for students?",
    content:
      "Yes, we have a uniform policy to promote a sense of community and equality among students. Our uniforms consist of a polo shirt with the school logo and khaki or navy pants or skirts. Details about the uniform can be found on our website.",
  },
  {
    id: 4,
    title: "How do I apply for admission to Little Learners Academy?",
    content:
      "To apply for admission, please visit our website and fill out the online application form. You can also schedule a tour of our facilities to learn more about our programs and meet our staff.",
  },
];

export const faqsElements = faqs.map((faq) => <FAQ key={faq.id} {...faq} />);
