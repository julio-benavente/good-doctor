import type { Meta, StoryObj } from "@storybook/react";
import RadioGroupItem from ".";
import { FormProviderDecorator, SectionDecorator } from "@/helpers/decorators";
import RadioGroup from "@/components/RadioGroup";

const meta: Meta<typeof RadioGroupItem> = {
  title: "Components/Radio group item",
  component: RadioGroupItem,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <SectionDecorator>
        <FormProviderDecorator
          formProps={{ defaultValues: { type: "clinics" } }}
        >
          <Story />
        </FormProviderDecorator>
      </SectionDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioGroupItem>;

export const Default: Story = {
  render: (Story) => {
    return (
      <RadioGroup>
        <RadioGroupItem name="type" value="clinics">
          Clinics
        </RadioGroupItem>
        <RadioGroupItem name="type" value="other">
          Other
        </RadioGroupItem>
        <RadioGroupItem
          name="type"
          value="doctors"
          //   className="row-start-2 col-start-1 col-span-2"
        >
          Doctors
        </RadioGroupItem>
      </RadioGroup>
    );
  },
};
