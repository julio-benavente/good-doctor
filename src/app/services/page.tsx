import Typography from "@/components/Typography";
import React from "react";
import ImageThree from "@/../public/assets/doctor-greeting.jpg";
import ImageOne from "@/../public/assets/hero-image.jpg";
import ImageTwo from "@/../public/assets/doctor-listening.jpg";
import Image, { StaticImageData } from "next/image";
import cn from "@/helpers/cn";
import { Button, TestimonialsSlider } from "@/components";
import characteristicsListData from "./characteristicsListData";
import CharacteristicItem from "./CharacteristicItem";

const ServicesPage = () => {
  return (
    <div>
      {characteristicsListData.map((item) => {
        return <CharacteristicItem key={item.title} {...item} />;
      })}
      <TestimonialsSlider theme="light" />
    </div>
  );
};

export default ServicesPage;
