import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="bg-orange-65 flex items-center rounded-l-md border-r-2 px-4 py-3">
      <Image src="/logo.svg" width={140} height={50} alt="Little Learners Logo" className="w-36 md:w-40" />
    </Link>
  );
}
export default Logo;
