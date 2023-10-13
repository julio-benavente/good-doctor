import cn from "@/helpers/cn";
import RecentArticleCard from "./RecentArticleCard";
import { BlogMetadataProps } from "@/types";

const RecentArticlesList = ({
  blogs,
}: {
  blogs: { metadata: BlogMetadataProps }[];
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 mt-8",
        "md:grid-cols-2",
        "xl:grid-cols-3 xl:gap-x-8 xl:[&>div:nth-of-type(4)]:hidden",
        "2xl:gap-x-16"
      )}
    >
      {blogs.map((blog) => {
        return (
          <RecentArticleCard key={blog.metadata.slug} data={blog.metadata} />
        );
      })}
    </div>
  );
};

export default RecentArticlesList;
