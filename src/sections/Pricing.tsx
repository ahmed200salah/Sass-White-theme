import SwipeButton from "@/components/animata/button/swipe-button";
import CheckIcon from "../assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className=" max-w-[440px]  text-center mx-auto">
          <h2 className=" max-md:text-left font-bold tracking-tighter lg:text-5xl  text-3xl mt-4 text-center bg-gradient-to-b from-black to-blue-500 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="text-center text-gray-500 mt-4 mb-4 tracking-tight leading-7 max-md:text-left">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row  items-center justify-center mt-7  lg:items-end">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "rounded-3xl border-2 border-gray-200 p-8 shadow-md max-w-xs w-full",
                  inverse ? "bg-black text-white" : "bg-white text-black"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{title}</h3>
                  {popular === true && (
                    <div className="inline-flex  px-4 py-1.5 rounded-xl bg-white">
                      <span className="text-sm font-bold bg-[gradient] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-5">
                  <span className="text-4xl font-bold  tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className=" font-bold tracking-tight">/month</span>
                </div>
                <SwipeButton
                  className=" mt-3"
                  firstClass={`bg-black text-white ${
                    inverse ? "bg-white text-black" : "bg-black text-white"
                  }`}
                  firstText={buttonText}
                  secondClass={`bg-white text-black ${
                    inverse ? "bg-black text-white" : "bg-white text-black"
                  }`}
                  secondText={buttonText}
                />
                <ul className=" mt-3 flex flex-col gap-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckIcon className=" h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
