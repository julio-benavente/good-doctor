"use client";

import { Accordion, Button } from "@/components";
import cn from "@/helpers/cn";
import { useState } from "react";
import faqQuestions from "./questionsListData";

const AccordionSection = () => {
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);
  const handleShowMore = () => setShowMoreFAQ(!showMoreFAQ);
  const mainQuestions = faqQuestions.slice(0, 5);
  const secondaryQuestions = faqQuestions.slice(5);

  return (
    <div className={cn("lg:col-span-3")}>
      <Accordion items={mainQuestions} />
      {showMoreFAQ && secondaryQuestions.length > 0 && (
        <Accordion items={secondaryQuestions} />
      )}

      {secondaryQuestions.length > 0 && (
        <Button onClick={handleShowMore} className="mt-4">
          {showMoreFAQ ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
};

export default AccordionSection;
