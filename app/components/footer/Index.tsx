import Image from "next/image";
import Link from "next/link";
import SquaredIcon from "./SquaredIcon";

function Footer() {
  return (
    <div className="shadow-main rounded-xl border-2 bg-white px-[30px] py-[60px]">
      <div className="mb-10 flex flex-col gap-4">
        <Link href="/" className="mx-auto w-fit">
          <Image className="w-[200px]" src="/logo.svg" alt="Logo" width={200} height={40} />
        </Link>
        <p className="text-grey-30 text-center font-medium">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <SquaredIcon iconSrc="/icons/envelope.svg" />
          <p className="text-grey-15 font-medium">hello@littlelearners.com</p>
        </div>
        <div className="flex items-center gap-2">
          <SquaredIcon iconSrc="/icons/phone.svg" />
          <p className="text-grey-15 font-medium">+91 91813 23 2309</p>
        </div>
        <div className="flex items-center gap-2">
          <SquaredIcon iconSrc="/icons/location.svg" />
          <p className="text-grey-15 font-medium">Somewhere in the World</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
