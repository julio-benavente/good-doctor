"use client";

import cn from "@/helpers/cn";
import MuiDivider, { DividerProps } from "@mui/material/Divider";

const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <MuiDivider
      className={cn("mt-2 mb-3 border-b-2 bg-secondary-texture", className)}
      {...props}
    />
  );
};

export default Divider;
