import cn from "@/helpers/cn";
import React, { HtmlHTMLAttributes, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label className={cn("font-bold w-fit", className)} {...props}>
      {props.children}{" "}
      {props.required && <span className="text-red-600">*</span>}
    </label>
  );
};

export default Label;
