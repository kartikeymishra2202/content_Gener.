"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does StartupX offer?",
    answer:
      "StartupX offers a range of services including innovative tech solutions, rapid development, growth strategies, and global expansion support for startups and established businesses.",
  },
  {
    question: "How long does it typically take to implement a solution?",
    answer:
      "The implementation time varies depending on the complexity of the project. We strive for rapid development, with most projects completed within 2-3 months.",
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer:
      "Yes, we provide ongoing support and maintenance for all our solutions. Our team is always available to help with any issues or improvements.",
  },
  {
    question: "Can StartupX help with funding or investor connections?",
    answer:
      "While our primary focus is on technological solutions, we do have a network of investors and can provide guidance on preparing for funding rounds.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
