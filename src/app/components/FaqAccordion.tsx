"use client";
import { useState } from "react";
import ChevronUp from "../icons/ChevronUp";
import ChevronDown from "../icons/ChevronDown";
import styles from "./FaqAccordion.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a vinyl banner?",
    answer:
      "A vinyl banner is a type of banner made from PVC material that is durable and weather-resistant.",
  },
  {
    question: "Is vinyl good for banners?",
    answer:
      "Yes, vinyl is great for banners as it is waterproof, durable, and suitable for outdoor use.",
  },
  {
    question: "Is vinyl or fabric banner better?",
    answer:
      "Vinyl banners are more durable and weatherproof, while fabric banners offer a premium look.",
  },
  {
    question: "Are vinyl banners waterproof?",
    answer:
      "Yes, vinyl banners are waterproof and can withstand rain and humidity.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq, index) => (
          <div key={index}>
            <button
              className={styles.panelTitle}
              onClick={() => toggleAccordion(index)}
            >
              <span>
                {index + 1}. {faq.question}
              </span>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeIndex === index && (
              <div className={styles.panelContent}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
