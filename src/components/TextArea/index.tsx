"use client";

import cn from "@/helpers/cn";
import { TextField as MuiTextField } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField";
import * as Form from "@radix-ui/react-form";
import React from "react";
import {
  useFormContext,
  RegisterOptions,
  UseFormStateProps,
} from "react-hook-form";

interface TextFieldProps extends BaseTextFieldProps {
  name: string;
  registerOptions?: RegisterOptions;
}

const TextField = ({
  classes,
  name,
  registerOptions,
  ...props
}: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = Boolean(errors[name]);

  return (
    <MuiTextField
      InputProps={{
        classes: {
          root: cn("group bg-white p-0"),
          input: cn("py-2 px-4 box-border h-auto"),
          focused: cn("border-emerald-300/80"),
          notchedOutline: cn(
            "border-2 border-emerald-300",
            "group-focus-within:ring-input group-focus-within:border-primary",
            isError &&
              "border-red-500 focus:border-red-500 group-focus-within:ring-4 group-focus-within:ring-red-500/50"
          ),
          ...classes,
        },
      }}
      multiline
      rows={4}
      {...props}
      {...register(name, { ...registerOptions })}
    />
  );
};

export default TextField;
