import { Link, Typography } from "@/components";
import cn from "@/helpers/cn";
import { BlogMetadataProps } from "@/types";
import React from "react";

interface BlogSummaryProps {
  className?: string;
  data: BlogMetadataProps[];
}

const BlogSummary = ({ className, data }: BlogSummaryProps) => {
  return (
    <div className={cn("col-span-3", className)}>
      <div className="sticky top-24">
        <Typography className="font-bold">Blog Topics</Typography>
        <div className="grid mt-1 gap-y-2">
          {data.map((item, i) => {
            return (
              <Link href={`#${item.slug}`} key={i} className="text-sm block">
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSummary;
