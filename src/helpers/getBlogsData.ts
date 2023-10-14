import { BlogMetadataProps } from "@/types";
import { readdir } from "fs/promises";
import { MDXComponents, MDXContent } from "mdx/types";
// import path from "path";

interface GetBlogsDataProps {
  numberOfItems?: number;
}

interface BlogItemProps {
  metadata: BlogMetadataProps;
  MDXContent: any;
}

export async function getBlogsData({
  numberOfItems = undefined,
}: GetBlogsDataProps): Promise<BlogItemProps[]> {
  // const blogsFilesPath = path.resolve("src", "app", "blog", "entries");

  const files = await readdir("./src/app/blog/entries");

  const blogs = await Promise.all(
    files.map(async (file) => {
      const archive = await require(`../app/blog/entries/${file}`);
      return {
        MDXContent: archive.default,
        metadata: archive.metadata as BlogMetadataProps,
      };
    })
  );

  const blogsSorted = blogs
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    )
    .slice(0, numberOfItems);

  return blogsSorted;
}

export const getSingleBlogData = async (
  slug: string
): Promise<{
  MDXContent: MDXContent;
  metadata: BlogMetadataProps;
}> => {
  const file = await require(`../app/blog/entries/${slug}.mdx`);
  return {
    MDXContent: file.default,
    metadata: file.metadata as BlogMetadataProps,
  };
};
