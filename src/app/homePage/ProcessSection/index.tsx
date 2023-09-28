import React from "react";
import CardImage from "@/../public/assets/hero-image.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import whyUsListData from "./stepsListData";
import { Button } from "@/components";

const ProcessSection = () => {
  return (
    <section className="py-24 bg-green-800">
      <div className="container mx-auto">
        <StepsList />
      </div>
    </section>
  );
};

export default ProcessSection;

const StepsList = () => {
  return (
    <div className="grid grid-cols-3 gap-24 mt-16 px-24">
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
      <h3 className="h3 mt-8 text-white">{props.title}</h3>
      <p className="mt-4 text-white">{props.description}</p>
      <Link
        href={props.catLink}
        className="relative block mt-8 link-action-light"
      >
        {props.ctaText}
      </Link>
    </div>
  );
};
