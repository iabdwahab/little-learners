import { NavbarLinkInterface } from "@/app/types/headerNavbar";
import NavbarLink from "./NavbarLink";

function NavbarItemMobile({ data }: { data: NavbarLinkInterface }) {
  return (
    <li className="[&:first-child>a]:rounded-t-lg [&:last-child>a]:rounded-b-lg">
      <NavbarLink {...data} />
    </li>
  );
}

export default NavbarItemMobile;
