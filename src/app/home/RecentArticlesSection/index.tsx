import Link from "next/link";
import React from "react";
import DoctorListeningImage from "@/../public/assets/doctor-listening.jpg";
import SectionDecoration from "@/../public/assets/section-decoration.svg";
import Image from "next/image";

const RecentArticlesSection = () => {
  return (
    <section className="relative py-24 bg-emerald-200 z-0 overflow-hidden">
      <Image
        src={SectionDecoration}
        alt="Section decoration"
        className="absolute -z-10 left-1/2 h-[calc(100%+10rem)] w-fit top-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto">
        <div className="grid grid-flow-col justify-between items-end">
          <h2 className="h2">Recent articles</h2>
          <Link href="/" className="link-action">
            View more
          </Link>
        </div>
        <RecentArticlesList />
      </div>
    </section>
  );
};

export default RecentArticlesSection;

const RecentArticlesList = () => {
  return (
    <div className="grid grid-cols-3 gap-x-16 mt-8">
      <RecentArticleCard />
      <RecentArticleCard />
      <RecentArticleCard />
    </div>
  );
};

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
