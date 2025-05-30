import { footerSchoolInfoElements, footerNavSectionElements } from "@/app/data/footer";
import LogoText from "./LogoText";
import CopyRightLinks from "./CopyRightLinks";

function Footer() {
  return (
    <div className="shadow-main rounded-xl border-2 bg-white px-[30px] py-[60px]">
      <LogoText />
      <div className="mb-10 flex flex-col gap-5">{footerSchoolInfoElements}</div>
      <div className="grid gap-[30px] min-[300px]:grid-cols-2">{footerNavSectionElements}</div>

      <hr className="border-grey-15 mt-[30px] mb-4" />

      <CopyRightLinks />
    </div>
  );
}
export default Footer;
