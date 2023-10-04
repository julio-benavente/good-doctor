import type { Meta, StoryObj } from "@storybook/react";
import ProcessesSection from "./";

const meta: Meta<typeof ProcessesSection> = {
  title: "Pages/Home/Processes section",
  component: ProcessesSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ProcessesSection>;

export const Default: Story = {};
