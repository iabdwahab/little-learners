import Image from "next/image";
import CircleIcon from "./CircleIcon";

function ImageSide() {
  return (
    <div className="bg-orange-80 p-1">
      <div className="relative flex h-96 max-h-[500px] items-center justify-center border-2 lg:h-[calc(100vh-80px)]">
        <Image className="h-11/12 w-11/12" src="/shapes/circled-circles.svg" alt="Illustration" width={600} height={400} />

        <CircleIcon direction="topLeft" />
        <CircleIcon direction="topRight" />
        <CircleIcon direction="bottomLeft" />
        <CircleIcon direction="bottomRight" />
      </div>
    </div>
  );
}
export default ImageSide;
