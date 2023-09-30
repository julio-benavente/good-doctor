import type { Meta, StoryObj } from "@storybook/react";
import TestimonialMessage from "./";

const meta: Meta<typeof TestimonialMessage> = {
  title: "Components/Testimonial message",
  component: TestimonialMessage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <div className="mx-12 mt-24">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof TestimonialMessage>;

export const Default: Story = {};
