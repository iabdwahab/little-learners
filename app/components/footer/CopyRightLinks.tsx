import { footerCopyRightLinks } from "@/app/data/footer";
import Link from "next/link";

function CopyRightLinks() {
  return (
    <ul className="flex flex-wrap justify-center">
      {footerCopyRightLinks.map((link) => (
        <li key={link.id} className="px-1.5">
          <Link href={link.href} className="text-sm font-medium">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CopyRightLinks;
