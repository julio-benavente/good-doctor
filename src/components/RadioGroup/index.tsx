import cn from "@/helpers/cn";
import { HtmlHTMLAttributes } from "react";

interface RadioGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
}

const RadioGroup = ({ fullWidth = false, ...props }: RadioGroupProps) => {
  return (
    <div
      className={cn(
        "flex gap-2 p-1 bg-white border-2 border-secondary-texture rounded w-fit flex-wrap rounded-md",
        "focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/50",
        fullWidth && "flex w-full [&>label]:flex-grow"
      )}
    >
      {props.children}
    </div>
  );
};

export default RadioGroup;
