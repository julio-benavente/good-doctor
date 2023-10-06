import cn from "@/helpers/cn";
import {
  Accordion as MUIAccordion,
  AccordionDetails as MUIAccordionDetails,
  AccordionSummary as MUIAccordionSummary,
  AccordionProps as MuiAccordionProps,
  AccordionDetailsProps,
  AccordionSummaryProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";

interface AccordionProps extends Omit<MuiAccordionProps, "children"> {
  items: {
    id: string;
    question: any;
    answer: any;
  }[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <>
      {items &&
        items.map((item, i) => {
          return (
            <MUIAccordion
              key={i}
              classes={{
                root: cn(
                  "border-t-2 border-b-0 rounded-none shadow-none outline-none border-teal-500 h-fit m-0 after:hidden before:hidden max-h-fit"
                ),
                expanded: cn("max-h-fit"),
              }}
              //   {...props}
            >
              <AccordionSummary aria-controls={item.id} id={item.id}>
                {item.question}
              </AccordionSummary>
              <AccordionDetails>{item.answer}</AccordionDetails>
            </MUIAccordion>
          );
        })}
    </>
  );
};

const AccordionSummary = ({ className, children }: AccordionSummaryProps) => {
  return (
    <MUIAccordionSummary
      classes={{
        root: cn(
          "m-0 p-0 min-h-fit text-primary [&_svg]:text-primary [&_svg]:text-3xl [&_svg]:hover:text-text"
        ),
        content: cn("group m-0 py-3 hover:text-text-headline"),
        expanded: cn("text-text-headline [&_svg]:text-text"),
      }}
      expandIcon={<ExpandMoreIcon />}
      //   {...props}
    >
      <h3 className="h4">{children}</h3>
    </MUIAccordionSummary>
  );
};

const AccordionDetails = ({ className, children }: AccordionDetailsProps) => {
  return (
    <MUIAccordionDetails
      classes={{ root: cn("p-0 pb-8 pr-8 text-lg") }}
      // {...props}
    >
      {children}
    </MUIAccordionDetails>
  );
};

export default Accordion;
