import type { Meta, StoryObj } from "@storybook/react";
import FAQSection from "./index";

const meta: Meta<typeof FAQSection> = {
  title: "Pages/Home/FAQ section",
  component: FAQSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof FAQSection>;

export const Default: Story = {};
