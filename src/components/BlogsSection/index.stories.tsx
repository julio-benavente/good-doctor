import type { Meta, StoryObj } from "@storybook/react";
import BlogsSection from ".";

const meta: Meta<typeof BlogsSection> = {
  title: "Sections/Blogs",
  component: BlogsSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof BlogsSection>;

export const Default: Story = {};
