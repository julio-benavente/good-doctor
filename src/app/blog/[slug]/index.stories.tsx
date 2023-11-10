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
      date: new Date("2023-12-15"),
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
    blogsData: [
      {
        metadata: {
          title:
            "Navigating the Path to Health and Healing: Your Guide to The Good Doctor",
          slug: "hospital-guide-navigating-health-healing",
          author: "Dr. Emily Johnson",
          reviewedBy: "Sarah Smith, RN",
          image: "/assets/doctor-two.jpg",
          imageAlt: "Image of a doctor",
          date: new Date("2025-01-01T00:00:00.000Z"),
          excerpt:
            "In a world where health is paramount, The Good Doctor stands as a beacon of hope, offering cutting-edge healthcare services and unwavering support to its patients. Join us on a journey through the corridors of The Good Doctor as we explore the keys to health and healing.",
          tableOfContents: [
            {
              id: "heading-intro",
              heading: "Introduction to The Good Doctor",
            },
            {
              id: "heading-our-mission",
              heading: "Our Mission and Vision",
            },
            {
              id: "heading-leading-experts",
              heading: "World-Class Medical Experts",
            },
            {
              id: "heading-comprehensive-services",
              heading: "Comprehensive Healthcare Services",
            },
            {
              id: "heading-patient-care",
              heading: "Patient-Centered Care",
            },
            {
              id: "heading-community-engagement",
              heading: "Community Engagement and Outreach",
            },
          ],
        },
      },
      {
        metadata: {
          title:
            "A Journey to Mental Wellness: Exploring the World of Mental Health Care",
          slug: "mental-health-journey-exploring-wellness",
          author: "Dr. Sarah Miller",
          image: "/assets/doctor-five.jpg",
          imageAlt: "Image of a doctor",
          reviewedBy: "John Davis, LMHC",
          excerpt:
            "In a world where mental well-being is essential, this blog post delves into the realm of mental health care, offering insights and guidance for those on a journey to mental wellness.",
          date: new Date("2025-01-01T00:00:00.000Z"),
          tableOfContents: [
            {
              id: "heading-intro",
              heading: "Introduction to Mental Health Care",
            },
            {
              id: "heading-our-mission",
              heading: "Our Mission and Vision for Mental Wellness",
            },
            {
              id: "heading-leading-experts",
              heading: "Expert Mental Health Professionals",
            },
            {
              id: "heading-comprehensive-services",
              heading: "Comprehensive Mental Health Services",
            },
            {
              id: "heading-patient-care",
              heading: "Patient-Centered Mental Health Care",
            },
            {
              id: "heading-community-engagement",
              heading: "Community Engagement in Mental Health",
            },
          ],
        },
      },
      {
        metadata: {
          title: "9 Ways to Save on Healthcare Expenses",
          slug: "nine-ways-to-save-on-healthcare-expenses",
          date: new Date("2024-04-03T23:00:00.000Z"),
          author: "Molly Burford",
          image: "/assets/doctor-two.jpg",
          reviewdBy: "Dr. Katy Brodski-Quigley",
          excerpt:
            "What diet plan is considered the best for those with type 2 diabetes? In this article, we talk about foods to eat, foods to avoid, and the most beneficial diet plans for type 2 diabetes.",
          tableOfContents: [
            {
              label: 'This paragraph has a class "myclass"',
              path: "heading-two",
            },
          ],
        },
      },
      {
        metadata: {
          date: new Date("2023-12-15T00:00:00.000Z"),
          title:
            "Guarding Against the Silent Threat: Cancer Prevention Strategies",
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
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {};
