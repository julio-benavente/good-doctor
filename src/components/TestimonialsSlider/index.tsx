"use client";

import { useRef, useState } from "react";
import cn from "@/helpers/cn";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCardItem from "./TestimonialCardItem";
import { IconButton, Typography } from "@/components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type TestimonialsThemeType = "light" | "neutral" | "secondary";
export interface TestimonialsSliderProps {
  theme?: TestimonialsThemeType;
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
    variableWidth: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
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
        "overflow-hidden",
        theme === "neutral" && "bg-terciary",
        theme === "light" && "bg-white",
        theme === "secondary" && "bg-white"
      )}
    >
      <div className="container mx-auto">
        <div
          className={cn(
            "grid justify-between gap-8",
            "lg:max-w-lg",
            "xl:grid-cols-2 xl:max-w-none",
            "xl:gap-24"
          )}
        >
          <Typography variant="h2" className="xl:max-w-md">
            Why patients choose The Good Doctor.
          </Typography>
          <Typography variant="subtitle1">
            Our doctors and physicians go above and beyond to make sure our
            patients feel safe and well-cared for. But don&lsquo;t take our word
            for it, see what people are saying about us.
          </Typography>
        </div>
        <div className="mt-12">
          <Slider
            {...settings}
            ref={sliderWrapperRef}
            onSwipe={() => console.log("swiped")}
            onReInit={onReInit}
          >
            {testimonialsListData.map((item, i) => {
              return <TestimonialCardItem key={i} theme={theme} {...item} />;
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
