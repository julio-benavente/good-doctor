import type { Meta, StoryObj } from "@storybook/react";
import ServicesPage from "./page";

const meta: Meta<typeof ServicesPage> = {
  title: "Pages/Services",
  component: ServicesPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <div className="mx-0 mt-24">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof ServicesPage>;

export const Default: Story = {};
