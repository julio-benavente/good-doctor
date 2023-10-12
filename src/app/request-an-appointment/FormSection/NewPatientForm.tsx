"use client";

import {
  Button,
  Checkbox,
  Label,
  Link,
  RadioGroup,
  RadioGroupItem,
  TextField,
  Typography,
} from "@/components";
import cn from "@/helpers/cn";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputWrapper from "./InputWrapper";

const NewPatientForm = () => {
  return (
    <>
      <div className={cn("grid gap-x-6 gap-y-4", "md:grid-cols-2 md:gap-y-0")}>
        <InputWrapper>
          <Label required>First Name</Label>
          <TextField name="first-name" />
        </InputWrapper>
        <InputWrapper>
          <Label required>Last Name</Label>
          <TextField name="last-name" />
        </InputWrapper>
      </div>

      <div className={cn("grid gap-x-6 gap-y-4", "md:grid-cols-2 md:gap-y-0")}>
        <InputWrapper>
          <Label required>Patient Zip code</Label>
          <TextField name="patient-zip-code" />
        </InputWrapper>

        <InputWrapper>
          <Label required>Phone number</Label>
          <TextField name="phone-number" />
        </InputWrapper>
      </div>

      <div className={cn("grid grid-cols-3 gap-x-4 gap-y-0.5", "md:gap-y-6")}>
        <Label required className="col-span-full">
          Patient Date of Birth
        </Label>
        <TextField name="month" placeholder="MM" />
        <TextField name="day" placeholder="DD" />
        <TextField name="year" placeholder="YYYY" />
      </div>

      <div className="flex flex-col">
        <Label required>Email Address</Label>
        <TextField name="email" />
      </div>

      <Typography variant="caption" className="text-gray-600" component="p">
        <strong>Disclosure</strong>: I agree that Oak Street Health (and its
        affiliates, agents, contractors, and partners) may contact me by email,
        phone or text message for any purpose, including calls placed using
        automatic telephone dialing system or an artificial or prerecorded
        voice. This includes (but is not limited to) texts or calls for
        marketing purposes. This consent is not a condition of using our
        products or services. I agree to Oak Street Health&lsquo;s{" "}
        <Link href="https://google.com" target="_blank">
          Text Messaging Terms and Conditions
        </Link>
        . You may opt-out at anytime. To opt-out of text messages, respond to a
        text with &ldquo;STOP&ldquo;. Message and data rates may apply.
      </Typography>

      <Checkbox
        name="agreement"
        labelProps={{
          label: "I have read and agree to this disclosure",
          labelPlacement: "end",
        }}
      />

      <Button type="button" className="w-fit">
        Submit
      </Button>
    </>
  );
};

export default NewPatientForm;
