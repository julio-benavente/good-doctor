import type { Meta, StoryObj } from "@storybook/react";
import Button from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
Default.args = {
  children: "Button text",
  color: "primary",
};

export const AllButtons: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="appointment">Appointment</Button>
      </div>
    );
  },
};
