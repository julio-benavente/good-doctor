import ImageThree from "@/../public/assets/doctor-greeting.jpg";
import ImageOne from "@/../public/assets/hero-image.jpg";
import ImageTwo from "@/../public/assets/doctor-listening.jpg";
import { CharacteristicItemProps } from "./CharacteristicItem";

const characteristicsListData: CharacteristicItemProps[] = [
  {
    type: "main",
    direction: "ltr",
    title: "Specialized care for older adults like you.",
    content:
      "At Oak Street Health, we specialize in outstanding care for older adults. And you don't have to lift a finger. From dedicated doctors and care team members who take the time to know and understand your individual health needs to help with Medicare and insurance paperwork, we help eliminate the hassles to help you take care of yourself.",
    learnMoreLink: "/",
    image: ImageTwo,
  },
  {
    type: "regular",
    direction: "rtl",
    title: "Doctors who know and understand you.",
    content:
      "You're not just a name on a chart. That's why our primary care doctors and each and every member of our care team take the time to get to know you. In fact, we have longer appointment times so our providers can spend more time with you and you won't feel rushed.",
    learnMoreLink: "/",
    image: ImageThree,
  },
  {
    type: "regular",
    title: "We're all about wellness.",
    content:
      "Wellness is at the heart of everything we do. We're dedicated to helping you take greater control of your health through regular checkups, thorough exams, and connecting you to the services you need and deserve to reach your health goals.",
    learnMoreLink: "/",
    image: ImageOne,
  },
  {
    type: "regular",
    direction: "rtl",
    title: "When you need a specialist…",
    content:
      "While your primary care doctor can handle most health issues, there are times when you may need the added support of a specialist. When that's the case, we'll help you find the right person and coordinate your care to make sure you have the best care possible to meet your needs.",
    learnMoreLink: "/",
    image: ImageThree,
  },
  {
    type: "regular",
    title: "Making the most of Medicare.",
    content:
      "Getting the most from your Medicare plan can be a game-changer, so your choice of plan is key. As an Oak Street Health patient, you have a personal Medicare specialist to help you understand your options so you can make the best decision on what's right for you.",
    learnMoreLink: "/",
    image: ImageTwo,
  },
  {
    type: "regular",
    direction: "rtl",
    title: "The extra care you need and deserve.",
    content:
      "Staying active and healthy means making sure you have comprehensive quality care when you need it. Patients may also qualify for our clinical programs, including mental healthcare, advanced care planning, disease management, and mail-order Rx and over-the-counter delivery service.",
    learnMoreLink: "/",
    image: ImageOne,
  },
];

export default characteristicsListData;
