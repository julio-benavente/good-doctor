import { Divider } from "@/components";
import { BlogMetadataProps } from "@/types";
import BlogSummary from "./components/BlogSummary";
import BlogCardItem from "./components/BlogCardItem";
import cn from "@/helpers/cn";

const MainSection = ({ data }) => {
  const [firstBlog, ...restOfBlogs] = data as BlogMetadataProps[];

  return (
    <section>
      <div className="container pb-8">
        <BlogSummary data={restOfBlogs} className="lg:hidden" />
        <BlogCardItem {...firstBlog} type="main" className="mt-8 lg:mt-0" />
      </div>
      <Divider />
      <div className="container pt-8">
        <div className={cn("grid gap-x-8", "lg:grid-cols-12")}>
          <BlogSummary data={restOfBlogs} className="hidden lg:block" />
          <div className={cn("grid", "lg:col-span-9")}>
            {restOfBlogs &&
              restOfBlogs.map((blog, i) => {
                return (
                  <>
                    <BlogCardItem key={i} {...blog} />
                    <Divider key={i} className="[&:last-of-type]:hidden my-0" />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
