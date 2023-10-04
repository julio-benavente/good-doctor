import { Button } from "@/components";
import cn from "@/helpers/cn";
import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/assets/hero-image.jpg";
import Typography from "@/components/Typography";

const HeroSection = () => {
  return (
    <section className="bg-teal-50">
      <div
        className={cn(
          "grid-cols-1",
          "container pt-0 mx-auto grid gap-x-16",
          "lg:grid-cols-12"
        )}
      >
        <div
          className={cn(
            "order-2 mt-8",
            "md:max-w-md",
            "lg:pb-32 lg:mt-16 lg:col-span-6 lg:order-1"
          )}
        >
          <Typography variant="h1">Our specialty is YOU.</Typography>
          <Typography className="mt-4">
            At Oak Street Health, we specialize in caring for older adults like
            you. We make your healthcare easy with an entire team dedicated to
            you. They&lsquo;ll take care of everything, providing you with
            personalized primary care so you can stay healthy and focus on doing
            the things you love.
          </Typography>
          <Button color="appointment" className="mt-4">
            Request appointment
          </Button>
        </div>
        <div className={cn("order-1 flex", "lg:col-span-6 lg:order-2")}>
          <div
            className={cn(
              "-mx-6",
              "md:-mx-12",
              "w-full flex flex-1 relative",
              "lg:-mr-24 lg:ml-0 lg:-mb-16",
              "xl:-mb-20"
            )}
          >
            <Image
              src={HeroImage}
              className="w-full object-cover"
              alt="People laughing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
