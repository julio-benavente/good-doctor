import { Button } from "@/components";
import cn from "@/helpers/cn";
import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="bg-teal-50">
      <div className={cn("container mx-auto grid grid-cols-5 gap-x-16")}>
        <div className="py-24 pb-32 col-span-2">
          <h1 className="text-5xl">Our specialty is YOU.</h1>
          <p className="mt-4">
            At Oak Street Health, we specialize in caring for older adults like
            you. We make your healthcare easy with an entire team dedicated to
            you. They&lsquo;ll take care of everything, providing you with
            personalized primary care so you can stay healthy and focus on doing
            the things you love.
          </p>
          <Button color="warning" className="mt-4">
            Request appointment
          </Button>
        </div>
        <div className="flex col-span-3">
          <div className="w-full flex flex-1 relative -mr-24">
            <Image
              src={HeroImage}
              className="w-full object-cover object-cover"
              alt="People laughing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
