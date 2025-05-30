import Image from "next/image";

function SquaredIcon({ iconSrc }: { iconSrc: string }) {
  return (
    <div className="bg-orange-97 h-fit w-fit rounded-sm border-2 p-1.5">
      <Image src={iconSrc} alt="Icon" width={24} height={24} className="h-6 w-6" />
    </div>
  );
}
export default SquaredIcon;
