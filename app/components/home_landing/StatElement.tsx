import { LandingStatInterface } from "@/app/types/homeLandingStats";

function StatElement({ title, value }: LandingStatInterface) {
  return (
    <div className="w-full py-5 first:pt-0 last:pb-0 md:py-0">
      <h4 className="text-4xl font-extrabold">{value}</h4>
      <h5 className="font-medium">{title}</h5>
    </div>
  );
}
export default StatElement;
