import React from "react";
import CardImage from "@/../public/assets/hero-image.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import whyUsListData from "./stepsListData";
import { Button } from "@/components";
import cn from "@/helpers/cn";

const ProcessSection = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <StepsList />
      </div>
    </section>
  );
};

export default ProcessSection;

const StepsList = () => {
  return (
    <div
      className={cn(
        "grid gap-12",
        "md:grid-cols-2",
        "lg:grid-cols-3 lg:gap-8",
        "xl:px-8 xl:gap-12"
      )}
    >
      {whyUsListData.map((item) => {
        return <StepCardItem key={item.title} {...item} />;
      })}
    </div>
  );
};

const StepCardItem = (props: {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  ctaText: string;
  catLink: string;
}) => {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto]">
      <Image
        src={props.image}
        alt={props.imageAlt}
        className="w-full aspect-[12/9] object-cover rounded-lg"
      />
      <h3 className={cn("h3 mt-8 text-white", "lg:mt-8")}>{props.title}</h3>
      <p className="mt-4 text-white">{props.description}</p>
      <Link
        // href={props.catLink}
        href="/request-an-appointment"
        className="relative block mt-6 link-action-light lg:mt-8"
      >
        {props.ctaText}
      </Link>
    </div>
  );
};
