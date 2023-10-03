import { TwentyFourSeven, Typography } from "@/components";
import React from "react";

const CharacteristicsSection = () => {
  return (
    <section className="bg-primary">
      <div className="container py-24">
        <Typography variant="h2" className="text-white max-w-sm">
          Experience the Oak Street Health difference.
        </Typography>
        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "See your doctor today or tomorrow",
              content: "No need to wait weeks for your next appointment.",
            },
            {
              title: "We have phone and video visits",
              content:
                "See your doctor by phone or video and receive high-quality care without leaving your home.",
            },
            {
              title: (
                <>
                  <TwentyFourSeven /> patient support line
                </>
              ),
              content:
                "Call us with questions for your doctor, to arrange prescription refills or to book your next appointment.",
            },
          ].map((e) => {
            return (
              <div className="">
                <Typography variant="h3" className="text-white">
                  {" "}
                  {e.title}
                </Typography>
                <Typography className="mt-4 text-white">
                  {" "}
                  {e.content}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CharacteristicsSection;
