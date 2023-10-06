import type { Meta, StoryObj } from "@storybook/react";
import CharacteristicItem from "./index";
import ImageTwo from "@/../public/assets/doctor-listening.jpg";

const meta: Meta<typeof CharacteristicItem> = {
  title: "Pages/Services/Characteristic item",
  component: CharacteristicItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    type: "main",
    direction: "ltr",
    title: "Specialized care for older adults like you.",
    content:
      "At Oak Street Health, we specialize in outstanding care for older adults. And you don't have to lift a finger. From dedicated doctors and care team members who take the time to know and understand your individual health needs to help with Medicare and insurance paperwork, we help eliminate the hassles to help you take care of yourself.",
    learnMoreLink: "/",
    image: ImageTwo,
  },
};

export default meta;

type Story = StoryObj<typeof CharacteristicItem>;

export const Default: Story = {};
