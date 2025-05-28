import { NavigatingCardInterface } from "@/app/types/navigatingSection";
import Link from "next/link";

function NavigatingCard({ title, description, url }: NavigatingCardInterface) {
  return (
    <div className="shadow-main flex flex-col rounded-[10px] border-2 bg-white p-10 text-center lg:p-[60px]">
      <h4 className="font-raleway text-grey-10 mb-5 text-[28px] font-bold lg:text-4xl">{title}</h4>
      <p className="text-grey-30 mb-[40px] font-medium">{description}</p>
      <Link href={url} className="bg-orange-90 shadow-main mt-auto flex items-center justify-center gap-2.5 rounded-md border-[2px] p-4 font-medium">
        <span className="text-grey-20 lg:text-lg">Learn More</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-grey-20 size-5 lg:size-6">
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
export default NavigatingCard;
