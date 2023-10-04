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

const ContactPage = () => {
  const formMethods = useForm({ mode: "all" });
  return (
    <section>
      <div className="container">
        <div className="max-w-3xl mr-auto">
          <Typography variant="h1">Contact Us</Typography>

          <div className="grid grid-flow-row gap-y-5 mt-8">
            <Typography variant="subtitle1">
              We want to make sure you're connected to the right person as
              quickly as possible. At this time, we are prioritizing calls
              related to the care of our patients. If you're a patient, a
              caregiver, or a provider reaching out on behalf of a patient,
              please call <Link href="tel:8888986762">(888) 444-7777</Link>
            </Typography>
            <Typography variant="subtitle1">
              If you are not a patient, please complete the form below to help
              us assist you.
            </Typography>
            <form className="bg-secondary p-8 rounded-lg grid grid-cols-1 gap-y-6">
              <FormProvider {...formMethods}>
                <div className="grid grid-cols-2 gap-x-6">
                  <InputWrapper>
                    <Label required>First Name</Label>
                    <TextField name="first-name" />
                  </InputWrapper>
                  <InputWrapper>
                    <Label required>Last Name</Label>
                    <TextField name="last-name" />
                  </InputWrapper>
                </div>

                <div className="grid grid-cols-2 gap-x-6">
                  <InputWrapper>
                    <Label required>Email Address</Label>
                    <TextField name="email" />
                  </InputWrapper>

                  <InputWrapper>
                    <Label required>Phone number</Label>
                    <TextField name="phone-number" />
                  </InputWrapper>
                </div>
                <InputWrapper>
                  <Label required>Company Name</Label>
                  <TextField name="company-name" />
                </InputWrapper>

                <InputWrapper>
                  <Label required>Message</Label>
                  <TextArea name="message" />
                </InputWrapper>
              </FormProvider>
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
