"use client";

import cn from "@/helpers/cn";
import Logo from "@/../public/assets/hospitalLogo";
import Link from "next/link";
import { navbarData } from "./navbarData";
import { MegaNavbarLink, RegularNavbarLink, MegaMenu } from "./NavbarItems";
import { useState } from "react";
import { Button } from "@/components";

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
          <Button color="secondary" href="tel:8888888888">
            (888) 898-6762
          </Button>
          <Button color="appointment" href="/request-an-appointment">
            Request Appointment
          </Button>
        </div>
      </div>
      {megaMenuData && <MegaMenu {...megaMenuData} />}
    </>
  );
};

export default DesktopNavbar;
