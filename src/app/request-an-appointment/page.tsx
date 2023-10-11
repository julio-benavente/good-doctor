import { BlogsSection, TestimonialsSlider } from "@/components";
import FormSection from "./FormSection";
import CharacteristicsSection from "./CharacteristicsSection";

const RequestAnAppointment = () => {
  return (
    <div>
      <FormSection />
      <CharacteristicsSection />
      <TestimonialsSlider theme="secondary" />
      <BlogsSection />
    </div>
  );
};

export default RequestAnAppointment;
