import { TestimonialsSlider } from "@/components";
import FormSection from "./FormSection";
import CharacteristicsSection from "./CharacteristicsSection";

const RequestAnAppointment = () => {
  return (
    <>
      <FormSection />
      <CharacteristicsSection />
      <TestimonialsSlider theme="secondary" />
    </>
  );
};

export default RequestAnAppointment;
