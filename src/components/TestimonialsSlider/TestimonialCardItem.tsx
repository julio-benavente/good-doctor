import { Rating } from "@mui/material";
import { TestimonialsThemeType } from ".";
import cn from "@/helpers/cn";

interface TestimonialCardItemProps {
  theme?: TestimonialsThemeType;
  name: string;
  origin: string;
  comment: string;
}
const TestimonialCardItem = ({ theme, ...props }: TestimonialCardItemProps) => {
  return (
    <div
      className={cn(
        "w-80 mr-8 p-6 bg-white flex flex-col rounded-lg h-full",
        theme === "secondary" && "bg-terciary"
      )}
    >
      <Rating defaultValue={5} readOnly />
      {/* <h3 className="h4 mt-2 link">
        <span>Morgana Park</span>
        <span> • Cleveland, OH</span>
      </h3> */}
      <div className="mt-4">
        <p className="font-bold">{props.name}</p>
        <p className="text-base text-gray-600">{props.origin}</p>
      </div>
      <p className="mt-3 text-base">{props.comment}</p>
    </div>
  );
};

export default TestimonialCardItem;
