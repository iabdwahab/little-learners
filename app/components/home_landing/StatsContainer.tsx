function StatsContainer() {
  return (
    <div className={`bg-orange-95 flex flex-col items-center divide-y-2 rounded-[10px] border-2 p-10 text-center md:flex-row md:gap-4 md:divide-y-0 lg:col-span-2 xl:text-left [&>*]:flex-1`}>
      <div className="w-full py-5 first:pt-0 last:pb-0 md:py-0">
        <h4 className="text-4xl font-extrabold">+7000</h4>
        <h5 className="font-medium">Students Passed Out</h5>
      </div>

      <div className="w-full py-5 first:pt-0 last:pb-0 md:py-0">
        <h4 className="text-4xl font-extrabold">+15</h4>
        <h5 className="font-medium">Experience Educators</h5>
      </div>

      <div className="w-full py-5 first:pt-0 last:pb-0 md:py-0">
        <h4 className="text-4xl font-extrabold">+37</h4>
        <h5 className="font-medium">Awards & Recognitions</h5>
      </div>
    </div>
  );
}
export default StatsContainer;
