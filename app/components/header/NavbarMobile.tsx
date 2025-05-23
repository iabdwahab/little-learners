import { navbarItemsElements } from "@/app/data/headerNavbar";

function NavbarMobile() {
  return (
    <nav className="absolute top-[calc(100%+14px)] left-0 w-full rounded-lg border-2 bg-white p-4">
      <ul className="divide divide-y divide-[#e0e0e0]">{navbarItemsElements}</ul>
    </nav>
  );
}
export default NavbarMobile;
