import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";

function Header() {
  return (
    <header className="text-grey-15 relative mt-3.5 flex items-stretch justify-between rounded-lg border-2 bg-white">
      <Link href="/" className="bg-orange-65 flex items-center rounded-l-md border-r-2 px-4 py-3">
        <Image src="/logo.svg" width={140} height={50} alt="Little Learners Logo" className="w-36 md:w-40" />
      </Link>

      <button className="bg-orange-95 flex items-center rounded-r-md border-l-2 px-7 py-3">
        <Image src="/icons/menu.svg" width={30} height={30} alt="Menu Icon" />
      </button>

      <NavbarMobile />
    </header>
  );
}
export default Header;
