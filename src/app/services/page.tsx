import { TestimonialsSlider } from "@/components";
import characteristicsListData from "./characteristicsListData";
import CharacteristicItem from "./CharacteristicItem";

const ServicesPage = () => {
  return (
    <div>
      {characteristicsListData.map((item) => {
        return <CharacteristicItem key={item.title} {...item} />;
      })}
      <TestimonialsSlider theme="light" />
    </div>
  );
};

export default ServicesPage;
