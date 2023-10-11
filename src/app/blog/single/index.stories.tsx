import type { Meta, StoryObj } from "@storybook/react";
import SingleBlogPage from "./page";

const meta: Meta<typeof SingleBlogPage> = {
  title: "Pages/Single blog",
  component: SingleBlogPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SingleBlogPage>;

export const Default: Story = {};
