import { navbarItemsDesktopElements } from "@/app/data/headerNavbar";

function NavbarDesktop() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex h-full items-stretch">{navbarItemsDesktopElements}</ul>
    </nav>
  );
}
export default NavbarDesktop;
