import Link from "next/link";

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

export default questionsListData;
