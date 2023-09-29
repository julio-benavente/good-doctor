import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

// export const Default: Story = {};
export const AllTypographies: Story = {
  render: () => {
    return (
      <div className="grid gap-y-2">
        <Typography variant="h1">This is a H1 </Typography>
        <Typography variant="h2">This is a H2</Typography>
        <Typography variant="h3">This is a H3</Typography>
        <Typography variant="h4">This is a H4</Typography>
        <Typography variant="body1">This is a body1</Typography>
        <Typography variant="body2">This is a body2</Typography>
        <Typography variant="subtitle1">This is a subtitle1</Typography>
      </div>
    );
  },
};
