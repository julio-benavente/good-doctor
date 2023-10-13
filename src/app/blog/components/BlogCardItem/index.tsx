import { Link, Typography } from "@/components";
import cn from "@/helpers/cn";
import { BlogMetadataProps } from "@/types";
import Image from "next/image";
import { HtmlHTMLAttributes } from "react";

interface BlogCardItemProps
  extends BlogMetadataProps,
    Omit<HtmlHTMLAttributes<HTMLDivElement>, "title"> {
  type?: "main" | "regular";
}

const BlogCardItem = ({
  type = "regular",
  className,
  ...props
}: BlogCardItemProps) => {
  return (
    <div
      id={props.slug}
      className={cn(
        "grid gap-x-8 grid-cols-1 relative",
        "py-8 [&:first-of-type]:pt-0 [&:last-of-type]:pb-0",
        "lg:grid-cols-9",
        type === "main" && "py-0 lg:grid-cols-12",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full aspect-video lg:col-span-4",
          "lg:aspect-[12/9]",
          type === "main" && "lg:col-span-7"
        )}
      >
        <Image
          src={props.image}
          alt={props.imageAlt}
          fill
          className={cn("object-cover object-center rounded-lg")}
        />
      </div>
      <div className={cn("self-center mt-4", "lg:col-span-5 lg:mt-0")}>
        <Typography className="[&]:text-base">
          <time>
            {new Date(props.date).toLocaleDateString([], {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        </Typography>
        <Link
          href={`/blog/${props.slug}`}
          type="standard"
          className={cn(
            "text-2xl decoration-2 mt-4",
            "lg:text-3xl xl:text-4xl"
          )}
        >
          {props.title}
        </Link>
        <Typography className="mt-4">{props.excerpt}</Typography>
      </div>
    </div>
  );
};

export default BlogCardItem;
