import type { Meta, StoryObj } from "@storybook/react";
import CharacteristicBanner from "./index";

const meta: Meta<typeof CharacteristicBanner> = {
  title: "Sections/Characteristic banner",
  component: CharacteristicBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CharacteristicBanner>;

export const Default: Story = {};
