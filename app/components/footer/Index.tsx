import { footerSchoolInfoElements } from "@/app/data/footer";
import LogoText from "./LogoText";

function Footer() {
  return (
    <div className="shadow-main rounded-xl border-2 bg-white px-[30px] py-[60px]">
      <LogoText />
      <div className="flex flex-col gap-5">{footerSchoolInfoElements}</div>
    </div>
  );
}
export default Footer;
