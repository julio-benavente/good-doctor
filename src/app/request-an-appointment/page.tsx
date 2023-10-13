import { BlogsSection, TestimonialsSlider } from "@/components";
import FormSection from "./FormSection";
import CharacteristicsSection from "./CharacteristicsSection";
import { getBlogsData } from "@/helpers/getBlogsData";

const RequestAnAppointment = async () => {
  const blogsData = await getBlogsData({ numberOfItems: 4 });

  return (
    <div>
      <FormSection />
      <CharacteristicsSection />
      <TestimonialsSlider theme="secondary" />
      <BlogsSection data={blogsData} />
    </div>
  );
};

export default RequestAnAppointment;
