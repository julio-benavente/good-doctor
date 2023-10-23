import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Article";
import blogEntry from "@/app/blog/entries/cancer-prevention-strategies.mdx";

const meta: Meta<typeof Article> = {
  title: "Pages/Single blog (Article)",
  component: Article,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    MDXContent: blogEntry,
    metadata: {
      date: new Date("2023-12-15").toString(),
      title: "Guarding Against the Silent Threat: Cancer Prevention Strategies",
      slug: "cancer-prevention-strategies",
      image: "/assets/doctor-one.jpg",
      imageAlt: "Image of a doctor",
      author: "Dr. Sarah Mitchell",
      reviewedBy: "David Anderson, Oncologist",
      excerpt:
        "Cancer is a silent threat that affects people worldwide. This blog post is your guide to cancer prevention strategies, providing insights and tips to help reduce your risk of developing this disease.",
      tableOfContents: [
        {
          id: "heading-intro",
          heading: "Introduction to Cancer Prevention",
        },
        {
          id: "heading-understanding-cancer",
          heading: "Understanding Cancer and Its Risk Factors",
        },
        {
          id: "heading-healthy-lifestyle",
          heading: "Adopting a Healthy Lifestyle for Cancer Prevention",
        },
        {
          id: "heading-screening-and-early-detection",
          heading: "Importance of Screening and Early Detection",
        },
        {
          id: "heading-genetic-risk",
          heading: "Genetic Risk and Counseling",
        },
        {
          id: "heading-resources-and-support",
          heading: "Resources and Support for Cancer Prevention",
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {};
