import cn from "@/helpers/cn";
import { ReactNode } from "react";

const InputWrapper = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>{children}</div>
  );
};

export default InputWrapper;
