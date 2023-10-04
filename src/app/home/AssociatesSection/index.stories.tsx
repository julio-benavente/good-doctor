import type { Meta, StoryObj } from "@storybook/react";
import AssociatesSection from "./index";

const meta: Meta<typeof AssociatesSection> = {
  title: "Pages/Home/Associates section",
  component: AssociatesSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AssociatesSection>;

export const Default: Story = {};
