import type { Meta, StoryObj } from "@storybook/react";
import CharacteristicsSection from ".";
import { SectionDecorator } from "@/helpers/decorators";

const meta: Meta<typeof CharacteristicsSection> = {
  title: "Pages/Request an appointment/Characteristics section",
  component: CharacteristicsSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CharacteristicsSection>;

export const Default: Story = {};
