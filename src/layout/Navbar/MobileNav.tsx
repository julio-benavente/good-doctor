"use client";

import Logo from "@/../public/assets/hospitalLogo";
import Link from "next/link";
import { navbarData } from "./navbarData";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleMenu = () => setNavbarIsOpen(!navbarIsOpen);
  const handleNavbarItem = () => setNavbarIsOpen(false);

  return (
    <>
      <div className="relative h-14 lg:hidden grid grid-flow-col justify-between items-center px-4 py-2">
        <Link href="/" passHref>
          <Logo className="h-6 text-green-800" />
        </Link>

        <div
          className="h-10 w-10 grid place-items-center rounded-full border-2 border-primary"
          onClick={handleMenu}
        >
          {!navbarIsOpen && <MenuIcon className="text-primary text-2xl" />}
          {navbarIsOpen && <CloseIcon className="text-primary text-2xl" />}
        </div>

        {navbarIsOpen && (
          <div className="w-full h-[calc(100vh-3rem)] bg-white absolute top-14 z-20">
            <ul>
              {navbarData.map((e, i) => {
                return (
                  <Link
                    key={`${i}-${e.path}`}
                    className="p-4 border-b-2 border-primary/20 text-xl font-bold text-primary block"
                    href={e.path}
                    onClick={handleNavbarItem}
                  >
                    {e.label}
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default MobileNavbar;
