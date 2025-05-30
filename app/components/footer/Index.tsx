import { footerSchoolInfoElements, footerNavSectionElements } from "@/app/data/footer";
import LogoText from "./LogoText";

function Footer() {
  return (
    <div className="shadow-main rounded-xl border-2 bg-white px-[30px] py-[60px]">
      <LogoText />
      <div className="mb-10 flex flex-col gap-5">{footerSchoolInfoElements}</div>
      <div className="grid grid-cols-2 gap-[30px]">{footerNavSectionElements}</div>
    </div>
  );
}
export default Footer;
