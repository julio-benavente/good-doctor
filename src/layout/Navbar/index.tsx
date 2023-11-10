import MobileNavbar from "./MobileNav";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <header className="bg-terciary sticky top-0 w-full z-50">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;
