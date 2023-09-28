"use client";

import cn from "@/helpers/cn";
import Logo from "@/../public/assets/hospitalLogo";
// import { Button } from "@mui/material";
import Link from "next/link";
import { navbarData } from "./navbarData";
import { MegaNavbarLink, RegularNavbarLink, MegaMenu } from "./NavbarItems";
import { useState } from "react";
import { Button } from "@/components";

const Navbar = () => {
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
    <header className="bg-teal-50">
      <div
        className={cn(
          "container mx-auto grid grid-cols-[auto_1fr_auto] h-16 items-center"
        )}
        data-color-theme="dark"
      >
        <div className="h-8">
          <Logo className="w-full h-full text-green-800" />
        </div>

        <div className="justify-self-center grid grid-flow-col gap-x-6">
          {navbarData.map((e) => {
            if (e.isMegaMenu) {
              return <MegaNavbarLink {...e} handleMegaMenu={handleMegaMenu} />;
            }

            return <RegularNavbarLink {...e} />;
          })}
        </div>

        <div className="grid grid-flow-col gap-x-4">
          <Button color="secondary" href="tel:8888986762">
            (888) 898-6762
          </Button>
          <Button color="warning">
            <Link href="/">Request Appointment</Link>
          </Button>
        </div>
      </div>
      {megaMenuData && <MegaMenu {...megaMenuData} />}
    </header>
  );
};

export default Navbar;
