import React from "react";
import Typography from "@/components/Typography";
import Image from "next/image";
import DoctorImage from "@/../public/assets/doctor-greeting.jpg";
import QuoteIcon from "@/../public/assets/qoute-icon";

const TestimonialMessage = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-12 p-12 bg-terciary rounded-lg">
      <div className="flex">
        <div className="flex-1 -mt-20 relative max-w-md">
          <Image
            src={DoctorImage}
            className="object-cover object-center h-full w-full rounded-lg"
            alt="A doctor greeting"
          />
          <QuoteIcon className="absolute w-36 fill-secondary top-0 -translate-x-1/2 rotate-180" />
        </div>
      </div>

      <div className="mr-4 self-center">
        <Typography variant="h3" className="text-primary">
          The staff here is kind and makes me feel comfortable. The Good Doctor
          works with many hospitals, which makes it easy for me to always have
          access to good care and its comforting to know that I can always see a
          friendly primary care doctor near me.
        </Typography>
        <Typography className="mt-4">
          Linda, Patient at The Good Doctor
        </Typography>
      </div>
    </div>
  );
};

export default TestimonialMessage;
