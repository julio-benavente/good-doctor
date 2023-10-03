import type { Meta, StoryObj } from "@storybook/react";
import RequestAnApppointment from "./page";
import { FormProviderDecorator, SectionDecorator } from "@/helpers/decorators";

const meta: Meta<typeof RequestAnApppointment> = {
  title: "Pages/Request an appointment",
  component: RequestAnApppointment,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <FormProviderDecorator>
          <Story />
        </FormProviderDecorator>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof RequestAnApppointment>;

export const Default: Story = {};
