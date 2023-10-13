import Image from "next/image";
import React from "react";
import DoctorListeningImage from "@/../public/assets/doctor-listening.jpg";
import { Link, Typography } from "@/components";
import { BlogMetadataProps } from "@/types";

const RecentArticleCard = ({ data }: { data: BlogMetadataProps }) => {
  const taxonamis = ["Mental Wellness", "Lifestyle", "Mental Wellness"];
  // const taxonamis = ["Lifestyle"];

  return (
    <div className="p-5 rounded-md bg-white">
      <div className="w-full aspect-video relative">
        <Image
          fill
          src={data.image}
          alt={data.imageAlt}
          className="object-cover object-center rounded-md"
        />
      </div>
      <div className="mt-3 flex flex-row flex-wrap gap-x-4 text-base">
        <div className="">
          {taxonamis.map((e, i, a) => {
            const addComma = i < a.length - 1;
            return (
              <Typography key={i} variant="caption" className="inline">
                {e}
                {`${addComma && "," + " "}`}
              </Typography>
            );
          })}
        </div>

        <Typography variant="caption">
          <time>
            {new Date(data.date).toLocaleDateString([], {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </Typography>
      </div>
      <Link href={`/blog/${data.slug}`} className="link h4 block mt-3">
        {data.title}
      </Link>
      <p className="mt-3 text-base">{data.excerpt}</p>
    </div>
  );
};

export default RecentArticleCard;
