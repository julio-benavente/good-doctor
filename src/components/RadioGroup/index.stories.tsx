import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from ".";
import { FormProviderDecorator, SectionDecorator } from "@/helpers/decorators";
import RadioGroupItem from "@/components/RadioGroupItem";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio group",
  component: RadioGroup,
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

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroupItem name="type" value="clinics">
          Clinics
        </RadioGroupItem>
        <RadioGroupItem name="type" value="other">
          Other
        </RadioGroupItem>
        <RadioGroupItem name="type" value="doctors" className="basis-full">
          Doctors
        </RadioGroupItem>
      </RadioGroup>
    );
  },
};
