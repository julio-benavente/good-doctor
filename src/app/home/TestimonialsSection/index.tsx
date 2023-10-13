import React, { ClassAttributes, useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import cn from "@/helpers/cn";
import { Button } from "@/components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
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
    <section className="py-24 bg-teal-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-24 justify-between">
          <h2 className="h1 max-w-xl">Why patients choose The Good Doctor.</h2>
          <p className="h4 font-normal max-w-xl justify-self-end">
            Our doctors and physicians go above and beyond to make sure our
            patients feel safe and well-cared for. But don&lsquo;t take our word
            for it, see what people are saying about us.
          </p>
        </div>
        <div className="mt-12">
          <Slider
            {...settings}
            ref={sliderWrapperRef}
            onSwipe={() => console.log("swiped")}
            onReInit={onReInit}
          >
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            <TestimonialCardItem />
            {/* <TestimonialCardItem />
          <TestimonialCardItem /> */}
          </Slider>
        </div>

        <div className="flex gap-4 mt-8">
          <Button
            onClick={() => handleSlider({ direction: "prev" })}
            disabled={sliderPosition === "start"}
          >
            &lt;
          </Button>

          <Button
            onClick={() => handleSlider({ direction: "next" })}
            disabled={sliderPosition === "end"}
          >
            &gt;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

const TestimonialCardItem = () => {
  return (
    <div className="w-80 mr-8 p-6 bg-white flex flex-col rounded-lg">
      <Rating defaultValue={5} readOnly />
      <h3 className="h4 mt-2 link">
        <span>Morgana Park</span>
        <span> • Cleveland, OH</span>
      </h3>
      <div className="mt-4">
        <p className="font-bold">Mary</p>
        <p className="text-base text-gray-600">Patient survey</p>
      </div>
      <p className="mt-3 text-base">
        &ldquo;I feel heard and understood! The people at The Good Doctor are
        kind and friendly and I enjoy the service I received!&ldquo;
      </p>
    </div>
  );
};
