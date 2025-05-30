import CardInfo from "../components/footer/CardInfo";
import { FooterCardInfoInterface, FooterCopyRightLinkInterface, FooterNavGroupInterface } from "../types/footer";
import NavGroup from "../components/footer/NavGroup";

const footerSchoolInfo: FooterCardInfoInterface[] = [
  {
    id: 1,
    iconSrc: "/icons/envelope.svg",
    text: "hello@littlelearners.com",
  },
  {
    id: 2,
    iconSrc: "/icons/phone.svg",
    text: "+91 91813 23 2309",
  },
  {
    id: 3,
    iconSrc: "/icons/location.svg",
    text: "Somewhere in the World",
  },
];

const footerNavGroups: FooterNavGroupInterface[] = [
  {
    id: 1,
    title: "Home",
    links: [
      {
        href: "#",
        text: "Features",
      },
      {
        href: "#",
        text: "Our Testimonials",
      },
      {
        href: "#",
        text: "FAQ",
      },
    ],
  },
  {
    id: 2,
    title: "Academics",
    links: [
      {
        href: "#",
        text: "Special Features",
      },
      {
        href: "#",
        text: "Gallery",
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    links: [
      {
        href: "#",
        text: "Our Mission",
      },
      {
        href: "#",
        text: "Our Vision",
      },
      {
        href: "#",
        text: "Awards and Recognition",
      },
      {
        href: "#",
        text: "History",
      },
      {
        href: "#",
        text: "Teachers",
      },
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    links: [
      {
        href: "#",
        text: "Information",
      },
      {
        href: "#",
        text: "Map & Direction",
      },
    ],
  },
];

export const footerCopyRightLinks: FooterCopyRightLinkInterface[] = [
  {
    id: 1,
    href: "#",
    text: "Terms of Service",
  },
  {
    id: 2,
    href: "#",
    text: "Privacy Policy",
  },
  {
    id: 3,
    href: "#",
    text: "Cookie Policy",
  },
];

export const footerSchoolInfoElements = footerSchoolInfo.map((info) => <CardInfo key={info.id} {...info} />);
export const footerNavSectionElements = footerNavGroups.map((group) => <NavGroup key={group.id} {...group} />);
