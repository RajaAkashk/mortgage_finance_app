import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMortgageData } from "../slices/mortgageSlice ";

function MortgageCalculator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [taxes, setTaxes] = useState(3000);
  const [zipCode, setZipCode] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [breakdown, setBreakdown] = useState({ principal: 0, taxes: 0 });

  const calculateMortgage = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    const monthlyPrincipalInterest =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    const monthlyTaxes = taxes / 12;
    const total = monthlyPrincipalInterest + monthlyTaxes;

    setMonthlyPayment(total.toFixed(2));
    setBreakdown({
      principal: monthlyPrincipalInterest.toFixed(2),
      taxes: monthlyTaxes.toFixed(2),
    });

    const result = {
      homePrice,
      downPayment,
      interestRate,
      loanTerm,
      taxes,
      zipCode,
      monthlyPayment: total.toFixed(2),
      breakdown: {
        principal: monthlyPrincipalInterest.toFixed(2),
        taxes: monthlyTaxes.toFixed(2),
      },
    };
    console.log("result", result);
    dispatch(setMortgageData(result));
  };

  return (
    <div className="min-h-screen px-4 sm:px-[8rem]">
      <div className="py-4 sm:py-[5rem]">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
          Let's Calculate Mortgage.
        </h1>
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Home Price ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 300000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="p-3 border rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Down Payment ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 60000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="p-3 border rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Interest Rate (%)
              </label>
              <input
                type="number"
                placeholder="e.g. 3.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="p-3 border rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Loan Term (Years)
              </label>
              <input
                type="number"
                placeholder="e.g. 30"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="p-3 border rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Annual Property Taxes ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 3000"
                value={taxes}
                onChange={(e) => setTaxes(Number(e.target.value))}
                className="p-3 border rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Zip Code</label>
              <input
                type="text"
                placeholder="e.g. 90210"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="p-3 border rounded"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={calculateMortgage}
              className="hover:bg-[#004733] px-6 py-3 rounded-full text-lg font-semibold text-white bg-green-600 transition"
            >
              Calculate Now
            </button>
          </div>

          {monthlyPayment && (
            <div className="mt-10 text-center space-y-3">
              <h2 className="text-2xl font-semibold text-gray-800">
                Estimated Monthly Payment: ${monthlyPayment}
              </h2>
              <p className="text-gray-600">
                Principal & Interest: ${breakdown.principal} / Taxes: $
                {breakdown.taxes}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mb-[4rem]">
        <h2 className="text-3xl font-semibold mb-2">
          How does mortgage calculator help me?
        </h2>
        <p>
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>
      </div>
      <div className="mb-[4rem]">
        <h2 className="text-3xl font-semibold mb-2">
          How to use this mortgage calculator?
        </h2>
        <div className="flex flex-col space-y-[1.5rem]">
          <p>
            Play around with different home prices, locations, down payments,
            interest rates, and mortgage lengths to see how they impact your
            monthly mortgage payments.{" "}
          </p>
          <p>
            Increasing your down payment and decreasing your interest rate and
            mortgage term length will make your monthly payment go down. Taxes,
            insurance, and HOA fees will vary by location. If you enter a down
            payment amount that's less than 20% of the home price, private
            mortgage insurance (PMI) costs will be added to your monthly
            mortgage payment. As the costs of utilities can vary from county to
            county, we've included a utilities estimate that you can break down
            by service. If you're thinking about buying a condo or into a
            community with a Homeowners Association (HOA), you can add HOA fees.
          </p>
          <p>
            The only amounts we haven't included are the money you'll need to
            save for annual home maintenance/repairs or the costs of home
            improvements. To see how much home you can afford including these
            costs, take a look at the Better home affordability calculator.
          </p>
          <p>
            Fun fact: Property tax rates are extremely localized, so two homes
            of roughly the same size and quality on either side of a municipal
            border could have very different tax rates. Buying in an area with a
            lower property tax rate may make it easier for you to afford a
            higher-priced home.
          </p>
        </div>
      </div>
      <div className="my-[4rem] space-y-4">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">
          How Does the Mortgage Calculator Work?
        </h2>

        <p className="text-gray-700">
          A mortgage calculator estimates your monthly loan payments based on
          the home price, down payment, interest rate, loan term, and taxes.
        </p>

        <div className="bg-green-50 border border-green-200 p-4 rounded shadow-sm">
          <h3 className="text-xl font-bold text-green-600 mb-2">
            The Formula:
          </h3>
          <p className="text-green-600 font-mono text-lg">
            M = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> − 1)
          </p>
        </div>

        <div className="text-gray-700 space-y-2">
          <p>
            <span className="font-semibold">M</span> = Monthly mortgage payment
          </p>
          <p>
            <span className="font-semibold">P</span> = Principal loan amount
            (Home Price - Down Payment)
          </p>
          <p>
            <span className="font-semibold">r</span> = Monthly interest rate
            (Annual Rate / 12 / 100)
          </p>
          <p>
            <span className="font-semibold">n</span> = Total number of payments
            (Loan Term × 12)
          </p>
        </div>

        <p className="text-gray-700">
          Our calculator automatically computes this and adds taxes to give you
          a more accurate monthly estimate — helping you make smarter
          home-buying decisions.
        </p>
      </div>

      <div className="text-center mb-9">
        <button
          onClick={() => navigate("/start")}
          className=" hover:bg-[#004733] px-6 py-3 rounded-full text-lg font-semibold text-white bg-green-600"
        >
          Start your journey now!
        </button>
      </div>
    </div>
  );
}

export default MortgageCalculator;
