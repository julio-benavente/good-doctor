import React from "react";
import MuiTypography, { TypographyProps } from "@mui/material/Typography";
import cn from "@/helpers/cn";

const Typography = ({ variant = "body1", ...props }: TypographyProps) => {
  return (
    <MuiTypography
      variant={variant}
      classes={{
        root: cn("font-cabinet font-cabinet"),
        h1: cn("text-5xl font-cabinet text-text-headline"),
        h2: cn("text-4xl text-text-headline"),
        h3: cn("text-2xl font-bold text-text-headline"),
        h4: cn("text-xl font-bold text-text-headline"),
        h5: cn("text-lg font-bold text-text-headline"),
        body1: cn("text-lg text-text"),
        body2: cn("text-sm text-text"),
        subtitle1: cn("text-lg text-text"),
      }}
      {...props}
    >
      {props.children}
    </MuiTypography>
  );
};

export default Typography;
