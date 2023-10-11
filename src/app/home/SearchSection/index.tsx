"use client";

import cn from "@/helpers/cn";
import {
  Button,
  InputWrapper,
  Label,
  RadioGroupItem,
  RadioGroup,
  Typography,
  TextField,
} from "@/components";

import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import PlaceIcon from "@mui/icons-material/Place";
import { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const SearchSection = () => {
  const formMethods = useForm({
    mode: "all",
    defaultValues: {
      address: "",
      type: "clinics",
    },
  });

  const { resetField, watch } = formMethods;

  const resetInput = () => resetField("address");

  return (
    <section className="relative lg:-mt-24">
      <FormProvider {...formMethods}>
        <form className="container mx-auto lg:py-0">
          <div
            className={cn(
              "grid bg-emerald-100 rounded-lg",
              "grid-cols-1 py-4 px-6",
              "lg:py-8 lg:px-12",
              "xl:grid-cols-[200px_1fr] xl:py-16 xl:px-20 xl:gap-16"
            )}
          >
            <Typography variant="h3" className="mb-8 xl:mb-0">
              Find a clinic or doctor near you.
            </Typography>
            <div
              className={cn(
                "grid justify-start grid-cols-1 gap-4",
                "lg:grid-cols-[auto_1fr_auto] lg:gap-6",
                "xl:grid-cols-[auto_auto_auto]"
              )}
            >
              <InputWrapper>
                <Label>Who is making the appointment?</Label>
                <RadioGroup fullWidth>
                  <RadioGroupItem name="type" value="clinics">
                    Clinics
                  </RadioGroupItem>
                  <RadioGroupItem name="type" value="doctors">
                    Doctors
                  </RadioGroupItem>
                </RadioGroup>
              </InputWrapper>

              <InputWrapper>
                <Label>Who is making the appointment?</Label>
                <TextField
                  variant="outlined"
                  name="address"
                  className={cn("xl:w-80")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceIcon className="text-green-800" />
                      </InputAdornment>
                    ),

                    endAdornment: watch("address") ? (
                      <InputAdornment position="end">
                        <CloseIcon
                          className="cursor-pointer"
                          onClick={resetInput}
                        />
                      </InputAdornment>
                    ) : (
                      <></>
                    ),
                  }}
                />
              </InputWrapper>
              <Button className={cn("w-full", "lg:h-12 lg:self-end")}>
                Search
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

// const AddressInput = () => {
//   const { register, getValues, watch, resetField } = useFormContext();

//   const resetInput = () => resetField("address");

//   return (
//     <InputWrapper>
//       <Label>Address, City, or Zip Code</Label>
//       <TextField
//         className={cn("xl:w-80")}
//         InputProps={{
//           classes: {
//             root: cn("px-2 h-12 bg-white"),
//             input: cn("py-2"),
//             focused: cn("border-green-400"),
//             notchedOutline: cn("border-2 border-emerald-500"),
//           },
//           startAdornment: (
//             <InputAdornment position="start">
//               <PlaceIcon className="text-green-800" />
//             </InputAdornment>
//           ),

//           endAdornment: watch("address") ? (
//             <InputAdornment position="end">
//               <CloseIcon className="cursor-pointer" onClick={resetInput} />
//             </InputAdornment>
//           ) : (
//             <></>
//           ),
//         }}
//         {...register("address")}
//       />
//     </InputWrapper>
//   );
// };

export default SearchSection;
