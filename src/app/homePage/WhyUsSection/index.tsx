import React from "react";
import CardImage from "@/../public/assets/hero-image.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import whyUsListData from "./whyUsListData";
import { Button } from "@/components";
import Typography from "@/components/Typography";

const WhyUsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="h1 max-w-sm">Why choose Oak Street Health?</h2>
        <WhyUsList />
        <WhyUsBanner />
      </div>
    </section>
  );
};

export default WhyUsSection;

const WhyUsBanner = () => {
  return (
    <section className="pt-24">
      <div className="container w-fit ml-20 mx-auto grid bg-teal-50 py-12 pr-20 grid grid-cols-2 gap-16 rounded-lg">
        <div className="relative">
          <Image
            src={CardImage}
            alt="image of patients"
            className="rounded-lg -ml-20 aspect-[16/12] object-cover"
          />
        </div>
        <div className="self-center">
          <h2 className="h1">Approved by AARP</h2>
          <p className="mt-8 h4 font-normal">
            Oak Street Health was selected by AARP as a trusted primary care
            provider because of its dedication to high-quality healthcare for
            all Medicare-eligible adults - the only primary care provider to
            have that distinction.{" "}
            <Link href="/" className="link">
              Find a provider
            </Link>{" "}
            who cares for AARP members like you.
          </p>
          <Button className="mt-8">Learn more</Button>
        </div>
      </div>
    </section>
  );
};

const WhyUsList = () => {
  return (
    <div className="grid grid-cols-3 gap-24 mt-16">
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
      <Link
        href={props.learnMorePath}
        className="relative block mt-8 link-action"
      >
        Learn more
      </Link>
    </div>
  );
};
