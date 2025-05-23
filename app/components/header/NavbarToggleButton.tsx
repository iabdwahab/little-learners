import Image from "next/image";

function NavbarToggleButton({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleToggle} className="bg-orange-95 flex items-center rounded-r-md border-l-2 px-7 py-3 lg:hidden">
      <Image src="/icons/menu.svg" width={30} height={30} alt="Menu Icon" />
    </button>
  );
}
export default NavbarToggleButton;
