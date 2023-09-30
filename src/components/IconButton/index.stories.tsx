import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
Default.args = {
  children: <ArrowForwardIcon />,
};
