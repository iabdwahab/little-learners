import StatsContainer from "./StatsContainer";

function TextSide() {
  return (
    <div className="text-center lg:text-left">
      <p className="mx-auto mb-2.5 w-fit border-b font-medium md:text-lg lg:mx-0">Welcome to Little Learners Academy</p>
      <h1 className="font-raleway mb-4 text-3xl font-extrabold md:text-4xl lg:text-[40px]">
        Where Young Minds Blossom and <span className="text-orange-65">Dreams Take Flight.</span>
      </h1>
      <p className="font-medium xl:mb-10">
        Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey
        together!
      </p>

      <div className="hidden xl:block">
        <StatsContainer />
      </div>
    </div>
  );
}
export default TextSide;
