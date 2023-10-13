import { Link, Typography } from "@/components";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import blog from "./entries/blog.mdx";
import { readFile, readdir } from "fs/promises";
import Image from "next/image";
import BlogImage from "@/../public/assets/doctor-three.jpg";
import cn from "@/helpers/cn";
import { BlogMetadataProps } from "@/types";

async function getData() {
  const files = await readdir("./src/app/blog/entries");

  const result = await Promise.all(
    files.map(async (file) => {
      const archive = await require(`./entries/${file}`);
      return {
        MDXContent: archive.default,
        metadata: archive.metadata,
      };
    })
  );

  return result;
}

const BlogPage = async () => {
  const data = await getData();
  const blogsSorted: BlogMetadataProps[] = data
    .map((item) => item.metadata)
    .sort((a, b) => b.date - a.date);
  const [firstBlog, ...restOfBlogs] = blogsSorted;

  return (
    <section>
      <div className="container">
        <BlogCardItem {...firstBlog} type="main" />

        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-2">
            <div className="sticky top-4">
              <Typography>Blog Topics</Typography>
              <div className="mt-1">
                {blogsSorted.map((item, i) => {
                  return (
                    <Typography key={i} className="text-sm">
                      {item.title}
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-10">
            {restOfBlogs &&
              restOfBlogs.map((blog, i) => {
                return <BlogCardItem key={i} {...blog} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

interface BlogCardItemProps extends BlogMetadataProps {
  type?: "main" | "regular";
}

const BlogCardItem = ({ type = "regular", ...props }: BlogCardItemProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-10 gap-x-8 mb-8 relative",
        type === "main" && "grid-cols-12"
      )}
    >
      <div
        className={cn(
          "relative w-full aspect-video col-span-4",
          type === "main" && "col-span-6"
        )}
      >
        <Image
          src={props.image || BlogImage}
          alt={props.imageAlt}
          fill
          className={cn("object-cover object-center rounded-lg")}
        />
      </div>
      <div className="col-span-6">
        <Typography>
          {new Date(props.date).toLocaleDateString([], {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <Link type="standard" className="text-4xl decoration-2 mt-4">
          {props.title}
        </Link>
        <Typography className="mt-4">{props.excerpt}</Typography>
      </div>
    </div>
  );
};
