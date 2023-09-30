import type { Meta, StoryObj } from "@storybook/react";
import TestimonialsSlider from "./";

const meta: Meta<typeof TestimonialsSlider> = {
  title: "Components/Testimonials slider",
  component: TestimonialsSlider,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <div className="m-0">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof TestimonialsSlider>;

export const Default: Story = {};
