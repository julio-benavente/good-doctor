import type { Meta, StoryObj } from "@storybook/react";
import WhyUsSection from ".";

const meta: Meta<typeof WhyUsSection> = {
  title: "Pages/Home/Why us section",
  component: WhyUsSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof WhyUsSection>;

export const Default: Story = {};
