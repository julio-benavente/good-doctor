import type { Meta, StoryObj } from "@storybook/react";
import SearchSeciton from ".";

const meta: Meta<typeof SearchSeciton> = {
  title: "Pages/Home/SearchSection",
  component: SearchSeciton,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="mt-40">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchSeciton>;

export const Default: Story = {};
