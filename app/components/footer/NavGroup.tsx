import { FooterNavGroupInterface } from "@/app/types/footer";
import Link from "next/link";

function NavGroup({ title, links }: FooterNavGroupInterface) {
  return (
    <div>
      <h5 className="text-grey-15 mb-5 font-semibold">{title}</h5>
      <ul className="flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="text-grey-20 font-medium">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NavGroup;
