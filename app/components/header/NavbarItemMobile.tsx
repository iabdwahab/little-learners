"use client";

import { NavbarLink } from "@/app/types/headerNavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItemMobile({ url = "#", title }: NavbarLink) {
  const pathname = usePathname();

  return (
    <li className="[&:first-child>a]:rounded-t-lg [&:last-child>a]:rounded-b-lg">
      <Link href={url} className={`${url === pathname ? "bg-orange-90" : ""} flex justify-center py-3 font-medium capitalize`}>
        {title}
      </Link>
    </li>
  );
}

export default NavbarItemMobile;
