import MobileNavbar from "./MobileNav";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <header className="bg-terciary">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;
