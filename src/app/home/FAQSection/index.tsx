import { Accordion, Button, Typography } from "@/components";
import cn from "@/helpers/cn";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import React, { useState } from "react";

const FAQSection = () => {
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);
  const handleShowMore = () => setShowMoreFAQ(!showMoreFAQ);

  return (
    <section>
      <div className={cn("container grid gap-8", "lg:grid-cols-4")}>
        <Typography variant="h2">Common questions</Typography>
        <div className={cn("lg:col-span-3")}>
          <Accordion items={questionsListData} />
          {showMoreFAQ && <Accordion items={questionsListData} />}

          <Button onClick={handleShowMore} className="mt-4">
            {showMoreFAQ ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

const questionsListData: {
  id: string;
  question: any;
  answer: any;
}[] = [
  {
    id: "1",
    question: "Who can become an Oak Street Health patient?",
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
    question: "Who can become an Oak Street Health patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or Medigap plans and Medicare-Medicaid Plans.
      </>
    ),
  },
  {
    id: "3",
    question: "Who can become an Oak Street Health patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or Medigap plans and Medicare-Medicaid Plans.
      </>
    ),
  },
  {
    id: "4",
    question: "Who can become an Oak Street Health patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or Medigap plans and Medicare-Medicaid Plans.
      </>
    ),
  },
  {
    id: "5",
    question: "Who can become an Oak Street Health patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or Medigap plans and Medicare-Medicaid Plans.
      </>
    ),
  },
];
