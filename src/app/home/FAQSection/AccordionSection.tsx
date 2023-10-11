"use client";

import { Accordion, Button } from "@/components";
import cn from "@/helpers/cn";
import { useState } from "react";
import questionsListData from "./questionsListData";

const AccordionSection = () => {
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);
  const handleShowMore = () => setShowMoreFAQ(!showMoreFAQ);
  return (
    <div className={cn("lg:col-span-3")}>
      <Accordion items={questionsListData} />
      {showMoreFAQ && <Accordion items={questionsListData} />}

      <Button onClick={handleShowMore} className="mt-4">
        {showMoreFAQ ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default AccordionSection;
