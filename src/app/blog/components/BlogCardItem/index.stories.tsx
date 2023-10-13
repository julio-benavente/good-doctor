import type { Meta, StoryObj } from "@storybook/react";
import BlogCardItem from "./index";
import { fakeBlogsData } from "../../fakeBlogsData";
import { BlogMetadataProps } from "@/types";

const meta: Meta<typeof BlogCardItem> = {
  title: "Pages/Blog/Blog card item",
  component: BlogCardItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    type: "main",
    ...(fakeBlogsData[0] as BlogMetadataProps),
  },
  decorators: [
    (Story) => {
      return (
        <div className="p-8">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof BlogCardItem>;

export const Default: Story = {};
