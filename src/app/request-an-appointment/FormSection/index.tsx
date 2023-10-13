"use client";

import {
  Button,
  Label,
  RadioGroup,
  RadioGroupItem,
  TwentyFourSeven,
  Typography,
} from "@/components";
import { FormProvider, useForm } from "react-hook-form";
import NewPatientForm from "./NewPatientForm";
import InputWrapper from "./InputWrapper";
import ExistingPatientInformation from "./ExistingPatientInformation";
import CaregiverInformation from "./CaregiverInformation";
import cn from "@/helpers/cn";

const FormSection = () => {
  const formMethods = useForm({
    defaultValues: {
      requester: "new-patient",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="bg-terciary py-8">
      <div
        className={cn(
          "container mx-auto grid gap-y-12",
          "lg:grid-cols-2",
          "xl:gap-x-12"
        )}
      >
        <div className={cn("lg:pr-16 xl:pr-24")}>
          <Typography variant="h1" className="">
            Become a Patient at The Good Doctor
          </Typography>
          <Typography className="mt-4">
            As you get older, primary care has never been more important. If you
            are covered by Medicare, let&lsquo;s talk about how our primary care
            doctors can better care for you.
          </Typography>
          <Button href="tel:8888888888" color="secondary" className="mt-8">
            (888) 898-6762
          </Button>
        </div>
        <form
          className={cn(
            "bg-white p-6 rounded-lg flex gap-4 flex-col",
            "md:p-8"
          )}
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <FormProvider {...formMethods}>
            <Typography variant="h3">Request an appointment.</Typography>
            <InputWrapper className="mt-4">
              <Label>Who is making the appointment?</Label>
              <RadioGroup fullWidth>
                <RadioGroupItem name="requester" value="new-patient">
                  New Patient
                </RadioGroupItem>
                <RadioGroupItem name="requester" value="caregiver">
                  Caregiver
                </RadioGroupItem>
                <RadioGroupItem name="requester" value="existing-patient">
                  Existing Patient
                </RadioGroupItem>
              </RadioGroup>
            </InputWrapper>

            {formMethods.watch("requester") === "new-patient" && (
              <NewPatientForm />
            )}
            {formMethods.watch("requester") === "caregiver" && (
              <CaregiverInformation />
            )}
            {formMethods.watch("requester") === "existing-patient" && (
              <ExistingPatientInformation />
            )}
          </FormProvider>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
