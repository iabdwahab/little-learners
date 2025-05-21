import Link from "next/link";

function NavbarMobile() {
  return (
    <nav className="absolute top-[calc(100%+14px)] left-0 w-full rounded-lg border-2 bg-white p-4">
      <ul className="divide divide-y divide-[#e0e0e0] [&>li:first-child>a]:rounded-t-lg [&>li:last-child>a]:rounded-b-lg">
        <li>
          <Link href="#" className="bg-orange-90 flex justify-center py-3 capitalize">
            home
          </Link>
        </li>
        <li>
          <Link href="#" className="flex justify-center py-3 capitalize">
            home
          </Link>
        </li>
        <li>
          <Link href="#" className="flex justify-center py-3 capitalize">
            home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavbarMobile;
