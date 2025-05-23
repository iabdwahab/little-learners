import { NavbarLinkInterface } from "@/app/types/headerNavbar";
import NavbarLink from "../NavbarLink";

function NavbarItemDesktop({ data }: { data: NavbarLinkInterface }) {
  return (
    <li className="[&:last-child>a]:bg-orange-75 [&:last-child>a]:rounded-r-md">
      <NavbarLink {...data} />
    </li>
  );
}
export default NavbarItemDesktop;
