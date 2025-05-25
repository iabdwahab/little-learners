import ImageSide from "./ImageSide";
import StatsContainer from "./StatsContainer";
import TextSide from "./TextSide";

function HomeLanding({ className }: { className?: string }) {
  return (
    <section className={`${className} grid items-center gap-10 lg:grid-cols-2`}>
      <ImageSide />
      <TextSide />
      <div className="lg:col-span-2 xl:hidden">
        <StatsContainer />
      </div>
    </section>
  );
}
export default HomeLanding;
