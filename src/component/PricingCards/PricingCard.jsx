import React from "react";

const PricingCard = ({ pricing }) => {
  return (
    <div className="">
      <div className={`${pricing.is_popular ? 'card w-96 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg' : 'card w-96 h-full bg-[#F9FAFC] text-black shadow-lg '}`}>
        <div className="card-body">
          {pricing.is_popular && (
            <span className="badge bg-amber-200 text-amber-600 rounded-full absolute py-4 -top-4 right-2/5">
              Most Popular
            </span>
          )}
          <h2 className="text-3xl font-bold">{pricing.name}</h2>
          <p>{pricing.tagline}</p>
          <span className="text-xl">$29/mo</span>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {pricing.features.map((feature, index) => (
              <li key={index} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button className={`btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full ${pricing.is_popular && 'btn text-primary bg-linear-to-r from-white to-white'}`}>{pricing.button_text}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
