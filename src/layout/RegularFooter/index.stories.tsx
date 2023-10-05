import type { Meta, StoryObj } from "@storybook/react";
import RegularFooter from "./index";

const meta: Meta<typeof RegularFooter> = {
  title: "Layout/Regular footer",
  component: RegularFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RegularFooter>;

export const Default: Story = {};
