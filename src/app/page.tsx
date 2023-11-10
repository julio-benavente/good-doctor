import HeroSection from "./home/HeroSection";
import SearchSection from "./home/SearchSection";
import WhyUsSection from "./home/WhyUsSection";
import ProcessSection from "./home/ProcessSection";
import AssociatesSection from "./home/AssociatesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FAQSection from "./home/FAQSection";
import RecentArticlesSection from "./home/RecentArticlesSection";
import { BlogsSection, TestimonialsSlider } from "@/components";
import { getBlogsData } from "@/helpers/getBlogsData";

const page = async () => {
  const blogsData = await getBlogsData({ numberOfItems: 4 });

  return (
    <div>
      <HeroSection />
      <SearchSection />
      <WhyUsSection />
      <ProcessSection />
      <AssociatesSection />
      <TestimonialsSlider />
      <FAQSection />
      <BlogsSection data={blogsData} />
    </div>
  );
};

export default page;
