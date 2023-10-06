// "use client";

import { BlogsSection, TestimonialsSlider } from "@/components";
import FormSection from "./FormSection";
import CharacteristicsSection from "./CharacteristicsSection";

const RequestAnAppointment = () => {
  return (
    <>
      <FormSection />
      <CharacteristicsSection />
      <TestimonialsSlider theme="secondary" />
      <BlogsSection />
    </>
  );
};

export default RequestAnAppointment;
