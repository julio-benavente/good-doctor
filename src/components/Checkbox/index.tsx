"use client";

import React from "react";
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import cn from "@/helpers/cn";

import Typography from "../Typography";
import { RegisterOptions, useFormContext } from "react-hook-form";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type LabelProps = Optional<FormControlLabelProps, "control">;

interface CheckboxProps {
  name: string;
  registerOptions?: RegisterOptions;
  checkboxProps?: MuiCheckboxProps;
  labelProps?: LabelProps;
}

const Checkbox = ({
  checkboxProps = {},
  name,
  registerOptions,
  labelProps,
  ...props
}: CheckboxProps) => {
  const {
    className: labelClassName,
    label,
    control,
    ...restLabelProps
  } = labelProps || {};
  const { className: checkboxClassName, ...restCheckboxProps } = checkboxProps;
  const { register } = useFormContext();

  return (
    <FormControlLabel
      className={cn("group", labelClassName)}
      label={
        <Typography
          variant="body1"
          classes={{
            body1: cn("text-base leading-tight font-bold"),
          }}
        >
          {label}
        </Typography>
      }
      control={
        <MuiCheckbox
          disableRipple
          classes={{
            root: cn([
              "group relative",
              "after:absolute after:opacity-100 after:h-4 after:w-4 after:group-focus-within:ring-input after:rounded-sm after:outline-none",
            ]),
            checked: cn("[&>svg]:text-primary"),
          }}
          {...restCheckboxProps}
          {...register(name, { ...registerOptions })}
        />
      }
      {...restLabelProps}
    />
  );
};

export default Checkbox;
