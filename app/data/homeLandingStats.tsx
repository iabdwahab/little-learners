import StatElement from "../components/home_landing/StatElement";
import { LandingStatInterface } from "../types/homeLandingStats";

const landingStats: LandingStatInterface[] = [
  {
    id: 1,
    value: "+7000",
    title: "Students Passed Out",
  },
  {
    id: 3,
    value: "+37",
    title: "Awards & Recognitions",
  },
  {
    id: 2,
    value: "+15",
    title: "Experience Educators",
  },
];

export const landingStatsElemnts = landingStats.map((stat) => <StatElement key={stat.id} {...stat} />);
