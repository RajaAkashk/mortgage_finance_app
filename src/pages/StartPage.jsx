import React, { useState } from "react";
import { useSelector } from "react-redux";

function StartPage() {
  const mortgageData = useSelector((state) => state.mortgage);
  const [startService, setStartService] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  console.log("mortgageData", mortgageData);

  const services = [
    { id: "buy", label: "Help Buy a Home" },
    { id: "refinance", label: "Refinance Mortgage" },
    { id: "cashout", label: "Get Cash from My House" },
  ];

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleStart = () => {
    if (!selectedService) {
      alert("Please select a service first!");
      return;
    }

    setStartService(true);

    // Simulate a process or redirect here, then reset after 2 seconds
    setTimeout(() => {
      setStartService(false);
      setSelectedService("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-xl">
        {startService && (
          <p className="bg-green-100 text-green-800 font-semibold py-2 rounded-md">
            Thank you for getting your services.
          </p>
        )}

        <h1 className="text-6xl md:text-8xl font-extrabold text-green-600">
          Mortgages
        </h1>
        <p className="text-4xl md:text-6xl font-bold text-green-600 mt-2">
          Made Simple
        </p>

        {/* Show some mortgage data from Redux as info */}
        {mortgageData.homePrice > 0 && (
          <div className="bg-green-100 text-green-800 rounded p-4 mt-6">
            <h2 className="text-2xl font-semibold mb-2">
              Your Mortgage Summary:
            </h2>
            <p>Home Price: ${mortgageData.homePrice.toLocaleString()}</p>
            <p>Down Payment: ${mortgageData.downPayment.toLocaleString()}</p>
            <p>
              Principal: $
              {parseFloat(mortgageData.breakdown.principal).toFixed(2)}
            </p>
            <p>Taxes: ${parseFloat(mortgageData.breakdown.taxes).toFixed(2)}</p>
            <p>Interest Rate: {mortgageData.interestRate}%</p>
            <p>Loan Term: {mortgageData.loanTerm} years</p>
            <p>
              Monthly Payment: $
              {parseFloat(mortgageData.monthlyPayment).toFixed(2)}
            </p>
            <p>Zip Code: {mortgageData.zipCode}</p>
          </div>
        )}

        {/* Service selection */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">How can we help you ?</h3>
          <div className="flex flex-col space-y-3">
            {services.map(({ id, label }) => (
              <button
                className={`border-2 border-green-600 py-2 rounded-2xl 
    hover:bg-green-600 hover:text-white
    ${
      selectedService === id
        ? "bg-green-600 text-white"
        : "bg-white text-green-600"
    }`}
                key={id}
                onClick={() => handleSelectService(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          className="mt-8 hover:bg-[#004733] px-6 py-3 rounded-full text-lg font-semibold text-white bg-green-600"
        >
          Start Process
        </button>
      </div>
    </div>
  );
}

export default StartPage;
