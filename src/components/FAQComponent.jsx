import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      question: "What is the minimum system configuration required?",
      answer: "A basic laptop with at least 4GB RAM and an internet connection is recommended.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto rounded-lg p-4 sm:p-6">
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar (Hidden on Mobile) */}
        <div className="hidden sm:flex flex-col space-y-2 w-1/3 sm:w-1/4">
          {["Eligibility", "How To Use?", "Terms & Conditions"].map((item, index) => (
            <button
              key={index}
              className={`p-3 rounded-lg border ${
                index === 0 ? "text-blue-600 shadow-lg shadow-blue-500/50" : "bg-white text-black border border-gray-500"
              } hover:bg-blue-100 transition`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="w-full sm:w-3/4 sm:pl-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-0 py-3">
              <button
                className="flex justify-between w-full text-left text-blue-600 font-semibold"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {activeIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
