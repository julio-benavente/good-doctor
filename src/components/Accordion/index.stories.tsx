import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./";
import Link from "../Link";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: [
      {
        id: "1",
        question: "Who can become an The Good Doctor patient?",
        answer: (
          <>
            Our doctors specialize caring for anyone with Medicare, including
            Original Medicare Part B, select Medicare Advantage plans, Medicare
            Supplement or{" "}
            <Link href="/" className="link">
              Medigap plans and Medicare-Medicaid
            </Link>{" "}
            Plans.
          </>
        ),
      },
      {
        id: "2",
        question: "Who can become an The Good Doctor patient?",
        answer: (
          <>
            Our doctors specialize caring for anyone with Medicare, including
            Original Medicare Part B, select Medicare Advantage plans, Medicare
            Supplement or{" "}
            <Link href="/" className="link">
              Medigap plans and Medicare-Medicaid
            </Link>{" "}
            Plans.
          </>
        ),
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};
