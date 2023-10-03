import Link from "next/link";
import React from "react";
import DoctorListeningImage from "@/../public/assets/doctor-listening.jpg";
import SectionDecoration from "@/../public/assets/section-decoration.svg";
import Image from "next/image";
import cn from "@/helpers/cn";

const RecentArticlesList = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 mt-8",
        "md:grid-cols-2",
        "xl:grid-cols-3 xl:gap-x-8",
        "2xl:gap-x-16"
      )}
    >
      <RecentArticleCard />
      <RecentArticleCard />
      <RecentArticleCard />
    </div>
  );
};

export default RecentArticlesList;

const RecentArticleCard = () => {
  const taxonamis = ["Mental Wellness", "Lifestyle", "Mental Wellness"];
  // const taxonamis = ["Lifestyle"];

  return (
    <div className="p-5 rounded-md bg-white">
      <Image
        src={DoctorListeningImage}
        alt="doctor listening"
        className="aspect-video object-cover object-center rounded-md"
      />
      <div className="mt-3 flex flex-row flex-wrap gap-x-4 text-base">
        <div className="">
          {taxonamis.map((e, i, a) => {
            const addComma = i < a.length - 1;
            return (
              <Link href="/" className="link text-base" key={i}>
                {e}
                {`${addComma && ", "}`}
              </Link>
            );
          })}
        </div>

        <time>Aug 29, 2023</time>
      </div>
      <Link href="/" className="link h4 block mt-3">
        What is Caregiver Burnout?: 7 Signs and Symptoms of Caregiver Burnout
      </Link>
      <p className="mt-3 text-base">
        In this article, we discuss the signs and symptoms of caregiver burnout,
        along with tips for prevention and resources.
      </p>
    </div>
  );
};
