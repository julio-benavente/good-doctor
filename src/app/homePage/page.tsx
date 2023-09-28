"use client";

import Navbar from "./Navbar";

import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import WhyUsSection from "./WhyUsSection";
import ProcessSection from "./ProcessSection";
import AssociatesSection from "./AssociatesSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import RecentArticlesSection from "./RecentArticlesSection";
import FooterSection from "./FooterSection";

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
