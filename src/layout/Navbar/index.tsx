"use client";

import cn from "@/helpers/cn";
import Logo from "@/../public/assets/hospitalLogo";
// import { Button } from "@mui/material";
import Link from "next/link";
import { navbarData } from "./navbarData";
import { MegaNavbarLink, RegularNavbarLink, MegaMenu } from "./NavbarItems";
import { useEffect, useState } from "react";
import { Button, Link as CLink } from "@/components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  return (
    <header className="bg-terciary">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;

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

const DesktopNavbar = () => {
  const [currentMegaMenuSelected, setCurrentMegaMenuSelected] = useState(null);

  const handleMegaMenu = (itemSelected) => {
    if (currentMegaMenuSelected === itemSelected) {
      setCurrentMegaMenuSelected(null);
    } else {
      setCurrentMegaMenuSelected(itemSelected);
    }
  };

  const megaMenuData = navbarData.find((e) => {
    return e.label === currentMegaMenuSelected;
  });

  return (
    <>
      <div
        className={cn(
          "hidden px-12 mx-auto lg:grid grid-cols-[auto_1fr_auto] h-16 items-center"
        )}
        data-color-theme="dark"
      >
        <div className="h-8">
          <Link href="/" passHref>
            <Logo className="w-full h-full text-green-800" />
          </Link>
        </div>

        <div className="justify-self-center grid grid-flow-col gap-x-6">
          {navbarData.map((e, i) => {
            if (e.isMegaMenu) {
              return (
                <MegaNavbarLink
                  key={e.label}
                  {...e}
                  handleMegaMenu={handleMegaMenu}
                />
              );
            } else {
              return <RegularNavbarLink key={e.label} {...e} />;
            }
          })}
        </div>

        <div className="grid grid-flow-col gap-x-4">
          <Button color="secondary" href="tel:8888986762">
            (888) 898-6762
          </Button>
          <Link href="/request-an-appointment" passHref>
            <Button color="appointment">Request Appointment</Button>
          </Link>
        </div>
      </div>
      {megaMenuData && <MegaMenu {...megaMenuData} />}
    </>
  );
};
