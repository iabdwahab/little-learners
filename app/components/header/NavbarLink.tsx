"use client";

import { NavbarLinkInterface } from "@/app/types/headerNavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarLink({ url = "#", title }: NavbarLinkInterface) {
  const pathname = usePathname();

  return (
    <Link href={url} className={`${url === pathname ? "bg-orange-90" : ""} flex h-full items-center justify-center py-3 font-medium capitalize lg:border-l-2 lg:px-7`}>
      {title}
    </Link>
  );
}
export default NavbarLink;
