import NavbarItemMobile from "../components/header/NavbarItemMobile";
import { NavbarLink } from "../types/headerNavbar";

export const navbarLinks: NavbarLink[] = [
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

export const navbarItemsElements = navbarLinks.map((link) => <NavbarItemMobile key={link.id} {...link} />);
