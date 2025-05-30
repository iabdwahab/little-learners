import Image from "next/image";
import Link from "next/link";
import { prefixPath } from "../../utils/global";

function LogoText() {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <Link href="/" className="mx-auto w-fit lg:mx-0">
        <Image className="w-[200px]" src={`${prefixPath}/logo.svg`} alt="Logo" width={200} height={40} />
      </Link>
      <p className="text-grey-30 text-center font-medium lg:text-left">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
    </div>
  );
}
export default LogoText;
