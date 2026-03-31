import React from "react";
import user from "../assets/user.png";
import package_box from "../assets/package.png";
import rocket from "../assets/rocket.png";

const cards = [
  {
    step_number: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: user,
  },
  {
    step_number: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: package_box,
  },
  {
    step_number: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocket,
  },
];

const Steps = () => {
  return (
    <div className="text-black max-w-300 mx-auto mb-20">
      <div className="mb-10 text-center">
        <h2 className="font-extrabold text-3xl md:text-5xl mb-4">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md: gap-2 lg:gap-8">
        {cards.map((card) => (
          <div key={card.step_number} className="card px-6 py-5 md:py-10 lg:py-15 mt-2 bg-white w-96 shadow-lg mx-auto">
            <div className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold p-2 rounded-full">
                {card.step_number}
            </div>
            <figure className="px-10 pt-10">
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-purple-100 rounded-full">  
              <img src={card.icon} alt="card.title" className="rounded-xl" />
                </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{card.title}</h2>
              <p className="text-[#627382]">
                {card.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
