import { navbarItemsMobileElements } from "@/app/data/headerNavbar";

function NavbarMobile({ isOpen }: { isOpen: boolean }) {
  return (
    <nav className={`${isOpen ? "block" : "hidden"} absolute top-[calc(100%+14px)] left-0 w-full rounded-lg border-2 bg-white p-4 lg:hidden`}>
      <ul className="divide divide-y divide-[#e0e0e0]">{navbarItemsMobileElements}</ul>
    </nav>
  );
}
export default NavbarMobile;
