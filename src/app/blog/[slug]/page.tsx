import { getBlogsData, getSingleBlogData } from "@/helpers/getBlogsData";
import Article from "./Article";

export async function generateStaticParams() {
  const posts = await getBlogsData({});
  const paths = posts.map((post) => ({
    slug: post.metadata.slug,
  }));
  return paths;
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const { MDXContent, metadata } = await getSingleBlogData(params.slug);
  return <Article MDXContent={MDXContent} metadata={metadata} />;
};

export default SingleBlogPage;
