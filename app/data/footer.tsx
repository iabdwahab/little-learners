import CardInfo from "../components/footer/CardInfo";
import { FooterCardInfoInterface } from "../types/footer";

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

export const footerSchoolInfoElements = footerSchoolInfo.map((info) => <CardInfo key={info.id} {...info} />);
