import { footerSchoolInfoElements, footerNavSectionElements } from "@/app/data/footer";
import LogoText from "./LogoText";
import CopyRightLinks from "./CopyRightLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <div className="shadow-main mb-7 rounded-xl border-2 bg-white px-[30px] py-[60px]">
      <LogoText />
      <div className="mb-10 flex flex-col gap-5">{footerSchoolInfoElements}</div>
      <div className="grid gap-[30px] min-[300px]:grid-cols-2">{footerNavSectionElements}</div>

      <hr className="border-grey-15 mt-[30px] mb-4" />

      <CopyRightLinks />
      <SocialLinks />

      <hr className="border-grey-15 mt-[30px] mb-4" />

      <p className="text-center text-sm font-medium text-gray-400">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </div>
  );
}
export default Footer;
