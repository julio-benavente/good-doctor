import cn from "@/helpers/cn";
import { Button } from "@/components";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import PlaceIcon from "@mui/icons-material/Place";
import { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const SearchSection = () => {
  const formMethods = useForm({
    mode: "all",
    defaultValues: {
      type: "clinics",
    },
  });

  return (
    <section className="-mt-24  relative">
      <FormProvider {...formMethods}>
        <form className="container mx-auto">
          <div className="grid grid-cols-[200px_1fr] gap-16 bg-emerald-100 py-16 px-20 rounded-lg">
            <h2 className="h3">Find a clinic or doctor near you.</h2>
            <div className="grid grid-flow-col auto-cols-auto justify-start gap-6 self-end">
              <div>
                <Label className="font-bold">Search Type</Label>
                <Types />
              </div>
              <AddressInput />
              <Button className="h-12 self-end">Search</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

const AddressInput = () => {
  const { register, getValues, watch, resetField } = useFormContext();

  const resetInput = () => resetField("address");

  return (
    <InputWrapper>
      <Label>Address, City, or Zip Code</Label>
      <TextField
        className="w-96"
        InputProps={{
          classes: {
            root: cn("px-2 h-12 bg-white"),
            input: cn("py-2"),
            focused: cn("border-green-400"),
            notchedOutline: cn("border-2 border-emerald-500"),
          },
          startAdornment: (
            <InputAdornment position="start">
              <PlaceIcon className="text-green-800" />
            </InputAdornment>
          ),

          endAdornment: watch("address") ? (
            <InputAdornment position="end">
              <CloseIcon className="cursor-pointer" onClick={resetInput} />
            </InputAdornment>
          ) : (
            <></>
          ),
        }}
        {...register("address")}
      />
    </InputWrapper>
  );
};

const Types = () => {
  return (
    <div className="grid auto-cols-auto grid-flow-col gap-2 p-1 bg-white border-2 border-emerald-500 rounded">
      <RadioType name="clinics">Clinics</RadioType>
      <RadioType name="doctors">Doctors</RadioType>
    </div>
  );
};

const RadioType = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const { register, getValues, watch } = useFormContext();

  return (
    <label
      className={cn(
        "h-9 py-1 px-6 rounded grid place-items-center text-base font-bold cursor-pointer",
        watch("type") === name && "bg-slate-200"
      )}
      htmlFor={name}
    >
      {children}
      <input
        className="hidden"
        type="radio"
        id={name}
        value={name}
        {...register("type", { value: "clinics" })}
      />
    </label>
  );
};

const Label = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="font-bold text-base" {...props}>
      {children}
    </label>
  );
};

const InputWrapper = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="grid grid-flow-row gap--0.5" {...props}>
      {props.children}
    </div>
  );
};

export default SearchSection;
