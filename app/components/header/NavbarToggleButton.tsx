import Image from "next/image";
import { prefixPath } from "../../utils/global";

function NavbarToggleButton({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleToggle} className="bg-orange-95 flex items-center rounded-r-md border-l-2 px-7 py-3 lg:hidden">
      <Image src={`${prefixPath}/icons/menu.svg`} width={30} height={30} alt="Menu Icon" />
    </button>
  );
}
export default NavbarToggleButton;
