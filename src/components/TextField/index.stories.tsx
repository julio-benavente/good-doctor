import type { Meta, StoryObj } from "@storybook/react";
import TextField from ".";
import { FormProviderDecorator } from "@/helpers/decorators";

const meta: Meta<typeof TextField> = {
  title: "Components/Text field",
  component: TextField,
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

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
Default.args = {
  name: "text-input",
  registerOptions: {
    required: true,
  },
};
