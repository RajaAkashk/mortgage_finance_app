import React from "react";

function About() {
  return (
    <div className="min-h-screen sm:px-[8rem] px-4 py-[5rem] bg-white text-gray-800">
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold  text-green-600">Our Mission</h1>
        <p className="text-2xl max-w-3xl mx-auto">
          We're making homeownership simpler, faster — <br />
          and most importantly, more accessible for all people.
        </p>
      </div>

      {/* Goals Section */}
      <div className="mb-[6rem] px-4">
        <h2 className="text-4xl font-bold text-green-600 text-center mb-10">
          Our Goals
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <ul className="text-lg space-y-4 list-disc list-inside md:w-1/2">
            <li>Empower users with clear, jargon-free mortgage guidance.</li>
            <li>
              Simplify the application process through intuitive technology.
            </li>
            <li>
              Offer personalized tools and calculators for smarter decisions.
            </li>
            <li>Ensure transparency every step of the way.</li>
          </ul>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/257/355/small_2x/start-invest-in-stock-market-begin-savings-to-achieve-financial-goal-power-of-compound-interest-collecting-wealth-young-adult-office-man-carrying-money-coin-start-step-on-compound-money-stack-vector.jpg"
              alt="Goals Illustration"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="space-y-6 text-center mb-[2rem]">
        <h2 className="text-4xl font-bold text-green-600">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left text-base">
          <div className="bg-green-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-green-900">
              Mortgage Calculator
            </h3>
            <p>
              Instantly estimate monthly payments with our easy-to-use
              calculator.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-green-900">
              Step-by-Step Guidance
            </h3>
            <p>Understand the mortgage process from pre-approval to closing.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-green-900">
              Expert Support
            </h3>
            <p>
              Reach out to our friendly experts anytime for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
