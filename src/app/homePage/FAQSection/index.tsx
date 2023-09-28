import { Button } from "@/components";
import cn from "@/helpers/cn";
import {
  Accordion as MUIAccordion,
  AccordionDetails as MUIAccordionDetails,
  AccordionSummary as MUIAccordionSummary,
  AccordionProps,
  AccordionDetailsProps,
  AccordionSummaryProps,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const FAQSection = () => {
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);
  const handleShowMore = () => setShowMoreFAQ(!showMoreFAQ);

  return (
    <section className="my-24">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <h2 className="h2">Common questions</h2>
        <div className="col-span-3">
          <AccordionSection />
          {showMoreFAQ && <AccordionSection />}

          <Button onClick={handleShowMore} className="mt-4">
            {showMoreFAQ ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

const Accordion = ({ className, ...props }: AccordionProps) => {
  return (
    <MUIAccordion
      classes={{
        root: cn(
          "border-t-2 border-b-0 rounded-none shadow-none outline-none border-teal-500 h-fit m-0 after:hidden before:hidden max-h-fit"
        ),
        expanded: cn("max-h-fit"),
      }}
      {...props}
    />
  );
};

const AccordionSummary = ({ className, ...props }: AccordionSummaryProps) => {
  return (
    <MUIAccordionSummary
      classes={{
        root: cn("m-0 p-0 min-h-fit"),
        content: cn("m-0 py-3"),
      }}
      {...props}
    >
      <h3 className="h4">{props.children}</h3>
    </MUIAccordionSummary>
  );
};

const AccordionDetails = ({ className, ...props }: AccordionDetailsProps) => {
  return (
    <MUIAccordionDetails
      classes={{ root: cn("p-0 pb-8 pr-8 text-lg") }}
      {...props}
    />
  );
};

const AccordionSection = () => {
  return (
    <>
      {[
        {
          id: "1",
          question: "Who can become an Oak Street Health patient?",
          answer: (
            <>
              Our doctors specialize caring for anyone with Medicare, including
              Original Medicare Part B, select Medicare Advantage plans,
              Medicare Supplement or{" "}
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
              Original Medicare Part B, select Medicare Advantage plans,
              Medicare Supplement or Medigap plans and Medicare-Medicaid Plans.
            </>
          ),
        },
        {
          id: "3",
          question: "Who can become an Oak Street Health patient?",
          answer: (
            <>
              Our doctors specialize caring for anyone with Medicare, including
              Original Medicare Part B, select Medicare Advantage plans,
              Medicare Supplement or Medigap plans and Medicare-Medicaid Plans.
            </>
          ),
        },
        {
          id: "4",
          question: "Who can become an Oak Street Health patient?",
          answer: (
            <>
              Our doctors specialize caring for anyone with Medicare, including
              Original Medicare Part B, select Medicare Advantage plans,
              Medicare Supplement or Medigap plans and Medicare-Medicaid Plans.
            </>
          ),
        },
        {
          id: "5",
          question: "Who can become an Oak Street Health patient?",
          answer: (
            <>
              Our doctors specialize caring for anyone with Medicare, including
              Original Medicare Part B, select Medicare Advantage plans,
              Medicare Supplement or Medigap plans and Medicare-Medicaid Plans.
            </>
          ),
        },
      ].map((e) => {
        return (
          <Accordion key={e.id}>
            <AccordionSummary aria-controls={e.id} id={e.id}>
              {e.question}
            </AccordionSummary>
            <AccordionDetails>{e.answer}</AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
