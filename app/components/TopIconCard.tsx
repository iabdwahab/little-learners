import Image from "next/image";
import { TopIconCardInterface } from "../types/topIconCard";

function TopIconCard({ iconSrc, title, description }: TopIconCardInterface) {
  return (
    <div className="relative pt-7">
      <div className="bg-orange-90 absolute top-0 left-6 z-10 h-fit w-fit rounded-lg border-2 p-4">
        <Image src={iconSrc} alt="Icon" width={24} height={24} className="h-6 w-6" />
      </div>
      <div className="shadow-main flex h-full flex-col gap-4 rounded-[10px] border-2 bg-white p-[50px_40px_30px_30px] shadow-black lg:p-[60px_40px_40px_40px]">
        <h4 className="font-raleway text-[22px] leading-[130%] font-bold">{title}</h4>
        <p className="text-grey-30 font-medium">{description}</p>
      </div>
    </div>
  );
}
export default TopIconCard;
