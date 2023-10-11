import { Typography } from "@/components";
import cn from "@/helpers/cn";

import AccordionSection from "./AccordionSection";

const FAQSection = () => {
  return (
    <section>
      <div className={cn("container grid gap-8", "lg:grid-cols-4")}>
        <Typography variant="h2">Common questions</Typography>
        <AccordionSection />
      </div>
    </section>
  );
};

export default FAQSection;
