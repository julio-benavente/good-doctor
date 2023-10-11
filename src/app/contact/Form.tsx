"use client";

import {
  Button,
  InputWrapper,
  Label,
  Link,
  TextArea,
  TextField,
  Typography,
} from "@/components";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Form = () => {
  const formMethods = useForm({ mode: "all" });

  return (
    <form className="bg-secondary p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 lg:p-8">
      <FormProvider {...formMethods}>
        <InputWrapper>
          <Label required>First Name</Label>
          <TextField name="first-name" />
        </InputWrapper>
        <InputWrapper>
          <Label required>Last Name</Label>
          <TextField name="last-name" />
        </InputWrapper>

        <InputWrapper>
          <Label required>Email Address</Label>
          <TextField name="email" />
        </InputWrapper>

        <InputWrapper>
          <Label required>Phone number</Label>
          <TextField name="phone-number" />
        </InputWrapper>
        <InputWrapper className="col-span-full">
          <Label required>Company Name</Label>
          <TextField name="company-name" />
        </InputWrapper>

        <InputWrapper className="col-span-full">
          <Label required>Message</Label>
          <TextArea name="message" />
        </InputWrapper>
      </FormProvider>
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
