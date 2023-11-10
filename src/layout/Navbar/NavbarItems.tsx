import cn from "@/helpers/cn";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import { Button } from "@/components";
import Image from "next/image";
import { Drawer } from "@mui/material";

export const NavbarLink = ({ children, ...props }) => {
  return (
    <div
      className="relative group grid grid-flow-col items-center gap-x-1 cursor-pointer text-green-800 font-bold"
      {...props}
    >
      {children}
      <span
        className={cn(
          "w-0 h-0.5 bg-green-800 absolute left-0 bottom-0 transition-all duration-300 ease-out",
          "group-hover:w-full"
        )}
      ></span>
    </div>
  );
};

export const RegularNavbarLink = ({ label, path }) => {
  return (
    <NavbarLink>
      <Link href={path}>{label}</Link>
    </NavbarLink>
  );
};

export const MegaNavbarLink = (props) => {
  // console.log(props.label);
  return (
    <NavbarLink
      onClick={() => {
        props.handleMegaMenu(props.label);
      }}
    >
      {props.label} <ExpandMoreIcon className="h-4 w-4" />{" "}
    </NavbarLink>
  );
};

export const MegaMenu = (props) => {
  return (
    <Drawer
      open={true}
      anchor="top"
      className="top-10"
      PaperProps={{ className: cn("top-16 shadow-none") }}
      ModalProps={{ className: cn("top-16") }}
      slotProps={{ backdrop: { className: cn("top-16 bg-black/60") } }}
    >
      <div className=" bg-white w-full">
        <div
          className={cn(
            "container max-w-screen-2xl mx-auto p-12 pb-20",
            "grid grid-cols-4 gap-x-8"
          )}
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {props.sectionOne.title}
            </h2>
            <Button>{props.sectionOne.cta}</Button>
          </div>
          <Section>
            <SectionTitle>{props.sectionTwo.title}</SectionTitle>
            <ul className="grid grid-flow-row gap-2">
              {props.sectionTwo.data.map((e, i) => {
                return (
                  <li key={i}>
                    <Link className="link" href={e.path}>
                      {e.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <Link
                className="link-action"
                href={props.sectionThree.extraLink.path}
              >
                {props.sectionThree.extraLink.label}
              </Link>
            </div>
          </Section>

          <Section>
            <SectionTitle>{props.sectionThree.title}</SectionTitle>
            <ul className="grid grid-flow-row gap-2">
              {props.sectionThree.data.map((e, i) => {
                return (
                  <li key={e.label}>
                    <Link className="link" href={e.path}>
                      {e.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <Link
                className="link-action"
                href={props.sectionThree.extraLink.path}
              >
                {props.sectionThree.extraLink.label}
              </Link>
            </div>
          </Section>

          <Section>
            <SectionTitle>{props.sectionFour.title}</SectionTitle>

            {props.sectionFour.data.map((e, i) => {
              return (
                <div
                  className="mb-4 rounded overflow-hidden bg-teal-50"
                  key={i}
                >
                  <Link
                    href={e.path}
                    className="link grid grid-cols-[auto_1fr] relative h-full"
                  >
                    <Image
                      src={e.image}
                      className="h-full object-cover w-16"
                      alt="picture"
                    />

                    <div className="py-2 px-4 text-sm">{e.label}</div>
                  </Link>
                </div>
              );
            })}
          </Section>
        </div>
      </div>
    </Drawer>
  );
};

const Section = ({ children }) => {
  return <div className="grid">{children}</div>;
};

const SectionTitle = ({ children }) => {
  return (
    <div>
      <h2 className="text-base font-bold">{children}</h2>
      <Divider className="mt-2 mb-3 border-b-2 bg-emerald-200" />
    </div>
  );
};
