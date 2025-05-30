import Image from "next/image";
import Stars from "./Stars";
import { TestimonialInterface } from "@/app/types/testimonials";

function TestimonialCard({ image, name, rating, text }: TestimonialInterface) {
  return (
    <div className="shadow-main flex min-w-[calc(100%)] flex-col gap-5 rounded-[10px] border-2 bg-white p-[30px] md:min-w-[calc((100%-40px)/2)] lg:min-w-[calc((100%-80px)/3)] lg:p-10">
      <div className="bg-orange-97 border-grey-20 mx-auto w-fit rounded-full border p-2">
        <Image src={image} alt="Person" width={50} height={50} className="h-[50px] w-[50px]" />
      </div>
      <h4 className="text-center text-xl font-semibold text-[#333]">{name}</h4>
      <Stars rating={rating} />
      <p className="text-grey-20 text-center font-medium">{text} </p>
    </div>
  );
}
export default TestimonialCard;
