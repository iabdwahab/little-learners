import { landingStatsElemnts } from "@/app/data/homeLandingStats";

function StatsContainer() {
  return (
    <div className="shadow-main shadow-orange-80 bg-orange-95 flex flex-col items-center divide-y-2 rounded-[10px] border-2 p-10 text-center md:flex-row md:gap-4 md:divide-y-0 lg:col-span-2 lg:py-8 xl:text-left [&>*]:flex-1">
      {landingStatsElemnts}
    </div>
  );
}
export default StatsContainer;
