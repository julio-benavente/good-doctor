import type { Meta, StoryObj } from "@storybook/react";
import TextArea from ".";
import { FormProviderDecorator } from "@/helpers/decorators";

const meta: Meta<typeof TextArea> = {
  title: "Components/Text area",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <FormProviderDecorator>
        <Story />
      </FormProviderDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
Default.args = {
  name: "text-input",
  registerOptions: {
    required: true,
  },
};
