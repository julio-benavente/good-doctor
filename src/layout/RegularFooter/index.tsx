import { Divider } from "@mui/material";
// import Link from "next/link";
import React, { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import cn from "@/helpers/cn";
import { Link } from "@/components";

const FooterSection = () => {
  return (
    <footer className="bg-green-800">
      <div
        className={cn(
          "container mx-auto grid grid-cols-1 text-white",
          "lg:grid-cols-2 lg:gap-8"
        )}
      >
        <Sections />
        <Social />
        <Copyright />
      </div>
    </footer>
  );
};

export default FooterSection;

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p className="text-base font-bold text-white">{children}</p>
      <Divider className="mt-2 mb-3 border-b-2 bg-emerald-200" />
    </div>
  );
};

const Sections = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <SectionTitle>Pages</SectionTitle>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2">
          {[
            { location: "Home", path: "/" },
            { location: "Appointment", path: "/request-an-appointment" },
            { location: "Services", path: "/services" },
            { location: "Contact", path: "/contact" },
          ].map((item) => {
            return (
              <Link key={item.location} href={item.path} className="link-light">
                {item.location}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Social = () => {
  return (
    <div className="mt-12 lg:mt-0 col-span-1">
      <h4 className="font-bold text-white">Stay connected</h4>
      <div className="grid grid-flow-col justify-start gap-x-4 mt-2">
        {[
          {
            icon: FacebookIcon,
            path: "https://facebook.com",
          },
          {
            icon: TwitterIcon,
            path: "https://twitter.com",
          },
          {
            icon: YouTubeIcon,
            path: "https://youtube.com",
          },
        ].map((item, i) => {
          return (
            <Link
              key={i}
              href={item.path}
              className="link-light"
              target="_blank"
            >
              <item.icon className="w-8 h-8 hover:text-white/90" />
            </Link>
          );
        })}
      </div>
      <p className="text-white text-base mt-8">
        At Oak Street Health, our doctors and nurse practitioners focus on
        treating adults on Medicare. Our primary care physicians and doctors are
        accepting new patients at a center near you.
      </p>
    </div>
  );
};

const Copyright = () => {
  return (
    <p className="mt-12 col-span-full text-white text-base lg:mt-8">
      © 2023 Oak Street Health 30 W Monroe St, #1200, Chicago, IL 60603
    </p>
  );
};

/**
 * 
 * <SectionTitle>Locations</SectionTitle>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            {[
              { location: "Phoenix, AZ", path: "/" },
              { location: "Atlanta, GA", path: "/" },
              { location: "Chicago, IL", path: "/" },
              { location: "Indianapolis, IN", path: "/" },
              { location: "Louisville, KY", path: "/" },
              { location: "New Orleans, LA", path: "/" },
              { location: "Detroit, MI", path: "/" },
              { location: "St. Louis, MO", path: "/" },
              { location: "Raleigh, NC", path: "/" },
            ].map((item) => {
              return (
                <Link
                  key={item.location}
                  href={item.path}
                  className="link-light"
                >
                  {item.location}
                </Link>
              );
            })}
          </div>
 */
