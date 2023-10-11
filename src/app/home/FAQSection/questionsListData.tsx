import Link from "next/link";

interface FAQItem {
  id: string;
  question: any;
  answer: any;
}

export const faqQuestions: Array<FAQItem> = [
  {
    id: "1",
    question: "Who can become a patient at our clinic?",
    answer:
      "Our clinic serves anyone with Medicare, including Original Medicare Part B, select Medicare Advantage plans, Medicare Supplement or Medigap plans, and Medicare-Medicaid Plans.",
  },
  {
    id: "2",
    question: "What services do you offer for elderly patients?",
    answer:
      "We provide a wide range of healthcare services, including preventive care, chronic disease management, medication management, and access to specialists when needed.",
  },
  {
    id: "3",
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our clinic directly, visiting our website, or using our online patient portal. We also welcome walk-in patients when availability allows.",
  },
  {
    id: "4",
    question: "Do you accept other insurance plans besides Medicare?",
    answer:
      "While our primary focus is on Medicare, we can provide information and assistance for those with other insurance plans. Please contact our clinic for more details.",
  },
  {
    id: "5",
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your Medicare card, a list of your current medications, and any relevant medical records or test results. This information helps us provide you with the best care.",
  },
  {
    id: "6",
    question: "Can family members or caregivers accompany me to appointments?",
    answer:
      "Absolutely, we encourage family members and caregivers to join you at your appointments. They can provide valuable support and help ensure that all your healthcare needs are addressed.",
  },
  {
    id: "7",
    question:
      "What measures are in place to ensure patient safety during the COVID-19 pandemic?",
    answer:
      "Our clinic follows all recommended safety protocols, including mask-wearing, social distancing, and regular sanitization. We may also offer telehealth appointments for added safety and convenience.",
  },
  {
    id: "8",
    question:
      "Do you offer transportation services for patients with mobility challenges?",
    answer:
      "Yes, we offer transportation services for eligible patients who have difficulty getting to our clinic. Please inquire with our office for more information.",
  },
  {
    id: "9",
    question: "How do I request prescription refills?",
    answer:
      "You can request prescription refills by contacting our clinic directly, using our patient portal, or by asking your pharmacist to send us a refill request. Please plan ahead to ensure you have enough medication.",
  },
  {
    id: "10",
    question: "What can I do to stay healthy and active as I age?",
    answer:
      "Staying active and maintaining a balanced diet is crucial. We offer wellness programs, exercise recommendations, and can connect you with community resources to help you lead a healthy and fulfilling life as you age.",
  },
];

export default faqQuestions;
