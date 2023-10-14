import React from "react";
import CardImage from "@/../public/assets/hero-image.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import whyUsListData from "./whyUsListData";
import { Button, CharacteristicBanner } from "@/components";
import Typography from "@/components/Typography";
import cn from "@/helpers/cn";

const WhyUsSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Typography variant="h2" className="max-w-sm">
          Why choose The Good Doctor?
        </Typography>
        <WhyUsList />
        <CharacteristicBanner className="mt-12 lg:mt-24" />
      </div>
    </section>
  );
};

export default WhyUsSection;

const WhyUsList = () => {
  return (
    <div
      className={cn(
        "grid mt-8 gap-12",
        "md:grid-cols-2",
        "xl:grid-cols-3 xl:gap-16v xl:mt-16"
      )}
    >
      {whyUsListData.map((item) => {
        return <WhyUsCardItem key={item.title} {...item} />;
      })}
    </div>
  );
};

const WhyUsCardItem = (props: {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  learnMorePath: string;
}) => {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto]">
      <Image
        src={props.image}
        alt={props.imageAlt}
        className="w-full aspect-video object-cover rounded-lg"
      />
      <Typography variant="h4" className="mt-8">
        {props.title}
      </Typography>
      <Typography className="mt-3">{props.description}</Typography>
      {/* <Link
        href={props.learnMorePath}
        className="relative block mt-4 link-action md:mt-8"
      >
        Learn more
      </Link> */}
    </div>
  );
};
