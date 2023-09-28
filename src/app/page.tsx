"use client";

import Navbar from "./homePage/Navbar";
import HeroSection from "./homePage/HeroSection";
import SearchSection from "./homePage/SearchSection";
import WhyUsSection from "./homePage/WhyUsSection";
import ProcessSection from "./homePage/ProcessSection";
import AssociatesSection from "./homePage/AssociatesSection";
import TestimonialsSection from "./homePage/TestimonialsSection";
import FAQSection from "./homePage/FAQSection";
import RecentArticlesSection from "./homePage/RecentArticlesSection";
import FooterSection from "./homePage/FooterSection";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <WhyUsSection />
      <ProcessSection />
      <AssociatesSection />
      <TestimonialsSection />
      <FAQSection />
      <RecentArticlesSection />
      <FooterSection />
    </div>
  );
};

export default page;
