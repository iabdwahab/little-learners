function RoadShape() {
  return (
    <div className="relative flex h-5 items-center justify-center px-2">
      <span className="absolute top-0 left-0 h-5 w-5 rounded-full border-2 border-black bg-white"></span>{" "}
      <div className="flex flex-1 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="bg-orange-80 flex h-3 flex-1 items-center">
            <span className="block h-[2px] w-5/6 bg-black"></span>
          </div>
        ))}
      </div>
      <span className="absolute top-0 right-0 h-5 w-5 rounded-full border-2 border-black bg-white"></span>
    </div>
  );
}
export default RoadShape;
