import type { Meta, StoryObj } from "@storybook/react";
import MainSection from "./MainSection";
import { fakeBlogsData } from "./fakeBlogsData";

const meta: Meta<typeof MainSection> = {
  title: "Pages/Blog",
  component: MainSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    data: fakeBlogsData,
  },
};

export default meta;

type Story = StoryObj<typeof MainSection>;

export const Default: Story = {};
