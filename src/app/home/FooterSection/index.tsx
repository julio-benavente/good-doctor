import { Divider } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-green-800">
      <div className="container mx-auto grid grid-cols-4 gap-8 text-white">
        <div className="col-span-2">
          <SectionTitle>Locations</SectionTitle>
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
        </div>
        <div>
          <SectionTitle>Pages</SectionTitle>
          <div className="grid grid-cols-1 gap-x-4 gap-y-2">
            {[
              { location: "Appointment", path: "/" },
              { location: "Blog", path: "/" },
              { location: "Contact", path: "/" },
              { location: "Privacy Policy", path: "/" },
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
        </div>
        <div>
          <h4 className="font-bold text-white">Stay connected</h4>
          <div className="grid grid-flow-col justify-start gap-x-4 mt-2">
            {[
              {
                icon: FacebookIcon,
                path: "/",
              },
              {
                icon: TwitterIcon,
                path: "/",
              },
              {
                icon: YouTubeIcon,
                path: "/",
              },
            ].map((item, i) => {
              return (
                <a href={item.path} key={i}>
                  <item.icon className="w-8 h-8 hover:text-white/90" />
                </a>
              );
            })}
          </div>
          <p className="text-white text-base mt-8">
            At Oak Street Health, our doctors and nurse practitioners focus on
            treating adults on Medicare. Our primary care physicians and doctors
            are accepting new patients at a center near you.
          </p>
        </div>
        <p className="col-span-full text-white text-base mt-8">
          © 2023 Oak Street Health 30 W Monroe St, #1200, Chicago, IL 60603
        </p>
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
