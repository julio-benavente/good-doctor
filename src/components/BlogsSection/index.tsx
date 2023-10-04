import Link from "next/link";
import React from "react";
import DoctorListeningImage from "@/../public/assets/doctor-listening.jpg";
// import SectionDecoration from "@/../public/assets/section-decoration.svg";
import SectionDecoration from "@/../public/assets/section-decoration";
import Image from "next/image";
import RecentArticlesList from "./RecentArticlesList";
import cn from "@/helpers/cn";

const RecentArticlesSection = () => {
  return (
    <section className="relative bg-secondary z-0 overflow-hidden">
      <SectionDecoration
        className={cn(
          "hidden absolute -z-10 left-1/2 h-[calc(100%+10rem)] w-fit top-1/2 -translate-y-1/2 fill-secondary-texture",
          "lg:block"
        )}
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
