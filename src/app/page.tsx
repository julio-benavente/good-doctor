"use client";

import HeroSection from "./home/HeroSection";
import SearchSection from "./home/SearchSection";
import WhyUsSection from "./home/WhyUsSection";
import ProcessSection from "./home/ProcessSection";
import AssociatesSection from "./home/AssociatesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FAQSection from "./home/FAQSection";
import RecentArticlesSection from "./home/RecentArticlesSection";
import { BlogsSection, TestimonialsSlider } from "@/components";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <SearchSection />
      <WhyUsSection />
      <ProcessSection />
      <AssociatesSection />
      <TestimonialsSlider />
      <FAQSection />
      <BlogsSection />
      {/* <RecentArticlesSection /> */}
    </div>
  );
};

export default page;
