import { getBlogsData, getSingleBlogData } from "@/helpers/getBlogsData";
import { BlogMetadataProps } from "@/types";
import blogComponents from "./blogComponents";
import { Typography } from "@/components";

export async function generateStaticParams() {
  const posts = await getBlogsData({});
  const paths = posts.map((post) => ({
    slug: post.metadata.slug,
  }));
  return paths;
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const { MDXContent, metadata } = await getSingleBlogData(params.slug);
  return (
    <article>
      <section className="container pb-0">
        <div>
          <Typography variant="h1">{metadata.title}</Typography>
          <Typography>Written by {metadata.author}</Typography>
          {metadata.reviewdBy && (
            <Typography>Reviewd by {metadata.reviewdBy}</Typography>
          )}
        </div>
      </section>
      <section className="container pt-0">
        {/* @ts-ignore:Unreachable code */}
        <MDXContent components={{ ...blogComponents }} />
      </section>
    </article>
  );
};

export default SingleBlogPage;
