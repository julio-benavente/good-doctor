import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";
import Button from "../Button";
import { FormProviderDecorator } from "@/helpers/decorators";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    return (
      <div className="grid gap-8 justify-items-start">
        <Button>Prueba</Button>
        <Checkbox
          name="agreement"
          labelProps={{
            label: <strong>I have read and agree to this disclosure</strong>,
          }}
        />
      </div>
    );
  },
};
