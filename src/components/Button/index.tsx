"use client";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import cn from "@/helpers/cn";
// import { createTheme, ThemeProvider } from "@mui/material";
import {
  PaletteColorOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Link from "next/link";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    appointment: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    appointment: createColor("#F40B27"),
  },
});

declare module "@mui/material/styles" {
  interface CustomPalette {
    appointment: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const Button = (props: ButtonProps) => {
  const CustomComponent = props.href ? Link : "span";

  return (
    <ThemeProvider theme={theme}>
      {props.href && (
        <CustomComponent href={props.href!} tabIndex={-1}>
          <BaseButtom {...props} />
        </CustomComponent>
      )}
      {!props.href && <BaseButtom {...props} />}
    </ThemeProvider>
  );
};

export default Button;

const BaseButtom = ({
  className,
  href,
  variant = "contained",
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color="primary"
      disableRipple
      className={cn(
        "relative w-fit after:hidden hover:after:block after:w-full after:h-full  after:absolute after:left-0 after:top-0",
        props.color === "appointment" &&
          variant === "contained" &&
          "bg-amber-500 text-text hover:bg-appointment/80 active:bg-appointment/70 focus:ring-4 focus:ring-appointment/50",
        className
      )}
      classes={{
        root: cn(
          "font-semibold rounded-md shadow-none text-sm normal-case transition-none"
        ),
        contained: cn(""),
        containedPrimary: cn(
          "text-text-light bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50"
        ),
        containedSecondary: cn(
          "bg-emerald-200 text-text hover:bg-emerald-200/70 active:bg-emerald-200/50 focus:ring-4 focus:ring-input active:ring-0"
        ),
        sizeSmall: cn("px-3 py-2"),
        sizeMedium: cn("px-5 py-3"),
        sizeLarge: cn("px-8 py-3"),
        disabled: cn("bg-gray-100 text-text-disabled"),
      }}
      {...props}
    />
  );
};
