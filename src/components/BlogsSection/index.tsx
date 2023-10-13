import Link from "next/link";
import React from "react";
import SectionDecoration from "@/../public/assets/section-decoration";
import RecentArticlesList from "./RecentArticlesList";
import cn from "@/helpers/cn";
import { Typography } from "@/components";

const RecentArticlesSection = ({ data }) => {
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
          <Typography variant="h2">Recent articles</Typography>
          <Link href="/blog" className="link-action">
            View more
          </Link>
        </div>
        <RecentArticlesList blogs={data} />
      </div>
    </section>
  );
};

export default RecentArticlesSection;
