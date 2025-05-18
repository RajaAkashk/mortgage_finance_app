import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The mortgage process was incredibly simple and stress-free. Highly recommended!",
    },
    {
      name: "Jane Smith",
      feedback:
        "Excellent service and very helpful team. They made everything clear and easy to understand.",
    },
    {
      name: "Michael Johnson",
      feedback:
        "Fast, professional, and transparent. Couldn't ask for more in a mortgage provider.",
    },
  ];

  const faqs = [
    {
      question: "How do I apply for a mortgage?",
      answer: "You can apply online by filling out our easy application form.",
    },
    {
      question: "What documents will I need?",
      answer:
        "Typically, you'll need ID proof, income statements, and bank details.",
    },
    {
      question: "How long does the approval take?",
      answer:
        "Approval usually takes 24 to 72 hours after submitting documents.",
    },
    {
      question: "Can I get pre-approved?",
      answer:
        "Yes, getting pre-approved helps you understand your budget and speeds up the home-buying process.",
    },
    {
      question: "What is the minimum credit score required?",
      answer:
        "Most lenders prefer a score of at least 620, but some programs accept lower scores.",
    },
    {
      question: "Do I need a down payment?",
      answer:
        "Yes, typically 5%–20%, but some loan options allow as little as 3% down.",
    },
    {
      question: "Can I pay off my mortgage early?",
      answer:
        "Yes, you can make extra payments or pay off your loan early. Check if there are any prepayment penalties.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="my-[5rem] flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-green-600">
              Mortgages
            </h1>
            <p className="text-4xl md:text-6xl font-bold text-green-600 mt-2">
              Made Simple
            </p>
          </div>

          <button
            onClick={() => navigate("/start")}
            className=" hover:bg-[#004733] px-6 py-3 rounded-full text-lg font-semibold text-white bg-green-600"
          >
            Start now!
          </button>
        </div>
      </div>

      {/* Why We Are Better Section */}
      <div className="px-4 py-12 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-10 text-gray-800">
          Find out why we're better
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full"
            >
              <p className="text-gray-700 italic mb-4">"{user.feedback}"</p>
              <p className="text-green-600 font-semibold text-right">
                – {user.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Got Questions? */}
      <div className="my-[4rem] px-4 text-center">
        <h2 className="text-4xl font-semibold mb-10 text-gray-800">
          Got Questions? We've got answers
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 hover:bg-green-600  hover:text-white font-semibold"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-white-700 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
