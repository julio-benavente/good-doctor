import { getBlogsData } from "@/helpers/getBlogsData";
import MainSection from "./MainSection";

const BlogPage = async () => {
  const data = (await getBlogsData({})).map((e) => e.metadata);
  return <MainSection data={data} />;
};

export default BlogPage;
