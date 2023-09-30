"use client";
import React, { ClassAttributes, useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import cn from "@/helpers/cn";
import { Button } from "@/components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCardItem from "./TestimonialCardItem";
import { IconButton } from "@/components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface TestimonialsSliderProps {
  theme?: "light" | "neutral";
}

const TestimonialsSlider = ({
  theme = "neutral",
  ...props
}: TestimonialsSliderProps) => {
  const sliderWrapperRef = useRef<any>(null);

  const [sliderPosition, setSliderPosition] = useState<
    "start" | "center" | "end"
  >("start");
  const handleSlider = ({ direction }: { direction: "prev" | "next" }) => {
    const slider = sliderWrapperRef.current;

    if (slider) {
      if (direction === "next") slider?.slickNext();
      if (direction === "prev") slider?.slickPrev();
    }
  };

  const settings: Settings = {
    dots: false,
    speed: 300,
    arrows: false,
    autoplay: false,
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
  };

  const onReInit = (): void => {
    const slider = sliderWrapperRef.current;
    const state = slider.innerSlider?.state;

    const slideCount = state.slideCount;
    const currentSlide = state.currentSlide;

    if (currentSlide === slideCount - 1) {
      return setSliderPosition("end");
    }

    if (currentSlide === 0) {
      return setSliderPosition("start");
    }

    return setSliderPosition("center");
  };

  return (
    <section
      className={cn(
        "py-24 overflow-hidden",
        theme === "neutral" && "bg-terciary",
        theme === "light" && "bg-white"
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-24 justify-between">
          <h2 className="h1 max-w-xl">
            Why patients choose Oak Street Health.
          </h2>
          <p className="h4 font-normal max-w-xl justify-self-end">
            Our doctors and physicians go above and beyond to make sure our
            patients feel safe and well-cared for. But don't take our word for
            it, see what people are saying about us.
          </p>
        </div>
        <div className="mt-12">
          <Slider
            {...settings}
            ref={sliderWrapperRef}
            onSwipe={() => console.log("swiped")}
            onReInit={onReInit}
          >
            {testimonialsListData.map((item, i) => {
              return <TestimonialCardItem key={i} {...item} />;
            })}
          </Slider>
        </div>

        <div className="flex gap-4 mt-8">
          <IconButton
            onClick={() => handleSlider({ direction: "prev" })}
            disabled={sliderPosition === "start"}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => handleSlider({ direction: "next" })}
            disabled={sliderPosition === "end"}
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

const testimonialsListData = [
  {
    name: "Evelyn",
    origin: "Patient Survey",
    comment:
      "Everyone was very polite everybody knew their business I was very shocked at how good the service was.",
  },
  {
    name: "James",
    origin: "Patient Survey",
    comment:
      "Very efficient check-in and insurance consultation, followed by a very thorough history gathering and exam.",
  },
  {
    name: "Annie",
    origin: "Patient Survey",
    comment:
      "All staff from the medical team to the customer service team are dedicated and professional in every way.",
  },
  {
    name: "Brenda",
    origin: "Patient Survey",
    comment:
      "Every one was nice I didn't have to wait to long to see my doctor",
  },
  {
    name: "Evelyn",
    origin: "Patient Survey",
    comment:
      "Everyone was very polite everybody knew their business I was very shocked at how good the service was.",
  },
  {
    name: "James",
    origin: "Patient Survey",
    comment:
      "Very efficient check-in and insurance consultation, followed by a very thorough history gathering and exam.",
  },
  {
    name: "Annie",
    origin: "Patient Survey",
    comment:
      "All staff from the medical team to the customer service team are dedicated and professional in every way.",
  },
  {
    name: "Brenda",
    origin: "Patient Survey",
    comment:
      "Every one was nice I didn't have to wait to long to see my doctor",
  },
];
