import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Article";
import blogEntry from "@/app/blog/entries/best-recommendations-for-a-type-2-diabetes-diet-plan.mdx";

const meta: Meta<typeof Article> = {
  title: "Pages/Single blog (Article)",
  component: Article,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    MDXContent: blogEntry,
    metadata: {
      title: "Best Recommendations for a Type 2 Diabetes Diet Plan",
      slug: "best-recommendations-for-a-type-2-diabetes-diet-plan",
      image: "/assets/doctor-four.jpg",
      imageAlt: "Image of a doctor",
      date: new Date("2025-01-01T00:00:00.000Z"),
      author: "Molly Burford",
      reviewdBy: "Dr. Katy Brodski-Quigley",
      excerpt:
        "What diet plan is considered the best for those with type 2 diabetes? In this article, we talk about foods to eat, foods to avoid, and the most beneficial diet plans for type 2 diabetes.",
      tableOfContents: [
        { label: 'This paragraph has a class "myclass"', path: "heading-two" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {};
