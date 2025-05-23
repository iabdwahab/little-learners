import HomeLanding from "./components/home_landing/Index";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  return (
    <main className="[&>*]:my-20 lg:[&>*]:my-24">
      <HomeLanding />
      <SectionHeading />
    </main>
  );
}
