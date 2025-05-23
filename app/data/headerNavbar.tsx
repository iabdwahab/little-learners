import NavbarItemDesktop from "../components/header/dekstop/NavbarItemDesktop";
import NavbarItemMobile from "../components/header/mobile/NavbarItemMobile";
import { NavbarLinkInterface } from "../types/headerNavbar";

const navbarLinks: NavbarLinkInterface[] = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "about us",
    url: "/about",
  },
  {
    id: 3,
    title: "academics",
    url: "/academics",
  },
  {
    id: 4,
    title: "admissions",
    url: "/admissions",
  },
  {
    id: 5,
    title: "student life",
    url: "/student-life",
  },
  {
    id: 6,
    title: "contact",
    url: "/contact",
  },
];

export const navbarItemsMobileElements = navbarLinks.map((link) => <NavbarItemMobile key={link.id} data={link} />);
export const navbarItemsDesktopElements = navbarLinks.map((link) => <NavbarItemDesktop key={link.id} data={link} />);
