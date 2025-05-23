"use client";

import NavbarMobile from "./mobile/NavbarMobile";
import NavbarDesktop from "./dekstop/NavbarDesktop";
import NavbarToggleButton from "./NavbarToggleButton";
import Logo from "./Logo";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-grey-15 relative mt-3.5 flex items-stretch justify-between rounded-lg border-2 bg-white">
      <Logo />
      <NavbarToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavbarMobile isOpen={isOpen} />
      <NavbarDesktop />
    </header>
  );
}
export default Header;
