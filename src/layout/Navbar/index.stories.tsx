import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Navbar />
        <div className="h-[200vh] bg-green-200"></div>
      </div>
    );
  },
};
