import Link from "next/link";
import Image from "next/image";
import { footerSocialLinks } from "@/app/data/footer";

function SocialLinks() {
  return (
    <div className="mt-5 flex items-center justify-center gap-2.5">
      {footerSocialLinks.map((link) => (
        <Link key={link.id} href={link.href} className="block w-fit">
          <div className="bg-orange-90 h-fit w-fit rounded-lg border-2 p-3">
            <Image src={link.iconSrc} alt="Icon" width={24} height={24} className="h-6 w-6" />
          </div>
        </Link>
      ))}
    </div>
  );
}
export default SocialLinks;
