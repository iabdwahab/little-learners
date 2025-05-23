"use client";

import { NavbarLinkInterface } from "@/app/types/headerNavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarLink({ url = "#", title }: NavbarLinkInterface) {
  const pathname = usePathname();

  return (
    <Link href={url} className={`${url === pathname ? "bg-orange-90" : ""} flex justify-center py-3 font-medium capitalize`}>
      {title}
    </Link>
  );
}
export default NavbarLink;
