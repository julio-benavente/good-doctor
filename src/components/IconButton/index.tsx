import React, { Children } from "react";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import cn from "@/helpers/cn";

const IconButton = ({ ...props }: IconButtonProps) => {
  return (
    <MuiIconButton
      disableRipple
      classes={{
        root: cn(
          "p-3 text-text-light bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50",
          props.disabled &&
            cn("bg-gray-100 hover:bg-gray-100 text-text-disabled")
        ),
      }}
      {...props}
    >
      {props.children}
    </MuiIconButton>
  );
};

export default IconButton;
